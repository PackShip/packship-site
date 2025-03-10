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
    <section className="pt-32 pb-24 relative">
      <div className="kontainer">
        <div className="row flex flex-col items-center gap-8 text-center">
          <div className="max-w-3xl mx-auto">
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
              className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
            >
              A powerful CLI tool that automates the entire NPM package
              lifecycle, from setup to publishing. Packship handles
              configuration, versioning, testing, and deployment so you can
              focus on writing code.
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 mt-4"
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
    </section>
  );
}
