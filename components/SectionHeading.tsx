'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { staggerChild, staggerParent, VIEWPORT } from '@/lib/motion';

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
 * The one section header on this site. Left-aligned by default — centred
 * everything is what made the page read as a template.
 */
const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  tone = 'light',
  align = 'left',
  className,
}: SectionHeadingProps) => (
  <motion.div
    variants={staggerParent}
    initial="hidden"
    whileInView="show"
    viewport={VIEWPORT}
    className={cn(
      'mb-14 md:mb-20',
      align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl',
      className,
    )}
  >
    {eyebrow && (
      <motion.p
        variants={staggerChild}
        className={cn(
          'caption-track mb-6',
          tone === 'dark' ? 'text-accent' : 'text-accent',
        )}
      >
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
        variants={staggerChild}
        className={cn(
          'body-lg mt-6 max-w-xl',
          align === 'center' && 'mx-auto',
          tone === 'dark' ? 'text-white/65' : 'text-muted-foreground',
        )}
      >
        {subtitle}
      </motion.p>
    )}
  </motion.div>
);

export default SectionHeading;
