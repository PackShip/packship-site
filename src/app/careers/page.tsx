import React from "react";
import Link from "next/link";
import Navigation from "@/shared/Navigation";
import Footer from "@/shared/Footer";
import { jobListings, JobListing } from "../../../constants";

export default function Careers() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-32 pb-16">
        <div className="kontainer px-4 sm:px-6">
          <div className="row">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Careers at PackShip
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 dark:text-white/80 light:text-gray-700 mb-8 sm:mb-12">
                🚢 Building the future of developer tools. Join the PackShip
                team.
              </p>

              {/* Job Listings */}
              <div className="space-y-6">
                {jobListings.map((job: JobListing) => (
                  <Link
                    href={`/careers/${job.id}`}
                    key={job.id}
                    className="block transition-all hover:translate-y-[-2px]"
                  >
                    <div className="bg-white dark:bg-black/20 light:bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-packship-purple-lite/20">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                        <h2 className="text-xl font-bold text-packship-purple-lite">
                          {job.title}
                        </h2>
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 text-xs font-medium bg-packship-purple-lite/10 text-packship-purple-lite rounded-full">
                            {job.category}
                          </span>
                          <span className="px-3 py-1 text-xs font-medium bg-packship-purple-lite/5 text-packship-purple-lite/80 rounded-full">
                            {job.location}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 dark:text-white/60 light:text-gray-600 mb-4">
                        {job.type}
                      </p>

                      <p className="text-gray-700 dark:text-white/80 light:text-gray-700 mb-4">
                        {job.summary}
                      </p>

                      <div className="flex justify-between items-center">
                        <ul className="flex flex-wrap gap-2">
                          {job.responsibilities
                            .slice(0, 2)
                            .map((resp: string, index: number) => (
                              <li
                                key={index}
                                className="text-xs text-gray-600 dark:text-white/60 light:text-gray-600 bg-gray-100 dark:bg-white/5 light:bg-gray-100 px-2 py-1 rounded"
                              >
                                {resp.length > 40
                                  ? resp.substring(0, 40) + "..."
                                  : resp}
                              </li>
                            ))}
                          {job.responsibilities.length > 2 && (
                            <li className="text-xs text-gray-600 dark:text-white/60 light:text-gray-600 bg-gray-100 dark:bg-white/5 light:bg-gray-100 px-2 py-1 rounded">
                              +{job.responsibilities.length - 2} more
                            </li>
                          )}
                        </ul>

                        <span className="text-packship-purple-lite inline-flex items-center text-sm">
                          View details
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
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-12 bg-packship-purple-lite/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-packship-purple-lite mb-4">
                  Join Our Team
                </h3>
                <p className="text-gray-700 dark:text-white/80 light:text-gray-700 mb-4">
                  We&apos;re building the next generation of developer tooling —
                  starting with PackShip, our open-source CLI that lets
                  developers ship TypeScript and Node.js packages in seconds.
                </p>
                <p className="text-gray-700 dark:text-white/80 light:text-gray-700">
                  PackShip is 100% remote and async by default. Contributions
                  are welcome from anywhere in the world 🌍. Click on any job
                  above to learn more and apply!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
