/**
 * Thesis section links (homepage → Research & Thesis).
 * Leave a value empty ('') to hide that link until you are ready to share.
 *
 * Supports Google Drive share URLs or any public URL.
 * CVs and abstract PDF for the Resume section stay in lib/documents.ts
 */

export const THESIS_LINKS = {
  /** Full thesis PDF — powers "View thesis PDF" and "Download thesis PDF" */
  fullThesisPdf: '',

  /** Public GitHub repo for thesis / research code */
  thesisGithub: '',

  /** Results gallery (Drive folder, Notion page, or published figures URL) */
  resultsGallery: '',

  /** Optional: journal or ResearchGate page when the paper is live */
  journalArticle: '',
} as const

export function isPublicLink(url: string | undefined | null): boolean {
  const trimmed = url?.trim() ?? ''
  if (!trimmed || trimmed === '#') return false
  if (trimmed.includes('YOUR_')) return false
  return true
}
