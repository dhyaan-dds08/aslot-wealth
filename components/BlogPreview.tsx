import { createServerSupabaseClient } from '@/lib/supabase/server'
import { BlogPost } from '@/types/blog'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SectionHeading from '@/components/SectionHeading'

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
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/10 to-background py-8 pb-0 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionHeading
          eyebrow="From The Desk"
          title={
            <>
              Insights &amp; <span className="text-accent">Expertise</span>
            </>
          }
          subtitle="Discover our latest perspectives on wealth management, financial planning, and market insights"
        />

        {/* Blog Grid */}
        <div className={`grid ${getGridClass()} gap-8`}>
          {posts.map((post: BlogPost) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.id}`}
              className="group glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              {post.images && post.images.length > 0 && (
                <div className="relative h-64 lg:h-72 bg-gradient-to-br from-accent/20 to-primary/20 overflow-hidden flex-shrink-0">
                  <img
                    src={post.images[0]}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              )}

              <div className="p-6 lg:p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
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

                <h3 className="text-xl lg:text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors line-clamp-3">
                  {post.title}
                </h3>

                <div className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-6 flex-grow whitespace-pre-line line-clamp-[12]">
                  {post.content}
                </div>

                <div className="inline-flex items-center gap-2 text-accent font-semibold text-sm lg:text-base group-hover:gap-3 transition-all mt-auto">
                  Read More 
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}