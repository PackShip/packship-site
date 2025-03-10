"use client";

import Navigation from "@/shared/Navigation";
import { Suspense, useEffect } from "react";
import Footer from "@/shared/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Instructions from "./components/Instructions";
import Pricing from "./components/Pricing";
import Preview from "./components/Preview";
import Walkthrough from "./components/Walkthrough";
import Testimonials from "./components/Testimonials";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <Suspense>
      <Navigation />
      <main className="pt-16">
        <Hero />
        <Features />
        <div className="flex flex-col md:flex-row justify-between items-start flex-1">
          <Preview />
          <Walkthrough />
        </div>
        <Testimonials />
        <Instructions />
        <Pricing />
      </main>
      <Footer />
    </Suspense>
  );
}
