import { createServerSupabaseClient } from '@/lib/supabase/server'
import { BlogPost } from '@/types/blog'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Plus, Edit, Trash2 } from 'lucide-react'
import TogglePostButton from '@/components/admin/ToggleSwitch'
import DeletePostButton from '@/components/admin/DeletePostButton'
import { CldImage } from 'next-cloudinary'

export const dynamic = 'force-dynamic'

export default async function AdminDashboard() {
  const supabase = await createServerSupabaseClient()
  
  
  const { data: posts } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-primary">Blog Posts</h1>
        <Link href="/admin/posts/new">
          <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold">
            <Plus className="mr-2" size={20} />
            New Post
          </Button>
        </Link>
      </div>

      {!posts || posts.length === 0 ? (
        <div className="glass-card rounded-2xl p-12 text-center">
          <p className="text-muted-foreground text-lg mb-4">
            No posts yet. Create your first post!
          </p>
          <Link href="/admin/posts/new">
            <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold">
              <Plus className="mr-2" size={20} />
              Create Post
            </Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {posts.map((post: BlogPost) => (
            <div
              key={post.id}
              className="glass-card rounded-xl p-6 flex items-center gap-6 hover:shadow-lg transition-shadow"
            >
              {/* Thumbnail */}
              {post.images && post.images.length > 0 && (
                <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                  <CldImage
                    src={post.images[0]}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
              )}

              {/* Post Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-primary mb-2 truncate">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.content.substring(0, 150)}...
                </p>
                <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                  <span>
                    Created: {new Date(post.created_at).toLocaleDateString()}
                  </span>
                  {post.images && (
                    <span>{post.images.length} image(s)</span>
                  )}
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex-shrink-0">
                {post.active ? (
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Active
                  </span>
                ) : (
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    Inactive
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <TogglePostButton post={post} />
                
                <Link href={`/admin/posts/${post.id}`}>
                  <Button variant="outline" size="sm">
                    <Edit size={16} />
                  </Button>
                </Link>

                <DeletePostButton postId={post.id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}