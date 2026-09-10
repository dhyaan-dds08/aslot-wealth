'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  LineChart,
  Menu,
  MessageCircle,
  Phone,
  PieChart,
  Shield,
  Layers,
  X,
} from 'lucide-react';
import logo from '@/assets/images/logo.png';
import { Button } from '@/components/ui/button';
import { PHONE_DISPLAY, PHONE_HREF, WA_DEFAULT } from '@/lib/site';

const SERVICES = [
  {
    icon: PieChart,
    name: 'Review your existing portfolio',
    desc: 'Risk, overlap and tax efficiency',
    href: '/#review',
  },
  {
    icon: LineChart,
    name: 'Goal-based investing',
    desc: 'SIPs, SWPs and rebalancing',
    href: '/#goals',
  },
  {
    icon: Layers,
    name: 'Beyond mutual funds',
    desc: 'PMS, AIFs, NCDs, MLDs, PE co-invest',
    href: '/#beyond',
  },
  {
    icon: Shield,
    name: 'Protection',
    desc: 'Insurance advisory',
    href: '/#protection',
  },
];

const ABOUT = [
  { name: 'Our legacy', desc: 'Three decades since 1989', href: '/#about' },
  { name: 'Meet the team', desc: 'The family behind your portfolio', href: '/#team' },
  { name: 'Why Aslot', desc: 'How we do things differently', href: '/#why' },
];

/** Sections tracked for the sliding active underline. */
const SECTIONS = [
  { id: 'about', key: 'about' },
  { id: 'team', key: 'about' },
  { id: 'why', key: 'about' },
  { id: 'services', key: 'services' },
  { id: 'process', key: 'process' },
  { id: 'stories', key: 'stories' },
  { id: 'insights', key: 'insights' },
];

type MenuKey = 'about' | 'services' | null;

const Navigation = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<MenuKey>(null);
  const [showBar, setShowBar] = useState(false);
  const [sectionActive, setSectionActive] = useState('');

  // Off the homepage the active link is a pure function of the route, so it
  // is derived during render rather than pushed through state in an effect.
  const active = isHome ? sectionActive : pathname.startsWith('/blog') ? 'insights' : '';

  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastY = useRef(0);
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [underline, setUnderline] = useState({ left: 0, width: 0, on: false });

  /* ── Scroll: compact header, mobile hide/show, sticky bar ─────────── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      // Only hide after a deliberate 10px move, so it never flickers.
      if (Math.abs(y - lastY.current) > 10) {
        setHidden(y > lastY.current && y > 200);
        lastY.current = y;
      }
      setShowBar(y > 420);
    };
    // Measure after paint, never synchronously inside the effect.
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  /* ── Active section for the underline ─────────────────────────────── */
  useEffect(() => {
    if (!isHome) return;
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    // Track which sections are inside the band so the underline clears when
    // the reader is between sections (e.g. back at the hero) instead of
    // leaving the last match stuck on.
    const inBand = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) inBand.add(e.target.id);
          else inBand.delete(e.target.id);
        });
        const first = SECTIONS.find((s) => inBand.has(s.id));
        setSectionActive(first ? first.key : '');
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  /* ── Slide the underline to the active link ───────────────────────── */
  useEffect(() => {
    // Measured after paint so offsets reflect the settled header height.
    const frame = requestAnimationFrame(() => {
      const el = active ? linkRefs.current[active] : null;
      if (!el) {
        setUnderline((u) => (u.on ? { ...u, on: false } : u));
        return;
      }
      // The <nav> is position:relative, so it IS the offsetParent — offsetLeft
      // is already relative to it and must not be adjusted again.
      setUnderline({ left: el.offsetLeft, width: el.offsetWidth, on: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [active, scrolled]);

  /* ── Body lock + Esc for the mobile sheet ─────────────────────────── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setOpenMenu(null);
      setMobileOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  /* ── Hover intent: 150ms to open, 250ms to close ──────────────────── */
  const hoverOpen = (key: MenuKey) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setOpenMenu(key), 150);
  };
  const hoverClose = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setOpenMenu(null), 250);
  };

  const go = useCallback(
    (href: string) => (e: React.MouseEvent) => {
      setMobileOpen(false);
      setOpenMenu(null);
      if (!isHome || !href.startsWith('/#')) return;
      e.preventDefault();
      document.querySelector(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    },
    [isHome],
  );

  const navLink = (key: string, label: string, href: string) => (
    <Link
      ref={(el) => {
        linkRefs.current[key] = el;
      }}
      href={href}
      onClick={go(href)}
      aria-current={active === key ? 'true' : undefined}
      className={`nav-link relative py-1 text-[0.9375rem] transition-colors duration-150 ${active === key ? 'text-forest' : 'text-ink/75 hover:text-forest'
        }`}
    >
      {label}
    </Link>
  );

  const dropTrigger = (key: 'about' | 'services', label: string) => (
    <button
      type="button"
      ref={(el) => {
        linkRefs.current[key] = el as unknown as HTMLAnchorElement;
      }}
      onClick={() => setOpenMenu(openMenu === key ? null : key)}
      onMouseEnter={() => hoverOpen(key)}
      aria-expanded={openMenu === key}
      aria-controls={`menu-${key}`}
      className={`nav-link relative flex items-center gap-1 py-1 text-[0.9375rem] transition-colors duration-150 ${active === key || openMenu === key ? 'text-forest' : 'text-ink/75 hover:text-forest'
        }`}
    >
      {label}
      <ChevronDown
        size={14}
        className={`transition-transform duration-250 ${openMenu === key ? 'rotate-180' : ''}`}
      />
    </button>
  );

  return (
    <>
      {/* Utility bar — desktop only, scrolls away with the page. */}
      <div className="hidden bg-forest text-white lg:block">
        <div className="container-page flex h-8 items-center justify-between">
          <p className="meta text-white/70">
            AMFI-registered Mutual Fund Distributor · <span className="tnum">ARN-126127</span>
          </p>
          <p className="meta text-white/70">
            Mon–Sat 10:30 AM–7 PM ·{' '}
            <a href={PHONE_HREF} className="tnum hover:text-white">
              {PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </div>

      <header
        ref={navRef}
        onMouseLeave={hoverClose}
        className={`sticky top-0 z-50 transition-[transform,background-color,height,border-color] duration-250 ease-soft-io ${scrolled
          ? 'border-b border-border bg-canvas/92 backdrop-blur-md supports-[not(backdrop-filter:blur(0))]:bg-canvas'
          : 'border-b border-transparent bg-canvas'
          } ${hidden && !openMenu ? '-translate-y-full lg:translate-y-0' : 'translate-y-0'}`}
      >
        <div className="container-page">
          <div
            className={`flex items-center justify-between gap-6 transition-[height] duration-250 ${scrolled ? 'h-16' : 'h-20'
              }`}
          >
            <Link href="/#home" onClick={go('/#home')} className="flex items-center">
              <img
                src={logo.src}
                alt="Aslot Wealth Advisor"
                className={`w-auto transition-transform duration-250 ${scrolled ? 'h-9' : 'h-10'}`}
                width={493}
                height={144}
              />
            </Link>

            <nav className="relative hidden items-center gap-7 lg:flex" aria-label="Main">
              {dropTrigger('about', 'About')}
              {dropTrigger('services', 'Services')}
              {navLink('process', 'How we work', '/#process')}
              {navLink('stories', 'Client stories', '/#stories')}
              {navLink('insights', 'Insights', '/#insights')}

              {/* One underline that slides, rather than five that flicker. */}
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
                className="group/wa flex size-10 items-center justify-center rounded-full border border-border text-forest transition-colors duration-150 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
              >
                <MessageCircle
                  size={17}
                  className="transition-transform duration-150 group-hover/wa:-rotate-[8deg]"
                />
              </a>
              <Button variant="cta" asChild>
                <Link href="/#contact" onClick={go('/#contact')}>
                  Book a portfolio review
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

        {/* ── Dropdown panels ─────────────────────────────────────────── */}
        {openMenu && (
          <div
            id={`menu-${openMenu}`}
            onMouseEnter={() => hoverTimer.current && clearTimeout(hoverTimer.current)}
            className="nav-panel absolute inset-x-0 top-full hidden border-b border-border bg-canvas lg:block"
          >
            <div className="container-page py-8">
              {openMenu === 'services' ? (
                <>
                  <div className="grid grid-cols-5 gap-8">
                    {SERVICES.map(({ icon: Icon, name, desc, href }) => (
                      <Link
                        key={name}
                        href={href}
                        onClick={go(href)}
                        className="group/item -m-3 rounded-sm p-3 transition-colors duration-150 hover:bg-surface"
                      >
                        <Icon
                          size={20}
                          className="text-growth transition-transform duration-150 group-hover/item:translate-x-0.5"
                        />
                        <p className="mt-3 text-[0.9375rem] font-medium text-forest">{name}</p>
                        <p className="meta mt-1 text-ink/55">{desc}</p>
                      </Link>
                    ))}

                    <div className="border-l border-border pl-8">
                      <p className="text-[0.9375rem] font-medium text-forest">
                        Not sure where to start?
                      </p>
                      <Button variant="cta" size="sm" className="mt-4" asChild>
                        <Link href="/#contact" onClick={go('/#contact')}>
                          Book a portfolio review
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* COMPLIANCE BLOCK */}
                  <p className="meta mt-8 border-t border-border pt-4 text-ink/45">
                    For illustrative purposes only. All investments are subject to market risks.
                  </p>
                </>
              ) : (
                <div className="grid max-w-3xl grid-cols-3 gap-8">
                  {ABOUT.map((a) => (
                    <Link
                      key={a.name}
                      href={a.href}
                      onClick={go(a.href)}
                      className="-m-3 rounded-sm p-3 transition-colors duration-150 hover:bg-surface"
                    >
                      <p className="text-[0.9375rem] font-medium text-forest">{a.name}</p>
                      <p className="meta mt-1 text-ink/55">{a.desc}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Dim behind an open dropdown. */}
      {openMenu && (
        <div
          aria-hidden
          onClick={() => setOpenMenu(null)}
          className="fixed inset-0 z-40 hidden bg-ink/[0.08] lg:block"
        />
      )}

      {/* ── Mobile sheet ───────────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[70] flex flex-col bg-canvas lg:hidden">
          <div className="container-page flex h-20 shrink-0 items-center justify-between">
            <img src={logo.src} alt="Aslot Wealth Advisor" className="h-10 w-auto" width={493} height={144} />
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

          <nav className="container-page flex-1 overflow-y-auto pb-6" aria-label="Mobile">
            {(['about', 'services'] as const).map((key) => {
              const items = key === 'about' ? ABOUT : SERVICES;
              const open = mobileGroup === key;
              return (
                <div key={key} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setMobileGroup(open ? null : key)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between py-5 text-left font-serif text-[1.75rem] text-forest"
                  >
                    {key === 'about' ? 'About' : 'Services'}
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-250 ${open ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* grid-rows trick animates height without a fixed value. */}
                  <div
                    className="grid transition-[grid-template-rows] duration-250 ease-soft-io"
                    style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <ul className="pb-5">
                        {items.map((it) => (
                          <li key={it.name}>
                            <Link
                              href={it.href}
                              onClick={go(it.href)}
                              className="block py-2.5 text-ink/70"
                            >
                              {it.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}

            {[
              ['How we work', '/#process'],
              ['Client stories', '/#stories'],
              ['Insights', '/#insights'],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={go(href)}
                className="block border-b border-border py-5 font-serif text-[1.75rem] text-forest"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="container-page shrink-0 border-t border-border py-5">
            <Button variant="cta" size="lg" className="w-full" asChild>
              <Link href="/#contact" onClick={go('/#contact')}>
                Book a portfolio review
              </Link>
            </Button>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Button variant="outline" asChild>
                <a href={PHONE_HREF}>
                  <Phone size={16} />
                  Call
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </Button>
            </div>
            <p className="meta mt-4 text-ink/45">
              Mon–Sat 10:30 AM–7 PM · <span className="tnum">ARN-126127</span>
            </p>
          </div>
        </div>
      )}

      {/* ── Mobile sticky action bar ───────────────────────────────────── */}
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
