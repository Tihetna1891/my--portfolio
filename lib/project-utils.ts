/** True if the value looks like an external URL (not a page slug). */
export function isExternalUrl(value: string | null | undefined): boolean {
  if (!value || typeof value !== 'string') return false
  const t = value.trim()
  return t.startsWith('http://') || t.startsWith('https://')
}

/** Turn admin input into a safe path segment for /projects/[slug] */
export function normalizeProjectSlug(raw: string | null | undefined): string {
  if (!raw || typeof raw !== 'string') return ''

  const trimmed = raw.trim()
  if (isExternalUrl(trimmed)) {
    return slugFromUrl(trimmed)
  }

  return slugify(trimmed)
}

function slugFromUrl(urlString: string): string {
  try {
    const url = new URL(urlString)

    // Google Play: ...?id=com.company.appname
    if (url.hostname.includes('play.google.com')) {
      const appId = url.searchParams.get('id')
      if (appId) return slugify(appId)
    }

    // Apple App Store: .../id123456789 or .../app/name/id123
    if (url.hostname.includes('apps.apple.com')) {
      const parts = url.pathname.split('/').filter(Boolean)
      const idPart = parts.find((p) => p.startsWith('id'))
      if (idPart) return slugify(idPart)
      const last = parts.pop()
      if (last) return slugify(last)
    }

    const segment = url.pathname.split('/').filter(Boolean).pop()
    if (segment && segment !== 'details' && segment !== 'store') {
      return slugify(segment)
    }

    return slugify(url.hostname.replace(/\./g, '-'))
  } catch {
    return ''
  }
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

/** Best link for the on-site project detail page (always works if id exists). */
export function projectDetailPath(project: {
  id?: string | null
  slug?: string | null
}): string {
  if (project.id) {
    return `/projects/${project.id}`
  }

  const slug = normalizeProjectSlug(project.slug)
  if (slug && slug.length > 1) {
    return `/projects/${encodeURIComponent(slug)}`
  }

  return '/#projects'
}

export function slugFromTitle(title: string): string {
  return slugify(title)
}
