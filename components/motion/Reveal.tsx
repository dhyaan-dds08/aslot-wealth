'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Delay in ms before this element animates once revealed. */
  delay?: number;
  /** Stagger direct children instead of the wrapper itself. */
  stagger?: boolean;
  as?: 'div' | 'section' | 'ul' | 'ol' | 'li' | 'dl' | 'p' | 'header' | 'article';
};

/**
 * Progressive-enhancement scroll reveal.
 *
 * The markup renders VISIBLE. On mount, JS sets data-reveal="armed", which is
 * what the CSS uses to hide-then-animate. If JS never runs, or the user prefers
 * reduced motion, the content is simply there — which is what the brief needs
 * and what Framer Motion cannot do, since it serialises opacity:0 into the HTML.
 *
 * Plays once; never replays on scroll-back.
 */
const Reveal = ({ children, className, delay = 0, stagger = false, as = 'div' }: Props) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    el.dataset.reveal = 'armed';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.reveal = 'in';
        observer.disconnect();
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      className={cn(stagger && 'reveal-stagger', className)}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
