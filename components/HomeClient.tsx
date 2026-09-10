import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import JourneySection from '@/components/JourneySection';
import Navigation from '@/components/Navigation';
import ProcessSection from '@/components/ProcessSection';
import StatsBar from '@/components/StatsBar';
import TestimonialsSection from '@/components/TestimonialsSection';
import ValuePillars from '@/components/ValuePillars';

/**
 * Section rhythm alternates canvas → surface → forest so no two neighbours
 * share a background, and the one dark block is the journey.
 */
export default function HomeClient({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <StatsBar />
        <ValuePillars />
        <JourneySection />
        <AboutSection />
        <ProcessSection />
        <TestimonialsSection />
        {children}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
