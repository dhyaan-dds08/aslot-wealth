import { TRUST_FIGURES, TRUST_FOOTNOTE } from '@/lib/site';

/**
 * Static by design. The brief's predecessor animated these from 0, which put
 * "0" in the HTML — bad for SEO, link previews and slow connections.
 */
const StatsBar = () => (
  <section className="section-y bg-surface">
    <div className="container-page">
      <div className="grid gap-y-10 md:grid-cols-12 md:gap-x-16">
        <div className="md:col-span-4">
          <p className="section-label">Trust, measured</p>
          <h2 className="h2 mt-4 text-forest">The numbers behind the relationship</h2>
        </div>

        <dl className="grid grid-cols-1 gap-y-8 sm:grid-cols-3 md:col-span-8 md:gap-x-8">
          {TRUST_FIGURES.map(({ value, label }) => (
            <div key={label} className="border-t border-forest/20 pt-5">
              <dt className="tnum font-serif text-[2.5rem] leading-none text-forest lg:text-[3rem]">
                {value}
              </dt>
              <dd className="meta mt-3 text-ink/60">{label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <p className="meta mt-12 text-ink/45">{TRUST_FOOTNOTE}</p>
    </div>
  </section>
);

export default StatsBar;
