import { createServerSupabaseClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ShareButton from '@/components/blog/ShareButton';
import ImageGallery from '@/components/blog/ImageGallery';
import ReadingProgress from '@/components/blog/ReadingProgress';
import BackToTop from '@/components/BackToTop';
import { DISCLAIMER_MF } from '@/lib/site';

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

const readingTime = (content: string) =>
  Math.max(1, Math.ceil(content.split(/\s+/).length / 200));

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const supabase = await createServerSupabaseClient(false);

  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .eq('active', true)
    .single();

  if (error || !post) notFound();

  const { data: related } = await supabase
    .from('posts')
    .select('*')
    .eq('active', true)
    .neq('id', id)
    .order('created_at', { ascending: false })
    .limit(3);

  const mins = readingTime(post.content);

  return (
    <>
      <ReadingProgress />
      <Navigation />

      <main id="main">
        <article className="section-y">
          <div className="container-page">
            <div className="mx-auto max-w-3xl">
              <Link
                href="/blog"
                className="meta inline-flex items-center gap-2 text-ink/55 transition-colors duration-150 hover:text-forest"
              >
                <ArrowLeft size={15} />
                All insights
              </Link>

              <p className="meta mt-8 flex items-center gap-2 text-ink/50">
                <time dateTime={post.created_at}>{fmtDate(post.created_at)}</time>
                <span aria-hidden>·</span>
                <span className="tnum">{mins} min read</span>
              </p>

              <h1 className="display mt-4 text-forest">{post.title}</h1>

              <div className="mt-8 border-b border-border pb-8">
                <ShareButton title={post.title} />
              </div>
            </div>
          </div>

          {post.images && post.images.length > 0 && (
            <div className="container-page mt-12">
              <img
                src={post.images[0]}
                alt={post.title}
                className="aspect-[21/9] w-full bg-surface object-cover"
                loading="eager"
              />
            </div>
          )}

          <div className="container-page mt-12">
            <div className="article mx-auto max-w-3xl whitespace-pre-wrap">{post.content}</div>

            {post.images && post.images.length > 1 && (
              <div className="mx-auto mt-16 max-w-3xl">
                <h2 className="h3 text-forest">Gallery</h2>
                <div className="mt-6">
                  <ImageGallery
                    images={post.images}
                    title={post.title}
                    thumbnailStartIndex={1}
                  />
                </div>
              </div>
            )}

            {/* COMPLIANCE BLOCK */}
            <div className="mx-auto mt-16 max-w-3xl border-t border-border pt-8">
              <p className="meta text-ink/55">{DISCLAIMER_MF}</p>
              <p className="meta mt-2 text-ink/55">
                Past performance does not guarantee future results. Market-linked debentures
                carry issuer credit risk; capital protection applies only at maturity and is
                subject to the issuer meeting its obligations.
              </p>
            </div>
          </div>
        </article>

        {related && related.length > 0 && (
          <section className="section-y bg-surface">
            <div className="container-page">
              <h2 className="h3 text-forest">Continue reading</h2>

              <ul className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r: BlogPost) => (
                  <li key={r.id} className="group border-t border-border pt-6">
                    {r.images && r.images.length > 0 && (
                      <div className="mb-5 overflow-hidden">
                        <img
                          src={r.images[0]}
                          alt=""
                          className="aspect-[16/10] w-full bg-canvas object-cover transition-transform duration-500 ease-soft group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <p className="meta flex items-center gap-2 text-ink/50">
                      <time dateTime={r.created_at}>{fmtDate(r.created_at)}</time>
                      <span aria-hidden>·</span>
                      <span className="tnum">{readingTime(r.content)} min read</span>
                    </p>
                    <h3 className="h4 mt-3">
                      <Link
                        href={`/blog/${r.id}`}
                        className="text-forest transition-colors duration-150 hover:text-growth"
                      >
                        {r.title}
                      </Link>
                    </h3>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
