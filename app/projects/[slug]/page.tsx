import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Github, Play, ArrowLeft, ExternalLink } from 'lucide-react'
import Header from '@/app/components/Header'
import { ProjectImage } from '@/app/components/ProjectImage'
import { ProjectVideoEmbed } from '@/app/components/ProjectVideoEmbed'
import { getProjectByParam } from '@/lib/get-project'
import { getVideoInfo } from '@/lib/video-utils'

type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = await getProjectByParam(slug)

  if (!project) {
    notFound()
  }

  const description =
    typeof project.full_description === 'string'
      ? project.full_description
      : project.short_description || ''

  const storeLink =
    project.live_demo_url ||
    (typeof project.slug === 'string' && project.slug.startsWith('http')
      ? project.slug
      : null)

  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-16">
        <div className="mx-auto max-w-4xl px-4">
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-1 text-sky-500 hover:underline"
          >
            <ArrowLeft size={16} /> Back to projects
          </Link>

          {project.context && (
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-500">
              {project.context}
            </p>
          )}

          <h1 className="mt-2 text-4xl font-bold">{project.title}</h1>

          {project.short_description && (
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              {project.short_description}
            </p>
          )}

          {project.tech_stack && project.tech_stack.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech_stack.map((tech: string) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-100 px-3 py-1 text-sm dark:bg-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {project.video_url && getVideoInfo(project.video_url) && (
            <ProjectVideoEmbed
              videoUrl={project.video_url}
              title={project.title}
            />
          )}

          <div className="mt-8 flex flex-wrap gap-4">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-700"
              >
                <Github size={18} /> GitHub
              </a>
            )}
            {storeLink && (
              <a
                href={storeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-white hover:bg-sky-600"
              >
                <ExternalLink size={18} /> App / Live demo
              </a>
            )}
            {project.video_url && (
              <a
                href={project.video_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <Play size={18} /> Watch demo
              </a>
            )}
          </div>

          {project.image_urls && project.image_urls.length > 0 && (
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.image_urls.map((img: string, i: number) => (
                <div key={i} className="aspect-video overflow-hidden rounded-lg border">
                  <ProjectImage
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="prose prose-slate mt-10 max-w-none dark:prose-invert">
            {description.split('\n').map((para: string, i: number) => (
              <p key={i} className="mb-4 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
