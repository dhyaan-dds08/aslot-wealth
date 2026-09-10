import { Linkedin } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';
import PragneshImage from '@/assets/teams/Pragnesh Aslot.jpg';
import SeemaImage from '@/assets/teams/Seema Aslot.jpg';
import IshanImage from '@/assets/teams/Ishan Aslot.jpg';

const TEAM = [
  {
    name: 'Pragnesh Aslot',
    title: 'Founder',
    focus: 'Tax planning, goal-based mutual fund portfolios',
    image: PragneshImage,
    linkedin: null,
  },
  {
    name: 'Seema Aslot',
    title: 'Insurance Advisory',
    focus: 'Protection and risk cover',
    image: SeemaImage,
    linkedin: null,
  },
  {
    name: 'Ishan Aslot',
    title: 'Wealth Management & Research',
    focus: 'PMS, AIFs, private-equity co-investments',
    image: IshanImage,
    linkedin: 'https://www.linkedin.com/in/ishan-aslot/',
  },
];

/** Focus areas are always visible — never hidden behind a hover. */
const AboutSection = () => (
  <section id="team" className="section-y bg-canvas">
    <div className="container-page">
      <Reveal>
        <p className="section-label">Meet the team</p>
        <h2 className="h2 mt-4 max-w-2xl text-forest">The family behind your portfolio</h2>
      </Reveal>

      <ul className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((m, i) => (
          <Reveal key={m.name} as="li" className="team-card block" delay={i * 120}>
            <div className="team-frame overflow-hidden bg-surface">
              <img
                src={m.image.src}
                alt={`${m.name}, ${m.title}`}
                className="team-photo aspect-[4/5] w-full object-cover"
                loading="lazy"
                width={640}
                height={800}
              />
            </div>

            <div className="team-meta">
              <h3 className="h4 mt-5 text-forest">{m.name}</h3>
              <p className="meta mt-1.5 text-ink/55">{m.title}</p>
              <p className="prose-sm-x mt-3 text-ink/70">{m.focus}</p>

              {m.linkedin && (
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="meta mt-3 inline-flex items-center gap-1.5 text-ink/55 transition-colors duration-150 hover:text-growth"
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

export default AboutSection;
