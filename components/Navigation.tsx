"use client";
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/images/logo.png'
import Image from 'next/image';
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white backdrop-blur-md shadow-lg' : 'bg-white'
        }`}
    >
      <div className="container mx-auto px-4">
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
                className="text-primary hover:text-accent transition-colors duration-300 font-medium"
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={() => scrollToSection('/#contact')}
              className="bg-accent hover:bg-accent/90 text-primary font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
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
          <div className="md:hidden absolute top-20 left-0 right-0 bg-primary backdrop-blur-md shadow-xl animate-fade-in">
            <div className="flex flex-col space-y-4 p-6">
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
                  className="text-primary-foreground hover:text-accent transition-colors duration-300 font-medium text-lg"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                onClick={() => scrollToSection('/#contact')}
                className="bg-accent hover:bg-accent/90 text-primary font-semibold px-6 py-3 rounded-full w-full"
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