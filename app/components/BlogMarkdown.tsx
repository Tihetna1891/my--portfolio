'use client'

import type { Components } from 'react-markdown'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ZoomableImage } from '@/app/components/ZoomableImage'

type BlogMarkdownProps = {
  content: string
}

const components: Components = {
  h1: ({ children }) => (
    <h2 className="blog-heading blog-h1">{children}</h2>
  ),
  h2: ({ children }) => (
    <h2 className="blog-heading blog-h2">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="blog-heading blog-h3">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="blog-heading blog-h4">{children}</h4>
  ),
  p: ({ children }) => <p className="blog-paragraph">{children}</p>,
  strong: ({ children }) => (
    <strong className="font-semibold text-slate-900 dark:text-slate-50">
      {children}
    </strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-sky-600 underline decoration-sky-500/50 underline-offset-2 hover:text-sky-500 dark:text-sky-400"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="blog-list blog-list-disc">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="blog-list blog-list-decimal">{children}</ol>
  ),
  li: ({ children }) => <li className="blog-list-item">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="blog-blockquote">{children}</blockquote>
  ),
  hr: () => <hr className="blog-hr" />,
  code: ({ className, children, ...props }) => {
    const isBlock = Boolean(className?.includes('language-'))
    if (isBlock) {
      return (
        <code className={`blog-code-block ${className ?? ''}`} {...props}>
          {children}
        </code>
      )
    }
    return (
      <code className="blog-inline-code" {...props}>
        {children}
      </code>
    )
  },
  pre: ({ children }) => <pre className="blog-pre">{children}</pre>,
  table: ({ children }) => (
    <div className="blog-table-wrap">
      <table className="blog-table">{children}</table>
    </div>
  ),
  th: ({ children }) => <th className="blog-th">{children}</th>,
  td: ({ children }) => <td className="blog-td">{children}</td>,
  img: ({ src, alt }) => {
    if (!src || typeof src !== 'string') return null
    return (
      <figure className="blog-figure">
        <ZoomableImage src={src} alt={alt ?? ''} useDriveFallback />
      </figure>
    )
  },
}

export function BlogMarkdown({ content }: BlogMarkdownProps) {
  return (
    <div className="blog-content">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
