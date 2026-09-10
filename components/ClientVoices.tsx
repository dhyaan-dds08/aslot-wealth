import Reveal from '@/components/motion/Reveal';
import { DISCLAIMER_TESTIMONIALS } from '@/lib/site';

const STORIES = [
  {
    name: 'Dipak Patel',
    quote:
      'High taxes were eating into my returns. Ishan mapped my cash flows and built a tax-efficient portfolio structure that helped me plan 6 digit potential tax savings in a year. Their rare CA + wealth advisory combo really does hit two targets with one arrow.',
  },
  {
    name: 'Parimal Patel',
    quote:
      "I'd never heard of AIFs before. After screening more than ten managers, Ishan explained the strategies, risks and fit; I chose two funds and the process was seamless. It's been an exciting learning curve and I'm optimistic about building long-term wealth.",
  },
  {
    name: 'Dr. Sandeep & Dr. Mallika Thakkar',
    quote:
      'Seven years ago we began a goal-based mutual fund plan with Pragnesh Aslot. Regular reviews, disciplined SIPs and timely rebalancing kept us on track through every market cycle. We now have a clear, data-driven path to a retirement corpus we can rely on.',
  },
  {
    name: 'Rasna Desai',
    quote:
      "I love to travel, but I didn't want sleepless nights about my cash flows. The team built a ladder of senior-secured NCDs and paired it with a SIP + SWP plan, so monthly income is predictable while my core capital stays aligned to my risk comfort. I can plan trips without second-guessing my finances.",
  },
  {
    name: 'Agamsharan Barot',
    quote:
      'I was FD-only and hesitant about markets. Ishan eased me in with a systematic plan, clear risk limits, staged entries, and enough stability so I could sleep at night while still aiming to beat long-term inflation. It felt thoughtful, not pushy.',
  },
];

/**
 * Every quote in full, on the page. No carousel, no "Read full story"
 * dialog — a testimonial you have to click twice to read is a testimonial
 * nobody reads. A plain grid, not CSS columns: column balancing left a
 * dead gap mid-row and pushed reading order down instead of across.
 */
const ClientVoices = () => (
  <section id="stories" className="section-y bg-canvas">
    <div className="container-page">
      <Reveal>
        <p className="section-label">Client stories</p>
        <h2 className="h2 mt-4 max-w-2xl text-forest">Real People, Tangible Outcomes</h2>
        <p className="lede mt-6 text-ink/65">Stories of trust, growth, and financial freedom.</p>
      </Reveal>

      <ul className="mt-14 grid items-start gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {STORIES.map((s) => (
          <Reveal key={s.name} as="li" className="block">
            <figure className="border-t border-border pt-6">
              <blockquote className="prose-sm-x text-ink/80">{s.quote}</blockquote>
              <p className="meta mt-4 text-ink/50">{s.name}</p>
            </figure>
          </Reveal>
        ))}
      </ul>

      {/* COMPLIANCE BLOCK */}
      <p className="meta measure mt-12 text-ink/50">{DISCLAIMER_TESTIMONIALS}</p>
    </div>
  </section>
);

export default ClientVoices;
