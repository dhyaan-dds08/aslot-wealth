import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import PragneshImage from '@/assets/teams/Pragnesh Aslot.jpg'
import SeemaImage from '@/assets/teams/Seema Aslot.jpg'
import IshanImage from '@/assets/teams/Ishan Aslot.jpg'
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
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-6 py-2.5 mb-8"
          >
            <Sparkles className="text-accent" size={18} />
            <span className="text-accent font-semibold text-sm tracking-wide">Our Journey</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-accent to-yellow-600 bg-clip-text text-transparent">
              Legacy of Clarity
            </span>
            <br />
            <span className="text-white/90">&</span>
            <br />
            <span className="text-white">Long-Term Vision</span>
          </h2>
        </motion.div>

        {/* Story Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mb-16 overflow-hidden group hover:border-accent/40 transition-all duration-500"
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10 space-y-6 leading-relaxed text-gray-300 text-lg">
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-primary/60 via-primary/40 to-primary/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-accent/20 shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent rounded-3xl" />

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-bold mb-14 text-center"
          >
            Meet Our <span className="bg-gradient-to-r from-yellow-400 via-accent to-yellow-600 bg-clip-text text-transparent">Team</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 relative z-10">
            {[
              { initials: 'PA', name: 'Pragnesh Aslot', image: PragneshImage, delay: 0.6 },
              { initials: 'SA', name: 'Seema Aslot', image: SeemaImage, delay: 0.7 },
              { initials: 'IA', name: 'Ishan Aslot', image: IshanImage, delay: 0.8 }
            ].map((member) => (
             <motion.div
  key={member.initials}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: member.delay }}
  viewport={{ once: true }}
  className="text-center space-y-5 group"
>
  <div className="relative w-36 h-36 md:w-40 md:h-40 mx-auto">
    {/* Glow Effect */}
    <motion.div
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-yellow-600/30 blur-2xl group-hover:blur-3xl transition-all duration-500"
    />
    <img 
      src={member.image.src} 
      alt={member.name + ' Avatar'} 
      className="relative w-full h-full rounded-full object-contain" 
      loading="lazy" 
      width={200} 
      height={200} 
    />
  </div>
  <div>
    <h4 className="font-bold text-xl md:text-2xl text-white mb-2 group-hover:text-accent transition-colors duration-300">
      {member.name}
    </h4>
  </div>
</motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
            className="text-center relative z-10"
          >
            <Button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative bg-gradient-to-r from-accent to-yellow-600 hover:from-yellow-400 hover:to-accent text-primary font-bold px-12 py-7 text-lg rounded-full transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,215,0,0.7)] overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative flex items-center gap-3">
                Connect With Us
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={22} />
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;