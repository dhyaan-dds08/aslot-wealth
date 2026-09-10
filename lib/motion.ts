import type { Transition, Variants } from 'framer-motion';

/* ── Easing (mirrors globals.css) ─────────────────────────────────── */
export const EASE_OUT_SOFT = [0.22, 1, 0.36, 1] as const;
export const EASE_IN_OUT_SOFT = [0.65, 0, 0.35, 1] as const;

/* ── Durations, in seconds for Framer ─────────────────────────────── */
export const D = {
  micro: 0.15,
  short: 0.25,
  medium: 0.5,
  long: 0.9,
} as const;

/** Reveals play ONCE and start at 20% in view. Never replay on scroll-back. */
export const VIEWPORT = { once: true, amount: 0.2 } as const;

export const enter: Transition = { duration: D.medium, ease: EASE_OUT_SOFT };

/** Standard scroll reveal. Distance comes from --reveal-y (24px / 12px). */
export const revealUp: Variants = {
  hidden: { opacity: 0, y: 'var(--reveal-y)' },
  show: { opacity: 1, y: 0, transition: enter },
};

export const revealFade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: D.medium } },
};

/**
 * Stagger siblings 60–100ms, total capped at 400ms.
 * Pass the child count so long lists compress rather than crawl.
 */
export const staggerParent = (count = 4): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: Math.min(0.08, 0.4 / Math.max(count, 1)),
    },
  },
});

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 'var(--reveal-y)' },
  show: { opacity: 1, y: 0, transition: enter },
};

/** Spread onto a motion element for a one-shot reveal. */
export const onScroll = {
  initial: 'hidden',
  whileInView: 'show',
  viewport: VIEWPORT,
} as const;

/** Photo wipe: uncovered bottom-to-top while the image settles from 1.1. */
export const wipeUp: Variants = {
  hidden: { clipPath: 'inset(100% 0 0 0)' },
  show: {
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: 0.7, ease: EASE_OUT_SOFT },
  },
};

/** Line/divider draw. Pair with `origin-left` or `origin-top`. */
export const drawX: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.6, ease: EASE_OUT_SOFT } },
};

export const drawY: Variants = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { duration: 0.4, ease: EASE_OUT_SOFT } },
};
