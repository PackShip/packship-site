"use client"

import Navigation from "@/shared/Navigation";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { brands } from "../../constants";
import Footer from "@/shared/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import DonationsLink from "@/shared/DonationsLink";
import Hero from "./components/Hero";

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
  const animatedNumber = useAnimatedNumber(5000, 7000);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 476);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200, 
      offset: 200,
      easing: 'ease-out',
    });
  }, []);

  return (
    <Suspense>
      <Navigation />
      <main>
        <Hero />
      </main>
      <Footer />
    </Suspense>
  );
}