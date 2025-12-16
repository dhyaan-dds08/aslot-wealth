"use client";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import ProcessSection from "@/components/ProcessSection";
import StatsBar from "@/components/StatsBar";
import { LineGraphDivider, WaveDivider, AngleDivider } from "@/components/SVGDividers";
import TestimonialsSection from "@/components/TestimonialsSection";
import ValuePillars from "@/components/ValuePillars";
import Lenis from 'lenis'
import { useEffect } from "react";

export default function Home() {

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

  // const fetchLinkedinPost = async () => {
  //   try {
  //     // Method 1: Using cookies (RECOMMENDED)
  //     const response = await fetch("/api/linkedin-activity-puppeteer", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         url: "https://www.linkedin.com/in/ishan-aslot/recent-activity/all/",
  //         cookies: [
  //           {
  //             name: "li_at",
  //             value: "YOUR_li_at_COOKIE_VALUE_HERE", // Replace with your actual cookie
  //             domain: ".linkedin.com",
  //             path: "/",
  //             httpOnly: true,
  //             secure: true,
  //             sameSite: "None"
  //           },
  //           {
  //             name: "JSESSIONID",
  //             value: "YOUR_JSESSIONID_VALUE_HERE", // Replace with your actual cookie
  //             domain: ".www.linkedin.com",
  //             path: "/",
  //             httpOnly: true,
  //             secure: true,
  //             sameSite: "None"
  //           }
  //         ]
  //       })
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log("LinkedIn Activity Data:", data);

  //       if (data.success && data.activities) {
  //         console.log(`Found ${data.count} activities:`);
  //         data.activities.forEach((activity: any, index: number) => {
  //           console.log(`\n${index + 1}. ${activity.title}`);
  //           console.log(`   Content: ${activity.content.substring(0, 100)}...`);
  //           console.log(`   Time: ${activity.time}`);
  //           if (activity.link) {
  //             console.log(`   Link: ${activity.link}`);
  //           }
  //         });
  //       }

  //       return data;
  //     } else {
  //       const error = await response.json();
  //       console.error("Failed to fetch:", error);
  //     }

  //   } catch (error) {
  //     console.error("Error Fetching LinkedIn Post:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchLinkedinPost()
  // }, [])

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
        <WaveDivider />
        <ContactSection />
        <LineGraphDivider />
        {/* <BlogSection /> */}
      </main>
      <Footer />
    </div>
  );
}
