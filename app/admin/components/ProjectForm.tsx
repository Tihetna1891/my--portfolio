'use client'

import { useState } from 'react'

interface ProjectFormProps {
  onSuccess: () => void
  onCancel: () => void
  adminPassword: string
  project?: any // For editing
}

export default function ProjectForm({
  onSuccess,
  onCancel,
  adminPassword,
  project,
}: ProjectFormProps) {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: project?.title || '',
    slug: project?.slug || '',
    short_description: project?.short_description || '',
    full_description: project?.full_description || '',
    context: project?.context || '',
    tech_stack: project?.tech_stack?.join(', ') || '',
    github_url: project?.github_url || '',
    live_demo_url: project?.live_demo_url || '',
    video_url: project?.video_url || '',
    image_urls: project?.image_urls?.join('\n') || '',
    featured: project?.featured || false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const dataToSave = {
      ...formData,
      tech_stack: String(formData.tech_stack)
        .split(',')
        .map((t: string) => t.trim())
        .filter((t: string) => t.length > 0),
      image_urls: String(formData.image_urls)
        .split(/[\n,]/)
        .map((url: string) => url.trim())
        .filter((url: string) => url.length > 0),
      id: project?.id,
      adminPassword,
    }

    try {
      const response = await fetch('/api/admin/projects', {
        method: project?.id ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': adminPassword,
        },
        body: JSON.stringify(dataToSave),
      })

      const result = await response.json()

      if (!response.ok) {
        alert('Error saving project: ' + (result.error || 'Unknown error'))
        return
      }

      alert(project ? 'Project updated!' : 'Project created!')
      onSuccess()
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Network error'
      alert(
        'Error saving project: ' +
          message +
          '. Restart the dev server after changing .env.local.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">
            {project ? 'Edit Project' : 'Add New Project'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Title *</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full border rounded-lg px-4 py-2 dark:bg-slate-800 dark:border-slate-700"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Slug (short name) *</label>
              <input
                type="text"
                required
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="w-full border rounded-lg px-4 py-2 dark:bg-slate-800 dark:border-slate-700"
                placeholder="chipchip-app"
              />
              <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">
                Short name only (e.g. chipchip-app). Play Store links go in Live Demo URL below.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Short Description *</label>
              <textarea
                required
                rows={2}
                value={formData.short_description}
                onChange={(e) => setFormData({...formData, short_description: e.target.value})}
                className="w-full border rounded-lg px-4 py-2 dark:bg-slate-800 dark:border-slate-700"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Full Description *</label>
              <textarea
                required
                rows={6}
                value={formData.full_description}
                onChange={(e) => setFormData({...formData, full_description: e.target.value})}
                className="w-full border rounded-lg px-4 py-2 dark:bg-slate-800 dark:border-slate-700"
                placeholder="Write a detailed description of your project..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Context (Tech badges)</label>
              <input
                type="text"
                value={formData.context}
                onChange={(e) => setFormData({...formData, context: e.target.value})}
                className="w-full border rounded-lg px-4 py-2 dark:bg-slate-800 dark:border-slate-700"
                placeholder="e.g., Agentic AI · CrewAI · LLM Orchestration"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Tech Stack (comma-separated)</label>
              <input
                type="text"
                value={formData.tech_stack}
                onChange={(e) => setFormData({...formData, tech_stack: e.target.value})}
                className="w-full border rounded-lg px-4 py-2 dark:bg-slate-800 dark:border-slate-700"
                placeholder="PyTorch, TensorFlow, OpenCV"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">GitHub URL</label>
              <input
                type="url"
                value={formData.github_url}
                onChange={(e) => setFormData({...formData, github_url: e.target.value})}
                className="w-full border rounded-lg px-4 py-2 dark:bg-slate-800 dark:border-slate-700"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Live Demo / Play Store URL
              </label>
              <input
                type="url"
                value={formData.live_demo_url}
                onChange={(e) => setFormData({...formData, live_demo_url: e.target.value})}
                className="w-full border rounded-lg px-4 py-2 dark:bg-slate-800 dark:border-slate-700"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Video URL (homepage preview)
              </label>
              <input
                type="url"
                value={formData.video_url}
                onChange={(e) => setFormData({...formData, video_url: e.target.value})}
                className="w-full border rounded-lg px-4 py-2 dark:bg-slate-800 dark:border-slate-700"
                placeholder="https://www.youtube.com/watch?v=..."
              />
              <p className="mt-1 text-xs text-slate-500">
                YouTube, Google Drive (shared), Loom, Vimeo, or direct .mp4.
                Thumbnail shows on the card; hover to play.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Screenshot / poster URLs
              </label>
              <textarea
                rows={2}
                value={formData.image_urls}
                onChange={(e) =>
                  setFormData({ ...formData, image_urls: e.target.value })
                }
                className="w-full border rounded-lg px-4 py-2 dark:bg-slate-800 dark:border-slate-700"
                placeholder="https://example.com/screenshot.png (one per line)"
              />
              <p className="mt-1 text-xs text-slate-500">
                Google Drive: use the share link and set access to{' '}
                <strong>Anyone with the link</strong> (viewer). Re-save the
                project after updating. Imgur or Supabase Storage links work
                most reliably.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                className="w-4 h-4"
              />
              <label htmlFor="featured" className="text-sm font-medium">Feature this project</label>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-sky-500 text-white px-6 py-2 rounded-lg hover:bg-sky-600 disabled:opacity-50"
              >
                {loading ? 'Saving...' : (project ? 'Update Project' : 'Create Project')}
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="border px-6 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}