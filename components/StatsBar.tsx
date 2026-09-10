'use client';

import { useEffect, useRef } from 'react';
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { LucideIcon, TrendingUp, Users, Award } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { EASE, staggerChild, staggerParent, VIEWPORT } from '@/lib/motion';

const STATS = [
  { value: 75, suffix: 'cr+', prefix: '₹', label: 'Assets Under Management', icon: TrendingUp },
  { value: 250, suffix: '+', prefix: '', label: 'Happy Clients', icon: Users },
  { value: 99, suffix: '%', prefix: '', label: 'Client Retention Rate', icon: Award },
] as const;

/** Counts once, driven by the section's own inView flag so all three run together. */
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

const StatCard = ({
  stat,
  inView,
}: {
  stat: (typeof STATS)[number];
  inView: boolean;
}) => {
  const Icon: LucideIcon = stat.icon;

  return (
    <motion.div
      variants={staggerChild}
      className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 ease-soft hover:-translate-y-1 hover:border-accent/50 hover:shadow-card-hover sm:block sm:p-7 lg:p-8"
    >
      {/* Row on mobile (a 230px-tall card per number wasted the screen), stack from sm up. */}
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent/20 sm:mb-7">
        <Icon className="size-5" strokeWidth={1.75} />
      </div>

      <div>
        <div className="heading-2 text-primary tabular-nums">
          {stat.prefix}
          <AnimatedValue value={stat.value} inView={inView} />
          <span className="text-accent">{stat.suffix}</span>
        </div>

        <p className="mt-1 body-sm text-muted-foreground sm:mt-2">{stat.label}</p>
      </div>
    </motion.div>
  );
};

const StatsBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="bg-background section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="By The Numbers"
          title={
            <>
              Trust, <span className="text-accent">Measured</span>
            </>
          }
          subtitle="Numbers that speak volumes about our commitment"
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
        >
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} inView={inView} />
          ))}
        </motion.div>

        <p className="mt-10 text-center label-sm text-muted-foreground">
          Figures as of Sep 2026 · Updated quarterly · Aggregated across distributed products
        </p>
      </div>
    </section>
  );
};

export default StatsBar;
