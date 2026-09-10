import { LinkedInIcon } from '@/components/BrandIcons';
import Reveal from '@/components/motion/Reveal';
import PragneshImage from '@/assets/teams/Pragnesh Aslot.jpg';
import SeemaImage from '@/assets/teams/Seema Aslot.jpg';
import IshanImage from '@/assets/teams/Ishan Aslot.jpg';

/**
 * Horizontal rows, photograph one side and text the other, alternating.
 * Rectangular crops — never circles, which would throw away the
 * environmental context that makes these portraits worth showing.
 *
 * Name → role → credential → the person's own words.
 */
const TEAM = [
  {
    name: 'Pragnesh Aslot',
    role: 'Founder',
    credential: 'Since 1989',
    image: PragneshImage,
    linkedin: null,
    bio: [
      'I started this practice in 1989, doing tax advisory for Surat businesses. Over thirty-five years the questions changed — from taxes to questions of protection and preservation.',
      'Most of the families I work with, I have known for two decades. Some of them I am now on the third generation of.',
    ],
  },
  {
    name: 'Seema Aslot',
    role: 'Risk & Protection',
    credential: 'Insurance desk since 1991',
    image: SeemaImage,
    linkedin: null,
    bio: [
      'I joined two years after Pragnesh started and set up the insurance side. We still handle claim paperwork personally for our clients, because that is the day the relationship is actually tested.',
    ],
  },
  {
    name: 'Ishan Aslot',
    role: null,
    credential: 'Steering the legacy to new age tech driven wealth management',
    image: IshanImage,
    linkedin: 'https://www.linkedin.com/in/ishan-aslot/',
    bio: [
      'As financial dynamics evolve, growing an organization requires expanding into new frontiers. My core mission is steering our established legacy into the modern era of wealth management.',
      'Today’s investors are moving beyond passive capital preservation toward active, long-term wealth creation — a shift that demands forward-thinking strategies. I focus on understanding client goals, evaluating fund flows, analyzing emerging opportunities, and strategically allocating capital to deliver sustainable growth.',
    ],
  },
];

const AboutSection = () => (
  <section id="team" className="section-y bg-canvas">
    <div className="container-page">
      <Reveal>
        <p className="section-label text-growth">The people</p>
        <h2 className="h2 mt-4 max-w-2xl text-forest">Meet Our Team</h2>
      </Reveal>

      <div className="mt-16 md:mt-20">
        {TEAM.map((m, i) => {
          const flipped = i % 2 === 1;
          return (
            <Reveal
              key={m.name}
              as="article"
              className="team-card grid items-center gap-x-14 gap-y-8 border-t border-border py-12 first:border-t-0 first:pt-0 md:grid-cols-12 md:py-16"
            >
              <figure
                className={`team-frame overflow-hidden bg-surface md:col-span-4 ${flipped ? 'md:col-start-9' : ''
                  }`}
              >
                <img
                  src={m.image.src}
                  alt={`${m.name}, ${m.role ?? 'Aslot Wealth Advisor'}`}
                  className="team-photo aspect-[4/3] w-full object-cover md:aspect-[3/4]"
                  loading="lazy"
                  width={640}
                  height={800}
                />
              </figure>

              <div
                className={`team-meta md:col-span-7 ${flipped ? 'md:col-start-1 md:row-start-1' : 'md:col-start-6'
                  }`}
              >
                <h3 className="h3 text-forest">{m.name}</h3>

                {m.role && <p className="mt-3 h4 text-growth">{m.role}</p>}
                <p className={`meta text-ink/65 ${m.role ? 'mt-1' : 'mt-3'}`}>{m.credential}</p>

                <div className="mt-6 space-y-4">
                  {m.bio.map((para) => (
                    <p key={para.slice(0, 28)} className="text-[1.0625rem] leading-[1.75] text-ink/70">
                      {para}
                    </p>
                  ))}
                </div>

                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="meta mt-6 inline-flex items-center gap-2 border-b border-ink/20 pb-1 text-ink/70 transition-colors duration-150 hover:border-growth hover:text-growth"
                  >
                    <LinkedInIcon size={14} />
                    Connect on LinkedIn
                  </a>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default AboutSection;
