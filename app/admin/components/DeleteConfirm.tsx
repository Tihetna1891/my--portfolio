'use client'

interface DeleteConfirmProps {
  title: string
  type: 'project' | 'blog'
  onConfirm: () => void
  onCancel: () => void
}

export default function DeleteConfirm({ title, type, onConfirm, onCancel }: DeleteConfirmProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow-xl max-w-md w-full p-6">
        <h2 className="text-xl font-bold mb-2">Delete {type === 'project' ? 'Project' : 'Blog Post'}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Are you sure you want to delete <strong className="text-red-500">{title}</strong>? 
          This action cannot be undone.
        </p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}