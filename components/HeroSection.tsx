import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TRUST_FIGURES, WA_DEFAULT } from '@/lib/site';

/**
 * Server component on purpose — headline, CTAs and figures are all in the
 * initial HTML. Nothing here waits on JavaScript.
 */
const HeroSection = () => (
  <section id="home" className="bg-canvas pt-[4.5rem]">
    <div className="container-page">
      <div className="grid gap-y-12 py-14 md:py-20 lg:grid-cols-12 lg:gap-x-16 lg:py-28">
        <div className="lg:col-span-7">
          <p className="section-label">A family practice in Surat since 1989</p>

          <h1 className="display mt-5 text-forest">
            Personalised, Purpose-Driven Portfolios Built for the Long&nbsp;Run
          </h1>

          <p className="lede measure mt-7 text-ink/70">
            We design investment roadmaps that stay relevant throughout the decades — funding
            milestones, preserving wealth, and managing risk.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="cta" size="lg" asChild>
              <Link href="#contact">Schedule Discovery Call</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer">
                <MessageCircle />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Figures sit beside the promise, never above it. */}
        <div className="lg:col-span-5 lg:pt-3">
          <dl className="grid grid-cols-3 gap-x-6 border-t border-border pt-7 lg:grid-cols-1 lg:gap-y-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            {TRUST_FIGURES.map(({ value, label }) => (
              <div key={label}>
                <dt className="tnum font-serif text-[1.75rem] leading-none text-forest lg:text-[2.25rem]">
                  {value}
                </dt>
                <dd className="meta mt-2 text-ink/55">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
