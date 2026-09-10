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
      'Curated list of third-party funds and strategies, with no proprietary products to bias our view.',
  },
  {
    title: 'Disciplined Risk Management',
    body:
      'Ongoing monitoring, rebalancing, and transparent reporting keep portfolios on track through market cycles.',
  },
];

/**
 * Deliberately unnumbered. Numbers are reserved for the process and the
 * journey, where sequence actually means something.
 */
const ValuePillars = () => (
  <section className="section-y bg-canvas">
    <div className="container-page">
      <div className="grid gap-y-10 md:grid-cols-12 md:gap-x-16">
        <div className="md:col-span-4">
          <p className="section-label">Our value pillars</p>
          <h2 className="h2 mt-4 text-forest">
            Building wealth on principles that stand the test of time
          </h2>
        </div>

        <dl className="md:col-span-8">
          {PILLARS.map(({ title, body }) => (
            <div
              key={title}
              className="grid gap-x-8 gap-y-2 border-t border-border py-7 sm:grid-cols-5"
            >
              <dt className="h4 text-forest sm:col-span-2">{title}</dt>
              <dd className="prose-sm-x text-ink/65 sm:col-span-3">{body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default ValuePillars;
