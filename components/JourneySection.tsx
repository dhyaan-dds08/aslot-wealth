'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useReducedMotion } from 'framer-motion';
import { EASE_OUT_SOFT } from '@/lib/motion';

/**
 * SIGNATURE MOMENT 2 — the legacy.
 *
 * Three generations, each adding a capability without replacing the last.
 * The timeline draws in step with scroll, the year rolls over odometer-style,
 * and the capability layers stack like foundations. Native scrolling only:
 * nothing is pinned by JS, just CSS `position: sticky`.
 */

const MILESTONES = [
  {
    year: '1989',
    layers: 1,
    body: 'Pragnesh Aslot starts a tax-advisory practice rooted in clarity and compliance.',
  },
  {
    year: '1991',
    layers: 2,
    body: "Seema Aslot joins and launches the firm's insurance-advisory desk.",
  },
  {
    year: '2023',
    layers: 3,
    body:
      'Ishan Aslot brings data-driven research and global exposure, growing the firm into a full wealth-management platform spanning listed equity, PMS, AIFs, and private-equity co-investments.',
  },
  {
    year: 'Today',
    layers: 3,
    body:
      'Seasoned leadership combined with next-generation strategy, delivering goal-aligned, long-term portfolios.',
  },
];

const LAYERS = [
  { name: 'Clarity', note: 'Tax', tone: 'bg-white/30' },
  { name: 'Protection', note: 'Insurance', tone: 'bg-white/60' },
  { name: 'Growth', note: 'Wealth management', tone: 'bg-white' },
];

const JourneySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLOListElement>(null);
  const reduced = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(reduced ? MILESTONES.length - 1 : 0);
  const [armed, setArmed] = useState(false);

  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ['start 0.7', 'end 0.85'],
  });

  useEffect(() => {
    if (reduced) return;

    // Arm after paint: the markup ships fully visible, so a failed or slow
    // hydration leaves the whole legacy readable rather than blank.
    const frame = requestAnimationFrame(() => setArmed(true));

    const items = railRef.current?.querySelectorAll<HTMLElement>('[data-ms]');
    if (!items?.length) return () => cancelAnimationFrame(frame);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          setActiveIndex((prev) => Math.max(prev, Number((e.target as HTMLElement).dataset.ms)));
        });
      },
      { rootMargin: '0px 0px -45% 0px', threshold: 0.1 },
    );

    items.forEach((el) => observer.observe(el));
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [reduced]);

  const current = MILESTONES[activeIndex];

  return (
    <section id="about" ref={sectionRef} className="section-y bg-forest text-white">
      <div className="container-page">
        <p className="section-label text-white/55">Our legacy</p>
        <h2 className="h2 mt-4 max-w-2xl">Three decades, three generations</h2>

        <div className="mt-16 grid gap-x-12 lg:grid-cols-12 lg:mt-20">
          {/* Sticky year — odometer roll on change. */}
          <div className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-32">
              <div className="h-[1.1em] overflow-hidden font-serif text-[3.5rem] leading-[1.1] tabular-nums">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={current.year}
                    className="flex"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.3, ease: EASE_OUT_SOFT }}
                  >
                    {current.year.split('').map((ch, i) => (
                      <motion.span
                        key={`${current.year}-${i}`}
                        initial={{ y: '100%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.04, ease: EASE_OUT_SOFT }}
                      >
                        {ch}
                      </motion.span>
                    ))}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-5">
            <ol ref={railRef} className="relative pl-8">
              {/* Track + scroll-linked draw */}
              <span aria-hidden className="absolute left-[3px] top-2 h-full w-px bg-white/15" />
              <motion.span
                aria-hidden
                className="absolute left-[3px] top-2 h-full w-px origin-top bg-white/70"
                style={{ scaleY: reduced ? 1 : scrollYProgress }}
              />

              {MILESTONES.map((m, i) => {
                const on = i <= activeIndex;
                return (
                  <li key={m.year} data-ms={i} className="relative pb-14 last:pb-0">
                    <span
                      aria-hidden
                      className={`absolute -left-8 top-1.5 size-[7px] rounded-full transition-all duration-250 ease-soft ${on ? 'scale-100 bg-white' : 'scale-0 bg-white/40'
                        }`}
                    />
                    <p className="font-serif text-2xl lg:hidden">{m.year}</p>
                    <p
                      className="prose-sm-x measure mt-2 text-white/70 lg:mt-0"
                      style={
                        armed
                          ? {
                            opacity: on ? 1 : 0,
                            transform: on ? 'none' : 'translateY(24px)',
                            transition:
                              'opacity 500ms cubic-bezier(0.22,1,0.36,1), transform 500ms cubic-bezier(0.22,1,0.36,1)',
                          }
                          : undefined
                      }
                    >
                      {m.body}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Sticky layers — capability compounds, it does not replace. */}
          <div className="mt-14 lg:col-span-4 lg:mt-0">
            <div className="sticky top-32">
              <div className="flex flex-col-reverse gap-2">
                {LAYERS.map((l, i) => {
                  const on = i < current.layers;
                  return (
                    <div
                      key={l.name}
                      className="flex items-center gap-4"
                      style={
                        armed
                          ? {
                            opacity: on ? 1 : 0.25,
                            transform: on ? 'none' : 'translateY(20px)',
                            transition:
                              'opacity 500ms cubic-bezier(0.22,1,0.36,1), transform 500ms cubic-bezier(0.22,1,0.36,1)',
                          }
                          : undefined
                      }
                    >
                      <span
                        className={`h-11 w-24 shrink-0 ${on ? l.tone : 'border border-white/25'}`}
                        aria-hidden
                      />
                      <div>
                        <p className="text-[0.9375rem] text-white">{l.name}</p>
                        <p className="meta text-white/50">{l.note}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="meta mt-6 border-t border-white/15 pt-5 text-white/50">
                Each generation added a capability. None replaced the last.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
