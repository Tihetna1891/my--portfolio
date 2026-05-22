import { createAdminClient } from '@/lib/supabase/admin'
import { isExternalUrl, normalizeProjectSlug } from '@/lib/project-utils'

/** Load one project by URL param (id, slug, or stored external URL). */
export async function getProjectByParam(param: string) {
  const supabase = createAdminClient()
  const decoded = decodeURIComponent(param)
  const normalizedSlug = normalizeProjectSlug(decoded)

  // 1) UUID → primary key
  if (/^[0-9a-f-]{36}$/i.test(decoded)) {
    const { data } = await supabase
      .from('projects')
      .select('*')
      .eq('id', decoded)
      .maybeSingle()
    if (data) return data
  }

  // 2) Normalized slug
  if (normalizedSlug) {
    const { data } = await supabase
      .from('projects')
      .select('*')
      .eq('slug', normalizedSlug)
      .maybeSingle()
    if (data) return data
  }

  // 3) Exact slug as stored (e.g. full Play Store URL in slug column)
  if (decoded) {
    const { data } = await supabase
      .from('projects')
      .select('*')
      .eq('slug', decoded)
      .maybeSingle()
    if (data) return data
  }

  // 4) External URL stored in slug, live_demo, or github
  if (isExternalUrl(decoded)) {
    for (const column of ['slug', 'live_demo_url', 'github_url'] as const) {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .eq(column, decoded)
        .maybeSingle()
      if (data) return data
    }
  }

  return null
}
