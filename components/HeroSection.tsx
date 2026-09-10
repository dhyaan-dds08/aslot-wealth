import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Counter from '@/components/Counter';
import { WA_DEFAULT, TRUST_FOOTNOTE } from '@/lib/site';
import PragneshImage from '@/assets/teams/Pragnesh Aslot.jpg';
import SeemaImage from '@/assets/teams/Seema Aslot.jpg';
import IshanImage from '@/assets/teams/Ishan Aslot.jpg';

/* Headline is split into lines so each can slide up from behind its own mask. */
const HEADLINE = ['Personalised, purpose-driven', 'portfolios built for', 'the long run'];

/* TODO(client): replace this composite with a single warm photograph of the
   family or the Majura Gate office — the brief calls for one and none exists. */
const PHOTOS = [
  { src: PragneshImage.src, alt: 'Pragnesh Aslot, Founder', span: 'row-span-2' },
  { src: SeemaImage.src, alt: 'Seema Aslot, Insurance Advisory', span: '' },
  { src: IshanImage.src, alt: 'Ishan Aslot, Wealth Management & Research', span: '' },
];

const HeroSection = () => (
  <section id="home" className="bg-canvas">
    <div className="container-page">
      <div className="grid items-center gap-y-12 pt-12 md:pt-16 lg:grid-cols-12 lg:gap-x-16 lg:pt-24">
        <div className="lg:col-span-7">
          <p className="section-label hero-el" style={{ ['--d' as string]: '100ms' }}>
            A family practice in Surat since 1989
          </p>

          <h1 className="display mt-5 text-forest">
            {HEADLINE.map((line, i) => (
              /* overflow-hidden mask + inner span that slides up from 100% */
              <span key={line} className="hero-line">
                <span className="hero-line-in" style={{ ['--d' as string]: `${100 + i * 120}ms` }}>
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p className="lede measure mt-7 text-ink/70 hero-el" style={{ ['--d' as string]: '500ms' }}>
            We design investment roadmaps that stay relevant throughout the decades — funding
            milestones, preserving wealth, and managing risk.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <span className="hero-el" style={{ ['--d' as string]: '700ms' }}>
              <Button variant="cta" size="lg" className="w-full sm:w-auto" asChild>
                <Link href="#contact">Book a portfolio review</Link>
              </Button>
            </span>
            <span className="hero-el" style={{ ['--d' as string]: '780ms' }}>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="transition-transform duration-150 group-hover/btn:-rotate-[8deg]" />
                  Chat on WhatsApp
                </a>
              </Button>
            </span>
          </div>
        </div>

        {/* Composite portrait wall — warmth instead of 3D product renders. */}
        <div className="lg:col-span-5">
          <div className="hero-photo grid grid-cols-2 grid-rows-2 gap-2">
            {PHOTOS.map((p) => (
              <img
                key={p.alt}
                src={p.src}
                alt={p.alt}
                className={`h-full w-full bg-surface object-cover ${p.span}`}
                width={640}
                height={800}
                loading="eager"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Trust strip — full width, real values in the HTML. */}
      <div className="mt-14 md:mt-20">
        <span className="hero-rule block h-px w-full origin-left bg-border" />

        <dl className="grid grid-cols-2 gap-x-8 gap-y-8 pt-8 sm:grid-cols-4">
          <div>
            <dt className="font-serif text-[2rem] leading-none text-forest">
              <Counter value={75} prefix="₹" suffix=" crore+" label="₹75 crore or more" />
            </dt>
            <dd className="meta mt-2 text-ink/55">Assets Under Management</dd>
          </div>
          <div>
            <dt className="font-serif text-[2rem] leading-none text-forest">
              <Counter value={250} suffix="+" label="250 or more" />
            </dt>
            <dd className="meta mt-2 text-ink/55">Clients</dd>
          </div>
          <div>
            <dt className="font-serif text-[2rem] leading-none text-forest">
              <Counter value={99} suffix="%" label="99 percent" />
            </dt>
            <dd className="meta mt-2 text-ink/55">Client retention</dd>
          </div>
          <div>
            <dt className="tnum font-serif text-[2rem] leading-none text-forest">Since 1989</dt>
            <dd className="meta mt-2 text-ink/55">Three decades of practice</dd>
          </div>
        </dl>

        <p className="meta mt-8 text-ink/40">{TRUST_FOOTNOTE}</p>
      </div>
    </div>
  </section>
);

export default HeroSection;
