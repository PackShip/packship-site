"use client";

import { useEffect } from "react";
import Navigation from "@/shared/Navigation";
import Footer from "@/shared/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { FaHeart, FaPaypal, FaGithub, FaStar } from "react-icons/fa";
import Image from "next/image";

export default function SponsorPackShip() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-out",
    });
  }, []);

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-32 pb-16">
        <div className="kontainer px-4 sm:px-6">
          <div className="max-w-4xl mx-auto relative">
            {/* Decorative elements - moved inside the container and adjusted opacity */}
            <div className="absolute top-1/4 -left-1/4 w-64 h-64 bg-packship-purple-lite/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 -right-1/4 w-64 h-64 bg-packship-purple-lite/5 rounded-full blur-3xl -z-10"></div>

            {/* Header */}
            <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 dark:text-white light:text-gray-900">
                Support{" "}
                <span className="text-packship-purple-lite">PackShip</span>
              </h1>
              <p className="text-lg sm:text-xl dark:text-white/70 light:text-gray-700 max-w-2xl mx-auto px-4">
                Help us continue building and improving PackShip for the
                developer community
              </p>
            </div>

            {/* Why Sponsor Section */}
            <div
              className="mb-12 sm:mb-16 px-4 sm:px-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 dark:text-white light:text-gray-900">
                Why Sponsor PackShip?
              </h2>
              <div className="bg-white dark:bg-black/20 light:bg-white p-6 sm:p-8 rounded-xl shadow-sm mb-8">
                <p className="dark:text-white/80 light:text-gray-700 mb-4">
                  PackShip is an open-source tool dedicated to simplifying NPM
                  package development and publishing. Your sponsorship helps us:
                </p>
                <ul className="space-y-3 dark:text-white/80 light:text-gray-700">
                  <li className="flex items-start">
                    <FaStar className="text-packship-purple-lite mt-1 mr-3 flex-shrink-0" />
                    <span>Maintain and improve the core functionality</span>
                  </li>
                  <li className="flex items-start">
                    <FaStar className="text-packship-purple-lite mt-1 mr-3 flex-shrink-0" />
                    <span>Develop new features like PackShip Pug</span>
                  </li>
                  <li className="flex items-start">
                    <FaStar className="text-packship-purple-lite mt-1 mr-3 flex-shrink-0" />
                    <span>
                      Create comprehensive documentation and tutorials
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaStar className="text-packship-purple-lite mt-1 mr-3 flex-shrink-0" />
                    <span>Provide support to the community</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sponsorship Options */}
            <div
              className="mb-12 sm:mb-16 px-4 sm:px-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 dark:text-white light:text-gray-900">
                Sponsorship Options
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* One-time Donation */}
                <div className="bg-white dark:bg-black/20 light:bg-white p-6 sm:p-8 rounded-xl shadow-sm h-full flex flex-col">
                  <div className="mb-4 flex items-center">
                    <FaHeart className="text-packship-purple-lite mr-3 text-xl" />
                    <h3 className="text-xl font-semibold dark:text-white light:text-gray-900">
                      One-time Donation
                    </h3>
                  </div>
                  <p className="dark:text-white/70 light:text-gray-700 mb-6 flex-grow">
                    Support PackShip with a one-time donation of any amount.
                    Every contribution helps!
                  </p>
                  <div className="flex flex-col space-y-3">
                    <a
                      href="https://paypal.me/h4temsoliman?country.x=EG&locale.x=en_US"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-[#0070ba] hover:bg-[#005ea6] text-white font-medium py-3 px-4 rounded-md transition-colors"
                    >
                      <FaPaypal className="mr-2" /> Donate with PayPal
                    </a>
                    <a
                      href="https://www.buymeacoffee.com/h4temsoliman"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-[#FFDD00] hover:bg-[#E5C700] text-black font-medium py-3 px-4 rounded-md transition-colors"
                    >
                      <Image
                        src="/assets/buymeacoffee.png"
                        alt="Buy Me a Coffee"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      Buy me a coffee
                    </a>
                  </div>
                </div>

                {/* GitHub Sponsors */}
                <div className="bg-white dark:bg-black/20 light:bg-white p-6 sm:p-8 rounded-xl shadow-sm h-full flex flex-col">
                  <div className="mb-4 flex items-center">
                    <FaGithub className="text-packship-purple-lite mr-3 text-xl" />
                    <h3 className="text-xl font-semibold dark:text-white light:text-gray-900">
                      GitHub Sponsors
                    </h3>
                  </div>
                  <p className="dark:text-white/70 light:text-gray-700 mb-6 flex-grow">
                    Become a recurring sponsor through GitHub Sponsors. Set up
                    monthly contributions to provide sustainable support.
                  </p>
                  <div className="flex flex-col space-y-4">
                    {/* GitHub Sponsors iframe button */}
                    {/* <div className="flex justify-center mb-2">
                      <iframe
                        src="https://github.com/sponsors/CodeNKoffee/button"
                        title="Sponsor CodeNKoffee"
                        height="32"
                        width="114"
                        style={{ border: 0, borderRadius: "6px" }}
                      ></iframe>
                    </div> */}
                    {/* <p className="text-center text-sm dark:text-white/50 light:text-gray-500">
                      Or use the direct link:
                    </p> */}
                    <a
                      href="https://github.com/sponsors/CodeNKoffee"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-[#24292e] hover:bg-[#1a1e22] text-white font-medium py-3 px-4 rounded-md transition-colors"
                    >
                      <FaGithub className="mr-2" /> Sponsor on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sponsor Benefits */}
            <div
              className="mb-12 sm:mb-16 px-4 sm:px-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 dark:text-white light:text-gray-900">
                Sponsor Benefits
              </h2>
              <div className="bg-white dark:bg-black/20 light:bg-white p-6 sm:p-8 rounded-xl shadow-sm">
                <ul className="space-y-4 dark:text-white/80 light:text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-packship-purple-lite/20 p-2 rounded-full mr-4 flex-shrink-0">
                      <FaStar className="text-packship-purple-lite" />
                    </div>
                    <div>
                      <h4 className="font-semibold dark:text-white light:text-gray-900 mb-1">
                        Recognition
                      </h4>
                      <p className="dark:text-white/70 light:text-gray-700">
                        Your name or company logo on our README and website
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-packship-purple-lite/20 p-2 rounded-full mr-4 flex-shrink-0">
                      <FaStar className="text-packship-purple-lite" />
                    </div>
                    <div>
                      <h4 className="font-semibold dark:text-white light:text-gray-900 mb-1">
                        Early Access
                      </h4>
                      <p className="dark:text-white/70 light:text-gray-700">
                        Preview and test new features before they&apos;re
                        released
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-packship-purple-lite/20 p-2 rounded-full mr-4 flex-shrink-0">
                      <FaStar className="text-packship-purple-lite" />
                    </div>
                    <div>
                      <h4 className="font-semibold dark:text-white light:text-gray-900 mb-1">
                        Priority Support
                      </h4>
                      <p className="dark:text-white/70 light:text-gray-700">
                        Direct access to the maintainer for questions and
                        assistance
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-packship-purple-lite/20 p-2 rounded-full mr-4 flex-shrink-0">
                      <FaStar className="text-packship-purple-lite" />
                    </div>
                    <div>
                      <h4 className="font-semibold dark:text-white light:text-gray-900 mb-1">
                        Vote on Features
                      </h4>
                      <p className="dark:text-white/70 light:text-gray-700">
                        Help decide which features we prioritize next
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Questions Section */}
            <div
              className="mb-12 sm:mb-16 px-4 sm:px-0"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 dark:text-white light:text-gray-900">
                Questions?
              </h2>
              <div className="bg-white dark:bg-black/20 light:bg-white p-6 sm:p-8 rounded-xl shadow-sm">
                <p className="dark:text-white/80 light:text-gray-700 mb-4">
                  If you have any questions about sponsoring PackShip or would
                  like to discuss custom sponsorship options, please reach out
                  to us.
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <Link
                    href="mailto:hatemthedev@gmail.com"
                    className="inline-flex items-center text-packship-purple-lite hover:underline"
                  >
                    Contact us at hatemthedev@gmail.com
                  </Link>
                  <span className="hidden md:inline dark:text-white/50 light:text-gray-500">
                    •
                  </span>
                  <a
                    href="https://github.com/sponsors/CodeNKoffee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-packship-purple-lite hover:underline"
                  >
                    Visit @github.com/sponsors/CodeNKoffee
                  </a>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div
              className="px-4 sm:px-0"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="bg-white dark:bg-black/20 light:bg-white p-6 sm:p-8 rounded-xl shadow-sm mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white light:text-gray-900">
                  Ready to Support PackShip?
                </h2>
                <p className="dark:text-white/80 light:text-gray-700 mb-6 max-w-2xl mx-auto">
                  Your contribution helps keep PackShip free, open-source, and
                  continuously improving. Join our community of sponsors today!
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                  <iframe
                    src="https://github.com/sponsors/CodeNKoffee/button"
                    title="Sponsor CodeNKoffee"
                    height="32"
                    width="114"
                    style={{ border: 0, borderRadius: "6px" }}
                    className="mx-auto md:mx-0"
                  ></iframe>
                  <a
                    href="https://paypal.me/h4temsoliman?country.x=EG&locale.x=en_US"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#0070ba] hover:bg-[#005ea6] text-white font-medium py-1 px-4 rounded-md transition-colors"
                  >
                    <FaPaypal className="mr-2" /> PayPal
                  </a>
                  <a
                    href="https://www.buymeacoffee.com/h4temsoliman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#FFDD00] hover:bg-[#E5C700] text-black font-medium py-1 px-4 rounded-md transition-colors"
                  >
                    <Image
                      src="/assets/buymeacoffee.png"
                      alt="Buy Me a Coffee"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    Buy me a coffee
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
