import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "@/shared/Navigation";
import Footer from "@/shared/Footer";
import { jobListings, jobDetails, JobListing, JobDetails } from "../../../../constants";

interface JobPageProps {
  params: {
    jobId: string;
  };
}

export default function JobPage({ params }: JobPageProps) {
  const { jobId } = params;

  // Find the job with the matching ID
  const job = jobListings.find((job: JobListing) => job.id === jobId);

  // If no job is found, show 404
  if (!job) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-32 pb-16">
        <div className="kontainer px-4 sm:px-6">
          <div className="row">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <div className="mb-8">
                <Link
                  href="/careers"
                  className="text-sm text-packship-purple-lite hover:underline inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back to all jobs
                </Link>
              </div>

              <div className="bg-white dark:bg-black/20 light:bg-white p-8 rounded-xl shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <h1 className="text-3xl font-bold text-packship-purple-lite">
                    {job.title}
                  </h1>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                    <span className="px-3 py-1 text-xs font-medium bg-packship-purple-lite/10 text-packship-purple-lite rounded-full">
                      {job.category}
                    </span>
                    <span className="px-3 py-1 text-xs font-medium bg-packship-purple-lite/5 text-packship-purple-lite/80 rounded-full">
                      {job.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-white/60 light:text-gray-600 mb-8">
                  {job.type}
                </p>

                <div className="prose dark:prose-invert light:prose-gray max-w-none">
                  <h2 className="text-xl font-semibold mb-4">
                    🚀 About the Job
                  </h2>
                  <p className="mb-6">{job.summary}</p>

                  <h3 className="text-lg font-semibold mb-2">
                    Key Responsibilities:
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 mb-8">
                    {job.responsibilities.map((resp: string, index: number) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>

                  <h2 className="text-xl font-semibold mt-8 mb-4">
                    🌱 About the Team
                  </h2>
                  <p className="mb-6">{jobDetails.aboutTeam}</p>

                  <h2 className="text-xl font-semibold mt-8 mb-4">
                    🧠 About You
                  </h2>
                  <p className="mb-2">
                    We&apos;d love to work with you if you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-8">
                    {jobDetails.aboutYou.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <h2 className="text-xl font-semibold mt-8 mb-4">
                    🎁 What You Get
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 mb-8">
                    {jobDetails.benefits.map(
                      (benefit: string, index: number) => (
                        <li key={index}>{benefit}</li>
                      )
                    )}
                  </ul>

                  <h2 className="text-xl font-semibold mt-8 mb-4">
                    🔗 How to Apply
                  </h2>
                  <p className="mb-2">
                    Interested? Want to contribute or discuss a paid role? Reach
                    out directly via:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-8">
                    {jobDetails.howToApply.map(
                      (step: string, index: number) => (
                        <li key={index}>{step}</li>
                      )
                    )}
                  </ul>

                  <div className="mt-12 p-6 bg-packship-purple-lite/5 rounded-lg">
                    <p className="text-lg font-medium mb-2">
                      Join us in building tools developers actually love using.
                    </p>
                    <p className="text-lg font-medium">
                      This is your invitation to ship faster, smarter — and
                      together. 🚢
                    </p>
                  </div>
                </div>
              </div>

              {/* Apply button - fixed at bottom on mobile */}
              <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 p-4 md:hidden border-t dark:border-white/10 z-10">
                <Link
                  href="https://www.linkedin.com/company/packship-npm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-packship-purple-lite text-white py-3 px-4 rounded-lg text-center font-medium"
                >
                  Apply Now
                </Link>
              </div>

              {/* Apply button - inline on desktop */}
              <div className="hidden md:block mt-8">
                <a
                  href="https://www.linkedin.com/company/packship-npm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-packship-purple-lite text-white py-3 px-6 rounded-lg text-center font-medium"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
