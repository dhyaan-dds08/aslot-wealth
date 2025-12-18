'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { uploadMultipleImages } from '@/lib/uploadImage'
import { X, Upload, Loader2 } from 'lucide-react'

interface PostFormProps {
  post?: {
    id: string
    title: string
    content: string
    images: string[] | null
    active: boolean
  }
}

export default function PostForm({ post }: PostFormProps) {
  const router = useRouter()
  const [title, setTitle] = useState(post?.title || '')
  const [content, setContent] = useState(post?.content || '')
  const [images, setImages] = useState<string[]>(post?.images || [])
  const [active, setActive] = useState(post?.active ?? true)
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    setUploading(true)
    setError('')

    try {
      const fileArray = Array.from(files)
      const uploadedUrls = await uploadMultipleImages(fileArray)
      setImages([...images, ...uploadedUrls])
    } catch (err) {
      console.error('Upload error:', err)
      setError('Failed to upload images. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!title.trim()) {
      setError('Title is required')
      return
    }
    
    if (!content.trim()) {
      setError('Content is required')
      return
    }

    setSaving(true)
    setError('')

    try {
      const endpoint = post ? '/api/posts/update' : '/api/posts/create'
      const body = post 
        ? { id: post.id, title, content, images, active }
        : { title, content, images, active }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to save post')
      }

      router.push('/admin/dashboard')
      router.refresh()
    } catch (err) {
      console.error('Save error:', err)
      setError(err instanceof Error ? err.message : 'Failed to save post')
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Title */}
      <div className="glass-card rounded-2xl p-6">
        <label htmlFor="title" className="block text-sm font-semibold text-primary mb-2">
          Title *
        </label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title..."
          required
          className="text-lg"
        />
      </div>

      {/* Content */}
      <div className="glass-card rounded-2xl p-6">
        <label htmlFor="content" className="block text-sm font-semibold text-primary mb-2">
          Content *
        </label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your post content..."
          required
          rows={12}
          className="resize-none"
        />
        <p className="text-xs text-muted-foreground mt-2">
          {content.length} characters
        </p>
      </div>

      {/* Images */}
      <div className="glass-card rounded-2xl p-6">
        <label className="block text-sm font-semibold text-primary mb-4">
          Images
        </label>

        {/* Upload Button */}
        <div className="mb-6">
          <label className="cursor-pointer">
            <div className="border-2 border-dashed border-border hover:border-accent rounded-xl p-8 text-center transition-colors">
              <Upload className="mx-auto mb-3 text-muted-foreground" size={40} />
              <p className="text-sm font-medium text-primary mb-1">
                Click to upload images
              </p>
              <p className="text-xs text-muted-foreground">
                PNG, JPG, WEBP up to 10MB each
              </p>
            </div>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              disabled={uploading}
              className="hidden"
            />
          </label>
        </div>

        {/* Uploading State */}
        {uploading && (
          <div className="flex items-center justify-center gap-3 py-4 text-accent">
            <Loader2 className="animate-spin" size={20} />
            <span>Uploading images...</span>
          </div>
        )}

        {/* Image Preview Grid */}
        {images.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((url, index) => (
              <div
                key={index}
                className="relative group rounded-lg overflow-hidden bg-muted aspect-square"
              >
                <img
                  src={url}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                >
                  <X size={16} />
                </button>
                <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  Image {index + 1}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Active Toggle */}
      <div className="glass-card rounded-2xl p-6">
        <label className="flex items-center justify-between cursor-pointer">
          <div>
            <p className="text-sm font-semibold text-primary mb-1">
              Publish Status
            </p>
            <p className="text-xs text-muted-foreground">
              {active ? 'Post is visible to public' : 'Post is hidden from public'}
            </p>
          </div>
          <div className="relative">
            <input
              type="checkbox"
              checked={active}
              onChange={(e) => setActive(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-14 h-8 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/20 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-accent"></div>
          </div>
        </label>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-xl">
          {error}
        </div>
      )}

      {/* Submit Buttons */}
      <div className="flex gap-4">
        <Button
          type="submit"
          disabled={saving || uploading}
          className="flex-1 bg-accent hover:bg-accent/90 text-primary font-semibold py-6"
        >
          {saving ? (
            <>
              <Loader2 className="mr-2 animate-spin" size={20} />
              {post ? 'Updating...' : 'Creating...'}
            </>
          ) : (
            post ? 'Update Post' : 'Create Post'
          )}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push('/admin/dashboard')}
          disabled={saving || uploading}
          className="px-8"
        >
          Cancel
        </Button>
      </div>
    </form>
  )
}