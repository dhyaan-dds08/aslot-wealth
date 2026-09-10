'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, MessageCircle, Phone, X } from 'lucide-react';
import logo from '@/assets/images/logo.png';
import { Button } from '@/components/ui/button';
import { NAV_LINKS, PHONE_DISPLAY, PHONE_HREF, WA_DEFAULT } from '@/lib/site';

/**
 * Flat navigation. The dropdown mega-menus were removed: the site has no
 * Services or About sub-pages to put in them, so they were scaffolding for
 * content that does not exist.
 */

/** Section ids in document order, for the sliding active underline. */
const SECTION_FOR = new Map([
  ['about', '/#about'],
  ['team', '/#about'],
  ['process', '/#process'],
  ['stories', '/#stories'],
  ['insights', '/#insights'],
  ['contact', '/#contact'],
]);

const Navigation = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const [sectionActive, setSectionActive] = useState('');

  const active = isHome ? sectionActive : pathname.startsWith('/blog') ? '/#insights' : '';

  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [underline, setUnderline] = useState({ left: 0, width: 0, on: false });

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setShowBar(y > 420);
    };
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const ids = [...SECTION_FOR.keys()];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const inBand = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) inBand.add(e.target.id);
          else inBand.delete(e.target.id);
        });
        const first = ids.find((id) => inBand.has(id));
        setSectionActive(first ? SECTION_FOR.get(first)! : '');
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const el = active ? linkRefs.current[active] : null;
      if (!el) {
        setUnderline((u) => (u.on ? { ...u, on: false } : u));
        return;
      }
      setUnderline({ left: el.offsetLeft, width: el.offsetWidth, on: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [active, scrolled]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMobileOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const go = useCallback(
    (href: string) => (e: React.MouseEvent) => {
      setMobileOpen(false);
      if (!isHome || !href.startsWith('/#')) return;
      e.preventDefault();
      document.querySelector(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    },
    [isHome],
  );

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-canvas/95 backdrop-blur-md transition-[height,border-color] duration-250 ease-soft-io ${scrolled ? 'border-b border-border' : 'border-b border-transparent'
          }`}
      >
        <div className="container-page">
          <div
            className={`flex items-center justify-between gap-6 transition-[height] duration-250 ease-soft-io ${scrolled ? 'h-16' : 'h-20'
              }`}
          >
            <Link href="/#home" onClick={go('/#home')} className="flex items-center">
              <img
                src={logo.src}
                alt="Aslot Wealth Advisor"
                className={`w-auto transition-[height] duration-250 ${scrolled ? 'h-8' : 'h-10'}`}
                width={493}
                height={144}
              />
            </Link>

            <nav className="relative hidden items-center gap-8 lg:flex" aria-label="Main">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  ref={(el) => {
                    linkRefs.current[l.href] = el;
                  }}
                  href={l.href}
                  onClick={go(l.href)}
                  aria-current={active === l.href ? 'true' : undefined}
                  className={`py-1 text-[0.9375rem] transition-colors duration-150 ${active === l.href ? 'text-forest' : 'text-ink/70 hover:text-forest'
                    }`}
                >
                  {l.label}
                </Link>
              ))}

              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-1 h-0.5 bg-forest transition-all duration-250 ease-soft-io"
                style={{
                  left: underline.left,
                  width: underline.width,
                  opacity: underline.on ? 1 : 0,
                }}
              />
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                title="Chat on WhatsApp"
                className="flex size-10 items-center justify-center border border-border text-forest transition-colors duration-150 hover:border-forest hover:bg-forest hover:text-white"
              >
                <MessageCircle size={17} />
              </a>
              <Button variant="cta" asChild>
                <Link href="/#contact" onClick={go('/#contact')}>
                  Schedule a Call
                </Link>
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="-mr-2 flex size-11 items-center justify-center text-forest lg:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[70] flex flex-col bg-canvas lg:hidden">
          <div className="container-page flex h-20 shrink-0 items-center justify-between">
            <img src={logo.src} alt="Aslot Wealth Advisor" className="h-9 w-auto" width={493} height={144} />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="-mr-2 flex size-11 items-center justify-center text-forest"
              aria-label="Close menu"
              autoFocus
            >
              <X size={24} />
            </button>
          </div>

          <nav className="container-page flex-1 overflow-y-auto" aria-label="Mobile">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={go(l.href)}
                className="block border-b border-border py-5 font-serif text-[1.625rem] text-forest"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="container-page shrink-0 border-t border-border py-5">
            <Button variant="cta" size="lg" className="w-full" asChild>
              <Link href="/#contact" onClick={go('/#contact')}>
                Schedule a Call
              </Link>
            </Button>
            <p className="meta mt-4 text-ink/45">
              Mon–Sat 10:30 AM–7:00 PM ·{' '}
              <a href={PHONE_HREF} className="tnum">
                {PHONE_DISPLAY}
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Mobile action bar — appears once the hero CTAs scroll away. */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border bg-canvas transition-transform duration-250 ease-soft-io lg:hidden ${showBar && !mobileOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <a
          href={PHONE_HREF}
          className="flex min-h-[3.25rem] items-center justify-center gap-2 text-[0.9375rem] font-medium text-forest"
        >
          <Phone size={17} />
          Call
        </a>
        <a
          href={WA_DEFAULT}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[3.25rem] items-center justify-center gap-2 border-l border-border bg-marigold text-[0.9375rem] font-medium text-ink"
        >
          <MessageCircle size={17} />
          WhatsApp
        </a>
      </div>
    </>
  );
};

export default Navigation;
