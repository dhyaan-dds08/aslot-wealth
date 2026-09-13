import AboutSection from '@/components/AboutSection';
import BackToTop from '@/components/BackToTop';
import ClientVoices from '@/components/ClientVoices';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import JourneySection from '@/components/JourneySection';
import Navigation from '@/components/Navigation';
import ProcessSection from '@/components/ProcessSection';
import StatsBar from '@/components/StatsBar';
import ValuePillars from '@/components/ValuePillars';

/**
 * Section order mirrors aslotwealth.com. Everything here is content that
 * exists on the live site — nothing invented to fill a layout.
 */
export default function HomeClient({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-forest focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <Navigation />

      <main id="main">
        <HeroSection />
        <StatsBar />
        <ValuePillars />
        <JourneySection />
        <AboutSection />
        <ProcessSection />
        <ClientVoices />
        {children}
        <ContactSection />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
