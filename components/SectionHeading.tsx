'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { reveal, staggerChild, staggerParent, VIEWPORT } from '@/lib/motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  /** Palette of the section behind it. */
  tone?: 'light' | 'dark';
  align?: 'center' | 'left';
  className?: string;
}

/**
 * The one section header on this site. Every section used to roll its own
 * eyebrow (pill / dashes / none) and heading size, which is why the page read
 * as five different sites stitched together.
 */
const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  tone = 'light',
  align = 'center',
  className,
}: SectionHeadingProps) => (
  <motion.div
    variants={staggerParent}
    initial="hidden"
    whileInView="show"
    viewport={VIEWPORT}
    className={cn(
      'max-w-2xl mb-14 md:mb-16',
      align === 'center' ? 'text-center mx-auto' : 'text-left',
      className,
    )}
  >
    {eyebrow && (
      <motion.p variants={staggerChild} className="eyebrow text-accent mb-4">
        {eyebrow}
      </motion.p>
    )}

    <motion.h2
      variants={staggerChild}
      className={cn('heading-2', tone === 'dark' ? 'text-white' : 'text-primary')}
    >
      {title}
    </motion.h2>

    {subtitle && (
      <motion.p
        variants={reveal}
        className={cn(
          'body-lg mt-5',
          tone === 'dark' ? 'text-white/70' : 'text-muted-foreground',
        )}
      >
        {subtitle}
      </motion.p>
    )}
  </motion.div>
);

export default SectionHeading;
