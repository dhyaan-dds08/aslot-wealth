import { Layers, Shield, Target, TrendingUp } from 'lucide-react';
import { useRef, useState } from 'react';

const ValuePillars = () => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const pillars = [
    {
      icon: Target,
      title: 'Goal-Aligned Planning',
      description: 'Asset allocation begins with a clear understanding of your life and business objectives.',
      color: '#FFD700',
      gradient: 'from-accent/20 to-accent/20',
      glowColor: 'rgba(255, 215, 0, 0.3)'
    },
    {
      icon: TrendingUp,
      title: 'Long-Term Focus',
      description: 'Emphasis on disciplined compounding, tax efficiency and staying invested through cycles.',
      color: '#6cbe5a',
      gradient: 'from-primary/20 to-primary/20',
      glowColor: 'rgba(127,150,147)'
    },
    {
      icon: Layers,
      title: 'Independent Access',
      description: 'Curated list of third-party funds and strategies — no proprietary products to bias our view.',
      color: '#FFD700',
      gradient: 'from-accent/20 to-accent/20',
      glowColor: 'rgba(255, 215, 0, 0.3)'
    },
    {
      icon: Shield,
      title: 'Disciplined Risk Management',
      description: 'Ongoing monitoring, rebalancing, and transparent reporting keep portfolios on-track through market cycles.',
      color: '#6cbe5a',
      gradient: 'from-primary/20 to-primary/20',
      glowColor: 'rgba(127,150,147)'
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-br from-primary via-primary/90 to-primary overflow-hidden"
    >
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(65,105,225,0.1),transparent_50%)]" />

      {/* Grid Pattern */}
      {/* <div className="absolute inset-0 opacity-[0.1]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} /> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm mb-4">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-accent font-medium">Foundation of Excellence</span>
            </div>
          </div>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white animate-fade-in-up"
          >
            Our <span className="bg-gradient-to-r from-yellow-400 via-accent to-accent bg-clip-text text-transparent">Value Pillars</span>
          </h2>

          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Building wealth on principles that stand the test of time
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-accent/50" />
            <div className="w-2 h-2 rounded-full bg-accent" />
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-accent/50" />
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isActive = activeCard === index;

            return (
              <div
                key={pillar.title}
                className="group relative"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                style={{
                  animation: `fade-in-up 0.8s ease-out both`,
                  animationDelay: `${0.6 + index * 0.15}s`
                }}
              >

                {/* Card */}
                <div className={`
                  relative h-full bg-gradient-to-br ${pillar.gradient} backdrop-blur-xl 
                  border border-white/10 rounded-3xl p-6 sm:p-8
                  transition-all duration-500 ease-out
                  ${isActive ? 'scale-105 border-opacity-30' : 'hover:scale-[1.02]'}
                `}>
                  {/* Icon Container */}
                  <div className="flex justify-center mb-6">
                    <div
                      className={`
                        relative w-20 h-20 rounded-2xl flex items-center justify-center
                        transition-all duration-500                      `}
                      style={{
                        background: `linear-gradient(135deg, ${pillar.color}20, ${pillar.color}40)`,
                        boxShadow: isActive ? `0 0 30px ${pillar.glowColor}` : 'none'
                      }}
                    >
                      <Icon
                        className="transition-all duration-500"
                        size={36}
                        style={{ color: pillar.color }}
                      />

                      {/* Rotating Border */}
                      <div
                        className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                          background: `conic-gradient(from 0deg, transparent, ${pillar.color}, transparent)`,
                          animation: isActive ? 'spin 3s linear infinite' : 'none'
                        }}
                      />
                      <div className="absolute inset-[2px] rounded-2xl" style={{
                        background: `linear-gradient(135deg, ${pillar.color}20, ${pillar.color}40)`
                      }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${isActive ? 'w-full' : 'w-0'}`}
                      style={{
                        background: `linear-gradient(90deg, transparent, ${pillar.color}, transparent)`
                      }}
                    />
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-4 right-4 w-8 h-8 opacity-20">
                    <div className="absolute top-0 right-0 w-full h-[2px]" style={{ background: pillar.color }} />
                    <div className="absolute top-0 right-0 w-[2px] h-full" style={{ background: pillar.color }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center mt-16 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <div className="flex items-center gap-3">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-accent/50" />
            {new Array(3).map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-accent/50"
                style={{
                  animation: `pulse 2s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-accent/50" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
};

export default ValuePillars;