import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function PackshipV2OpenSource() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="kontainer">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-packship-purple-lite hover:underline mb-8"
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
            Back to Blog
          </Link>

          <article>
            <header className="mb-8">
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

              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                PackShip v2: Why I Decided to Go Open Source from Commercial
              </h1>

              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4 bg-packship-purple-lite/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-packship-purple-lite"
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
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                When I first launched PackShip as a commercial product, my goal
                was to create a tool that would simplify the NPM package
                lifecycle for developers. The response was incredible, and
                I&apos;m grateful for all the support from early adopters who
                believed in the vision.
              </p>

              <p>
                However, as PackShip grew, I began to realize that its true
                potential could only be unlocked by making it accessible to
                everyone. The decision to transition from a commercial product
                to an open-source project wasn&apos;t made overnight, but
                it&apos;s one I&apos;m incredibly excited about.
              </p>

              <h2>The Journey So Far</h2>

              <p>
                PackShip started as a solution to a problem I faced daily: the
                tedious process of setting up, configuring, and publishing NPM
                packages. What began as a personal tool quickly evolved into
                something I believed could help the broader developer community.
              </p>

              <p>
                The commercial version of PackShip gained traction among teams
                looking to streamline their package development workflow. The
                feedback was invaluable, and it helped shape the tool into what
                it is today.
              </p>

              <h2>Why Open Source?</h2>

              <p>
                There are several reasons behind the decision to open source
                PackShip:
              </p>

              <ol>
                <li>
                  <strong>Community-Driven Innovation:</strong> The most
                  powerful software is built by communities, not individuals. By
                  opening up PackShip, we can harness the collective creativity
                  and expertise of developers worldwide.
                </li>
                <li>
                  <strong>Accessibility:</strong> Tools that make development
                  easier should be available to everyone, regardless of budget
                  constraints. Open sourcing PackShip removes financial barriers
                  to entry.
                </li>
                <li>
                  <strong>Transparency:</strong> Open source fosters trust.
                  Users can see exactly what the code does, how it handles their
                  packages, and contribute improvements.
                </li>
                <li>
                  <strong>Education:</strong> PackShip can serve as a learning
                  resource for developers interested in package management,
                  automation, and CLI tool development.
                </li>
              </ol>

              <h2>What&apos;s New in v2?</h2>

              <p>
                PackShip v2 isn&apos;t just a transition to open source;
                it&apos;s a significant upgrade with new features and
                improvements:
              </p>

              <ul>
                <li>
                  Enhanced template system for faster package initialization
                </li>
                <li>Improved dependency management</li>
                <li>Better integration with CI/CD pipelines</li>
                <li>More customization options for package configuration</li>
                <li>Comprehensive documentation and examples</li>
              </ul>

              <h2>The Road Ahead</h2>

              <p>
                This is just the beginning of PackShip&apos;s open-source
                journey. We have an exciting roadmap ahead, including:
              </p>

              <ul>
                <li>Packship Pug: A desktop GUI application (coming soon)</li>
                <li>Enhanced plugin system for extending functionality</li>
                <li>Better integration with popular frameworks and tools</li>
                <li>Improved documentation and learning resources</li>
              </ul>

              <h2>Join the Community</h2>

              <p>
                Open source is all about community, and I invite you to be part
                of PackShip&apos;s future. Here&apos;s how you can get involved:
              </p>

              <ul>
                <li>
                  Star and watch the{" "}
                  <a
                    href="https://github.com/CodeNKoffee/packship"
                    className="text-packship-purple-lite hover:underline"
                  >
                    GitHub repository
                  </a>
                </li>
                <li>Try PackShip and provide feedback</li>
                <li>Contribute code, documentation, or ideas</li>
                <li>
                  Spread the word about PackShip in your developer communities
                </li>
              </ul>

              <p>
                I&apos;m incredibly excited about this new chapter for PackShip
                and can&apos;t wait to see what we&apos;ll build together. Thank
                you for being part of this journey.
              </p>

              <div className="mt-12 p-6 bg-packship-purple-lite/10 rounded-lg border border-packship-purple-lite/20">
                <h3 className="text-xl font-semibold mb-4">
                  Ready to try PackShip?
                </h3>
                <p className="mb-4">Get started with just a few commands:</p>
                <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">
                  <code>npm install -g packship</code>
                </pre>
                <p className="mt-4">
                  <Link
                    href="/#start-packshipping"
                    className="text-packship-purple-lite hover:underline"
                  >
                    Learn more about getting started →
                  </Link>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
