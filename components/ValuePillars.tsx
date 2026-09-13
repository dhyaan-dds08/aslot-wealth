import Reveal from '@/components/motion/Reveal';

/** Verbatim from aslotwealth.com — the firm's four value pillars. */
const PILLARS = [
  {
    title: 'Goal-Aligned Planning',
    body:
      'Asset allocation begins with a clear understanding of your life and business objectives.',
  },
  {
    title: 'Long-Term Focus',
    body:
      'Emphasis on disciplined compounding, tax efficiency and staying invested through cycles.',
  },
  {
    title: 'Independent Access',
    body:
      'Curated list of third-party funds and strategies — no proprietary products to bias our view.',
  },
  {
    title: 'Disciplined Risk Management',
    body:
      'Ongoing monitoring, rebalancing, and transparent reporting keep portfolios on-track through market cycles.',
  },
];

/**
 * Titles in the display serif rather than Inter-semibold: at 18px sans they
 * read as form labels, which flattened the whole section. Serif at 24–32px
 * gives each pillar the weight of a statement.
 */
const ValuePillars = () => (
  <section id="pillars" className="section-y bg-canvas">
    <div className="container-page">
      <Reveal>
        <p className="section-label text-growth">Foundation of excellence</p>
        <h2 className="h2 mt-4 text-forest">Our value pillars</h2>
        <p className="lede measure mt-5 text-ink/65">
          Building wealth on principles that stand the test of time.
        </p>
      </Reveal>

      <dl className="mt-16 grid gap-x-14 gap-y-12 sm:grid-cols-2">
        {PILLARS.map((p, i) => (
          <Reveal key={p.title} as="div" delay={(i % 2) * 80}>
            <div className="border-t border-forest/25 pt-6">
              <dt className="h3 text-forest">{p.title}</dt>
              <dd className="mt-4 max-w-[38ch] text-[1.0625rem] leading-[1.7] text-ink/65">
                {p.body}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </div>
  </section>
);

export default ValuePillars;
