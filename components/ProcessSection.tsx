import Link from 'next/link';
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
    body:
      'Propose holistic plan tailored to your objectives with clear asset allocation strategy.',
  },
  {
    title: 'Implementation',
    body:
      'Open accounts, execute allocations, set up reporting — making the plan a reality.',
  },
  {
    title: 'Monitor & Refine',
    body:
      'Quarterly reviews, tactical tilts, annual goal realignment to keep you on track.',
  },
];

/**
 * The circled numbers and connector line were fussy and read as a signup
 * wizard. A phase is better expressed as a large serif numeral over a rule —
 * the sequence is legible from the numbers alone, so the plumbing can go.
 */
const ProcessSection = () => (
  <section id="process" className="section-y bg-surface">
    <div className="container-page">
      <div className="grid gap-x-16 gap-y-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="section-label">How we work</p>
          <h2 className="h2 mt-4 text-forest">A Proven Process</h2>
        </Reveal>
        <Reveal className="lg:col-span-6 lg:col-start-7 lg:pt-4">
          <p className="lede measure text-ink/65">
            Four strategic phases designed to transform your financial future.
          </p>
        </Reveal>
      </div>

      <ol className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <Reveal key={step.title} as="li" delay={i * 80} className="block">
            <p className="figure font-serif text-[3rem] leading-none text-growth/40">
              {String(i + 1).padStart(2, '0')}
            </p>
            <div className="mt-5 border-t border-forest/25 pt-5">
              <h3 className="h3 text-forest">{step.title}</h3>
              <p className="prose-sm-x mt-3 text-ink/65">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-16 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="lede text-ink/70">
          <span className="tnum font-medium text-forest">99% client retention</span> since
          inception.
        </p>
        <Button variant="cta" size="lg" asChild>
          <Link href="#contact">Schedule Discovery Call</Link>
        </Button>
      </Reveal>
    </div>
  </section>
);

export default ProcessSection;
