'use client';

import { useEffect, useRef } from 'react';

/**
 * THE SIGNATURE SECTION.
 *
 * Each generation adds a capability without setting aside the last — clarity,
 * then protection, then growth. The bar beside each era shows every layer
 * earned so far, so the column literally compounds as you scroll.
 *
 * This is the only orchestrated motion on the site. It is progressive: the
 * markup renders fully visible, and JS opts in to animating it.
 */

type Era = {
  year: string;
  capability: string | null;
  body: string;
  /** How many capability layers exist by this point in the story. */
  layers: number;
};

const ERAS: Era[] = [
  {
    year: '1989',
    capability: 'Clarity',
    layers: 1,
    body:
      'Pragnesh Aslot starts a tax-advisory practice built on one principle: every financial decision should be rooted in clarity and compliance. Over time, client conversations widen from taxes to questions of protection and preservation.',
  },
  {
    year: '1991',
    capability: 'Protection',
    layers: 2,
    body:
      'Seema Aslot joins the firm and launches its first insurance-advisory desk, helping clients safeguard their earnings and assets.',
  },
  {
    year: 'Three decades',
    capability: null,
    layers: 2,
    body:
      "Precise tax guidance combined with prudent risk cover becomes the firm's hallmark, while clients increasingly seek broader capital-market opportunities.",
  },
  {
    year: '2023',
    capability: 'Growth',
    layers: 3,
    body:
      'Ishan Aslot brings data-driven research and global exposure, growing the business into a comprehensive wealth-management platform spanning listed equity, PMS, AIFs, and private-equity co-investments.',
  },
  {
    year: 'Today',
    capability: null,
    layers: 3,
    body:
      'Aslot Wealth Advisory blends seasoned leadership with next-generation strategy, delivering goal-aligned, long-term portfolios while upholding the integrity on which the firm was founded.',
  },
];

/**
 * A brightness ramp, not three arbitrary hues: each generation lights the
 * column further. Marigold is deliberately absent — the accent is reserved
 * for calls to action, and forest-on-forest would be invisible here anyway.
 */
const LAYER_TONES = ['bg-white/35', 'bg-white/65', 'bg-white'];
const LAYER_NAMES = ['Clarity', 'Protection', 'Growth'];

const JourneySection = () => {
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    // Honour reduced motion by simply never opting in.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const items = Array.from(list.querySelectorAll<HTMLElement>('[data-era]'));
    if (!items.length) return;

    // Opt in to the animated state, then reveal as each era scrolls in.
    list.dataset.anim = 'on';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.on = 'true';
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -20% 0px', threshold: 0.2 },
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-y bg-forest text-white">
      <div className="container-page">
        <p className="section-label text-white/55">Our journey</p>
        <h2 className="h2 mt-4 max-w-3xl">A legacy of clarity and long-term vision</h2>
        <p className="lede measure mt-6 text-white/65">
          Each generation added a capability without setting aside the last. What began as tax
          advice is now clarity, protection and growth, compounding together.
        </p>

        <ol ref={listRef} className="journey mt-16 md:mt-20">
          {ERAS.map((era, i) => (
            <li
              key={era.year}
              data-era={i}
              data-on="false"
              className="grid gap-x-8 gap-y-5 border-t border-white/15 py-9 md:grid-cols-12 md:py-11"
            >
              <div className="md:col-span-3">
                <p className="tnum font-serif text-2xl text-white md:text-[1.75rem]">
                  {era.year}
                </p>
                {era.capability && (
                  <p className="meta mt-2 text-white/70">+ {era.capability}</p>
                )}
              </div>

              {/* The compounding column: every layer earned so far. */}
              <div
                className="flex items-end gap-1.5 md:col-span-2"
                role="img"
                aria-label={`Capabilities by ${era.year}: ${LAYER_NAMES.slice(0, era.layers).join(', ')}`}
              >
                {LAYER_NAMES.map((name, li) => {
                  const active = li < era.layers;
                  return (
                    <span
                      key={name}
                      className={`era-layer h-12 w-6 origin-bottom md:h-14 md:w-7 ${active ? `is-active ${LAYER_TONES[li]}` : 'border border-white/20'
                        }`}
                    />
                  );
                })}
              </div>

              <p className="era-body prose-sm-x measure text-white/70 md:col-span-7">
                {era.body}
              </p>
            </li>
          ))}
        </ol>

        {/* The finished column, named. */}
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/15 pt-8">
          {LAYER_NAMES.map((name, i) => (
            <span key={name} className="flex items-center gap-2.5">
              <span className={`h-3 w-3 ${LAYER_TONES[i]}`} aria-hidden />
              <span className="meta text-white/70">{name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
