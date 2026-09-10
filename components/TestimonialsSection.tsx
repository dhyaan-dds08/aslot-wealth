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
        <div className="h-full rounded-2xl border border-white/15 bg-white/[0.09] p-8 md:p-10 shadow-on-dark transition-colors duration-300 ease-soft hover:border-accent/50 hover:bg-white/[0.12]">
          {/* Quote mark instead of a name-first card — reads as testimony, not a byline. */}
          <span aria-hidden className="block font-serif text-7xl leading-[0.6] text-accent/50">
            &ldquo;
          </span>

          <blockquote className="mt-5 body-lg text-white/90">{displayText}</blockquote>

          {shouldTruncate && (
            <button
              onClick={() => setShowModal(true)}
              className="mt-4 label-md text-accent underline underline-offset-4 transition-opacity duration-300 hover:opacity-70"
            >
              Read full story
            </button>
          )}

          <footer className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
            <span className="h-px w-6 bg-accent/60" />
            <cite className="label-md not-italic text-white">{name}</cite>
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
            className="w-full max-w-xl rounded-2xl border border-white/15 bg-primary p-8 md:p-10 shadow-2xl"
          >
            <span aria-hidden className="block font-serif text-5xl leading-none text-accent/40">
              &ldquo;
            </span>

            <blockquote className="mt-4 body-lg text-white/85">{testimonial}</blockquote>

            <footer className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
              <span className="h-px w-6 bg-accent/60" />
              <cite className="label-md not-italic text-white">{name}</cite>
            </footer>

            <Button
              variant="onDark"
              onClick={() => setShowModal(false)}
              className="mt-8 w-full"
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
        <SectionHeading
          tone="dark"
          eyebrow="Client Stories"
          title={
            <>
              Real People, <span className="text-accent">Tangible Outcomes</span>
            </>
          }
          subtitle="Stories of trust, growth, and financial freedom"
          className="mb-12 md:mb-16"
        />

        <div className="flex justify-end items-center gap-3 mb-8 max-w-6xl mx-auto px-4">
          <Button variant="onDark" size="icon" onClick={handlePrevious} aria-label="Previous testimonial">
            <ChevronLeft />
          </Button>
          <Button variant="onDark" size="icon" onClick={handleNext} aria-label="Next testimonial">
            <ChevronRight />
          </Button>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Cards are absolutely positioned, so this min-height IS the height.
              It used to shrink at md (350px < 400px), which clipped every card. */}
          <div className="relative min-h-[460px] sm:min-h-[420px] overflow-hidden">
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
        <div className="flex justify-center gap-2 mt-8">
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