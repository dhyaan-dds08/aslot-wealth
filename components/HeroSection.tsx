import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);
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
      duration: 0.5,
      scrollTo: '#contact',
      ease: 'power3.inOut'
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
      <div className="container-page pt-28 pb-20 relative z-10">
        <div className="max-w-4xl">
          <p className="caption-track text-accent mb-8">
            Aslot Wealth Advisor · Surat · Since 1989
          </p>

          <div ref={headlineRef}>
            <h1 className="heading-1 text-white">
              <span className="headline-word inline-block">Personalised,</span>{' '}
              <span className="headline-word inline-block">purpose-driven</span>{' '}
              <span className="headline-word inline-block">portfolios</span>{' '}
              <span className="headline-word inline-block">built for the long run</span>
            </h1>
          </div>

          <div ref={subheadlineRef} className="opacity-0">
            <p className="body-lg mt-8 max-w-xl text-white/70">
              We design investment roadmaps that stay relevant throughout the decades —
              funding milestones, preserving wealth, and managing risk.
            </p>
          </div>

          <div ref={buttonRef} className="mt-12 flex flex-col sm:flex-row gap-3 opacity-0">
            <Button variant="onDarkSolid" size="lg" onClick={scrollToContact}>
              Schedule Discovery Call
            </Button>
            <Button
              variant="onDark"
              size="lg"
              onClick={() => document.querySelector('#process')?.scrollIntoView({ behavior: 'smooth' })}
            >
              How We Work
            </Button>
          </div>

          {/* Proof strip — the numbers that used to only appear a full screen down. */}
          <dl className="mt-20 flex flex-wrap gap-x-14 gap-y-6 border-t border-white/15 pt-10">
            {[
              ['₹75cr+', 'Assets Under Management'],
              ['250+', 'Families Advised'],
              ['35+', 'Years of Practice'],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-serif text-4xl font-light text-white tabular-nums">
                  {value}
                </dt>
                <dd className="caption-track mt-3 text-white/50">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Animated bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#355244] via-[#355244]/80 to-transparent z-[5]" />
    </section>
  );
};

export default HeroSection;