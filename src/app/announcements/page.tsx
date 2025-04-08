import React from "react";
import Link from "next/link";
import Navigation from "@/shared/Navigation";
import Footer from "@/shared/Footer";

export default function Announcements() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-32 pb-16">
        <div className="kontainer px-4 sm:px-6">
          <div className="row">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Announcements
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 dark:text-white/80 light:text-gray-700 mb-8 sm:mb-12">
                Stay up to date with the latest news and updates from PackShip
              </p>

              <div className="space-y-8 sm:space-y-12">
                {/* Announcement Card */}
                <div className="bg-white dark:bg-black/20 light:bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500 dark:text-white/60 light:text-gray-500">
                      March 15, 2024
                    </span>
                    <span className="px-3 py-1 text-xs font-medium bg-packship-purple-lite/10 text-packship-purple-lite rounded-full">
                      New Feature
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-packship-purple-lite mb-2">
                    PackShip CLI v2.0 Released
                  </h2>
                  <p className="text-gray-600 dark:text-white/70 light:text-gray-600 mb-4">
                    We&apos;re excited to announce the release of PackShip CLI
                    v2.0! This major update brings improved performance, new
                    features, and better developer experience.
                  </p>
                  <Link
                    href="/blog/packship-v2-open-source"
                    className="text-packship-purple-lite hover:underline inline-flex items-center"
                  >
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>

                {/* More announcement cards can be added here */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
