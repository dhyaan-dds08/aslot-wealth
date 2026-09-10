'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DISCLAIMER_TESTIMONIALS } from '@/lib/site';

type Story = { name: string; hook: string; quote: string };

const STORIES: Story[] = [
  {
    name: 'Dipak Patel',
    hook: 'High taxes were eating into my returns.',
    quote:
      'High taxes were eating into my returns. Ishan mapped my cash flows and built a tax-efficient portfolio structure that helped me plan 6 digit potential tax savings in a year. Their rare CA + wealth advisory combo really does hit two targets with one arrow.',
  },
  {
    name: 'Parimal Patel',
    hook: "I'd never heard of AIFs before.",
    quote:
      "I'd never heard of AIFs before. After screening more than ten managers, Ishan explained the strategies, risks and fit; I chose two funds and the process was seamless. It's been an exciting learning curve and I'm optimistic about building long-term wealth.",
  },
  {
    name: 'Dr. Sandeep & Dr. Mallika Thakkar',
    hook: 'Regular reviews, disciplined SIPs and timely rebalancing kept us on track through every market cycle.',
    quote:
      'Seven years ago we began a goal-based mutual fund plan with Pragnesh Aslot. Regular reviews, disciplined SIPs and timely rebalancing kept us on track through every market cycle. We now have a clear, data-driven path to a retirement corpus we can rely on.',
  },
  {
    name: 'Rasna Desai',
    hook: "I didn't want sleepless nights about my cash flows.",
    quote:
      "I love to travel, but I didn't want sleepless nights about my cash flows. The team built a ladder of senior-secured NCDs and paired it with a SIP + SWP plan, so monthly income is predictable while my core capital stays aligned to my risk comfort. I can plan trips without second-guessing my finances.",
  },
  {
    name: 'Agamsharan Barot',
    hook: 'I was FD-only and hesitant about markets.',
    quote:
      'I was FD-only and hesitant about markets. Ishan eased me in with a systematic plan, clear risk limits, staged entries, and enough stability so I could sleep at night while still aiming to beat long-term inflation. It felt thoughtful, not pushy.',
  },
];

const ClientVoices = () => {
  const railRef = useRef<HTMLUListElement>(null);
  const [open, setOpen] = useState<Story | null>(null);
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const onScroll = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft > max - 8);
  }, []);

  // Measure after paint so we never setState synchronously inside the effect.
  useEffect(() => {
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', onScroll);
    };
  }, [onScroll]);

  const nudge = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.querySelector('li');
    const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  // Esc closes the dialog.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <section id="stories" className="section-y bg-surface">
      <div className="container-page">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="section-label">Client voices</p>
            <h2 className="h2 mt-4 max-w-xl text-forest">In their words</h2>
          </div>

          <div className="hidden shrink-0 gap-2 sm:flex">
            <Button
              variant="outline"
              size="icon"
              onClick={() => nudge(-1)}
              aria-label="Previous stories"
              className={atStart ? 'opacity-40' : ''}
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => nudge(1)}
              aria-label="Next stories"
              className={atEnd ? 'opacity-40' : ''}
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>

      {/* Rail bleeds off the right edge to hint there is more to swipe. */}
      <ul
        ref={railRef}
        onScroll={onScroll}
        className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]{display:none} pl-[max(1.25rem,calc((100vw-78rem)/2+3rem))] pr-6"
      >
        {STORIES.map((s) => (
          <li
            key={s.name}
            className="group flex w-[19rem] shrink-0 snap-start flex-col justify-between border border-border bg-canvas p-7 transition-[transform,border-color] duration-150 hover:-translate-y-1 hover:border-forest/40 sm:w-[22rem]"
          >
            <div>
              <span
                aria-hidden
                className="block font-serif text-5xl leading-[0.7] text-forest/20 transition-transform duration-250 group-hover:translate-x-1"
              >
                &ldquo;
              </span>
              <p className="h4 mt-4 text-forest">{s.hook}</p>
            </div>

            <div className="mt-8">
              <p className="meta text-ink/55">{s.name}</p>
              <button
                type="button"
                onClick={() => setOpen(s)}
                className="meta mt-3 text-growth underline underline-offset-4 transition-colors duration-150 hover:text-forest"
              >
                Read full story
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="container-page">
        {/* Progress reflects real scroll position. */}
        <div className="mt-6 h-px w-full max-w-xs bg-border">
          <div
            className="h-px origin-left bg-forest"
            style={{ transform: `scaleX(${Math.max(progress, 0.08)})` }}
          />
        </div>

        {/* COMPLIANCE BLOCK */}
        <p className="meta measure mt-8 text-ink/50">{DISCLAIMER_TESTIMONIALS}</p>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Full story from ${open.name}`}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/50 p-0 sm:items-center sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg border-t border-border bg-canvas p-7 sm:border sm:p-9"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="meta text-ink/55">{open.name}</p>
              <button
                type="button"
                onClick={() => setOpen(null)}
                aria-label="Close"
                className="-mr-1 -mt-1 p-1 text-ink/50 hover:text-forest"
                autoFocus
              >
                <X size={18} />
              </button>
            </div>

            <blockquote className="lede mt-5 text-ink/85">{open.quote}</blockquote>
          </div>
        </div>
      )}
    </section>
  );
};

export default ClientVoices;
