import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PragneshImage from '@/assets/teams/Pragnesh Aslot.jpg';
import SeemaImage from '@/assets/teams/Seema Aslot.jpg';
import IshanImage from '@/assets/teams/Ishan Aslot.jpg';

const TEAM = [
  {
    name: 'Pragnesh Aslot',
    title: 'Founder — Tax Advisory, since 1989',
    image: PragneshImage,
    linkedin: null,
  },
  {
    name: 'Seema Aslot',
    title: 'Co-Founder — Insurance Advisory, since 1991',
    image: SeemaImage,
    linkedin: null,
  },
  {
    name: 'Ishan Aslot',
    title: 'Wealth Management & Research, since 2023',
    image: IshanImage,
    linkedin: 'https://www.linkedin.com/in/ishan-aslot/',
  },
];

/** Same crop, same colour treatment on all three — consistency over polish. */
const AboutSection = () => (
  <section id="team" className="section-y bg-canvas">
    <div className="container-page">
      <p className="section-label">Meet the team</p>
      <h2 className="h2 mt-4 max-w-2xl text-forest">
        The people you will actually be speaking to
      </h2>

      <ul className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((m) => (
          <li key={m.name}>
            <img
              src={m.image.src}
              alt={`${m.name}, ${m.title}`}
              className="aspect-[4/5] w-full bg-surface object-cover"
              loading="lazy"
              width={640}
              height={800}
            />
            <h3 className="h4 mt-5 text-forest">{m.name}</h3>
            <p className="meta mt-1.5 text-ink/55">{m.title}</p>

            {m.linkedin && (
              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="meta mt-3 inline-flex items-center gap-1.5 text-growth underline underline-offset-4"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-14">
        <Button variant="outline" size="lg" asChild>
          <Link href="#contact">Connect With Us</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default AboutSection;
