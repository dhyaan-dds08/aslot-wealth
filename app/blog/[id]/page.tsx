import { createServerSupabaseClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react'
import { BlogPost } from '@/types/blog'
import ShareButton from '@/components/blog/ShareButton'
import ImageGallery from '@/components/blog/ImageGallery'

interface BlogPostPageProps {
  params: Promise<{
    id: string
  }>
}

// Calculate reading time
const getReadingTime = (content: string) => {
  const words = content.split(/\s+/).length
  const minutes = Math.ceil(words / 200)
  return minutes
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params
  const supabase = await createServerSupabaseClient(false)

  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .eq('active', true)
    .single()

  if (error || !post) {
    notFound()
  }

  // Get related posts (other active posts, excluding current)
  const { data: relatedPosts } = await supabase
    .from('posts')
    .select('*')
    .eq('active', true)
    .neq('id', id)
    .order('created_at', { ascending: false })
    .limit(3)

  const readingTime = getReadingTime(post.content)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/10 to-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Back Button */}
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 hover:bg-accent/10">
              <ArrowLeft className="mr-2" size={18} />
              Back to Blog
            </Button>
          </Link>

          {/* Post Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <time>{new Date(post.created_at).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}</time>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{readingTime} min read</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Share Button */}
          <ShareButton title={post.title} />
        </div>
      </div>

      {/* Featured Image - Only show if exists */}
      {post.images && post.images.length > 0 && (
        <div className="max-w-6xl mx-auto px-4 -mt-8 mb-12">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[21/9]">
            <img
              src={post.images[0]}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      )}

      {/* Content Section */}
      <article className={`max-w-4xl mx-auto px-4 ${post.images && post.images.length > 0 ? 'py-12' : 'py-8'}`}>
        <div className="prose prose-lg lg:prose-xl max-w-none">
          {/* Main Content */}
          <div className="text-lg leading-relaxed text-foreground/90 whitespace-pre-wrap mb-12">
            {post.content}
          </div>

          {/* Additional Images Grid - Only show if more than 1 image */}
          {post.images && post.images.length > 1 && (
            <div className="not-prose my-16">
              <h3 className="text-2xl font-bold text-primary mb-6">Gallery</h3>
              {/* Pass all images but show thumbnails starting from index 1 */}
              <ImageGallery 
                images={post.images} 
                title={post.title}
                thumbnailStartIndex={1}
              />
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="my-16 border-t border-border" />

        {/* Share Section */}
        <div className="flex items-center justify-between py-8 px-6 glass-card rounded-2xl">
          <div>
            <h3 className="text-xl font-bold text-primary mb-2">
              Found this helpful?
            </h3>
            <p className="text-muted-foreground">
              Share this insight with your network
            </p>
          </div>
          <ShareButton title={post.title} variant="button" />
        </div>
      </article>

     {/* Related Posts Section */}
{/* Related Posts Section */}
{relatedPosts && relatedPosts.length > 0 && (
  <section className="max-w-7xl mx-auto px-4 py-20">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        Continue Reading
      </h2>
      <p className="text-lg text-muted-foreground">
        More insights on wealth management
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {relatedPosts.map((relatedPost: BlogPost) => (
        <Link 
          key={relatedPost.id} 
          href={`/blog/${relatedPost.id}`}
          className="group glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
        >
          {relatedPost.images && relatedPost.images.length > 0 && (
            <div className="relative h-32 lg:h-36 bg-gradient-to-br from-accent/20 to-primary/20 overflow-hidden flex-shrink-0">
              <img
                src={relatedPost.images[0]}
                alt={relatedPost.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          )}

          <div className="p-4 lg:p-5 flex flex-col flex-grow">
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                <time>{new Date(relatedPost.created_at).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}</time>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                <span>{getReadingTime(relatedPost.content)} min read</span>
              </div>
            </div>

            <h3 className="text-lg lg:text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
              {relatedPost.title}
            </h3>

            <div className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow whitespace-pre-line line-clamp-[6]">
              {relatedPost.content}
            </div>

            <div className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all mt-auto">
              Read More 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      ))}
    </div>

    <div className="text-center mt-12">
      <Link href="/blog">
        <Button size="lg" variant="outline" className="font-semibold">
          View All Posts
        </Button>
      </Link>
    </div>
  </section>
)}

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="glass-card rounded-3xl p-8 md:p-12 text-center bg-gradient-to-br from-accent/10 to-primary/10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you achieve your financial goals
          </p>
          <Link href="/#contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}