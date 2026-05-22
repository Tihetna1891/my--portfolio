import { resolveDocument } from '@/lib/documents'

type DocumentLinksProps = {
  href: string
  viewLabel?: string
  downloadLabel?: string
}

export function DocumentLinks({
  href,
  viewLabel = 'View online',
  downloadLabel = 'Download PDF',
}: DocumentLinksProps) {
  const { viewUrl, downloadUrl, fileName, isGoogleDrive } = resolveDocument(href)

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={viewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="min-w-32 flex-1 rounded-lg bg-sky-500 px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-sky-600"
      >
        {viewLabel}
      </a>
      <a
        href={downloadUrl}
        {...(isGoogleDrive
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : { download: fileName })}
        className="min-w-32 flex-1 rounded-lg border border-sky-500 px-4 py-2 text-center text-sm font-medium text-sky-500 transition hover:bg-sky-50 dark:hover:bg-sky-950/30"
      >
        {downloadLabel}
      </a>
    </div>
  )
}
