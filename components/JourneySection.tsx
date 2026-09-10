'use client';

import { useEffect, useRef } from 'react';

/**
 * Our Journey — the narrative is verbatim from aslotwealth.com, broken into
 * its four natural beats so the timeline is structure, not invention.
 *
 * Motion is one IntersectionObserver driving per-segment CSS: the rail fills
 * downward as each era arrives. No scroll math, no Framer, no layout thrash.
 */

const ERAS = [
  {
    year: '1989',
    body:
      'Pragnesh Aslot started a tax-advisory practice dedicated to one principle: every financial decision should be rooted in clarity and compliance. Over time, client conversations naturally widened — from taxes to questions of protection and preservation.',
  },
  {
    year: '1991',
    body:
      'Two years later, Seema Aslot joined the firm, launching the first insurance-advisory desk to help clients safeguard their earnings and assets.',
  },
  {
    year: 'Three decades',
    body:
      "That combination of precise tax guidance and prudent risk cover became the firm's hallmark. Yet portfolio needs evolved as clients sought access to broader capital-market opportunities.",
  },
  {
    year: '2023',
    body:
      'Ishan Aslot brought data-driven research and global exposure, steering the business into a comprehensive wealth-management platform spanning listed equity, PMS, AIFs, and private-equity co-investments.',
  },
];

const TODAY =
  'Today, Aslot Wealth Advisory blends seasoned leadership with next-generation strategy — delivering goal-aligned, long-term portfolios while upholding the integrity on which the firm was founded.';

const JourneySection = () => {
  const railRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Ships visible; JS opts in to animating.
    rail.dataset.anim = 'on';

    const items = Array.from(rail.querySelectorAll<HTMLElement>('[data-era]'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          (e.target as HTMLElement).dataset.on = 'true';
          observer.unobserve(e.target);
        });
      },
      { rootMargin: '0px 0px -20% 0px', threshold: 0.15 },
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-y bg-forest text-white">
      <div className="container-page">
        <p className="section-label text-white/85">Our journey</p>
        <h2 className="h2 mt-4 max-w-2xl">Legacy of clarity &amp; long-term vision</h2>

        <div className="mt-14 grid gap-x-16 lg:mt-20 lg:grid-cols-12">
          <ol ref={railRef} className="legacy lg:col-span-8">
            {ERAS.map((era, i) => (
              <li
                key={era.year}
                data-era={i}
                data-on="false"
                className="era relative pb-12 pl-10 last:pb-0"
              >
                <span aria-hidden className="absolute left-[3px] top-3 h-full w-px bg-white/15" />
                <span
                  aria-hidden
                  className="era-fill absolute left-[3px] top-3 h-full w-px origin-top bg-white/60"
                />
                <span
                  aria-hidden
                  className="era-dot absolute left-0 top-2 size-[7px] rounded-full bg-white"
                />

                <div className="era-body">
                  <p className="figure font-serif text-[1.75rem] leading-none">{era.year}</p>
                  <p className="prose-sm-x measure mt-3 text-white/70">{era.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <aside className="mt-12 lg:col-span-4 lg:mt-0">
            <div className="border-t border-white/20 pt-6 lg:sticky lg:top-28">
              <p className="meta text-white/70">Today</p>
              <p className="lede mt-4 text-white/85">{TODAY}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
