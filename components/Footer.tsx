import Link from 'next/link';
import { InstagramIcon, LinkedInIcon } from '@/components/BrandIcons';
import logo from '@/assets/images/footer_logo.png';
import { DISCLAIMER_MF, EMAIL } from '@/lib/site';

const QUICK = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About Us' },
  { href: '/#process', label: 'Our Process' },
  { href: '/#insights', label: 'Insights' },
  { href: '/#contact', label: 'Contact' },
];

const LEGAL = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
  { href: '/disclaimer', label: 'Disclaimer' },
  { href: '/regulatory-information', label: 'Regulatory Information' },
];

const Footer = () => (
  <footer className="bg-forest text-white">
    <div className="container-page py-16 md:py-20">
      <div className="grid gap-y-12 md:grid-cols-12 md:gap-x-12">
        <div className="md:col-span-5">
          <img
            src={logo.src}
            alt="Aslot Wealth Advisor"
            className="h-11 w-auto brightness-0 invert"
            width={493}
            height={144}
          />
          <p className="prose-sm-x measure-tight mt-5 text-white/65">
            Personalised, Purpose-Driven Portfolios Built for the Long Run
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="https://www.linkedin.com/in/ishan-aslot/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aslot Wealth Advisor on LinkedIn"
              className="border border-white/25 p-2.5 transition-colors hover:bg-white hover:text-forest"
            >
              <LinkedInIcon size={17} />
            </a>
            <a
              href="https://www.instagram.com/aslotwealth"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aslot Wealth Advisor on Instagram"
              className="border border-white/25 p-2.5 transition-colors hover:bg-white hover:text-forest"
            >
              <InstagramIcon size={17} />
            </a>
          </div>
        </div>

        <nav className="md:col-span-3" aria-label="Quick links">
          <h2 className="meta font-medium text-white/75">Quick links</h2>
          <ul className="mt-4 space-y-2.5">
            {QUICK.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="prose-sm-x text-white/65 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="md:col-span-4" aria-label="Legal">
          <h2 className="meta font-medium text-white/75">Legal</h2>
          <ul className="mt-4 space-y-2.5">
            {LEGAL.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="prose-sm-x text-white/65 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${EMAIL}`}
            className="prose-sm-x mt-5 inline-block text-white/65 hover:text-white"
          >
            {EMAIL}
          </a>
        </nav>
      </div>

      {/* Trust badges — only things Aslot actually holds. */}
      <div className="mt-14 flex flex-wrap gap-3 border-t border-white/15 pt-8">
        <span className="meta border border-white/25 px-3 py-2 text-white/75">
          AMFI-registered Mutual Fund Distributor · <span className="tnum">ARN-126127</span>
        </span>
        <span className="meta border border-white/25 px-3 py-2 text-white/75">
          Serving families since <span className="tnum">1989</span>
        </span>
      </div>

      {/* COMPLIANCE BLOCK — editable, legible, never grey micro-text. */}
      <div className="mt-8 space-y-3">
        <p className="meta measure text-white/70">{DISCLAIMER_MF}</p>
        <p className="meta pt-3 text-white/65">
          © <span className="tnum">2026</span> Aslot Wealth Advisor. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
