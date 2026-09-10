import Link from 'next/link';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { BlogPost } from '@/types/blog';
import { Button } from '@/components/ui/button';

const readingTime = (content: string) =>
  Math.max(1, Math.ceil(content.split(/\s+/).length / 200));

/** Strips markdown/HTML so the excerpt reads as prose, not markup. */
const excerpt = (content: string, max = 150) => {
  const text = content
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#*_`>[\]()]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > max ? `${text.slice(0, max).trimEnd()}…` : text;
};

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

export default async function BlogPreview() {
  const supabase = await createServerSupabaseClient(false);

  const { data: posts } = await supabase
    .from('posts')
    .select('*')
    .eq('active', true)
    .order('created_at', { ascending: false });

  if (!posts || posts.length === 0) return null;

  return (
    <section id="insights" className="section-y bg-canvas">
      <div className="container-page">
        <p className="section-label">Insights &amp; expertise</p>
        <h2 className="h2 mt-4 max-w-2xl text-forest">
          Our perspectives on wealth management, financial planning, and markets
        </h2>

        {/* Scales from one post to many without a special case. */}
        <ul className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: BlogPost) => (
            <li key={post.id} className="border-t border-border pt-6">
              <p className="meta flex items-center gap-2 text-ink/50">
                <time dateTime={post.created_at}>{fmtDate(post.created_at)}</time>
                <span aria-hidden>·</span>
                <span className="tnum">{readingTime(post.content)} min read</span>
              </p>

              <h3 className="h4 mt-3">
                <Link
                  href={`/blog/${post.id}`}
                  className="text-forest transition-colors hover:text-growth"
                >
                  {post.title}
                </Link>
              </h3>

              <p className="prose-sm-x mt-2.5 text-ink/60">{excerpt(post.content)}</p>
            </li>
          ))}
        </ul>

        {posts.length > 3 && (
          <div className="mt-12">
            <Button variant="outline" asChild>
              <Link href="/blog">All insights</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
