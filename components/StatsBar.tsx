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
      className="group relative rounded-2xl bg-white p-8 md:p-10 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
    >
      <Icon
        className="w-9 h-9 text-accent mb-8"
        strokeWidth={1.5}
      />

      <div className="text-5xl md:text-6xl font-semibold text-primary leading-none tracking-tight tabular-nums">
        {value.includes('₹') && '₹'}
        {count}
        <span className="text-accent">{suffix}</span>
      </div>

      <div className="mt-4 text-sm md:text-base text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  );
};

const StatsBar = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-20 md:py-28">

      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            By The Numbers
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
            Trust, <span className="text-accent">Measured</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mt-5">
            Numbers that speak volumes about our commitment
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <StatItem
            value="75"
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

        {/* Footer note */}
        <p className="mt-10 text-center text-xs text-muted-foreground">
          Figures as of Sep 2026 • Updated quarterly • Aggregated across distributed products
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