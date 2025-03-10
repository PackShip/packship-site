import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";
import CommandPrompt from "@/shared/CommandPrompt";

export default function Pricing() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 200,
      easing: "ease-out",
    });
  }, []);

  return (
    <section id="start-packshipping" className="py-16">
      <div className="kontainer">
        <div className="row flex flex-col items-center gap-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2
              data-aos="fade-up"
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Get Started with Packship
            </h2>
            <p data-aos="fade-up" className="text-white/70">
              Packship is open source and free to use. Join our community and
              start shipping your packages faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            <div data-aos="fade-up" className="feature-card flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-packship-purple-lite/20 flex items-center justify-center">
                  <FaGithub className="text-packship-purple-lite" size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Open Source
                </h3>
              </div>
              <p className="text-white/70 mb-6">
                Packship is completely open source. You can use it, modify it,
                and contribute to it.
              </p>
              <div className="mt-auto flex gap-4">
                <Link
                  href="https://github.com/packship/packship"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent hover:bg-white/10 text-white border border-white/20 rounded-md px-4 py-2 font-medium transition-all flex items-center gap-2"
                >
                  <FaStar className="text-yellow-400" />
                  Star on GitHub
                </Link>
                <Link
                  href="https://github.com/packship/packship/fork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent hover:bg-white/10 text-white border border-white/20 rounded-md px-4 py-2 font-medium transition-all flex items-center gap-2"
                >
                  <FaCodeBranch className="text-packship-purple-lite" />
                  Fork
                </Link>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="feature-card flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-packship-purple-lite/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-packship-purple-lite"
                  >
                    <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
                    <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Support the Project
                </h3>
              </div>
              <p className="text-white/70 mb-6">
                While Packship is free, your support helps us maintain and
                improve the project.
              </p>
              <div className="mt-auto flex gap-4">
                <Link
                  href="https://github.com/sponsors/packship"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-packship-purple-lite hover:bg-packship-purple-lite/90 text-black rounded-md px-4 py-2 font-medium transition-all"
                >
                  Become a Sponsor
                </Link>
                <Link
                  href="https://paypal.me/h4temsoliman?country.x=EG&locale.x=en_US"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent hover:bg-white/10 text-white border border-white/20 rounded-md px-4 py-2 font-medium transition-all"
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="w-full max-w-2xl mt-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Install Packship
              </h3>
              <p className="text-white/70">Get started with a single command</p>
            </div>
            <div className="terminal-window">
              <div className="flex gap-2 mb-2">
                <div className="tab-button active">npm</div>
                <div className="tab-button">yarn</div>
                <div className="tab-button">pnpm</div>
              </div>
              <CommandPrompt command="npm install -g packship" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
