/** Extract Google Drive file id from common share / open URLs. */
export function extractGoogleDriveFileId(url: string): string | null {
  const trimmed = url.trim()
  if (!trimmed) return null

  try {
    const parsed = new URL(trimmed)
    if (!parsed.hostname.includes('drive.google.com')) {
      return null
    }

    const fromPath = parsed.pathname.match(/\/d\/([^/]+)/)?.[1]
    if (fromPath) return fromPath

    const fromQuery = parsed.searchParams.get('id')
    if (fromQuery) return fromQuery
  } catch {
    // fall through to regex
  }

  const loose = trimmed.match(
    /drive\.google\.com\/(?:file\/d\/|open\?id=)([a-zA-Z0-9_-]+)/
  )
  return loose?.[1] ?? null
}

export function isGoogleDriveUrl(url: string): boolean {
  return extractGoogleDriveFileId(url) !== null
}

/**
 * Turn share links into URLs browsers can load in <img>.
 * Tries export=view first; callers can use getGoogleDriveImageCandidates for fallbacks.
 */
export function normalizeImageUrl(url: string): string {
  const trimmed = url.trim()
  if (!trimmed) return trimmed

  const driveId = extractGoogleDriveFileId(trimmed)
  if (driveId) {
    return `https://drive.google.com/uc?export=view&id=${driveId}`
  }

  return trimmed
}

/** Ordered candidates for <img src> when embedding Google Drive images. */
export function getGoogleDriveImageCandidates(url: string): string[] {
  const id = extractGoogleDriveFileId(url)
  if (!id) return [normalizeImageUrl(url)]

  return [
    `https://drive.google.com/uc?export=view&id=${id}`,
    `https://drive.google.com/thumbnail?id=${id}&sz=w1600`,
    `https://drive.google.com/uc?export=download&id=${id}`,
  ]
}

export function getGoogleDrivePreviewEmbedUrl(url: string): string | null {
  const id = extractGoogleDriveFileId(url)
  if (!id) return null
  return `https://drive.google.com/file/d/${id}/preview`
}

export function normalizeImageUrlList(urls: string[] | null | undefined): string[] {
  if (!urls?.length) return []
  return urls
    .filter((u) => typeof u === 'string' && u.trim().length > 0)
    .map((u) => normalizeImageUrl(u.trim()))
}
