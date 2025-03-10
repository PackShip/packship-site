import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import CommandPrompt from "@/shared/CommandPrompt";
import Image from "next/image";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 200,
      easing: "ease-out",
    });
  }, []);

  return (
    <section className="pb-24 relative">
      <div className="kontainer">
        <div className="row flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
          <div className="max-w-2xl mx-auto md:mx-0">
            <h1
              data-aos="fade-up"
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Packship
            </h1>
            <h2
              data-aos="fade-up"
              className="text-xl md:text-2xl text-packship-purple-lite font-medium mb-6"
            >
              Create, manage, and publish NPM packages with ease
            </h2>
            <p
              data-aos="fade-up"
              className="text-lg text-white/80 max-w-2xl mx-auto md:mx-0 mb-8"
            >
              A powerful CLI tool that automates the entire NPM package
              lifecycle, from setup to publishing. Packship handles
              configuration, versioning, testing, and deployment so you can
              focus on writing code.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start"
              data-aos="fade-up"
            >
              <Link
                href="#start-packshipping"
                className="bg-packship-purple-lite hover:bg-packship-purple-lite/90 text-black rounded-md px-6 py-3 font-medium transition-all"
              >
                Get Started
              </Link>
              <Link
                href="/docs"
                className="bg-transparent hover:bg-white/10 text-white border border-white/20 rounded-md px-6 py-3 font-medium transition-all"
              >
                Documentation
              </Link>
            </div>
          </div>

          {/* 3D Package Box */}
          <div
            className="w-full md:w-1/2 flex justify-center items-center"
            data-aos="fade-left"
          >
            <div className="relative w-64 h-64">
              <div className="package-box">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="package-svg"
                >
                  {/* Top face */}
                  <path
                    d="M20 80L100 40L180 80L100 120L20 80Z"
                    stroke="#DBC2FF"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />

                  {/* Bottom face */}
                  <path
                    d="M20 80L20 140L100 180L100 120L20 80Z"
                    stroke="#DBC2FF"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />

                  {/* Right face */}
                  <path
                    d="M100 120L100 180L180 140L180 80L100 120Z"
                    stroke="#DBC2FF"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />

                  {/* NPM logo hint */}
                  <path
                    d="M70 90L70 150M130 90L130 150M100 90L100 150"
                    stroke="#DBC2FF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeDasharray="2 4"
                  />

                  {/* Package name */}
                  <text
                    x="100"
                    y="70"
                    fill="#DBC2FF"
                    fontSize="12"
                    textAnchor="middle"
                    fontFamily="monospace"
                  >
                    packship
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-4xl mx-auto" data-aos="fade-up">
        <div className="bg-black/30 rounded-lg border border-gray-800 overflow-hidden">
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

      {/* Grid background overlay - similar to Tauri */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:44px_44px]"></div>

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
          filter: drop-shadow(0 0 10px rgba(219, 194, 255, 0.3));
        }

        @keyframes float {
          0% {
            transform: translateY(0px) rotate3d(1, 1, 1, 0deg);
          }
          50% {
            transform: translateY(-20px) rotate3d(1, 1, 1, 5deg);
          }
          100% {
            transform: translateY(0px) rotate3d(1, 1, 1, 0deg);
          }
        }
      `}</style>
    </section>
  );
}
