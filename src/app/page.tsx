"use client"

import Navigation from "@/shared/Navigation";
import { Suspense, useEffect, useState } from "react";
import Footer from "@/shared/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Instructions from "./components/Instructions";
import Pricing from "./components/Pricing";
import Preview from "./components/Preview";
import Walkthrough from "./components/Walkthrough";
import Testimonials from "./components/Testimonials";
import { tweetUrls } from "../../constants";
import PricingPlans from "./components/PricingPlans";

function useAnimatedNumber(target: number, duration: number) {
  const [currentNumber, setCurrentNumber] = useState<number>(0);
  useEffect(() => {
    const startTime = Date.now();
    const step = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.floor(progress * target);
      setCurrentNumber(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
    return () => {};
  }, [target, duration]);

  return currentNumber;
}

export default function Home() {
  return (
    <Suspense>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Preview />
        <Instructions />
        <Walkthrough />
        <PricingPlans />
        {/* <Pricing /> */}
      </main>
      <Footer />
    </Suspense>
  );
}