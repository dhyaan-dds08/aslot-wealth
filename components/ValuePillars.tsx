'use client';

import { Layers, Shield, Target, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { staggerChild, staggerParent, VIEWPORT } from '@/lib/motion';

const PILLARS = [
  {
    icon: Target,
    title: 'Goal-Aligned Planning',
    description:
      'Asset allocation begins with a clear understanding of your life and business objectives.',
  },
  {
    icon: TrendingUp,
    title: 'Long-Term Focus',
    description:
      'Emphasis on disciplined compounding, tax efficiency and staying invested through cycles.',
  },
  {
    icon: Layers,
    title: 'Independent Access',
    description:
      'Curated list of third-party funds and strategies — no proprietary products to bias our view.',
  },
  {
    icon: Shield,
    title: 'Disciplined Risk Management',
    description:
      'Ongoing monitoring, rebalancing, and transparent reporting keep portfolios on-track through market cycles.',
  },
];

/**
 * Light section on purpose: this used to be dark green immediately above the
 * dark green About section, so the two read as one undifferentiated void.
 */
const ValuePillars = () => (
  <section className="relative section-y bg-muted/40">
    <div className="container-page">
      <SectionHeading
        eyebrow="Foundation of Excellence"
        title={
          <>
            Our <span className="text-accent">Value Pillars</span>
          </>
        }
        subtitle="Building wealth on principles that stand the test of time"
      />

      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
      >
        {PILLARS.map(({ icon: Icon, title, description }) => (
          <motion.article
            key={title}
            variants={staggerChild}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 ease-soft hover:-translate-y-1 hover:border-accent/50 hover:shadow-card-hover"
          >
            {/* Accent rail runs down the left edge on hover. */}
            <span className="absolute left-0 top-7 h-8 w-[3px] rounded-r bg-transparent transition-all duration-300 ease-soft group-hover:h-16 group-hover:bg-accent" />

            <div className="flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent/20">
              <Icon size={22} strokeWidth={1.75} />
            </div>

            <h3 className="heading-4 mt-6 text-primary transition-colors duration-300 group-hover:text-accent">
              {title}
            </h3>

            <p className="mt-3 body-sm text-muted-foreground">{description}</p>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ValuePillars;
