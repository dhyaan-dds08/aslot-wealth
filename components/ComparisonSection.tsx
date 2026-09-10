import Reveal from '@/components/motion/Reveal';

const ROWS = [
  {
    aslot: 'Curated third-party funds and strategies, with no proprietary products to bias our view',
    typical: 'Recommendations that can be shaped by in-house products',
  },
  {
    aslot: 'Portfolios structured with tax expertise built since 1989',
    typical: 'Investments and taxes handled separately',
  },
  {
    aslot: 'Quarterly reviews and annual goal realignment',
    typical: 'Plans set once and rarely revisited',
  },
  {
    aslot: 'One family relationship across decades, with 99% client retention',
    typical: 'Frequent changes in who looks after your money',
  },
];

const Check = () => (
  <svg
    viewBox="0 0 20 20"
    className="check-draw mt-1 size-4 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M4 10.5l4 4 8-9" />
  </svg>
);

/** Factual contrast, never naming another firm. */
const ComparisonSection = () => (
  <section id="why" className="section-y bg-canvas">
    <div className="container-page">
      <Reveal>
        <p className="section-label">Why Aslot</p>
        <h2 className="h2 mt-4 max-w-2xl text-forest">How we do things differently</h2>
      </Reveal>

      {/* Column headers, desktop only — mobile repeats them per card. */}
      <div className="mt-14 hidden grid-cols-12 gap-x-8 border-b border-border pb-4 md:grid">
        <div className="col-span-1" />
        <p className="col-span-5 meta font-medium text-forest">The Aslot way</p>
        <div className="col-span-1" />
        <p className="col-span-5 meta font-medium text-ink/45">The typical approach</p>
      </div>

      <ol>
        {ROWS.map((row, i) => (
          <Reveal key={row.aslot} as="li" className="cmp-row block">
            <div className="grid grid-cols-1 gap-x-8 border-b border-border py-8 md:grid-cols-12 md:py-9">
              <p className="tnum meta text-growth md:col-span-1">
                {String(i + 1).padStart(2, '0')}
              </p>

              <div className="cmp-aslot mt-3 flex gap-3 md:col-span-5 md:mt-0">
                <span className="text-growth">
                  <Check />
                </span>
                <p className="prose-sm-x text-ink/85">{row.aslot}</p>
              </div>

              {/* Divider draws top-to-bottom, with "vs" at its midpoint. */}
              <div className="relative hidden md:col-span-1 md:flex md:justify-center">
                <span className="cmp-rule absolute inset-y-0 w-px origin-top bg-border" />
                <span className="cmp-vs relative self-center bg-canvas px-2 meta text-ink/35">
                  vs
                </span>
              </div>

              <p className="cmp-typical mt-4 prose-sm-x text-ink/45 md:col-span-5 md:mt-0">
                <span className="meta mr-2 text-ink/35 md:hidden">Typically:</span>
                {row.typical}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>

      {/* COMPLIANCE BLOCK — editable, always visible. */}
      <Reveal>
        <p className="meta measure mt-8 text-ink/50">
          Comparisons describe general industry practice and are not directed at any specific
          firm. Mutual fund investments are subject to market risks.
        </p>
      </Reveal>
    </div>
  </section>
);

export default ComparisonSection;
