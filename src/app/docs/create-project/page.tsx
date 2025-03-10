"use client";

import React from "react";
import SectionHeader from "@/shared/SectionHeader";
import CopyCodeSnippet from "@/shared/CopyCodeSnippet";

export default function CreateProject() {
  return (
    <>
      <div className="w-full flex flex-col gap-8">
        <p>
          Creating a new project with PackShip is simple and straightforward.
          This guide will walk you through the process of initializing a new
          package project.
        </p>

        <h2
          id="initialize-package"
          className="text-2xl sm:text-3xl text-packship-purple-semilite font-bold"
        >
          Initialize a New Package
        </h2>

        <div className="mb-2 flex flex-col gap-4">
          <p>
            To create a new package project, run the following command in your
            terminal:
          </p>
          <CopyCodeSnippet code="packship init" language="bash" />
        </div>

        <SectionHeader
          color="text-packship-purple-semilite"
          className="text-xl sm:text-2xl"
          header="Interactive Setup"
        />

        <div className="mb-2 flex flex-col gap-4">
          <p>
            The{" "}
            <code className="bg-black/30 px-1 py-0.5 rounded">
              packship init
            </code>{" "}
            command will start an interactive setup process that guides you
            through configuring your package:
          </p>

          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>Package Name</strong>: Enter a unique name for your
              package. This will be the name used when publishing to npm.
            </li>
            <li>
              <strong>Package Description</strong>: Provide a brief description
              of what your package does.
            </li>
            <li>
              <strong>Author</strong>: Enter your name or organization name.
            </li>
            <li>
              <strong>License</strong>: Choose a license for your package
              (default: MIT).
            </li>
            <li>
              <strong>Version</strong>: Set the initial version (default:
              0.1.0).
            </li>
            <li>
              <strong>Language</strong>: Choose between JavaScript and
              TypeScript.
            </li>
            <li>
              <strong>Package Type</strong>: Select the type of package you want
              to create (React component, utility library, etc.).
            </li>
          </ol>
        </div>

        <SectionHeader
          color="text-packship-purple-semilite"
          className="text-xl sm:text-2xl"
          header="Project Structure"
        />

        <div className="mb-2 flex flex-col gap-4">
          <p>
            After completing the setup, PackShip will generate a project with
            the following structure:
          </p>

          <CopyCodeSnippet
            code={`my-package/
├── src/
│   └── index.js (or index.ts)
├── dist/
├── node_modules/
├── .gitignore
├── package.json
├── README.md
├── LICENSE
└── webpack.config.js`}
            language="bash"
          />

          <p>The key files and directories are:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>src/</strong>: Contains your source code
            </li>
            <li>
              <strong>dist/</strong>: Will contain the compiled output after
              building
            </li>
            <li>
              <strong>package.json</strong>: Defines your package metadata and
              dependencies
            </li>
            <li>
              <strong>webpack.config.js</strong>: Configuration for bundling
              your package
            </li>
          </ul>
        </div>

        <h2
          id="next-steps"
          className="text-2xl sm:text-3xl text-packship-purple-semilite font-bold"
        >
          Next Steps
        </h2>

        <div className="mb-2 flex flex-col gap-4">
          <p>After initializing your project:</p>

          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Navigate to your project directory:{" "}
              <CopyCodeSnippet
                code="cd my-package"
                language="bash"
                inline={true}
              />
            </li>
            <li>
              Install dependencies:{" "}
              <CopyCodeSnippet
                code="npm install"
                language="bash"
                inline={true}
              />
            </li>
            <li>
              Start developing your package by editing files in the{" "}
              <code className="bg-black/30 px-1 py-0.5 rounded">src/</code>{" "}
              directory
            </li>
            <li>
              When ready, build your package:{" "}
              <CopyCodeSnippet
                code="npm run build"
                language="bash"
                inline={true}
              />
            </li>
          </ol>

          <p className="mt-4">
            Once you&apos;ve developed your package, you can proceed to{" "}
            <a
              href="/docs/publishing"
              className="text-packship-purple-lite hover:underline"
            >
              publishing it to npm
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
