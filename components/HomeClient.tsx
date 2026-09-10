import AboutSection from '@/components/AboutSection';
import BackToTop from '@/components/BackToTop';
import ClientVoices from '@/components/ClientVoices';
import ComparisonSection from '@/components/ComparisonSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FounderStatement from '@/components/FounderStatement';
import HeroSection from '@/components/HeroSection';
import JourneySection from '@/components/JourneySection';
import Navigation from '@/components/Navigation';
import ProcessSection from '@/components/ProcessSection';
import ValuePillars from '@/components/ValuePillars';

/**
 * Section order follows the brief: proof immediately after the hero, the
 * founder statement as a breath, then differentiation, services, and the
 * legacy as the one dark block on the page.
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
        <ClientVoices />
        <FounderStatement />
        <ComparisonSection />
        <ValuePillars />
        <JourneySection />
        <AboutSection />
        <ProcessSection />
        {children}
        <ContactSection />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
