import Link from 'next/link';
import { RotateCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/motion/Reveal';

const STEPS = [
  {
    title: 'Discovery',
    body:
      'Deep-dive on goals, existing portfolio, risk tolerance, and what matters most to you.',
  },
  {
    title: 'Design',
    body: 'A holistic plan tailored to your objectives, with a clear asset allocation strategy.',
  },
  {
    title: 'Implementation',
    body: 'Open accounts, execute allocations, set up reporting.',
  },
  {
    title: 'Monitor & Refine',
    body: 'Quarterly reviews, tactical tilts, and annual goal realignment.',
    loop: true,
  },
];

const ProcessSection = () => (
  <section id="process" className="section-y bg-surface">
    <div className="container-page">
      <Reveal>
        <p className="section-label">How we work</p>
        <h2 className="h2 mt-4 max-w-xl text-forest">Four phases, then repeat</h2>
      </Reveal>

      <Reveal className="steps relative mt-16 block">
        {/* Connecting line draws across the row (down the column on mobile). */}
        <span
          aria-hidden
          className="steps-line absolute left-5 top-5 hidden h-px w-[calc(100%-2.5rem)] origin-left bg-forest/25 md:block"
        />
        <span
          aria-hidden
          className="steps-line absolute left-5 top-5 h-[calc(100%-2.5rem)] w-px origin-top bg-forest/25 md:hidden"
        />

        <ol className="grid grid-cols-1 gap-y-10 md:grid-cols-4 md:gap-x-8">
          {STEPS.map((step, i) => (
            <li key={step.title} className="step relative pl-16 md:pl-0">
              <span
                className="step-dot absolute left-0 top-0 flex size-10 items-center justify-center rounded-full border border-forest/30 bg-surface tnum meta text-forest transition-transform duration-150 md:relative md:mb-6"
                style={{ ['--i' as string]: i }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <h3 className="step-text h4 text-forest">
                {step.title}
                {step.loop && (
                  <RotateCw
                    className="step-loop ml-2 inline size-4 text-growth"
                    aria-label="ongoing"
                  />
                )}
              </h3>
              <p className="step-text prose-sm-x mt-2 text-ink/65">{step.body}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal className="mt-14 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="prose-sm-x text-ink/65">
          <span className="tnum font-medium text-forest">99% client retention</span> since
          inception.
        </p>
        <Button variant="cta" size="lg" asChild>
          <Link href="#contact">Start your journey</Link>
        </Button>
      </Reveal>
    </div>
  </section>
);

export default ProcessSection;
