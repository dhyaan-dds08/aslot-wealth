import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919328826939?text=Hi, I would like to schedule a consultation', '_blank');
  };

  return (
    <section id="contact" className="py-0 md:py-0 bg-background">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
            Let&apos;s Start <span className="bg-gradient-to-r from-yellow-400 via-accent to-yellow-600 bg-clip-text text-transparent">Your Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule a discovery call or reach out to us directly
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background"
                  aria-label="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background"
                  aria-label="Email Address"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-background"
                  aria-label="Phone Number"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your investment goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-background"
                  aria-label="Message"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold py-6 rounded-full"
              >
                Send Message
              </Button>
            </form>


            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground mb-3">Or connect instantly:</p>
              <Button
                onClick={handleWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <svg
                  className="mr-2"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-8 space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-accent mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-primary mb-2">Office Address</h4>
                  <p className="text-muted-foreground">
                    9, Gr. Floor, West side, Vishwakarma Society<br />
                    b/h Vishwakarma temple, Nr. ITC Building<br />
                    Majura Gate, Surat, Gujarat, India - 395002.
                  </p>
                  <p className="text-sm text-accent mt-2">Visitor parking available</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-accent mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-primary mb-2">Phone</h4>
                  <a href="tel:+919328826939" className="text-muted-foreground">
                    +91 9328826939
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-accent mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-primary mb-2">Email</h4>
                  <a href="mailto:info@aslotwealth.in" className="text-muted-foreground">
                    info@aslotwealth.in
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="text-accent mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-primary mb-2">Office Hours</h4>
                  <p className="text-muted-foreground">Monday - Saturday: 10:30 AM to 7:00 PM </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="glass-card rounded-2xl p-0 h-64 flex items-center justify-center bg-muted/20 border-2 border-accent/30">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3720.2642259473105!2d72.81732347526084!3d21.18166008050618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDEwJzU0LjAiTiA3MsKwNDknMTEuNiJF!5e0!3m2!1sen!2sin!4v1762702185037!5m2!1sen!2sin" 
    width="600" 
    height="250" 
    allowFullScreen 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-2xl"
  />
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
