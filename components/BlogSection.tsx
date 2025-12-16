"use client";
import { ArrowRight, Calendar } from 'lucide-react';
import BlogOne from '@/assets/blogs/blog-1.png'
import BlogTwo from '@/assets/blogs/blog-2.png'
interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

const BlogCard = ({ title, excerpt, date, category, linkedinUrl }: BlogCardProps & { linkedinUrl?: string }) => {
  return (
    <a href={linkedinUrl || '#'} target="_blank" rel="noopener noreferrer">
      <article className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer group">
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
            {category}
          </span>
          <time className="flex items-center text-sm text-white/80" dateTime={date}>
            <Calendar size={14} className="mr-1" />
            {date}
          </time>
        </div>
        <h3 className="text-xl font-bold mb-3 text-accent transition-colors">
          {title}
        </h3>
        <p className="text-white mb-4 line-clamp-3">{excerpt}</p>
        <div className="flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform">
          Read on LinkedIn <ArrowRight size={18} className="ml-2" />
        </div>
      </article>
    </a>
  );
};

const BlogSection = () => {
  // const { posts, loading } = useBlog();
  // const displayPosts = posts.slice(0, 3);

  return (
    <section id="blogs" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="">Insights</span> & <span className="bg-gradient-to-r from-yellow-400 via-accent to-yellow-600 bg-clip-text text-transparent">Perspectives</span>
          </h2>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {loading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <Skeleton className="h-6 w-24 rounded-full" />
                  <Skeleton className="h-4 w-20" />
                </div>
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-5/6" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-24" />
              </div>
            ))
          ) : (
            displayPosts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                category={post.category}
                linkedinUrl={post.linkedinUrl}
              />
            ))
          )}
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">

          <div className='w-80 md:w-[500px] h-96'>
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7383419997907312641?collapsed=1" className='w-80 md:w-[500px] h-96' allowFullScreen={false} title="Embedded post"></iframe>
            {/* <img src={BlogOne.src} alt="LinkedIn Post" className='' /> */}
          </div>

          <div className='w-80 md:w-[500px] h-96'>
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7370007477981003776?collapsed=1" className='w-80 md:w-[500px] h-96' allowFullScreen={false} title="Embedded post"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
