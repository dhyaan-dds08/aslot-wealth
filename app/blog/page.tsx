import { createServerSupabaseClient } from '@/lib/supabase/server';
import { BlogPost } from '@/types/blog';
import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export const metadata: Metadata = {
  title: 'Insights – Aslot Wealth Advisor',
  description:
    'Our perspectives on wealth management, financial planning, and markets, from a family practice in Surat since 1989.',
};

const readingTime = (content: string) =>
  Math.max(1, Math.ceil(content.split(/\s+/).length / 200));

const excerpt = (content: string, max = 160) => {
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

export default async function BlogPage() {
  const supabase = await createServerSupabaseClient(false);

  const { data: posts } = await supabase
    .from('posts')
    .select('*')
    .eq('active', true)
    .order('created_at', { ascending: false });

  const list = posts ?? [];
  const [featured, ...rest] = list;

  return (
    <>
      <Navigation />

      <main id="main">
        <section className="section-y">
          <div className="container-page">
            <p className="section-label">Insights &amp; expertise</p>
            <h1 className="display mt-4 max-w-3xl text-forest">
              Perspectives on wealth, planning and markets
            </h1>

            {list.length === 0 && (
              <p className="lede measure mt-8 text-ink/60">
                New writing is on the way. In the meantime,{' '}
                <Link href="/#contact" className="text-growth underline underline-offset-4">
                  book a portfolio review
                </Link>
                .
              </p>
            )}

            {/* One post reads as a wide feature; many settle into a grid. */}
            {featured && (
              <article className="mt-14 grid gap-8 border-t border-border pt-8 lg:grid-cols-12">
                {featured.images?.[0] && (
                  <Link
                    href={`/blog/${featured.id}`}
                    className="group block overflow-hidden lg:col-span-7"
                  >
                    <img
                      src={featured.images[0]}
                      alt=""
                      className="aspect-[16/10] w-full bg-surface object-cover transition-transform duration-500 ease-soft group-hover:scale-105"
                      loading="eager"
                    />
                  </Link>
                )}

                <div className={featured.images?.[0] ? 'lg:col-span-5' : 'lg:col-span-8'}>
                  <p className="meta flex items-center gap-2 text-ink/50">
                    <time dateTime={featured.created_at}>{fmtDate(featured.created_at)}</time>
                    <span aria-hidden>·</span>
                    <span className="tnum">{readingTime(featured.content)} min read</span>
                  </p>
                  <h2 className="h3 mt-3">
                    <Link
                      href={`/blog/${featured.id}`}
                      className="text-forest transition-colors duration-150 hover:text-growth"
                    >
                      {featured.title}
                    </Link>
                  </h2>
                  <p className="prose-sm-x mt-3 text-ink/65">{excerpt(featured.content)}</p>
                </div>
              </article>
            )}

            {rest.length > 0 && (
              <ul className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((post: BlogPost) => (
                  <li key={post.id} className="group border-t border-border pt-6">
                    {post.images?.[0] && (
                      <Link
                        href={`/blog/${post.id}`}
                        className="mb-5 block overflow-hidden"
                        tabIndex={-1}
                        aria-hidden
                      >
                        <img
                          src={post.images[0]}
                          alt=""
                          className="aspect-[16/10] w-full bg-surface object-cover transition-transform duration-500 ease-soft group-hover:scale-105"
                          loading="lazy"
                        />
                      </Link>
                    )}
                    <p className="meta flex items-center gap-2 text-ink/50">
                      <time dateTime={post.created_at}>{fmtDate(post.created_at)}</time>
                      <span aria-hidden>·</span>
                      <span className="tnum">{readingTime(post.content)} min read</span>
                    </p>
                    <h2 className="h4 mt-3">
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-forest transition-colors duration-150 hover:text-growth"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="prose-sm-x mt-2.5 text-ink/60">{excerpt(post.content, 120)}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
