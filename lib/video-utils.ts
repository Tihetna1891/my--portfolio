export type VideoInfo =
  | {
      kind: 'youtube'
      id: string
      embedUrl: string
      thumbnailUrl: string
    }
  | {
      kind: 'vimeo'
      id: string
      embedUrl: string
    }
  | {
      kind: 'google-drive'
      id: string
      embedUrl: string
    }
  | {
      kind: 'loom'
      id: string
      embedUrl: string
    }
  | {
      kind: 'direct'
      src: string
    }
  | {
      kind: 'unsupported'
      href: string
    }

function extractYouTubeId(url: URL, raw: string): string | null {
  if (url.hostname === 'youtu.be') {
    return url.pathname.slice(1).split('/')[0] || null
  }

  const fromQuery = url.searchParams.get('v')
  if (fromQuery) return fromQuery

  const embedMatch = url.pathname.match(/\/embed\/([^/?]+)/)
  if (embedMatch) return embedMatch[1]

  const shortsMatch = url.pathname.match(/\/shorts\/([^/?]+)/)
  if (shortsMatch) return shortsMatch[1]

  const watchMatch = raw.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{6,})/
  )
  return watchMatch?.[1] ?? null
}

function extractGoogleDriveId(url: URL, raw: string): string | null {
  const fromPath = url.pathname.match(/\/d\/([^/]+)/)?.[1]
  if (fromPath) return fromPath
  const fromQuery = url.searchParams.get('id')
  if (fromQuery) return fromQuery
  const loose = raw.match(/drive\.google\.com\/(?:file\/d\/|open\?id=)([a-zA-Z0-9_-]+)/)
  return loose?.[1] ?? null
}

export function getVideoInfo(url: string | null | undefined): VideoInfo | null {
  if (!url || typeof url !== 'string') return null
  const trimmed = url.trim()
  if (!trimmed) return null

  try {
    const parsed = new URL(trimmed)

    if (
      parsed.hostname.includes('youtube.com') ||
      parsed.hostname === 'youtu.be' ||
      parsed.hostname === 'm.youtube.com'
    ) {
      const id = extractYouTubeId(parsed, trimmed)
      if (!id) return { kind: 'unsupported', href: trimmed }

      return {
        kind: 'youtube',
        id,
        embedUrl: `https://www.youtube.com/embed/${id}`,
        thumbnailUrl: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
      }
    }

    if (parsed.hostname.includes('vimeo.com')) {
      const id = parsed.pathname.split('/').filter(Boolean).pop()
      if (!id) return { kind: 'unsupported', href: trimmed }
      return {
        kind: 'vimeo',
        id,
        embedUrl: `https://player.vimeo.com/video/${id}`,
      }
    }

    if (parsed.hostname.includes('drive.google.com')) {
      const id = extractGoogleDriveId(parsed, trimmed)
      if (!id) return { kind: 'unsupported', href: trimmed }
      return {
        kind: 'google-drive',
        id,
        embedUrl: `https://drive.google.com/file/d/${id}/preview`,
      }
    }

    if (parsed.hostname.includes('loom.com')) {
      const id =
        parsed.pathname.match(/\/share\/([^/?]+)/)?.[1] ??
        parsed.pathname.split('/').filter(Boolean).pop()
      if (!id) return { kind: 'unsupported', href: trimmed }
      return {
        kind: 'loom',
        id,
        embedUrl: `https://www.loom.com/embed/${id}`,
      }
    }

    if (/\.(mp4|webm|ogg|mov)(\?|$)/i.test(parsed.pathname)) {
      return { kind: 'direct', src: trimmed }
    }
  } catch {
    if (/\.(mp4|webm|ogg|mov)(\?|$)/i.test(trimmed)) {
      return { kind: 'direct', src: trimmed }
    }
  }

  return { kind: 'unsupported', href: trimmed }
}

/** Poster image for a project card (screenshot or YouTube thumb from video URL). */
export function getProjectPosterUrl(project: {
  image_urls?: string[] | null
  video_url?: string | null
}): string | null {
  const firstImage = project.image_urls?.find(
    (url) => typeof url === 'string' && url.trim().length > 0
  )
  if (firstImage) return firstImage.trim()

  const video = getVideoInfo(project.video_url)
  if (video?.kind === 'youtube') return video.thumbnailUrl

  return null
}

export function isEmbeddableVideo(info: VideoInfo | null): boolean {
  if (!info) return false
  return (
    info.kind === 'youtube' ||
    info.kind === 'vimeo' ||
    info.kind === 'google-drive' ||
    info.kind === 'loom' ||
    info.kind === 'direct'
  )
}
