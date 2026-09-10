'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import logo from '@/assets/images/logo.png';
import { Button } from '@/components/ui/button';
import { NAV_LINKS, PHONE_HREF, WA_DEFAULT } from '@/lib/site';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock the page while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const go = (href: string) => (e: React.MouseEvent) => {
    setIsOpen(false);
    if (pathname !== '/') return;
    e.preventDefault();
    document.querySelector(href.replace('/', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-canvas transition-colors duration-200 ${scrolled ? 'border-b border-border' : 'border-b border-transparent'
          }`}
      >
        <div className="container-page">
          <div className="flex h-[4.5rem] items-center justify-between gap-6">
            <Link href="/#home" onClick={go('/#home')} className="flex items-center">
              <img
                src={logo.src}
                alt="Aslot Wealth Advisor"
                className="h-9 w-auto md:h-11"
                width={493}
                height={144}
              />
            </Link>

            <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={go(link.href)}
                  className="prose-sm-x text-ink/75 transition-colors hover:text-forest"
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="cta" asChild>
                <Link href="/#contact" onClick={go('/#contact')}>
                  Schedule a Call
                </Link>
              </Button>
            </nav>

            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              className="lg:hidden -mr-2 p-2 text-forest"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden border-t border-border bg-canvas">
            <nav className="container-page py-2" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={go(link.href)}
                  className="block border-b border-border py-4 font-serif text-xl text-forest"
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="cta" size="lg" className="my-5 w-full" asChild>
                <Link href="/#contact" onClick={go('/#contact')}>
                  Schedule a Call
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Mobile action bar — the two things a Surat client actually wants. */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border bg-canvas md:hidden">
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-2 py-4 text-[0.9375rem] font-medium text-forest"
        >
          <Phone size={17} />
          Call
        </a>
        <a
          href={WA_DEFAULT}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 border-l border-border bg-marigold py-4 text-[0.9375rem] font-medium text-ink"
        >
          <MessageCircle size={17} />
          WhatsApp
        </a>
      </div>
    </>
  );
};

export default Navigation;
