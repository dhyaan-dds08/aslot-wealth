import { useEffect, useRef, useState } from 'react';
import { LucideIcon, TrendingUp, Users, Award } from 'lucide-react';

interface StatItemProps {
  value: string;
  label: string;
  suffix?: string;
  icon: LucideIcon;
}

const StatItem = ({ value, label, suffix = '', icon: Icon }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const numericValue = parseInt(value.replace(/\D/g, ''));
          const duration = 2000;
          const steps = 60;
          const increment = numericValue / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
              setCount(numericValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-white p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-accent/50 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Floating icon */}
      <div className="relative mb-6 flex justify-center">
        <div className="transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
          <Icon
            className="w-14 h-14 md:w-16 md:h-16 text-accent"
            strokeWidth={1.5}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="relative text-center space-y-3">
        <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-accent via-accent/70 to-accent bg-clip-text text-transparent leading-tight tracking-tight">
          {value.includes('₹') && '₹'}
          {count}
          {suffix}
        </div>
        <div className="text-base md:text-lg text-primary font-semibold">
          {label}
        </div>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary to-transparent rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500" />
    </div>
  );
};

const StatsBar = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-20 md:py-32 overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
        {/* Title with animated underline */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 mb-4 animate-fade-in-up">
            Trust ,{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-yellow-400 via-accent to-yellow-600 bg-clip-text text-transparent">
                Measured
              </span>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-primary font-medium mt-6">
            Numbers that speak volumes about our commitment
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-12">
          <StatItem
            value="50"
            label="Assets Under Management"
            suffix=" cr+"
            icon={TrendingUp}
          />
          <StatItem
            value="250"
            label="Happy Clients"
            suffix="+"
            icon={Users}
          />
          <StatItem
            value="99"
            label="Client Retention Rate"
            suffix="%"
            icon={Award}
          />
        </div>
      </div>


      {/* Footer Note with modern card */}
      <div className="absolute bottom-0 right-0 max-w-md ml-auto bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-sm">
        <p className="text-slate-600 text-sm leading-relaxed">
          <span className="font-bold text-primary/50">Figures as of Sep 2025</span>
          <br />
          <span className="text-xs">Updated quarterly • Aggregated across distributed products</span>
        </p>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes draw-line {
          from {
            stroke-dasharray: 200;
            stroke-dashoffset: 200;
          }
          to {
            stroke-dasharray: 200;
            stroke-dashoffset: 0;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-draw-line {
          animation: draw-line 1.5s ease-out 0.5s forwards;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default StatsBar;