import React from "react";
import Link from "next/link";
import Image from "next/image";
import ComingSoonBadge from "../components/ComingSoonBadge";

export default function PackshipPug() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16">
      <div className="max-w-4xl w-full">
        <div className="relative mb-12 text-center">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-packship-purple-lite/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-packship-purple-lite/5 rounded-full blur-3xl -z-10"></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Packship Pug</h1>
          <div className="flex justify-center mb-6">
            <ComingSoonBadge className="text-sm px-3 py-1" />
          </div>
          <p className="text-xl text-gray-700 dark:text-white/80 light:text-gray-700 max-w-2xl mx-auto">
            A desktop application that simplifies package creation, management,
            and publishing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-black/20 light:bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-packship-purple-lite mb-4">
              What is Packship Pug?
            </h2>
            <p className="text-gray-600 dark:text-white/70 light:text-gray-600 mb-4">
              Packship Pug is our upcoming desktop application that brings the
              power of Packship to a graphical user interface. It&apos;s
              designed for developers who prefer visual tools over command-line
              interfaces.
            </p>
            <p className="text-gray-600 dark:text-white/70 light:text-gray-600">
              With Packship Pug, you&apos;ll be able to create, update, and
              publish packages with just a few clicks, making the entire process
              more intuitive and accessible.
            </p>
          </div>

          <div className="bg-white dark:bg-black/20 light:bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-packship-purple-lite mb-4">
              Key Features
            </h2>
            <ul className="space-y-3 text-gray-600 dark:text-white/70 light:text-gray-600">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-packship-purple-lite mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Intuitive visual package creation and management</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-packship-purple-lite mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>One-click publishing to npm and other registries</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-packship-purple-lite mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Real-time dependency management and visualization</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-packship-purple-lite mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>
                  Cross-platform support for macOS, Windows, and Linux
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mb-12">
          <Link
            href="/#start-packshipping"
            className="inline-flex items-center px-6 py-3 rounded-md bg-packship-purple-lite hover:bg-packship-purple-lite/90 text-black font-medium transition-all"
          >
            Try Packship CLI while you wait
          </Link>

          <p className="mt-6 text-sm text-gray-500 dark:text-white/60 light:text-gray-500">
            Want to be notified when Packship Pug launches?
            <a
              href="https://github.com/CodeNKoffee/packship"
              className="text-purple-600 dark:text-packship-purple-lite underline ml-1 font-medium"
            >
              Star our GitHub repository
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
