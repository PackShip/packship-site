import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="kontainer">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-gray-700 dark:text-white/80 light:text-gray-700 mb-12">
            Insights, updates, and stories from the PackShip team
          </p>

          <div className="space-y-12">
            {/* Blog Post Card */}
            <div className="bg-white dark:bg-black/20 light:bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-4">
                  <span className="text-sm text-gray-500 dark:text-white/60 light:text-gray-500">
                    May 15, 2023
                  </span>
                  <span className="mx-2 text-gray-300 dark:text-white/30 light:text-gray-300">
                    •
                  </span>
                  <span className="text-sm text-packship-purple-lite">
                    Announcement
                  </span>
                </div>

                <Link href="/blog/packship-v2-open-source" className="group">
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-packship-purple-lite transition-colors">
                    PackShip v2: Why I Decided to Go Open Source from Commercial
                  </h2>
                </Link>

                <p className="text-gray-600 dark:text-white/70 light:text-gray-600 mb-6">
                  After a successful commercial run, I&apos;m excited to
                  announce that PackShip is now open source. This decision
                  wasn&apos;t made lightly, but I believe it&apos;s the right
                  path forward for the project and the community. Here&apos;s
                  the story behind this transition...
                </p>

                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-3 bg-packship-purple-lite/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-packship-purple-lite"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium dark:text-white light:text-gray-900">
                      Hatem Soliman
                    </p>
                    <p className="text-sm text-gray-500 dark:text-white/60 light:text-gray-500">
                      Creator of PackShip
                    </p>
                  </div>
                </div>

                <div className="mt-6">
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
              </div>
            </div>

            {/* More blog posts would go here */}
          </div>
        </div>
      </div>
    </div>
  );
}
