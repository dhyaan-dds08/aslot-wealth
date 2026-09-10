import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';

interface TestimonialCardProps {
  name: string;
  testimonial: string;
  position: number;
}

const TestimonialCard = ({ name, testimonial, position }: TestimonialCardProps) => {
  const [showModal, setShowModal] = useState(false);

  // Escape closes the modal; without this the only exit is the mouse.
  useEffect(() => {
    if (!showModal) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setShowModal(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [showModal]);

  const MAX_CHARS = 200;
  const shouldTruncate = testimonial.length > MAX_CHARS;
  const displayText = shouldTruncate
    ? testimonial.slice(0, MAX_CHARS) + "..."
    : testimonial;

  return (
    <>
      {/* CARD */}
      <div
        className="absolute w-full md:w-[calc(50%-0.5rem)] transition-all duration-700 ease-in-out"
        style={{
          transform: `translateX(${position * 100}%)`,
          opacity: position >= 0 && position < 2 ? 1 : 0,
          pointerEvents: position >= 0 && position < 2 ? "auto" : "none",
        }}
      >
        {/* No card — a hairline top rule and a large serif quote carry it. */}
        <div className="h-full border-t border-white/20 pt-8 pr-0 md:pr-8">
          <blockquote className="font-serif text-2xl md:text-[1.75rem] font-light leading-[1.45] text-white/90">
            {displayText}
          </blockquote>

          {shouldTruncate && (
            <button
              onClick={() => setShowModal(true)}
              className="mt-6 caption-track text-accent border-b border-accent/40 pb-1 transition-colors duration-300 hover:border-accent"
            >
              Read full story
            </button>
          )}

          <footer className="mt-8">
            <cite className="caption-track not-italic text-white/50">{name}</cite>
          </footer>
        </div>
      </div>

      {/* MODAL / POPOVER */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Testimonial from ${name}`}
          onClick={() => setShowModal(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary/80 p-4 backdrop-blur-sm animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl border border-white/20 bg-primary p-8 md:p-12"
          >
            <blockquote className="font-serif text-xl md:text-2xl font-light leading-[1.5] text-white/90">
              {testimonial}
            </blockquote>

            <footer className="mt-8 border-t border-white/15 pt-6">
              <cite className="caption-track not-italic text-white/50">{name}</cite>
            </footer>

            <Button
              variant="onDark"
              onClick={() => setShowModal(false)}
              className="mt-10 w-full"
              autoFocus
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
};



const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Dipak Patel',
      testimonial:
        'High taxes were eating into my returns. Ishan mapped my cash flows and built a tax-efficient portfolio structure that helped me plan 6 digit potential tax savings in a year. Their rare CA + wealth advisory combo really does hit two targets with one arrow.',
    },
    {
      name: 'Parimal Patel',
      testimonial: `I'd never heard of AIFs before.After screening more than ten managers, Ishan explained the strategies, risks and fit; I chose two funds and the process was seamless.It's been an exciting learning curve and I'm optimistic about building long- term wealth.`,
    },
    {
      name: 'Dr. Sandeep & Dr. Mallika Thakkar',
      testimonial:
        'Seven years ago we began a goal-based mutual fund plan with Pragnesh Aslot. Regular reviews, disciplined SIPs and timely rebalancing kept us on track through every market cycle. We now have a clear, data-driven path to a retirement corpus we can rely on.',
    },
    {
      name: 'Rasna Desai',
      testimonial: `I love to travel, but I didn't want sleepless nights about my cash flows.The team built a ladder of senior-secured NCDs and paired it with a SIP + SWP plan, so monthly income is predictable while my core capital stays aligned to my risk comfort.I can plan trips without second - guessing my finances.`,
    },
    {
      name: 'Agamsharan Barot',
      testimonial:
        'I was FD-only and hesitant about markets. Ishan eased me in with a systematic plan, clear risk limits, staged entries, and enough stability so I could sleep at night while still aiming to beat long-term inflation. It felt thoughtful, not pushy.',
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < testimonials.length; i++) {
      let position = i - currentIndex;
      if (position < -1) position += testimonials.length;
      if (position > testimonials.length - 2) position -= testimonials.length;
      visible.push({ ...testimonials[i], position });
    }
    return visible;
  };

  return (
    <section id="testimonials" className="section-y bg-primary text-primary-foreground overflow-hidden">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeading
            tone="dark"
            eyebrow="Client Stories"
            title="Real people, tangible outcomes"
            className="mb-0 flex-1"
          />

          <div className="flex items-center gap-3 shrink-0">
            <Button variant="onDark" size="icon" onClick={handlePrevious} aria-label="Previous testimonial">
              <ChevronLeft />
            </Button>
            <Button variant="onDark" size="icon" onClick={handleNext} aria-label="Next testimonial">
              <ChevronRight />
            </Button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative mt-14 md:mt-20">
          {/* Cards are absolutely positioned, so this min-height IS the height.
              It used to shrink at md (350px < 400px), which clipped every card. */}
          <div className="relative min-h-[440px] sm:min-h-[380px] overflow-hidden">
            <div className="flex gap-4">
              {getVisibleTestimonials().map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.name}-${index}`}
                  name={testimonial.name}
                  testimonial={testimonial.testimonial}
                  position={testimonial.position}
                />
              ))}
            </div>
          </div>
        </div>


        {/* Dots Indicator */}
        <div className="flex gap-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${index === currentIndex
                ? 'w-8 h-2 bg-accent '
                : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;