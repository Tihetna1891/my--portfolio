'use client'

import { useMemo, useState } from 'react'
import {
  getGoogleDriveImageCandidates,
  getGoogleDrivePreviewEmbedUrl,
  isGoogleDriveUrl,
  normalizeImageUrl,
} from '@/lib/image-utils'

type ProjectImageProps = {
  src: string
  alt: string
  className?: string
}

export function ProjectImage({ src, alt, className = '' }: ProjectImageProps) {
  const candidates = useMemo(() => {
    const raw = src.trim()
    if (isGoogleDriveUrl(raw)) return getGoogleDriveImageCandidates(raw)
    return [normalizeImageUrl(raw)]
  }, [src])

  const [index, setIndex] = useState(0)
  const [failed, setFailed] = useState(false)

  const driveEmbed = getGoogleDrivePreviewEmbedUrl(src)
  const currentSrc = candidates[index]

  if (failed && driveEmbed) {
    return (
      <iframe
        src={driveEmbed}
        title={alt}
        className={`h-full w-full border-0 ${className}`}
      />
    )
  }

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-slate-100 px-3 text-center text-xs text-slate-500 dark:bg-slate-800 ${className}`}
      >
        Image could not load. Use &quot;Anyone with the link&quot; sharing on
        Drive, or host the file on Imgur / Supabase Storage.
      </div>
    )
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      onError={() => {
        if (index < candidates.length - 1) {
          setIndex((i) => i + 1)
        } else {
          setFailed(true)
        }
      }}
    />
  )
}
