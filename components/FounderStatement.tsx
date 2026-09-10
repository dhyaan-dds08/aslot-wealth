'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import PragneshImage from '@/assets/teams/Pragnesh Aslot.jpg';

const QUOTE =
  'Every financial decision should be rooted in clarity and compliance.';

const WORDS = QUOTE.split(' ');

/**
 * Scroll-linked, not time-linked: words brighten in step with the scroll
 * position, finishing as the quote reaches the middle of the screen. Native
 * scrolling throughout — nothing is pinned, slowed or hijacked.
 */
const FounderStatement = () => {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'center 0.5'],
  });

  return (
    <section ref={ref} className="section-y bg-canvas">
      <div className="container-page">
        <blockquote className="mx-auto max-w-4xl">
          <p className="h2 text-forest">
            {WORDS.map((word, i) => (
              <Word
                key={`${word}-${i}`}
                word={word}
                index={i}
                total={WORDS.length}
                progress={scrollYProgress}
                reduced={!!reduced}
              />
            ))}
          </p>

          <footer className="mt-12 flex items-center gap-4">
            <img
              src={PragneshImage.src}
              alt="Pragnesh Aslot"
              className="size-14 rounded-full bg-surface object-cover"
              width={112}
              height={112}
              loading="lazy"
            />
            <div>
              <cite className="not-italic h4 text-forest">Pragnesh Aslot</cite>
              <p className="meta mt-1 text-ink/55">Founder, practising since 1989</p>
            </div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

const Word = ({
  word,
  index,
  total,
  progress,
  reduced,
}: {
  word: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  reduced: boolean;
}) => {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <>
      <motion.span style={reduced ? undefined : { opacity }}>{word}</motion.span>{' '}
    </>
  );
};

export default FounderStatement;
