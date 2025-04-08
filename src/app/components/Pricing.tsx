import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { FaGithub, FaStar, FaCodeBranch, FaRocket } from "react-icons/fa";
import CommandPrompt from "@/shared/CommandPrompt";
import PurchaseForm from "@/shared/PurchaseForm";

export default function Pricing() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 200,
      easing: "ease-out",
    });
  }, []);

  return (
    <section id="start-packshipping" className="py-24 relative">
      <div className="kontainer">
        <div className="row flex flex-col items-center gap-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2
              data-aos="fade-up"
              className="text-3xl md:text-4xl font-bold dark:text-white light:text-gray-800 mb-4"
            >
              Get Started with Packship
            </h2>
            <p
              data-aos="fade-up"
              className="dark:text-white/70 light:text-gray-600 text-lg"
            >
              PackShip is open source and free to use. Join our community and
              start shipping your packages faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            <div
              data-aos="fade-up"
              className="feature-card flex flex-col dark:bg-black/20 light:bg-white/90 p-6 rounded-lg border dark:border-gray-800 light:border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-packship-purple-lite/20 flex items-center justify-center">
                  <FaGithub className="text-packship-purple-lite" size={20} />
                </div>
                <h3 className="text-xl font-semibold dark:text-white light:text-gray-800">
                  Open Source
                </h3>
              </div>
              <p className="dark:text-white/70 light:text-gray-600 mb-6">
                PackShip is completely open source under the MIT license. You
                can use it, modify it, and contribute to it freely.
              </p>
              <div className="mt-auto flex gap-4">
                <Link
                  href="https://github.com/CodeNKoffee/packship"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent hover:bg-white/10 dark:text-white light:text-gray-800 dark:border-white/20 light:border-gray-300 border rounded-md px-4 py-2 font-medium transition-all flex items-center gap-2"
                >
                  <FaStar className="text-yellow-400" />
                  Star on GitHub
                </Link>
                <Link
                  href="https://github.com/CodeNKoffee/packship/fork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent hover:bg-white/10 dark:text-white light:text-gray-800 dark:border-white/20 light:border-gray-300 border rounded-md px-4 py-2 font-medium transition-all flex items-center gap-2"
                >
                  <FaCodeBranch className="text-packship-purple-lite" />
                  Fork
                </Link>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="feature-card flex flex-col dark:bg-black/20 light:bg-white/90 p-6 rounded-lg border dark:border-gray-800 light:border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-packship-purple-lite/20 flex items-center justify-center">
                  <FaRocket className="text-packship-purple-lite" size={20} />
                </div>
                <h3 className="text-xl font-semibold dark:text-white light:text-gray-800">
                  Quick Installation
                </h3>
              </div>
              <p className="dark:text-white/70 light:text-gray-600 mb-6">
                Get started in seconds with a simple installation command.
                Available through npm, yarn, pnpm, or direct installation
                scripts.
              </p>
              <div className="mt-auto">
                <CommandPrompt
                  commands={{
                    Bash: "curl -fsSL https://packship.dev/install.sh | sh",
                    PowerShell:
                      "iwr -useb https://packship.dev/install.ps1 | iex",
                    npm: "npm install -g packship",
                    yarn: "yarn global add packship",
                    pnpm: "pnpm add -g packship",
                  }}
                  activeTab="npm"
                />
              </div>
            </div>
          </div>

          {/* <div
            className="w-full max-w-2xl dark:bg-black/30 light:bg-white/90 rounded-lg dark:border-gray-800 light:border-gray-200 border p-6 mt-8"
            data-aos="fade-up"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold dark:text-white light:text-gray-800 mb-2">
                Stay Updated
              </h3>
              <p className="dark:text-white/70 light:text-gray-600">
                Subscribe to our newsletter for updates on new features,
                releases, and community events.
              </p>
            </div>
            <PurchaseForm />
          </div> */}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-packship-purple-lite/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-packship-purple-lite/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
