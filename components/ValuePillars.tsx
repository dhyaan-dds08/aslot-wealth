import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/motion/Reveal';

const SERVICES = [
  {
    id: 'review',
    name: 'Review your existing portfolio',
    points: [
      'Check risk, overlap and tax efficiency',
      'Map your cash flows to your goals',
      'Get a clear plan in a one-on-one call',
    ],
  },
  {
    id: 'goals',
    name: 'Goal-based investing',
    points: [
      'Mutual fund SIPs for long-term goals',
      'SWPs for predictable income',
      'Rebalancing through market cycles',
    ],
  },
  {
    id: 'beyond',
    name: 'Beyond mutual funds',
    points: [
      'PMS and AIFs, screened and explained',
      'NCDs and market-linked debentures',
      'Private equity co-investments',
    ],
  },
  {
    id: 'protection',
    name: 'Protection',
    points: ['Insurance advisory to safeguard your earnings and assets, since 1991'],
  },
];

const Tick = () => (
  <svg
    viewBox="0 0 20 20"
    className="mt-[0.4rem] size-3.5 shrink-0 text-growth"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M4 10.5l4 4 8-9" />
  </svg>
);

const ValuePillars = () => (
  <section id="services" className="section-y bg-canvas">
    <div className="container-page">
      <Reveal>
        <p className="section-label">How we can help</p>
        <h2 className="h2 mt-4 max-w-2xl text-forest">
          Four ways families work with us
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2">
        {SERVICES.map((s, i) => (
          <Reveal key={s.id} as="div" delay={(i % 2) * 80} className="block">
            <article id={s.id} className="flex h-full flex-col border-t border-border pt-6">
              <h3 className="h4 text-forest">{s.name}</h3>

              <ul className="mt-5 flex-1 space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <Tick />
                    <span className="prose-sm-x text-ink/70">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <Button variant="outline" asChild>
                  <Link href="#contact">Talk to us about this</Link>
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* COMPLIANCE BLOCK */}
      <Reveal>
        <p className="meta measure mt-12 text-ink/50">
          For illustrative purposes only. All investments are subject to market risks. Market-linked
          debentures carry issuer credit risk.
        </p>
      </Reveal>
    </div>
  </section>
);

export default ValuePillars;
