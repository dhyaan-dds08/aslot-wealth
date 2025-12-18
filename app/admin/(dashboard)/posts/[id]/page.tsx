import { createServerSupabaseClient } from '@/lib/supabase/server'
import { notFound, redirect } from 'next/navigation'
import PostForm from '@/components/admin/PostForm'

interface EditPostPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function EditPostPage({ params }: EditPostPageProps) {
  const { id } = await params
  const supabase = await createServerSupabaseClient(true)

  // Fetch the post
  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single()

  // If post not found, show 404
  if (error || !post) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">Edit Post</h1>
        <p className="text-muted-foreground">
          Update your blog post details and content
        </p>
      </div>

      <PostForm post={post} />
    </div>
  )
}