'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import { revealOnScroll, staggerChild, staggerParent, VIEWPORT } from '@/lib/motion';

const STEPS = [
  {
    title: 'Discovery',
    description:
      'Deep-dive on goals, existing portfolio, risk tolerance, and what matters most to you.',
  },
  {
    title: 'Design',
    description:
      'Propose holistic plan tailored to your objectives with clear asset allocation strategy.',
  },
  {
    title: 'Implementation',
    description:
      'Open accounts, execute allocations, set up reporting — making the plan a reality.',
  },
  {
    title: 'Monitor & Refine',
    description:
      'Quarterly reviews, tactical tilts, annual goal realignment to keep you on track.',
  },
];

const ProcessSection = () => (
  <section id="process" className="section-y bg-muted/40">
    <div className="container-page">
      <SectionHeading
        eyebrow="How We Work"
        title="A proven process"
        subtitle="Four phases that take a conversation through to a portfolio that stays aligned."
      />

      {/* Shared hairline grid — one border set, not four floating cards. */}
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border"
      >
        {STEPS.map(({ title, description }, i) => (
          <motion.article
            key={title}
            variants={staggerChild}
            className="group border-b border-r border-border bg-background p-8 lg:p-10 transition-colors duration-300 ease-soft hover:bg-primary"
          >
            <span className="caption-track text-accent">
              {String(i + 1).padStart(2, '0')}
            </span>

            <h3 className="heading-4 mt-8 text-primary transition-colors duration-300 group-hover:text-white">
              {title}
            </h3>

            <p className="body-sm mt-3 text-muted-foreground transition-colors duration-300 group-hover:text-white/70">
              {description}
            </p>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        {...revealOnScroll}
        className="mt-14 flex flex-col sm:flex-row sm:items-center gap-6 sm:justify-between"
      >
        <p className="body-sm text-muted-foreground">
          <span className="text-primary">99% client retention</span> since inception.
        </p>

        <Button
          variant="outline"
          size="lg"
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Start Your Journey
          <ArrowRight className="transition-transform duration-300 ease-soft group-hover/button:translate-x-1" />
        </Button>
      </motion.div>
    </div>
  </section>
);

export default ProcessSection;
