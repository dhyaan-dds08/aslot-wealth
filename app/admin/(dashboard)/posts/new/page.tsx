

import PostForm from '@/components/admin/PostForm'

export default function NewPostPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">Create New Post</h1>
        <p className="text-muted-foreground">
          Add a new blog post with images
        </p>
      </div>

      <PostForm />
    </div>
  )
}