"use client";

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import ProcessSection from "@/components/ProcessSection";
import StatsBar from "@/components/StatsBar";
import { LineGraphDivider, WaveDivider, AngleDivider } from "@/components/SVGDividers";
import TestimonialsSection from "@/components/TestimonialsSection";
import ValuePillars from "@/components/ValuePillars";
import Lenis from 'lenis';
import { useEffect } from "react";

interface HomeClientProps {
  children?: React.ReactNode;
}

export default function HomeClient({ children }: HomeClientProps) {
  useEffect(() => {
    // Create Lenis instance
    const lenis = new Lenis({
      duration: 1.2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <StatsBar />
        <ValuePillars />
        <LineGraphDivider />
        <AboutSection />
        <WaveDivider />
        <ProcessSection />
        <AngleDivider flip />
        <TestimonialsSection />
        
        {children}
        {/* <WaveDivider /> */}
        <ContactSection />
        <LineGraphDivider />
        
      </main>
      <Footer />
    </div>
  );
}