// 'use client'

// import { useState } from 'react'
// import { createClient } from '../../lib/supabase/client'

// export default function AdminPage() {
//   const [password, setPassword] = useState('')
//   const [authenticated, setAuthenticated] = useState(false)
//   const [projects, setProjects] = useState<any[]>([])
//   const [blogPosts, setBlogPosts] = useState<any[]>([])
//   const [activeTab, setActiveTab] = useState('projects')
//   const [isLoading, setIsLoading] = useState(true)

//   const supabase = createClient()

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault()
//     const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'Tihetna123'
//     if (password === ADMIN_PASSWORD) {
//       setAuthenticated(true)
//       fetchData()
//     } else {
//       alert('Wrong password')
//     }
//   }

//   const fetchData = async () => {
//     setIsLoading(true)
//     const { data: projectsData } = await supabase.from('projects').select('*')
//     const { data: postsData } = await supabase.from('blog_posts').select('*')
//     setProjects(projectsData || [])
//     setBlogPosts(postsData || [])
//     setIsLoading(false)
//   }

//   const deleteProject = async (id: string) => {
//     if (confirm('Delete this project?')) {
//       await supabase.from('projects').delete().eq('id', id)
//       fetchData()
//     }
//   }

//   const deletePost = async (id: string) => {
//     if (confirm('Delete this blog post?')) {
//       await supabase.from('blog_posts').delete().eq('id', id)
//       fetchData()
//     }
//   }

//   if (!authenticated) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950">
//         <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-xl max-w-md w-full">
//           <h1 className="text-2xl font-bold mb-4 text-center">Admin Login</h1>
//           <form onSubmit={handleLogin}>
//             <input
//               type="password"
//               placeholder="Enter admin password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="border rounded-lg px-4 py-2 mb-4 w-full dark:bg-slate-800 dark:border-slate-700"
//               autoFocus
//             />
//             <button
//               type="submit"
//               className="bg-sky-500 text-white px-6 py-2 rounded-lg hover:bg-sky-600 w-full font-medium"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen pt-24 pb-16 px-4 bg-gray-50 dark:bg-slate-950">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
//         <p className="text-gray-500 dark:text-gray-400 mb-8">Manage your portfolio content</p>
        
//         <div className="flex gap-4 border-b mb-8">
//           <button
//             onClick={() => setActiveTab('projects')}
//             className={`pb-2 px-4 text-lg ${activeTab === 'projects' ? 'border-b-2 border-sky-500 text-sky-500 font-medium' : 'text-gray-500'}`}
//           >
//             Projects ({projects.length})
//           </button>
//           <button
//             onClick={() => setActiveTab('blog')}
//             className={`pb-2 px-4 text-lg ${activeTab === 'blog' ? 'border-b-2 border-sky-500 text-sky-500 font-medium' : 'text-gray-500'}`}
//           >
//             Blog Posts ({blogPosts.length})
//           </button>
//         </div>

//         {activeTab === 'projects' && (
//           <div>
//             <button 
//               onClick={() => alert('Create project form coming soon!')}
//               className="bg-sky-500 text-white px-4 py-2 rounded-lg mb-6 hover:bg-sky-600"
//             >
//               + Add New Project
//             </button>
            
//             {isLoading ? (
//               <p>Loading...</p>
//             ) : projects.length === 0 ? (
//               <div className="text-center py-12 text-gray-500">
//                 No projects yet. Click "Add New Project" to create one.
//               </div>
//             ) : (
//               <div className="grid gap-4">
//                 {projects.map((project) => (
//                   <div key={project.id} className="bg-white dark:bg-slate-900 border rounded-lg p-4 flex justify-between items-center shadow-sm">
//                     <div>
//                       <h3 className="font-bold text-lg">{project.title}</h3>
//                       <p className="text-sm text-gray-500">Slug: {project.slug}</p>
//                     </div>
//                     <div className="flex gap-2">
//                       <button className="text-blue-500 hover:text-blue-600">Edit</button>
//                       <button onClick={() => deleteProject(project.id)} className="text-red-500 hover:text-red-600">Delete</button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}

//         {activeTab === 'blog' && (
//           <div>
//             <button 
//               onClick={() => alert('Create blog post form coming soon!')}
//               className="bg-sky-500 text-white px-4 py-2 rounded-lg mb-6 hover:bg-sky-600"
//             >
//               + New Blog Post
//             </button>
            
//             {isLoading ? (
//               <p>Loading...</p>
//             ) : blogPosts.length === 0 ? (
//               <div className="text-center py-12 text-gray-500">
//                 No blog posts yet. Click "New Blog Post" to create one.
//               </div>
//             ) : (
//               <div className="grid gap-4">
//                 {blogPosts.map((post) => (
//                   <div key={post.id} className="bg-white dark:bg-slate-900 border rounded-lg p-4 flex justify-between items-center shadow-sm">
//                     <div>
//                       <h3 className="font-bold text-lg">{post.title}</h3>
//                       <p className="text-sm text-gray-500">
//                         {post.published ? '✅ Published' : '📝 Draft'} | Slug: {post.slug}
//                       </p>
//                     </div>
//                     <div className="flex gap-2">
//                       <button className="text-blue-500 hover:text-blue-600">Edit</button>
//                       <button onClick={() => deletePost(post.id)} className="text-red-500 hover:text-red-600">Delete</button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }
'use client'

import { useState, useEffect } from 'react'
import ProjectForm from './components/ProjectForm'
import BlogForm from './components/BlogForm'
import DeleteConfirm from './components/DeleteConfirm'

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const [projects, setProjects] = useState<any[]>([])
  const [blogPosts, setBlogPosts] = useState<any[]>([])
  const [activeTab, setActiveTab] = useState('projects')
  const [isLoading, setIsLoading] = useState(true)
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [showBlogForm, setShowBlogForm] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [editingProject, setEditingProject] = useState<any>(null)
  const [editingPost, setEditingPost] = useState<any>(null)
  const [deletingItem, setDeletingItem] = useState<{ id: string; title: string; type: 'project' | 'blog' } | null>(null)

  const getAdminPassword = () =>
    password || sessionStorage.getItem('admin-password') || ''

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'Tihetna123'
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('admin-password', password)
      setAuthenticated(true)
      fetchData()
    } else {
      alert('Wrong password')
    }
  }

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const adminPassword = getAdminPassword()
      const projectsRes = await fetch('/api/admin/projects', {
        headers: { 'x-admin-password': adminPassword },
      })
      const projectsJson = await projectsRes.json()

      if (!projectsRes.ok) {
        throw new Error(projectsJson.error || 'Failed to load projects')
      }

      setProjects(projectsJson.data || [])

      // Blog posts still use Supabase client until a matching API route is added
      const { createClient } = await import('../../lib/supabase/client')
      const supabase = createClient()
      const { data: postsData, error: postsError } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false })

      if (postsError) {
        console.error('Error fetching blog posts:', postsError.message)
        setBlogPosts([])
      } else {
        setBlogPosts(postsData || [])
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error'
      alert('Error loading admin data: ' + message)
      console.error('Error fetching data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!deletingItem) return

    try {
      const adminPassword = getAdminPassword()

      if (deletingItem.type === 'project') {
        const response = await fetch(
          `/api/admin/projects?id=${deletingItem.id}`,
          {
            method: 'DELETE',
            headers: { 'x-admin-password': adminPassword },
          }
        )
        const result = await response.json()
        if (!response.ok) {
          throw new Error(result.error || 'Failed to delete project')
        }
      } else {
        const { createClient } = await import('../../lib/supabase/client')
        const supabase = createClient()
        const { error } = await supabase
          .from('blog_posts')
          .delete()
          .eq('id', deletingItem.id)
        if (error) throw new Error(error.message)
      }

      alert(
        `${deletingItem.type === 'project' ? 'Project' : 'Blog post'} deleted successfully!`
      )
      fetchData()
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error'
      alert(`Error deleting: ${message}`)
    }

    setShowDeleteConfirm(false)
    setDeletingItem(null)
  }

  const confirmDelete = (id: string, title: string, type: 'project' | 'blog') => {
    setDeletingItem({ id, title, type })
    setShowDeleteConfirm(true)
  }

  const editProject = (project: any) => {
    setEditingProject(project)
    setShowProjectForm(true)
  }

  const editPost = (post: any) => {
    setEditingPost(post)
    setShowBlogForm(true)
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-xl max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4 text-center">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-lg px-4 py-2 mb-4 w-full dark:bg-slate-800 dark:border-slate-700"
              autoFocus
            />
            <button
              type="submit"
              className="bg-sky-500 text-white px-6 py-2 rounded-lg hover:bg-sky-600 w-full font-medium"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gray-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400">Manage your portfolio content</p>
          </div>
          <button
            onClick={fetchData}
            className="px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 text-sm"
          >
            🔄 Refresh
          </button>
        </div>
        
        <div className="flex gap-4 border-b mb-8">
          <button
            onClick={() => setActiveTab('projects')}
            className={`pb-2 px-4 text-lg ${activeTab === 'projects' ? 'border-b-2 border-sky-500 text-sky-500 font-medium' : 'text-gray-500'}`}
          >
            Projects ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab('blog')}
            className={`pb-2 px-4 text-lg ${activeTab === 'blog' ? 'border-b-2 border-sky-500 text-sky-500 font-medium' : 'text-gray-500'}`}
          >
            Blog Posts ({blogPosts.length})
          </button>
        </div>

        {activeTab === 'projects' && (
          <div>
            <button 
              onClick={() => {
                setEditingProject(null)
                setShowProjectForm(true)
              }}
              className="bg-sky-500 text-white px-4 py-2 rounded-lg mb-6 hover:bg-sky-600"
            >
              + Add New Project
            </button>
            
            {isLoading ? (
              <div className="text-center py-12">Loading...</div>
            ) : projects.length === 0 ? (
              <div className="text-center py-12 text-gray-500 bg-white dark:bg-slate-900 rounded-lg border">
                No projects yet. Click "Add New Project" to create one.
              </div>
            ) : (
              <div className="grid gap-4">
                {projects.map((project) => (
                  <div key={project.id} className="bg-white dark:bg-slate-900 border rounded-lg p-4 flex justify-between items-center shadow-sm hover:shadow-md transition">
                    <div>
                      <h3 className="font-bold text-lg">{project.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <p className="text-sm text-gray-500">Slug: {project.slug}</p>
                        {project.featured && (
                          <span className="text-xs bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 px-2 py-0.5 rounded">Featured</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">{project.short_description}</p>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => editProject(project)} 
                        className="px-3 py-1 text-blue-500 hover:text-blue-600 border border-blue-500 rounded-lg text-sm hover:bg-blue-50 dark:hover:bg-blue-950/30"
                      >
                        ✏️ Edit
                      </button>
                      <button 
                        onClick={() => confirmDelete(project.id, project.title, 'project')} 
                        className="px-3 py-1 text-red-500 hover:text-red-600 border border-red-500 rounded-lg text-sm hover:bg-red-50 dark:hover:bg-red-950/30"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'blog' && (
          <div>
            <button 
              onClick={() => {
                setEditingPost(null)
                setShowBlogForm(true)
              }}
              className="bg-sky-500 text-white px-4 py-2 rounded-lg mb-6 hover:bg-sky-600"
            >
              + New Blog Post
            </button>
            
            {isLoading ? (
              <div className="text-center py-12">Loading...</div>
            ) : blogPosts.length === 0 ? (
              <div className="text-center py-12 text-gray-500 bg-white dark:bg-slate-900 rounded-lg border">
                No blog posts yet. Click "New Blog Post" to create one.
              </div>
            ) : (
              <div className="grid gap-4">
                {blogPosts.map((post) => (
                  <div key={post.id} className="bg-white dark:bg-slate-900 border rounded-lg p-4 flex justify-between items-center shadow-sm hover:shadow-md transition">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-bold text-lg">{post.title}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded ${post.published ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'}`}>
                          {post.published ? 'Published' : 'Draft'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">Slug: {post.slug}</p>
                      {post.excerpt && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">{post.excerpt}</p>
                      )}
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex gap-2 mt-2">
                          {post.tags.slice(0, 3).map((tag: string) => (
                            <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-800 px-2 py-0.5 rounded">#{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button 
                        onClick={() => editPost(post)} 
                        className="px-3 py-1 text-blue-500 hover:text-blue-600 border border-blue-500 rounded-lg text-sm hover:bg-blue-50 dark:hover:bg-blue-950/30"
                      >
                        ✏️ Edit
                      </button>
                      <button 
                        onClick={() => confirmDelete(post.id, post.title, 'blog')} 
                        className="px-3 py-1 text-red-500 hover:text-red-600 border border-red-500 rounded-lg text-sm hover:bg-red-50 dark:hover:bg-red-950/30"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Project Form Modal */}
      {showProjectForm && (
        <ProjectForm
          project={editingProject}
          adminPassword={getAdminPassword()}
          onSuccess={() => {
            setShowProjectForm(false)
            setEditingProject(null)
            fetchData()
          }}
          onCancel={() => {
            setShowProjectForm(false)
            setEditingProject(null)
          }}
        />
      )}

      {/* Blog Form Modal */}
      {showBlogForm && (
        <BlogForm
          post={editingPost}
          onSuccess={() => {
            setShowBlogForm(false)
            setEditingPost(null)
            fetchData()
          }}
          onCancel={() => {
            setShowBlogForm(false)
            setEditingPost(null)
          }}
        />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && deletingItem && (
        <DeleteConfirm
          title={deletingItem.title}
          type={deletingItem.type}
          onConfirm={handleDelete}
          onCancel={() => {
            setShowDeleteConfirm(false)
            setDeletingItem(null)
          }}
        />
      )}
    </div>
  )
}