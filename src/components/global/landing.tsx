import React from "react";
import HeroSection from "./hero";
import TestimonialsCarousel from "./testimonials";
import USPSection from "./usp-section";
import Footer from "./footer";
import HowItWorksSection from "./hero-section";

export default function Landing() {
  return (
    <>
      <HeroSection />
      <TestimonialsCarousel />
      <HowItWorksSection />
      <USPSection />
      <Footer />
    </>
  );
}
