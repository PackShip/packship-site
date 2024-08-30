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
        <section className="mt-24">
          <div className="kontainer text-center">
            <div className="row text-md sm:text-xl text-white flex flex-col items-center gap-32">
              <h1 
                data-aos="fade-up"
                className="text-6xl sm:text-8xl leading-snug"
              >
                Next Generation of App <span className="">Previewing</span>
              </h1>
              <figure 
                data-aos="fade-up"
                className="w-full" 
              >
                <Image 
                  src={""}
                  alt="iPhone 15 Pro & Google Pixel 8"
                  className="w-full"
                />
              </figure>
              <button 
                type="button" 
                data-aos="fade-up"
              >
                <Link
                  href="/getting-started"
                  className="bg-white rounded-full text-2xl px-8 py-4"
                >
                  Get Started
                </Link>
              </button>
            </div>
          </div>
        </section>

        <section data-aos="fade-up">
          <div className="kontainer text-center">
            <div className="row text-md sm:text-xl text-white flex flex-col items-center gap-32">
              <div 
                data-aos="fade-up"
                className="w-full flex flex-col items-center" 
              >
                <figure className="w-full sm:w-1/2">
                  <Image
                    src={""}
                    alt="InstallationPrompt"
                    className="w-full"
                  />
                </figure>
                <div className="bg-framify-silver rounded-b-3xl rounded-t-lg sm:rounded-full text-white w-full sm:w-10/12 px-8 sm:px-24 py-8 flex flex-col items-center gap-8">
                  <blockquote className="text-2xl leading-relaxed sm:leading-none">
                    Software development isn&apos;t just about &ldquo;getting the task done&rdquo; it&apos;s about the creativity involved in bringing that idea to life.
                  </blockquote>
                  <div className="bg-framif rounded-3xl sm:rounded-full px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-8">
                    <figure className="w-20">
                      <Image 
                        src={""}
                        alt="Hatem Soliman"
                        className="w-full rounded-full"
                      />
                    </figure>
                    <cite className="flex flex-col text-center sm:text-start gap-1">
                      <h3 className="text-sm">Hatem Soliman</h3>
                      <h4 className="text-sm">Creator of React Framify</h4>
                    </cite>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-4xl text-center mt-56 mb-8 leading-relaxed sm:leading-none">Join {animatedNumber.toLocaleString()}+ exciting and anticipated projects</h2>
                <span className="bg-framify-black text-sm text-center p-2">
                  Data sourced from &nbsp;
                  <Link
                    href="https://npmtrends.com"
                    className=""
                  >
                    npmtrends.com
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white w-full mt-16 py-4 ribbon-container">
            <div className="ribbon-content">
              {Array(isMobile ? 1 : 3).fill(null).map((_, repeatIndex) => (
                <div 
                  key={repeatIndex} 
                  className="flex"
                >
                  {brands.map((brand, index) => (
                    <div key={index} className="flex-shrink-0">
                      <Image
                        src={brand.img}
                        alt={brand.title}
                        width={200}
                        height={24}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="kontainer text-center">
            <div className="row text-md sm:text-xl text-white flex flex-col items-center">
              <DonationsLink />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Suspense>
  );
}