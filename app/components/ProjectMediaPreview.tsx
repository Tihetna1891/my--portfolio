'use client'

import { useRef, useState } from 'react'
import { ExternalLink, Play } from 'lucide-react'
import { ProjectImage } from '@/app/components/ProjectImage'
import {
  getVideoInfo,
  isEmbeddableVideo,
  type VideoInfo,
} from '@/lib/video-utils'

type ProjectMediaPreviewProps = {
  videoUrl?: string | null
  posterUrl?: string | null
  title: string
  alwaysPlay?: boolean
}

function usesIframeEmbed(video: VideoInfo) {
  return (
    video.kind === 'youtube' ||
    video.kind === 'vimeo' ||
    video.kind === 'google-drive' ||
    video.kind === 'loom'
  )
}

export function ProjectMediaPreview({
  videoUrl,
  posterUrl,
  title,
  alwaysPlay = false,
}: ProjectMediaPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hovering, setHovering] = useState(false)
  const video = getVideoInfo(videoUrl)
  const isPlaying = alwaysPlay || hovering
  const resolvedPoster = posterUrl
    ? posterUrl
    : video?.kind === 'youtube'
      ? video.thumbnailUrl
      : null

  const handleEnter = () => {
    setHovering(true)
    const el = videoRef.current
    if (el && video?.kind === 'direct') {
      el.play().catch(() => {})
    }
  }

  const handleLeave = () => {
    setHovering(false)
    const el = videoRef.current
    if (el && video?.kind === 'direct' && !alwaysPlay) {
      el.pause()
      el.currentTime = 0
    }
  }

  if (!videoUrl?.trim() && !posterUrl) {
    return (
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-1 bg-slate-100 px-4 text-center dark:bg-slate-800">
        <span className="text-xs text-slate-500">No preview yet</span>
        <span className="text-[10px] text-slate-400">
          Admin → Video URL or Screenshot URL
        </span>
      </div>
    )
  }

  if (!video && !resolvedPoster) {
    return (
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-1 bg-slate-100 px-4 text-center dark:bg-slate-800">
        <span className="text-xs text-slate-500">Invalid or empty video link</span>
        <span className="text-[10px] text-slate-400">
          Use YouTube, Google Drive (shared), or .mp4
        </span>
      </div>
    )
  }

  return (
    <div
      className="group relative aspect-video w-full overflow-hidden bg-slate-900"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {resolvedPoster ? (
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            isPlaying && video?.kind === 'direct' ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <ProjectImage
            src={resolvedPoster}
            alt={`${title} preview`}
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-linear-to-br from-slate-700 to-slate-900" />
      )}

      {video?.kind === 'direct' && (
        <video
          ref={videoRef}
          src={video.src}
          muted
          loop
          playsInline
          preload="metadata"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            isPlaying ? 'opacity-100' : 'opacity-70'
          }`}
          autoPlay={alwaysPlay}
        />
      )}

      {video && usesIframeEmbed(video) && isPlaying && (
        <iframe
          src={`${video.embedUrl}?autoplay=1&mute=1&playsinline=1`}
          title={`${title} demo`}
          className="absolute inset-0 h-full w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}

      {video && usesIframeEmbed(video) && !isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg">
            <Play className="ml-0.5 h-5 w-5" fill="currentColor" />
          </span>
        </div>
      )}

      {video?.kind === 'unsupported' && (
        <a
          href={video.href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/50 p-4 text-center text-white hover:bg-black/60"
        >
          <ExternalLink className="h-6 w-6" />
          <span className="text-xs">Open video link</span>
        </a>
      )}

      {video && isEmbeddableVideo(video) && !alwaysPlay && (
        <p className="pointer-events-none absolute bottom-2 right-2 rounded bg-black/60 px-2 py-0.5 text-[10px] text-white opacity-0 transition group-hover:opacity-100">
          Hover to preview
        </p>
      )}
    </div>
  )
}
