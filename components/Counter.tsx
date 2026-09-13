'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  /** Final numeric value — also what renders in the HTML. */
  value: number;
  prefix?: string;
  suffix?: string;
  /** Full accessible string, e.g. "₹75 crore or more". */
  label: string;
  className?: string;
};

// Matches --ease-out-soft closely enough for a 1.2s count.
const cubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * The final value is in the server HTML. JS only replaces it with a count-up
 * once it is ready and visible, so SEO, link previews and no-JS users always
 * see "₹75 crore+", never "0".
 */
const Counter = ({ value, prefix = '', suffix = '', label, className }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const duration = 1200;
        let frame = 0;

        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          setDisplay(Math.round(cubic(t) * value));
          if (t < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className} aria-label={label}>
      <span aria-hidden="true" className="tnum">
        {prefix}
        {display ?? value}
        {suffix}
      </span>
    </span>
  );
};

export default Counter;
