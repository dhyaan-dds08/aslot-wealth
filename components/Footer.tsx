import logo from '@/assets/images/footer_logo.png';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-white via-slate-50 to-white py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center" onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}>
              <img src={logo.src} alt="aslot wealth advisor" className="h-12" />
            </a>
            <p className="text-sm text-primary md:max-w-[250px]">
              Personalised Purpose-Driven Portfolio Built for the Long Run
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/ishan-aslot/"
                className="text-primary hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/aslotwealth?igsh=NGxiMHA0ZXkxYzI5"
                className="text-primary hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:info@aslotwealthadvisor.com"
                className="text-primary hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-primary hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#process" className="text-primary hover:text-accent transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-primary hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-primary hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-primary hover:text-accent transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/regulatory-information" className="text-primary hover:text-accent transition-colors">
                  Regulatory Information
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary pt-8 text-center">
          <p className="text-sm text-primary">
            © {currentYear} Aslot Wealth Advisor. All rights reserved.
          </p>
          <p className="text-xs text-primary mt-2">
            AMFI registered Mutual Fund Distributor ARN-126127
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
