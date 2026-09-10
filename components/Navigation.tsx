"use client";
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/images/logo.png'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/#home' },
    { label: 'About Us', href: '/#about' },
    { label: 'Process', href: '/#process' },
    { label: 'Client Stories', href: '/#testimonials' },
    { label: 'Contact', href: '/#contact' },
    // { label: 'Blogs', href: '/#blogs' },
  ];

  const scrollToSection = (href: string) => {
    // Extract the hash from the href (e.g., '/#about' -> '#about')
    const hash = href.includes('#') ? href.split('#')[1] : '';

    // If we're on the home page, scroll directly
    if (pathname === '/') {
      const element = document.querySelector(`#${hash}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    } else {
      // If we're on another page, navigate to home with hash
      // Next.js will handle the navigation, then we scroll after page load
      window.location.href = href;
    }
  };

  // Handle scrolling to hash on page load (when coming from another page)
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname]);

  useEffect(() => {
    // block the scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'border-b border-border' : 'border-b border-transparent'
        }`}
    >
      <div className="container-page">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/#home"
            className="flex items-center space-x-2"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault();
                scrollToSection('/#home');
              }
            }}
          >
            <img src={logo.src} alt="aslot wealth advisor" className="h-28" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (pathname === '/') {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }
                }}
                className="text-sm text-primary/80 hover:text-accent transition-colors duration-300"
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="default"
              onClick={() => scrollToSection('/#contact')}
              aria-label="Schedule a consultation call"
            >
              Schedule a Call
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-primary animate-fade-in">
            <div className="flex flex-col p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (pathname === '/') {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }
                  }}
                  className="border-b border-white/10 py-4 font-serif text-2xl font-light text-white transition-colors duration-300 hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                variant="onDarkSolid"
                size="lg"
                onClick={() => scrollToSection('/#contact')}
                className="mt-8 w-full"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;