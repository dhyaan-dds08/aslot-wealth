'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { staggerChild, staggerParent, VIEWPORT } from '@/lib/motion';

const PILLARS = [
  {
    title: 'Goal-Aligned Planning',
    description:
      'Asset allocation begins with a clear understanding of your life and business objectives.',
  },
  {
    title: 'Long-Term Focus',
    description:
      'Emphasis on disciplined compounding, tax efficiency and staying invested through cycles.',
  },
  {
    title: 'Independent Access',
    description:
      'Curated list of third-party funds and strategies — no proprietary products to bias our view.',
  },
  {
    title: 'Disciplined Risk Management',
    description:
      'Ongoing monitoring, rebalancing, and transparent reporting keep portfolios on-track through market cycles.',
  },
];

/**
 * A numbered index, not a card grid. Hairline rules carry the structure so the
 * section has rhythm without four boxes floating on drop shadows.
 */
const ValuePillars = () => (
  <section className="section-y bg-background">
    <div className="container-page">
      <SectionHeading
        eyebrow="Foundation of Excellence"
        title="Principles that hold through every market cycle"
      />

      <motion.ol
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="border-t border-border"
      >
        {PILLARS.map(({ title, description }, i) => (
          <motion.li
            key={title}
            variants={staggerChild}
            className="group grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-3 border-b border-border py-8 md:py-10 transition-colors duration-300 ease-soft hover:bg-muted/40"
          >
            <span className="caption-track md:col-span-2 pt-1 text-accent">
              {String(i + 1).padStart(2, '0')}
            </span>

            <h3 className="heading-4 md:col-span-4 text-primary">{title}</h3>

            <p className="body-md md:col-span-6 text-muted-foreground">{description}</p>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  </section>
);

export default ValuePillars;
