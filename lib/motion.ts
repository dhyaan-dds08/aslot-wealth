import type { Variants } from 'framer-motion';

/** Single easing curve for the whole site. Matches --ease-out-soft in globals.css. */
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Viewport trigger used by every scroll reveal. `once` so nothing re-animates on scroll-back. */
export const VIEWPORT = { once: true, amount: 0.2 } as const;

/** Standard reveal: content lifts in. Use on a section header or a single block. */
export const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/**
 * Parent for a list of revealing children. Children stagger themselves — no
 * hand-written per-item `delay: 0.6` that has to be renumbered when items move.
 */
export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

/** Child of `staggerParent`. */
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

/** Convenience props for a one-off scroll reveal. */
export const revealOnScroll = {
  variants: reveal,
  initial: 'hidden',
  whileInView: 'show',
  viewport: VIEWPORT,
} as const;

/** Convenience props for a staggered group. */
export const staggerOnScroll = {
  variants: staggerParent,
  initial: 'hidden',
  whileInView: 'show',
  viewport: VIEWPORT,
} as const;
