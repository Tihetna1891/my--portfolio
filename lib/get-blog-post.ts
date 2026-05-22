import { createClient } from '@/lib/supabase/server'

export type BlogPostListItem = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  tags: string[] | null
  cover_image: string | null
  created_at: string
}

export async function getPublishedBlogPosts(): Promise<BlogPostListItem[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('blog_posts')
    .select('id, title, slug, excerpt, tags, cover_image, created_at')
    .eq('published', true)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('getPublishedBlogPosts:', error.message)
    return []
  }

  return data ?? []
}

export async function getBlogPostBySlug(slug: string) {
  const supabase = await createClient()
  const decoded = decodeURIComponent(slug)

  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', decoded)
    .eq('published', true)
    .maybeSingle()

  if (error) {
    console.error('getBlogPostBySlug:', error.message)
    return null
  }

  return data
}
