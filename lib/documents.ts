import { extractGoogleDriveFileId } from '@/lib/image-utils'

/**
 * Paste your Google Drive share links here (Anyone with the link can view),
 * or use local files in public/documents/ e.g. '/documents/academic-cv.pdf'
 */
export const DOCUMENTS = {
  academicCv:
    'https://drive.google.com/file/d/1LYvwt7QUMJPAMTFvSiXgREj_ibw3p6HQ/view?usp=sharing',
  professionalCv:
    'https://drive.google.com/file/d/1NbbtrhsLdR3_OxkohAq5NgLRlCsaaUWm/view?usp=sharing',
  researchAbstract:
    'https://drive.google.com/file/d/1Al4bIsnV9ELK79gSS-Fb_s-rj1JEkZrP/view?usp=sharing',
} as const

export type ResolvedDocument = {
  viewUrl: string
  downloadUrl: string
  fileName: string
  isGoogleDrive: boolean
}

export function resolveDocument(href: string): ResolvedDocument {
  const trimmed = href.trim()
  const driveId = extractGoogleDriveFileId(trimmed)

  if (driveId) {
    return {
      viewUrl: `https://drive.google.com/file/d/${driveId}/preview`,
      downloadUrl: `https://drive.google.com/uc?export=download&id=${driveId}`,
      fileName: 'document.pdf',
      isGoogleDrive: true,
    }
  }

  const fileName = trimmed.split('/').pop() ?? 'document.pdf'
  return {
    viewUrl: trimmed,
    downloadUrl: trimmed,
    fileName,
    isGoogleDrive: false,
  }
}
