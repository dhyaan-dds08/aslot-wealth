import { createServerSupabaseClient } from '@/lib/supabase/server'
import { BlogPost } from '@/types/blog'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const getReadingTime = (content: string) => {
  const words = content.split(/\s+/).length
  const minutes = Math.ceil(words / 200)
  return minutes
}

export default async function BlogPage() {
  const supabase = await createServerSupabaseClient(false)
  
  const { data: posts } = await supabase
    .from('posts')
    .select('*')
    .eq('active', true)
    .order('created_at', { ascending: false })

  // Don't render anything if no posts
  if (!posts || posts.length === 0) {
    return null
  }

  // Determine grid columns based on number of posts
  const getGridClass = () => {
    if (posts.length === 1) return 'grid-cols-1 max-w-4xl'
    if (posts.length === 2) return 'md:grid-cols-2'
    return 'md:grid-cols-2 lg:grid-cols-3'
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/10 to-background py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link href="/">
            <Button variant="ghost" className="mb-6 hover:bg-accent/10">
              <ArrowLeft className="mr-2" size={18} />
              Back to Home
            </Button>
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            Insights & Expertise
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Discover our latest perspectives on wealth management, financial planning, and market insights
          </p>
        </div>

        {/* Blog Grid */}
        <div className={`grid ${getGridClass()} gap-8`}>
          {posts.map((post: BlogPost) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.id}`}
              className="group glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              {post.images && post.images.length > 0 && (
                <div className="relative h-32 lg:h-36 bg-gradient-to-br from-accent/20 to-primary/20 overflow-hidden flex-shrink-0">
                  <img
                    src={post.images[0]}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              )}

              <div className="p-4 lg:p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <time>{new Date(post.created_at).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}</time>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    <span>{getReadingTime(post.content)} min read</span>
                  </div>
                </div>

                <h3 className="text-lg lg:text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <div className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow whitespace-pre-line line-clamp-[6]">
                  {post.content}
                </div>

                <div className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all mt-auto">
                  Read More 
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}