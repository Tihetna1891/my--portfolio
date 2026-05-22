'use client'

import { useCallback, useRef, useState } from 'react'
import { Minus, Plus, RotateCcw } from 'lucide-react'
import { ProjectImage } from '@/app/components/ProjectImage'

type ZoomableImageProps = {
  src: string
  alt: string
  className?: string
  /** Use ProjectImage for Google Drive etc. */
  useDriveFallback?: boolean
}

const MIN_SCALE = 0.5
const MAX_SCALE = 4
const STEP = 0.25

export function ZoomableImage({
  src,
  alt,
  className = '',
  useDriveFallback = true,
}: ZoomableImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const dragStart = useRef({ x: 0, y: 0, ox: 0, oy: 0 })

  const clampScale = (s: number) =>
    Math.min(MAX_SCALE, Math.max(MIN_SCALE, s))

  const zoomIn = () => setScale((s) => clampScale(s + STEP))
  const zoomOut = () => setScale((s) => clampScale(s - STEP))
  const reset = () => {
    setScale(1)
    setOffset({ x: 0, y: 0 })
  }

  const onWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? -STEP : STEP
    setScale((s) => clampScale(s + delta))
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    if (scale <= 1 && offset.x === 0 && offset.y === 0) return
    setDragging(true)
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      ox: offset.x,
      oy: offset.y,
    }
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return
    setOffset({
      x: dragStart.current.ox + (e.clientX - dragStart.current.x),
      y: dragStart.current.oy + (e.clientY - dragStart.current.y),
    })
  }

  const onPointerUp = () => setDragging(false)

  const imgNode = useDriveFallback ? (
    <ProjectImage
      src={src}
      alt={alt}
      className="max-h-none w-auto max-w-none select-none"
    />
  ) : (
    <img
      src={src}
      alt={alt}
      className="max-h-none w-auto max-w-none select-none"
      draggable={false}
      referrerPolicy="no-referrer"
    />
  )

  return (
    <div
      className={`flex flex-col overflow-hidden rounded-xl border bg-slate-100 dark:bg-slate-900 ${className}`}
    >
      <div className="flex items-center justify-end gap-1 border-b bg-white/80 px-2 py-1.5 dark:bg-slate-950/80">
        <button
          type="button"
          onClick={zoomOut}
          className="rounded p-1.5 hover:bg-slate-200 dark:hover:bg-slate-800"
          aria-label="Zoom out"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="min-w-[3rem] text-center text-xs text-slate-500">
          {Math.round(scale * 100)}%
        </span>
        <button
          type="button"
          onClick={zoomIn}
          className="rounded p-1.5 hover:bg-slate-200 dark:hover:bg-slate-800"
          aria-label="Zoom in"
        >
          <Plus className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={reset}
          className="rounded p-1.5 hover:bg-slate-200 dark:hover:bg-slate-800"
          aria-label="Reset zoom"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
        <span className="ml-1 hidden text-[10px] text-slate-400 sm:inline">
          Scroll · drag when zoomed · wheel to zoom
        </span>
      </div>

      <div
        ref={containerRef}
        className="relative max-h-[min(50vh,480px)] min-h-[120px] cursor-grab overflow-auto active:cursor-grabbing"
        onWheel={onWheel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div
          className="flex min-h-[120px] min-w-full items-center justify-center p-3"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
            transformOrigin: 'center center',
            transition: dragging ? 'none' : 'transform 0.1s ease-out',
          }}
        >
          {imgNode}
        </div>
      </div>
    </div>
  )
}
