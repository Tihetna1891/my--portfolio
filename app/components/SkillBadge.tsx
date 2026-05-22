'use client'

import { useState } from 'react'
import { getSkillIconUrl } from '@/lib/skill-icons'

type SkillBadgeProps = {
  name: string
}

export function SkillBadge({ name }: SkillBadgeProps) {
  const [imgFailed, setImgFailed] = useState(false)
  const iconUrl = getSkillIconUrl(name)
  const initial = name.replace(/\(.*\)/, '').trim().charAt(0).toUpperCase()

  return (
    <li className="inline-flex items-center gap-2 rounded-full border bg-white/60 px-3 py-1.5 text-xs leading-none dark:bg-slate-900/60">
      {iconUrl && !imgFailed ? (
        <img
          src={iconUrl}
          alt=""
          width={16}
          height={16}
          className="h-4 w-4 shrink-0 object-contain"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sky-500/15 text-[10px] font-semibold text-sky-600 dark:text-sky-400">
          {initial}
        </span>
      )}
      <span className="whitespace-nowrap">{name}</span>
    </li>
  )
}
