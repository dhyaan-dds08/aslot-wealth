'use client';

import { Search, Lightbulb, Rocket, BarChart3, ArrowRight, type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import { revealOnScroll, staggerChild, staggerParent, VIEWPORT } from '@/lib/motion';

const STEPS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Search,
    title: 'Discovery',
    description:
      'Deep-dive on goals, existing portfolio, risk tolerance, and what matters most to you.',
  },
  {
    icon: Lightbulb,
    title: 'Design',
    description:
      'Propose holistic plan tailored to your objectives with clear asset allocation strategy.',
  },
  {
    icon: Rocket,
    title: 'Implementation',
    description:
      'Open accounts, execute allocations, set up reporting — making the plan a reality.',
  },
  {
    icon: BarChart3,
    title: 'Monitor & Refine',
    description:
      'Quarterly reviews, tactical tilts, annual goal realignment to keep you on track.',
  },
];

const ProcessStep = ({
  index,
  icon: Icon,
  title,
  description,
}: {
  index: number;
  icon: LucideIcon;
  title: string;
  description: string;
}) => (
  <motion.article
    variants={staggerChild}
    className="group relative h-full rounded-2xl border border-border bg-card p-7 md:p-8 shadow-card transition-all duration-300 ease-soft hover:-translate-y-1 hover:border-accent/50 hover:shadow-card-hover"
  >
    <div className="flex items-start gap-5">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent/20">
        <Icon size={22} strokeWidth={1.75} />
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-3">
          <span className="label-sm tabular-nums text-accent/70">
            STEP {String(index + 1).padStart(2, '0')}
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <h3 className="heading-4 mt-3 text-primary transition-colors duration-300 group-hover:text-accent">
          {title}
        </h3>

        <p className="mt-2 body-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  </motion.article>
);

const ProcessSection = () => (
  <section id="process" className="relative section-y bg-background overflow-hidden">
    <div
      aria-hidden
      className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-accent/5 to-transparent"
    />

    <div className="container-page relative z-10">
      <SectionHeading
        eyebrow="How We Work"
        title={
          <>
            A Proven <span className="text-accent">Process</span>
          </>
        }
        subtitle="Four strategic phases designed to transform your financial future"
      />

      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
      >
        {STEPS.map((step, index) => (
          <ProcessStep key={step.title} index={index} {...step} />
        ))}
      </motion.div>

      <motion.div {...revealOnScroll} className="flex flex-col items-center gap-8 mt-16">
        <div className="inline-flex items-center gap-3 rounded-full border border-accent/25 bg-accent/5 px-6 py-3">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          <span className="label-md text-primary">99% client retention since inception</span>
        </div>

        <Button
          variant="accent"
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
