import { DISCLAIMER_TESTIMONIALS } from '@/lib/site';

const STORIES = [
  {
    name: 'Dipak Patel',
    tag: '₹15 lakh/year in potential tax savings',
    quote:
      'High taxes were eating into my returns. Ishan mapped my cash flows and built a tax-efficient portfolio structure that helped me plan 6 digit potential tax savings in a year. Their rare CA + wealth advisory combo really does hit two targets with one arrow.',
  },
  {
    name: 'Parimal Patel',
    tag: 'First step into AIFs',
    quote:
      "I'd never heard of AIFs before. After screening more than ten managers, Ishan explained the strategies, risks and fit; I chose two funds and the process was seamless. It's been an exciting learning curve and I'm optimistic about building long-term wealth.",
  },
  {
    name: 'Dr. Sandeep & Dr. Mallika Thakkar',
    tag: '7 years of goal-based investing',
    quote:
      'Seven years ago we began a goal-based mutual fund plan with Pragnesh Aslot. Regular reviews, disciplined SIPs and timely rebalancing kept us on track through every market cycle. We now have a clear, data-driven path to a retirement corpus we can rely on.',
  },
  {
    name: 'Rasna Desai',
    tag: 'Predictable monthly income',
    quote:
      "I love to travel, but I didn't want sleepless nights about my cash flows. The team built a ladder of senior-secured NCDs and paired it with a SIP + SWP plan, so monthly income is predictable while my core capital stays aligned to my risk comfort. I can plan trips without second-guessing my finances.",
  },
  {
    name: 'Agamsharan Barot',
    tag: 'From FDs to markets, with confidence',
    quote:
      'I was FD-only and hesitant about markets. Ishan eased me in with a systematic plan, clear risk limits, staged entries, and enough stability so I could sleep at night while still aiming to beat long-term inflation. It felt thoughtful, not pushy.',
  },
];

/**
 * All five readable at once. An auto-rotating carousel hid four of the firm's
 * strongest assets behind a timer.
 */
const TestimonialsSection = () => (
  <section id="stories" className="section-y bg-canvas">
    <div className="container-page">
      <p className="section-label">Client stories</p>
      <h2 className="h2 mt-4 max-w-2xl text-forest">Real people, tangible outcomes</h2>

      <ul className="mt-14 columns-1 gap-8 lg:columns-2 [&>li]:mb-8 [&>li]:break-inside-avoid">
        {STORIES.map((s) => (
          <li key={s.name} className="border-t border-border pt-6">
            <p className="meta font-medium text-growth">{s.tag}</p>
            <blockquote className="prose-sm-x mt-3 text-ink/80">
              <p>{s.quote}</p>
            </blockquote>
            <p className="meta mt-4 text-ink/50">{s.name}</p>
          </li>
        ))}
      </ul>

      {/* COMPLIANCE BLOCK — editable, legible, not hidden micro-text. */}
      <p className="meta measure mt-4 border-t border-border pt-6 text-ink/55">
        {DISCLAIMER_TESTIMONIALS}
      </p>
    </div>
  </section>
);

export default TestimonialsSection;
