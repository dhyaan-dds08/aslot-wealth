import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WA_DEFAULT } from '@/lib/site';

/* Split into lines so each slides up from behind its own mask. The last line
   carries the promise, so it shifts to `growth` — marigold is only 2:1 on
   white and can never be text, which is exactly why it stays a CTA fill. */
const HEADLINE = [
  { text: 'Personalised', accent: false },
  { text: 'Purpose-Driven', accent: false },
  { text: 'Portfolio Built for the Long Run', accent: true },
];

const HeroSection = () => (
  <section id="home" className="bg-canvas">
    <div className="container-page">
      {/* No hero imagery: the three portraits had mismatched backgrounds and
          added nothing the headline wasn't already saying. The team photos
          live in their own section, shot consistently. */}
      <div className="pt-16 pb-16 md:pt-24 md:pb-24 lg:pt-32 lg:pb-28">
        <div>
          <h1 className="display text-forest">
            {HEADLINE.map((line, i) => (
              /* overflow-hidden mask + inner span that slides up from 100% */
              <span key={line.text} className="hero-line">
                <span
                  className={`hero-line-in ${line.accent ? 'text-growth' : ''}`}
                  style={{ ['--d' as string]: `${100 + i * 120}ms` }}
                >
                  {line.text}
                </span>
              </span>
            ))}
          </h1>

          <p className="lede measure mt-8 text-ink/70 hero-el" style={{ ['--d' as string]: '500ms' }}>
            We design investment roadmaps that stay relevant throughout the decades — funding
            milestones, preserving wealth, and managing risk.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <span className="hero-el" style={{ ['--d' as string]: '700ms' }}>
              <Button variant="cta" size="lg" className="w-full sm:w-auto" asChild>
                <Link href="#contact">Schedule Discovery Call</Link>
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

      </div>

    </div>
  </section>
);

export default HeroSection;
