'use client';

import { useState } from 'react';
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { EMAIL, PHONE_DISPLAY, PHONE_HREF, WA_DEFAULT, waLink } from '@/lib/site';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(waLink(`Hi, my name is ${name}.\n\n${message}`), '_blank');
    setName('');
    setMessage('');
  };

  return (
    <section id="contact" className="section-y bg-surface">
      <div className="container-page">
        <p className="section-label">Contact</p>
        <h2 className="h2 mt-4 max-w-2xl text-forest">Let&apos;s start your journey</h2>
        <p className="lede measure mt-5 text-ink/65">
          Schedule a discovery call or reach out to us directly.
        </p>

        <div className="mt-14 grid gap-x-16 gap-y-12 lg:grid-cols-2">
          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
              <div>
                <label htmlFor="name" className="meta block pb-2 font-medium text-ink/70">
                  Your name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="h-12 rounded-sm border-input bg-canvas"
                />
              </div>

              <div>
                <label htmlFor="message" className="meta block pb-2 font-medium text-ink/70">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your investment goals…"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={6}
                  className="rounded-sm border-input bg-canvas"
                />
              </div>

              <Button type="submit" variant="cta" size="lg" className="w-full">
                <MessageCircle />
                Send via WhatsApp
              </Button>
            </form>

            <div className="mt-6 border-t border-border pt-6">
              <p className="meta text-ink/55">Prefer not to fill a form?</p>
              <Button variant="outline" size="lg" className="mt-3 w-full" asChild>
                <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer">
                  Quick Consultation on WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Details */}
          <div>
            <dl className="space-y-7">
              <div className="flex gap-4">
                <MapPin className="mt-0.5 shrink-0 text-growth" size={18} aria-hidden />
                <div>
                  <dt className="meta font-medium text-forest">Office</dt>
                  <dd className="prose-sm-x mt-1.5 text-ink/65">
                    9, Gr. Floor, West Side, Vishwakarma Society, b/h Vishwakarma Temple,
                    Nr. ITC Building, Majura Gate, Surat, Gujarat, India – 395002.
                    <span className="mt-1 block text-growth">Visitor parking available.</span>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-0.5 shrink-0 text-growth" size={18} aria-hidden />
                <div>
                  <dt className="meta font-medium text-forest">Phone</dt>
                  <dd className="prose-sm-x mt-1.5">
                    <a href={PHONE_HREF} className="tnum text-ink/75 hover:text-forest">
                      {PHONE_DISPLAY}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="mt-0.5 shrink-0 text-growth" size={18} aria-hidden />
                <div>
                  <dt className="meta font-medium text-forest">Email</dt>
                  <dd className="prose-sm-x mt-1.5">
                    <a href={`mailto:${EMAIL}`} className="text-ink/75 hover:text-forest">
                      {EMAIL}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="mt-0.5 shrink-0 text-growth" size={18} aria-hidden />
                <div>
                  <dt className="meta font-medium text-forest">Office hours</dt>
                  <dd className="prose-sm-x mt-1.5 text-ink/65">
                    Monday – Saturday, 10:30 AM – 7:00 PM
                  </dd>
                </div>
              </div>
            </dl>

            <iframe
              title="Aslot Wealth Advisor office location, Majura Gate, Surat"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3720.2642259473105!2d72.81732347526084!3d21.18166008050618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDEwJzU0LjAiTiA3MsKwNDknMTEuNiJF!5e0!3m2!1sen!2sin!4v1762702185037!5m2!1sen!2sin"
              className="mt-9 h-60 w-full border border-border"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
