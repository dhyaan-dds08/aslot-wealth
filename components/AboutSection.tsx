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
    <section id="about" className="relative section-y bg-gradient-to-br from-primary via-primary/90 to-primary text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,215,0,0.2) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 40, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
      />

      <div className="container-page relative z-10 max-w-6xl">
        <SectionHeading
          tone="dark"
          eyebrow="Our Journey"
          title={
            <>
              A Legacy of Clarity <span className="text-accent">&amp;</span> Long-Term Vision
            </>
          }
          className="max-w-4xl"
        />

        {/* Story Content */}
        <motion.div
          {...revealOnScroll}
          className="relative mb-24 md:mb-32 measure mx-auto"
        >
          <div className="space-y-6 body-lg text-white/75">
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

            <p className="heading-4 text-white">
              Today, <span className="text-accent">Aslot Wealth Advisory</span> blends seasoned
              leadership with next-generation strategy—delivering goal-aligned, long-term portfolios
              while upholding the integrity on which the firm was founded.
            </p>
          </div>
        </motion.div>

        {/* Team Section */}
        <div className="relative">
          <SectionHeading
            tone="dark"
            eyebrow="The People"
            title="Meet Our Team"
            className="mb-16 md:mb-20"
          />

          <div className="space-y-20 md:space-y-28">
            {team.map((member, i) => (
              <motion.article
                key={member.name}
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT}
                className="group grid gap-10 md:gap-16 md:grid-cols-12 md:items-center"
              >
                <motion.figure
                  variants={staggerChild}
                  className={`md:col-span-4 relative ${i % 2 === 1 ? 'md:col-start-9' : ''}`}
                >
                  {/* Offset accent plate — shifts toward the frame on hover. */}
                  <span
                    aria-hidden
                    className={`absolute inset-0 rounded-2xl border border-accent/30 transition-transform duration-500 ease-soft ${i % 2 === 1
                      ? 'translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2'
                      : '-translate-x-4 translate-y-4 group-hover:-translate-x-2 group-hover:translate-y-2'
                      }`}
                  />
                  {/* Frame settles in while the image pushes out — reformly's card hover. */}
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 ease-soft group-hover:scale-[0.985]">
                    <img
                      src={member.image.src}
                      alt={member.name}
                      className="w-full aspect-[4/5] object-cover transition-transform duration-500 ease-soft group-hover:scale-[1.05]"
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
                  <p className="mt-2 label-md text-accent">{member.role}</p>
                  <p className="mt-1 body-sm text-white/55">{member.credential}</p>

                  {/* Rule extends as the row comes into focus. */}
                  <span className="mt-6 block h-px w-12 bg-accent/40 transition-all duration-500 ease-soft group-hover:w-24 group-hover:bg-accent" />

                  <div className="mt-6 space-y-4 body-md text-white/75">
                    {member.bio.map((para) => (
                      <p key={para.slice(0, 24)}>{para}</p>
                    ))}
                  </div>

                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link mt-6 inline-flex items-center gap-2 label-md text-white/70 transition-colors duration-300 hover:text-accent"
                    >
                      <Linkedin size={16} className="transition-transform duration-300 ease-soft group-hover/link:-translate-y-0.5" />
                      Connect on LinkedIn
                    </a>
                  )}
                </motion.div>
              </motion.article>
            ))}
          </div>

          <motion.div
            {...revealOnScroll}
            className="text-center mt-20"
          >
            <Button
              variant="accent"
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