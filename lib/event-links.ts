/**
 * Event & talk outbound links — edit here.
 * Leave '' to hide "View detail" until the post is public.
 */

export const EVENT_LINKS = {
  careerTalkBnmil:
    'https://www.linkedin.com/posts/share-7427397782740606977-eZbJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAACtpmHAB3oKIYFz2uMxIuuY0a3aQRSFN5iA',

  /** Article or LinkedIn post about the AI for Agriculture Co-creation Workshop */
  agricultureWorkshopPost:
    'https://precisiondev.org/ai-in-agriculture-co-creation-and-planning-event/',
} as const

export function isEventLinkReady(url: string | undefined | null): boolean {
  const trimmed = url?.trim() ?? ''
  return Boolean(trimmed && trimmed !== '#')
}
