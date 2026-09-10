import Counter from '@/components/Counter';
import Reveal from '@/components/motion/Reveal';
import { TRUST_FOOTNOTE } from '@/lib/site';

const FIGURES = [
  { value: 75, prefix: '₹', suffix: ' crore+', a11y: '₹75 crore or more', label: 'Assets Under Management' },
  { value: 250, prefix: '', suffix: '+', a11y: '250 or more', label: 'Happy Clients' },
  { value: 99, prefix: '', suffix: '%', a11y: '99 percent', label: 'Client Retention Rate' },
];

/**
 * Heading sits above the figures rather than beside them: in a 4/8 split each
 * figure only had ~230px and "₹75 crore+" broke onto two lines.
 *
 * Real values are in the HTML — Counter only animates once JS is ready.
 */
const StatsBar = () => (
  <section id="trust" className="section-y bg-surface">
    <div className="container-page">
      <Reveal>
        <p className="section-label">Trust, Measured</p>
        <h2 className="h2 mt-4 max-w-2xl text-forest">
          Numbers that speak volumes about our commitment
        </h2>
      </Reveal>

      <Reveal stagger className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
        {FIGURES.map((f) => (
          <div key={f.label} className="border-t border-forest/20 pt-6">
            <p className="figure whitespace-nowrap font-serif text-[2.75rem] leading-none text-forest lg:text-[3.25rem]">
              <Counter
                value={f.value}
                prefix={f.prefix}
                suffix={f.suffix}
                label={f.a11y}
              />
            </p>
            <p className="meta mt-3 text-ink/55">{f.label}</p>
          </div>
        ))}
      </Reveal>

      <p className="meta mt-12 text-ink/40">{TRUST_FOOTNOTE}</p>
    </div>
  </section>
);

export default StatsBar;
