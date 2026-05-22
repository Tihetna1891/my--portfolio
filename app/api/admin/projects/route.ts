import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { isAdminAuthorized } from '@/lib/supabase/auth'
import { normalizeImageUrlList } from '@/lib/image-utils'
import {
  isExternalUrl,
  normalizeProjectSlug,
  slugFromTitle,
} from '@/lib/project-utils'

function sanitizeProject(input: Record<string, unknown>) {
  const optionalUrl = (value: unknown) => {
    if (typeof value !== 'string' || value.trim() === '') return null
    return value.trim()
  }

  const title = String(input.title ?? '')
  const rawSlug = String(input.slug ?? '').trim()

  let github_url = optionalUrl(input.github_url)
  let live_demo_url = optionalUrl(input.live_demo_url)

  // If user pasted Play Store / App Store / any URL in "slug", move it to live demo
  if (isExternalUrl(rawSlug)) {
    if (!live_demo_url) live_demo_url = rawSlug
    else if (!github_url) github_url = rawSlug
  }

  const slug = isExternalUrl(rawSlug)
    ? slugFromTitle(title)
    : normalizeProjectSlug(rawSlug) || slugFromTitle(title)

  return {
    title,
    slug,
    short_description: input.short_description,
    full_description: input.full_description,
    context: input.context || null,
    tech_stack: input.tech_stack ?? [],
    github_url,
    live_demo_url,
    video_url: optionalUrl(input.video_url),
    image_urls: normalizeImageUrlList(
      Array.isArray(input.image_urls) ? (input.image_urls as string[]) : []
    ),
    featured: Boolean(input.featured),
  }
}

export async function GET(request: NextRequest) {
  if (!isAdminAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const supabase = createAdminClient()
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ data: data ?? [] })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Server error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json()

  if (!isAdminAuthorized(request, body)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const supabase = createAdminClient()
    const { data, error } = await supabase
      .from('projects')
      .insert([sanitizeProject(body)])
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ data })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Server error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  const body = await request.json()

  if (!isAdminAuthorized(request, body)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const id = body.id as string | undefined
  if (!id) {
    return NextResponse.json({ error: 'Project id is required' }, { status: 400 })
  }

  try {
    const supabase = createAdminClient()
    const { data, error } = await supabase
      .from('projects')
      .update(sanitizeProject(body))
      .eq('id', id)
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ data })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Server error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  if (!isAdminAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const id = request.nextUrl.searchParams.get('id')
  if (!id) {
    return NextResponse.json({ error: 'Project id is required' }, { status: 400 })
  }

  try {
    const supabase = createAdminClient()
    const { error } = await supabase.from('projects').delete().eq('id', id)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Server error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
