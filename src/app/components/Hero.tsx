import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import CommandPrompt from "@/shared/CommandPrompt";
import Image from "next/image";
import PackageBox from "@/shared/PackageBox";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-out",
    });
  }, []);

  return (
    <section className="pb-24 relative">
      <div className="kontainer pt-32">
        <div className="row flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
          <div className="max-w-2xl mx-auto md:mx-0">
            <h1
              data-aos="fade-up"
              data-aos-duration="600"
              className="text-5xl md:text-6xl lg:text-7xl font-bold dark:text-white light:text-gray-900 mb-6 leading-tight"
            >
              Packship
            </h1>
            <h2
              data-aos="fade-up"
              data-aos-duration="700"
              className="text-xl md:text-2xl text-packship-purple-lite dark:text-packship-purple-lite light:text-packship-purple font-medium mb-6"
            >
              Create, manage, and publish NPM packages with ease
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-lg dark:text-white/80 light:text-gray-700 max-w-2xl mx-auto md:mx-0 mb-8"
            >
              A powerful CLI tool that automates the entire NPM package
              lifecycle, from setup to publishing. Packship handles
              configuration, versioning, testing, and deployment so you can
              focus on writing code.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              <Link
                href="#start-packshipping"
                className="bg-packship-purple-lite hover:bg-packship-purple-lite/90 text-black rounded-md px-6 py-3 font-medium transition-all"
              >
                Get Started
              </Link>
              <Link
                href="/docs"
                className="bg-transparent hover:bg-white/10 text-gray-900 dark:text-white border-2 border-gray-600 dark:border-white/20 rounded-md px-6 py-3 font-medium transition-all hover:border-black/70 dark:hover:border-white/40"
              >
                Documentation
              </Link>
            </div>
          </div>

          {/* 3D Package Box */}
          <div
            className="w-full md:w-1/2 flex justify-center items-center"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            <PackageBox />
          </div>
        </div>
      </div>

      <div
        className="mt-16 max-w-4xl mx-auto w-10/12 md:w-full"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <div className="bg-black/30 dark:bg-black/30 light:bg-white/70 rounded-lg border dark:border-gray-800 light:border-gray-300 overflow-hidden">
          <div className="p-6">
            <CommandPrompt
              commands={{
                Bash: "curl -fsSL https://packship.dev/install.sh | sh",
                PowerShell: "iwr -useb https://packship.dev/install.ps1 | iex",
                npm: "npm install -g packship",
                yarn: "yarn global add packship",
                pnpm: "pnpm add -g packship",
              }}
              activeTab="npm"
            />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-packship-purple-lite/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-packship-purple-lite/10 rounded-full blur-3xl"></div>

      {/* Add floating animation styles */}
      <style jsx>{`
        .package-box {
          position: relative;
          width: 100%;
          height: 100%;
          animation: float 6s ease-in-out infinite;
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .package-svg {
          filter: drop-shadow(0 0 15px rgba(219, 194, 255, 0.3));
        }

        @keyframes float {
          0% {
            transform: translateY(0px) rotate3d(1, 1, 0, 0deg);
          }
          50% {
            transform: translateY(-20px) rotate3d(1, 1, 0, 5deg);
          }
          100% {
            transform: translateY(0px) rotate3d(1, 1, 0, 0deg);
          }
        }
      `}</style>
    </section>
  );
}
