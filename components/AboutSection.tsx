import { Button } from '@/components/ui/button';
import { ArrowRight, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
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
    <section id="about" className="relative py-20 md:py-32 bg-gradient-to-br from-primary via-primary/90 to-primary text-white overflow-hidden">
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

      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-14 md:mb-16"
        >
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Our Journey
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white">
            A Legacy of Clarity <span className="text-accent">&amp;</span> Long-Term Vision
          </h2>
        </motion.div>

        {/* Story Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mb-24 md:mb-32 max-w-3xl mx-auto"
        >
          <div className="space-y-6 leading-relaxed text-gray-300 text-base md:text-lg">
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

            <p className="text-white font-medium text-xl">
              Today, <span className="text-accent">Aslot Wealth Advisory</span> blends seasoned
              leadership with next-generation strategy—delivering goal-aligned, long-term portfolios
              while upholding the integrity on which the firm was founded.
            </p>
          </div>
        </motion.div>

        {/* Team Section */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-20 text-center"
          >
            <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              The People
            </p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Meet Our Team
            </h3>
          </motion.div>

          <div className="space-y-20 md:space-y-28">
            {team.map((member, i) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, margin: '-80px' }}
                className="grid gap-10 md:gap-16 md:grid-cols-12 md:items-center"
              >
                <figure className={`md:col-span-5 relative ${i % 2 === 1 ? 'md:col-start-8' : ''}`}>
                  <div className="absolute -inset-3 bg-accent/10 rounded-2xl -z-10" aria-hidden />
                  <img
                    src={member.image.src}
                    alt={member.name}
                    className="w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl"
                    loading="lazy"
                    width={640}
                    height={800}
                  />
                </figure>

                <div className={`md:col-span-6 ${i % 2 === 1 ? 'md:col-start-1 md:row-start-1' : 'md:col-start-7'}`}>
                  <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {member.name}
                  </h4>
                  <p className="mt-2 text-accent font-semibold">{member.role}</p>
                  <p className="mt-1 text-sm text-white/60">{member.credential}</p>

                  <div className="mt-6 h-px w-16 bg-accent/40" />

                  <div className="mt-6 space-y-4 text-gray-300 leading-relaxed">
                    {member.bio.map((para) => (
                      <p key={para.slice(0, 24)}>{para}</p>
                    ))}
                  </div>

                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm text-white/70 hover:text-accent transition-colors"
                    >
                      <Linkedin size={16} />
                      Connect on LinkedIn
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <Button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-accent hover:bg-accent/90 text-primary font-semibold px-10 py-6 text-base rounded-full transition-all duration-300 hover:scale-[1.03]"
            >
              <span className="flex items-center gap-3">
                Connect With Us
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;