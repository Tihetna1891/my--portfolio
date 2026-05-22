'use client'

import { getVideoInfo } from '@/lib/video-utils'

type ProjectVideoEmbedProps = {
  videoUrl: string
  title: string
}

export function ProjectVideoEmbed({ videoUrl, title }: ProjectVideoEmbedProps) {
  const video = getVideoInfo(videoUrl)

  if (!video) return null

  if (
    video.kind === 'youtube' ||
    video.kind === 'vimeo' ||
    video.kind === 'google-drive' ||
    video.kind === 'loom'
  ) {
    return (
      <div className="mt-8 aspect-video w-full overflow-hidden rounded-xl border bg-black">
        <iframe
          src={video.embedUrl}
          title={`${title} demo video`}
          className="h-full w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  if (video.kind === 'direct') {
    return (
      <div className="mt-8 aspect-video w-full overflow-hidden rounded-xl border bg-black">
        <video
          src={video.src}
          controls
          playsInline
          preload="metadata"
          className="h-full w-full"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    )
  }

  return (
    <div className="mt-8 rounded-xl border p-4 text-center text-sm text-slate-500">
      <a
        href={video.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-500 hover:underline"
      >
        Open demo video in a new tab
      </a>
    </div>
  )
}
