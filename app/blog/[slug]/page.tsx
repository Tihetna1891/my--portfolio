import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Header from '@/app/components/Header'
import { BlogMarkdown } from '@/app/components/BlogMarkdown'
import { ZoomableImage } from '@/app/components/ZoomableImage'
import { getBlogPostBySlug } from '@/lib/get-blog-post'

type PageProps = {
  params: Promise<{ slug: string }>
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-16">
        <article className="mx-auto max-w-3xl px-4">
          <Link
            href="/#blog"
            className="mb-8 inline-flex items-center gap-1 text-sky-500 hover:underline"
          >
            <ArrowLeft size={16} /> Back to writing
          </Link>

          <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-500">
            Blog
          </p>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">{post.title}</h1>

          {post.created_at && (
            <time
              dateTime={post.created_at}
              className="mt-3 block text-sm text-slate-500 dark:text-slate-400"
            >
              {formatDate(post.created_at)}
            </time>
          )}

          {post.tags && post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs dark:bg-slate-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {post.cover_image && (
            <div className="mt-8">
              <ZoomableImage
                src={post.cover_image}
                alt={post.title}
                useDriveFallback
              />
            </div>
          )}

          {post.excerpt && (
            <p className="mt-8 text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300">
              {post.excerpt}
            </p>
          )}

          <div className="mt-10">
            <BlogMarkdown content={post.content} />
          </div>
        </article>
      </main>
    </>
  )
}
