import { Button } from '@/components/ui/button';
import { ArrowRight, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { revealOnScroll, staggerChild, staggerParent, VIEWPORT } from '@/lib/motion';
import PragneshImage from '@/assets/teams/Pragnesh Aslot.jpg'
import SeemaImage from '@/assets/teams/Seema Aslot.jpg'
import IshanImage from '@/assets/teams/Ishan Aslot.jpg'

const team = [
  {
    name: 'Pragnesh Aslot',
    role: 'Founder',
    credential: 'Practising since 1989',
    image: PragneshImage,
    bio: [
      'I started this practice in 1989, doing tax advisory for Surat businesses. Over thirty-five years the questions changed — from taxes to questions of protection and preservation.',
      'Most of the families I work with, I have known for two decades.',
    ],
  },
  {
    name: 'Seema Aslot',
    role: 'Risk & Protection',
    credential: 'Insurance desk since 1991',
    image: SeemaImage,
    bio: [
      'I joined two years after Pragnesh started and set up the insurance side.',
      'We still handle claim paperwork personally for our clients, because that is the day the relationship is actually tested.',
    ],
  },
  {
    name: 'Ishan Aslot',
    role: 'Wealth Management',
    credential: 'Steering the legacy to new-age, tech-driven wealth management',
    image: IshanImage,
    linkedin: 'https://www.linkedin.com/in/ishan-aslot/',
    bio: [
      'As financial dynamics evolve, growing an organization requires expanding into new frontiers. My core mission is steering our established legacy into the modern era of wealth management.',
      'Today’s investors are moving beyond passive capital preservation toward active, long-term wealth creation — a shift that demands forward-thinking strategies. I focus on understanding client goals, evaluating fund flows, analyzing emerging opportunities, and strategically allocating capital to deliver sustainable growth.',
    ],
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-y bg-primary text-white">
      <div className="container-page max-w-6xl">
        <SectionHeading
          tone="dark"
          eyebrow="Our Journey"
          title="A legacy of clarity and long-term vision"
        />

        {/* Story Content */}
        <motion.div {...revealOnScroll} className="mb-24 md:mb-36 measure">
          <div className="space-y-6 body-lg text-white/70">
            <p>
              In <span className="text-accent font-semibold">1989</span>,{' '}
              <span className="text-white font-medium">Pragnesh Aslot</span> started a tax-advisory
              practice dedicated to one principle: every financial decision should be rooted in
              clarity and compliance. Over time, client conversations naturally widened—from taxes to
              questions of protection and preservation.
            </p>

            <p>
              Two years later, <span className="text-white font-medium">Seema Aslot</span> joined the
              firm, launching the first insurance-advisory desk to help clients safeguard their
              earnings and assets.
            </p>

            <p>
              For three decades, that combination of precise tax guidance and prudent risk cover became
              the firm&apos;s hallmark. Yet portfolio needs evolved as clients sought access to broader
              capital-market opportunities.
            </p>

            <p>
              In <span className="text-accent font-semibold">2023</span>,{' '}
              <span className="text-white font-medium">Ishan Aslot</span> brought data-driven research
              and global exposure, steering the business into a comprehensive wealth-management
              platform spanning listed equity, PMS, AIFs, and private-equity co-investments.
            </p>

            <p className="heading-3 text-white pt-4">
              Today, Aslot Wealth Advisory blends seasoned leadership with next-generation
              strategy—delivering goal-aligned, long-term portfolios while upholding the integrity
              on which the firm was founded.
            </p>
          </div>
        </motion.div>

        {/* Team Section */}
        <div className="relative">
          <SectionHeading tone="dark" eyebrow="The People" title="Meet our team" />

          <div className="border-t border-white/15">
            {team.map((member, i) => (
              <motion.article
                key={member.name}
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT}
                className="group grid gap-8 md:gap-14 md:grid-cols-12 border-b border-white/15 py-14 md:py-20"
              >
                <motion.figure
                  variants={staggerChild}
                  className={`md:col-span-4 ${i % 2 === 1 ? 'md:col-start-9 md:row-start-1' : ''}`}
                >
                  {/* Square crop, no frame, no shadow — grayscale lifts on hover. */}
                  <div className="overflow-hidden bg-white/5">
                    <img
                      src={member.image.src}
                      alt={member.name}
                      className="w-full aspect-[4/5] object-cover grayscale transition-all duration-700 ease-soft group-hover:grayscale-0 group-hover:scale-[1.03]"
                      loading="lazy"
                      width={640}
                      height={800}
                    />
                  </div>
                </motion.figure>

                <motion.div
                  variants={staggerChild}
                  className={`md:col-span-7 ${i % 2 === 1 ? 'md:col-start-1 md:row-start-1' : 'md:col-start-6'}`}
                >
                  <h3 className="heading-3 text-white">{member.name}</h3>

                  <p className="caption-track mt-4 text-accent">{member.role}</p>
                  <p className="body-sm mt-2 text-white/50">{member.credential}</p>

                  <div className="mt-8 space-y-5 body-md text-white/70">
                    {member.bio.map((para) => (
                      <p key={para.slice(0, 24)}>{para}</p>
                    ))}
                  </div>

                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-2 caption-track text-white/60 border-b border-white/25 pb-1 transition-colors duration-300 hover:text-accent hover:border-accent"
                    >
                      <Linkedin size={13} />
                      Connect on LinkedIn
                    </a>
                  )}
                </motion.div>
              </motion.article>
            ))}
          </div>

          <motion.div {...revealOnScroll} className="mt-16">
            <Button
              variant="onDark"
              size="lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Connect With Us
              <ArrowRight className="transition-transform duration-300 ease-soft group-hover/button:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;