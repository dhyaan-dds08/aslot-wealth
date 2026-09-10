'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, Clock, Copy, MapPin, MessageCircle, Navigation2, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/motion/Reveal';
import { EMAIL, PHONE_DISPLAY, PHONE_HREF, WA_DEFAULT, waLink } from '@/lib/site';

const ADDRESS =
  '9, Gr. Floor, West Side, Vishwakarma Society, b/h Vishwakarma Temple, Nr. ITC Building, Majura Gate, Surat, Gujarat – 395002';

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3720.2642259473105!2d72.81732347526084!3d21.18166008050618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDEwJzU0LjAiTiA3MsKwNDknMTEuNiJF!5e0!3m2!1sen!2sin!4v1762702185037!5m2!1sen!2sin';

const DIRECTIONS = 'https://maps.google.com/?q=21.18166,72.81732';

/** Mon–Sat, 10:30–19:00 IST. */
const isOpenNow = () => {
  const now = new Date(
    new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
  );
  const day = now.getDay();
  if (day === 0) return false;
  const mins = now.getHours() * 60 + now.getMinutes();
  return mins >= 630 && mins < 1140;
};

const CopyButton = ({ value, label }: { value: string; label: string }) => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setDone(false), 2000);
    return () => clearTimeout(t);
  }, [done]);

  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard?.writeText(value).then(() => setDone(true));
      }}
      className="meta inline-flex items-center gap-1.5 text-ink/45 transition-colors duration-150 hover:text-forest"
      aria-label={`Copy ${label}`}
    >
      {done ? <Check size={13} /> : <Copy size={13} />}
      {done ? 'Copied' : 'Copy'}
    </button>
  );
};

const ContactSection = () => {
  const [open, setOpen] = useState<boolean | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const sendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    window.open(waLink(`Hi, my name is ${name}.\n\n${message}`), '_blank');
    setName('');
    setMessage('');
    setTimeout(() => setSending(false), 1200);
  };

  // Computed after mount — the server has no notion of the visitor's clock.
  useEffect(() => {
    const frame = requestAnimationFrame(() => setOpen(isOpenNow()));
    return () => cancelAnimationFrame(frame);
  }, []);

  // The real map only loads as it approaches the viewport.
  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        setMapReady(true);
        observer.disconnect();
      },
      { rootMargin: '200px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="section-y bg-canvas">
      <div className="container-page">
        <Reveal>
          <p className="section-label">Contact</p>
          <h2 className="h2 mt-4 max-w-xl text-forest">Let&apos;s Start Your Journey</h2>
          <p className="lede mt-6 text-ink/65">
            Schedule a discovery call or reach out to us directly.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-16 gap-y-14 lg:grid-cols-2">
          {/* Message form — writes straight into WhatsApp, no inbox in between. */}
          <div>
            <form onSubmit={sendWhatsApp} className="space-y-5">
              <div>
                <label htmlFor="wa-name" className="meta block pb-2 font-medium text-forest">
                  Your name
                </label>
                <input
                  id="wa-name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoComplete="name"
                  className="h-12 w-full border border-input bg-surface px-4 text-[0.9375rem] outline-none transition-colors duration-150 focus:border-forest"
                />
              </div>

              <div>
                <label htmlFor="wa-msg" className="meta block pb-2 font-medium text-forest">
                  Message
                </label>
                <textarea
                  id="wa-msg"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  placeholder="Tell us about your goals, or what you'd like reviewed…"
                  className="w-full resize-y border border-input bg-surface p-4 text-[0.9375rem] outline-none transition-colors duration-150 placeholder:text-ink/35 focus:border-forest"
                />
              </div>

              <Button type="submit" variant="cta" size="lg" className="w-full">
                <MessageCircle />
                {sending ? 'Opening WhatsApp…' : 'Send via WhatsApp'}
              </Button>

              <p className="meta text-ink/45">
                Opens WhatsApp with your message ready to send. Nothing is stored on this site.
              </p>
            </form>
          </div>

          <Reveal stagger className="space-y-7">
            <div className="flex gap-4">
              <MapPin className="mt-1 shrink-0 text-growth" size={18} aria-hidden />
              <div>
                <p className="meta font-medium text-forest">Address</p>
                <p className="prose-sm-x mt-1.5 text-ink/70">{ADDRESS}.</p>
                <p className="prose-sm-x text-growth">Visitor parking available.</p>
                <div className="mt-2">
                  <CopyButton value={ADDRESS} label="address" />
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="mt-1 shrink-0 text-growth" size={18} aria-hidden />
              <div>
                <p className="meta font-medium text-forest">Phone</p>
                <a href={PHONE_HREF} className="prose-sm-x tnum mt-1.5 block text-ink/75 hover:text-forest">
                  {PHONE_DISPLAY}
                </a>
                <div className="mt-2">
                  <CopyButton value="+919328826939" label="phone number" />
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <MessageCircle className="mt-1 shrink-0 text-growth" size={18} aria-hidden />
              <div>
                <p className="meta font-medium text-forest">Email</p>
                <a href={`mailto:${EMAIL}`} className="prose-sm-x mt-1.5 block text-ink/75 hover:text-forest">
                  {EMAIL}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="mt-1 shrink-0 text-growth" size={18} aria-hidden />
              <div>
                <p className="meta font-medium text-forest">Office hours</p>
                <p className="prose-sm-x mt-1.5 text-ink/70">
                  Monday – Saturday, 10:30 AM – 7:00 PM
                </p>
                {open && (
                  <p className="meta mt-1.5 flex items-center gap-2 text-growth">
                    <span className="size-1.5 rounded-full bg-growth" aria-hidden />
                    Open now
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="cta" asChild>
                <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer">
                  <MessageCircle />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer">
                  <Navigation2 />
                  Get directions
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={PHONE_HREF}>
                  <Phone />
                  Call
                </a>
              </Button>
            </div>
            {/* Map belongs with the address. As a third child of a two-column
                grid it wrapped into row two, stranded under the form. */}
            <div ref={mapRef} className="!mt-10 h-64 border border-border bg-surface">
              {mapReady && (
                <iframe
                  title="Aslot Wealth Advisor office, Majura Gate, Surat"
                  src={MAP_SRC}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                />
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
