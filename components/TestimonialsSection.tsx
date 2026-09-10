import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  testimonial: string;
  position: number;
}

const TestimonialCard = ({ name, testimonial, position }: TestimonialCardProps) => {
  const [showModal, setShowModal] = useState(false);

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
        <div className="glass-card rounded-3xl p-8 md:p-12 bg-white/10 backdrop-blur-sm border border-white/20">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-semibold text-white">{name}</p>

              <p className="text-accent text-base md:text-lg leading-relaxed max-w-3xl">
                &quot;{displayText}&quot;
              </p>

              {shouldTruncate && (
                <button
                  onClick={() => setShowModal(true)}
                  className="text-accent underline underline-offset-4 hover:text-accent/50 transition-colors"
                >
                  Show more
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL / POPOVER */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/10 border border-white/20 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-lg max-w-xl w-[90%] animate-fadeIn">
            <p className="text-accent text-lg md:text-xl leading-relaxed">
              &quot;{testimonial}&quot;
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="mt-6 bg-white/20 hover:bg-white/30 text-white px-5 py-2 rounded-xl"
            >
              Close
            </button>
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
    <section id="testimonials" className="py-20 md:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Client Stories
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Real People, <span className="text-accent">Tangible Outcomes</span>
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/70 mt-5">
            Stories of trust, growth, and financial freedom
          </p>
        </div>

        <div className="flex justify-end items-center gap-3 mb-8 max-w-6xl mx-auto px-4">
          <button
            onClick={handlePrevious}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="text-white" size={20} />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="text-white" size={20} />
          </button>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative min-h-[400px] md:min-h-[350px] overflow-hidden">
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