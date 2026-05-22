'use client'

/**
 * Subtle ambient background (gradient orbs + grid).
 * Inspired by modern portfolios like mukerem.com / ezedinfedlu.com — kept non-interactive
 * so it does not compete with content or admin flows.
 */
export function BackgroundMotion() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="bg-motion-grid absolute inset-0 opacity-[0.35] dark:opacity-[0.2]" />

      <div className="bg-motion-orb bg-motion-orb-a absolute -left-[20%] top-[8%] h-[28rem] w-[28rem] rounded-full bg-sky-400/25 blur-[100px] dark:bg-sky-500/15" />
      <div className="bg-motion-orb bg-motion-orb-b absolute right-[-15%] top-[35%] h-[32rem] w-[32rem] rounded-full bg-violet-400/20 blur-[110px] dark:bg-violet-500/12" />
      <div className="bg-motion-orb bg-motion-orb-c absolute bottom-[5%] left-[25%] h-[24rem] w-[24rem] rounded-full bg-cyan-400/20 blur-[90px] dark:bg-cyan-500/10" />

      <div className="absolute inset-0 bg-linear-to-b from-white/40 via-transparent to-white/60 dark:from-slate-950/50 dark:to-slate-950/80" />
    </div>
  )
}
