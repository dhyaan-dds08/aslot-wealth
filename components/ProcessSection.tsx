import Link from 'next/link';
import { Button } from '@/components/ui/button';

const STEPS = [
  {
    title: 'Discovery',
    body:
      'Deep-dive on goals, existing portfolio, risk tolerance, and what matters most to you.',
  },
  {
    title: 'Design',
    body:
      'A holistic plan tailored to your objectives, with a clear asset allocation strategy.',
  },
  {
    title: 'Implementation',
    body:
      'Open accounts, execute allocations, set up reporting, making the plan a reality.',
  },
  {
    title: 'Monitor & Refine',
    body:
      'Quarterly reviews, tactical tilts, and annual goal realignment to keep you on track.',
  },
];

/** Numbered because this is a genuine sequence — one of only two on the site. */
const ProcessSection = () => (
  <section id="process" className="section-y bg-surface">
    <div className="container-page">
      <p className="section-label">How we work</p>
      <h2 className="h2 mt-4 max-w-2xl text-forest">A proven process</h2>
      <p className="lede measure mt-5 text-ink/65">
        Four phases designed to transform your financial future.
      </p>

      <ol className="mt-14 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <li key={step.title} className="border-t-2 border-forest pt-5 pb-8">
            <span className="tnum font-serif text-[1.75rem] leading-none text-growth">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="h4 mt-4 text-forest">{step.title}</h3>
            <p className="prose-sm-x mt-2 text-ink/65">{step.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-6 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="prose-sm-x text-ink/65">
          <span className="tnum font-medium text-forest">99% client retention</span> since
          inception.
        </p>
        <Button variant="cta" size="lg" asChild>
          <Link href="#contact">Start Your Journey</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default ProcessSection;
