import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

// Define the Particle type
interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  opacity: number;
  scale: number;
}

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subheadlineRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]); // Fix line 12

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main timeline
      const tl = gsap.timeline();
      // Headline animation
      tl.fromTo('.headline-word',
        {
          y: 100,
          opacity: 0,
          rotationX: 90,
          transformOrigin: 'bottom'
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          stagger: 0.2,
          duration: 1.2,
          ease: 'power3.out'
        },
        '-=3'
      );

      // Gradient text animation
      tl.fromTo('.gradient-text',
        {
          backgroundPosition: '200% 0%'
        },
        {
          backgroundPosition: '0% 0%',
          duration: 2,
          ease: 'power2.inOut'
        },
        '-=1'
      );

      // Subheadline animation
      tl.fromTo(subheadlineRef.current,
        {
          y: 50,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'back.out(1.7)'
        },
        '-=0.5'
      );

      // Button animation
      tl.fromTo(buttonRef.current,
        {
          y: 30,
          opacity: 0,
          rotationY: 180
        },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1,
          ease: 'power3.out'
        },
        '-=0.3'
      );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Enhanced Particle Animation with GSAP
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create particles with GSAP
    const particles: Particle[] = []; // Fix line 102
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      const particle: Particle = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.6 + 0.2,
        scale: Math.random() * 0.5 + 0.5
      };

      // Animate particle with GSAP
      gsap.to(particle, {
        x: `+=${(Math.random() - 0.5) * 100}`,
        y: `+=${(Math.random() - 0.5) * 100}`,
        opacity: Math.random() * 0.8 + 0.2,
        duration: Math.random() * 4 + 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      particles.push(particle);
    }

    particlesRef.current = particles;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToContact = () => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: '#contact',
      ease: 'power2.inOut'
    });
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary"
    >
      {/* Enhanced Animated Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8 md:text-center lg:text-left">
            {/* Main Headline with GSAP animation */}
            <div ref={headlineRef} className="">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                <div className="">
                  <span
                    className="headline-word inline-block mb-2"

                  >
                    Personalised
                  </span>
                </div>
                <div className="">
                  <span
                    className="headline-word inline-block mb-2"
                  >
                    Purpose-Driven
                  </span>
                </div>
                <div className="">
                  <span className="headline-word inline-block mb-2 text-white">
                    Portfolio
                  </span>{' '}
                  <span
                    className="headline-word gradient-text inline-block bg-gradient-to-r from-accent via-yellow-300 to-accent bg-clip-text text-transparent"
                    style={{
                      backgroundSize: '200% 100%',
                      backgroundPosition: '100% 0%'
                    }}
                  >
                    Built for the Long Run
                  </span>
                </div>
              </h1>
            </div>

            {/* Subheadline */}
            <div ref={subheadlineRef} className="opacity-0">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto lg:mx-0">
                We design investment roadmaps that stay relevant throughout the decades —
                <span className="text-accent font-semibold"> funding milestones</span>,
                <span className="text-accent font-semibold"> preserving wealth</span>, and
                <span className="text-accent font-semibold"> managing risk</span>.
              </p>
            </div>

            {/* CTA Button */}
            <div ref={buttonRef} className="pt-8 opacity-0">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="group relative bg-gradient-to-r from-accent to-yellow-400 hover:from-yellow-400 hover:to-accent text-[#355244] font-bold px-10 py-7 text-lg rounded-full transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,215,0,0.8)] overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="relative flex items-center justify-center gap-3">
                  Schedule Discovery Call
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#355244] via-[#355244]/80 to-transparent z-[5]" />
    </section>
  );
};

export default HeroSection;