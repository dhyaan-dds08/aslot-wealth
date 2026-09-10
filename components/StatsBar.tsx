'use client';

import { useEffect, useRef } from 'react';
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { EASE, staggerChild, staggerParent, VIEWPORT } from '@/lib/motion';

const STATS = [
  { value: 75, prefix: '₹', suffix: 'cr+', label: 'Assets Under Management' },
  { value: 250, prefix: '', suffix: '+', label: 'Families Advised' },
  { value: 99, prefix: '', suffix: '%', label: 'Client Retention Rate' },
  { value: 35, prefix: '', suffix: '+', label: 'Years of Practice' },
] as const;

/** Counts once, driven by the section's inView flag so all four run together. */
const AnimatedValue = ({ value, inView }: { value: number; inView: boolean }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 1.6, ease: EASE });
    return () => controls.stop();
  }, [inView, value, count]);

  return <motion.span>{rounded}</motion.span>;
};

/**
 * No cards, no icons, no shadows — the numerals carry it. Boxing each stat in
 * a rounded card was what made this read as a dashboard instead of a practice.
 */
const StatsBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="bg-background section-y">
      <div className="container-page">
        <motion.dl
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14 border-t border-border pt-14"
        >
          {STATS.map((stat) => (
            <motion.div key={stat.label} variants={staggerChild}>
              <dt className="stat-number text-primary">
                {stat.prefix}
                <AnimatedValue value={stat.value} inView={inView} />
                <span className="text-accent">{stat.suffix}</span>
              </dt>
              <dd className="caption-track mt-4 text-muted-foreground max-w-[11rem]">
                {stat.label}
              </dd>
            </motion.div>
          ))}
        </motion.dl>

        <p className="mt-16 body-sm text-muted-foreground/70">
          Figures as of Sep 2026 · Updated quarterly · Aggregated across distributed products
        </p>
      </div>
    </section>
  );
};

export default StatsBar;
