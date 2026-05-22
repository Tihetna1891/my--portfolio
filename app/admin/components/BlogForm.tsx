'use client'

import { useState } from 'react'
import { createClient } from '../../lib/supabase/client'

interface BlogFormProps {
  onSuccess: () => void
  onCancel: () => void
  post?: any
}

export default function BlogForm({ onSuccess, onCancel, post }: BlogFormProps) {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: post?.title || '',
    slug: post?.slug || '',
    excerpt: post?.excerpt || '',
    content: post?.content || '',
    tags: post?.tags?.join(', ') || '',
    published: post?.published || false,
    cover_image: post?.cover_image || '',
  })

  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const dataToSave = {
      ...formData,
      tags: String(formData.tags)
        .split(',')
        .map((t: string) => t.trim())
        .filter((t: string) => t.length > 0),
    }

    let error
    if (post?.id) {
      const { error: updateError } = await supabase
        .from('blog_posts')
        .update(dataToSave)
        .eq('id', post.id)
      error = updateError
    } else {
      const { error: insertError } = await supabase
        .from('blog_posts')
        .insert([dataToSave])
      error = insertError
    }

    if (error) {
      alert('Error saving post: ' + error.message)
    } else {
      alert(post ? 'Post updated!' : 'Post created!')
      onSuccess()
    }
    setLoading(false)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">
            {post ? 'Edit Blog Post' : 'New Blog Post'}
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
              <label className="block text-sm font-medium mb-1">Slug (URL) *</label>
              <input
                type="text"
                required
                value={formData.slug}
                onChange={(e) => setFormData({...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-')})}
                className="w-full border rounded-lg px-4 py-2 dark:bg-slate-800 dark:border-slate-700"
                placeholder="my-blog-post"
              />
              <p className="text-xs text-gray-500 mt-1">URL will be: /blog/{formData.slug || '...'}</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Excerpt (short summary)</label>
              <textarea
                rows={2}
                value={formData.excerpt}
                onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                className="w-full border rounded-lg px-4 py-2 dark:bg-slate-800 dark:border-slate-700"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Content (Markdown supported) *</label>
              <textarea
                required
                rows={10}
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                className="w-full border rounded-lg px-4 py-2 font-mono text-sm dark:bg-slate-800 dark:border-slate-700"
                placeholder="# Heading\n\nYour content here...\n\n- List item\n- Another item"
              />
              <p className="text-xs text-gray-500 mt-1">Supports Markdown formatting</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Tags (comma-separated)</label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({...formData, tags: e.target.value})}
                className="w-full border rounded-lg px-4 py-2 dark:bg-slate-800 dark:border-slate-700"
                placeholder="AI, Machine Learning, Computer Vision"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Cover Image URL</label>
              <input
                type="url"
                value={formData.cover_image}
                onChange={(e) => setFormData({...formData, cover_image: e.target.value})}
                className="w-full border rounded-lg px-4 py-2 dark:bg-slate-800 dark:border-slate-700"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="published"
                checked={formData.published}
                onChange={(e) => setFormData({...formData, published: e.target.checked})}
                className="w-4 h-4"
              />
              <label htmlFor="published" className="text-sm font-medium">
                Publish immediately (required to show on homepage)
              </label>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-sky-500 text-white px-6 py-2 rounded-lg hover:bg-sky-600 disabled:opacity-50"
              >
                {loading ? 'Saving...' : (post ? 'Update Post' : 'Create Post')}
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