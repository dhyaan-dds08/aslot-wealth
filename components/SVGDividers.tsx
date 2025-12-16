import { motion } from 'framer-motion';

export const WaveDivider = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-24"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(220, 85%, 15%)" />
            <stop offset="50%" stopColor="hsl(45, 90%, 55%)" />
            <stop offset="100%" stopColor="hsl(220, 85%, 15%)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,60 C300,90 600,30 900,60 C1050,75 1150,90 1200,60 L1200,120 L0,120 Z"
          fill="url(#waveGradient)"
          opacity="0.15"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,80 C300,50 600,110 900,80 C1050,65 1150,50 1200,80 L1200,120 L0,120 Z"
          fill="url(#waveGradient)"
          opacity="0.1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
        />
      </svg>
    </div>
  );
};

export const AngleDivider = ({ className = '', flip = false }: { className?: string; flip?: boolean }) => {
  return (
    <div className={`w-full overflow-hidden ${className} ${flip ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-16"
      >
        <defs>
          <linearGradient id="angleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(220, 85%, 15%)" stopOpacity="0.05" />
            <stop offset="50%" stopColor="hsl(45, 90%, 55%)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(220, 85%, 15%)" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,60 L600,10 L1200,60 L1200,60 L0,60 Z"
          fill="url(#angleGradient)"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </svg>
    </div>
  );
};

export const LineGraphDivider = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        className="w-full h-20"
      >
        <defs>
          <linearGradient id="graphGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(45, 90%, 55%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(45, 90%, 55%)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,70 L200,60 L400,40 L600,45 L800,25 L1000,30 L1200,10"
          stroke="url(#graphGradient)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,70 L200,60 L400,40 L600,45 L800,25 L1000,30 L1200,10 L1200,80 L0,80 Z"
          fill="url(#graphGradient)"
          opacity="0.1"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ transformOrigin: 'bottom' }}
        />
      </svg>
    </div>
  );
};
