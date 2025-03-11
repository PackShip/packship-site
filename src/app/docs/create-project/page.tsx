"use client";

import React from "react";
import CopyCodeSnippet from "@/shared/CopyCodeSnippet";
import NextPageButton from "@/shared/NextPageButton";
import {
  DocH2,
  DocH3,
  DocH4,
  DocParagraph,
  DocCode,
  DocNote,
  DocList,
  DocListItem,
} from "@/shared/DocTypography";

export default function CreateProject() {
  return (
    <>
      <div className="w-full flex flex-col gap-6">
        <DocParagraph>
          Creating a new project with PackShip is simple and straightforward.
          This guide will walk you through the process of initializing a new
          package project.
        </DocParagraph>

        <DocH2 id="initialize-package">Initialize a New Package</DocH2>

        <DocParagraph>
          To create a new package project, run the following command in your
          terminal:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code="packship init" language="bash" />
        </div>

        <DocH3>Interactive Setup Process</DocH3>

        <DocParagraph>
          The <DocCode>packship init</DocCode> command will start an interactive
          setup process that guides you through configuring your package:
        </DocParagraph>

        <DocH4>Basic Information</DocH4>
        <DocList>
          <DocListItem>
            <strong>Package Name</strong>: Enter a unique name for your package
            following npm naming conventions.
          </DocListItem>
          <DocListItem>
            <strong>Description</strong>: Provide a brief description of what
            your package does.
          </DocListItem>
        </DocList>

        <DocH4>Language & Project Type</DocH4>
        <DocList>
          <DocListItem>
            <strong>Language</strong>: Choose between TypeScript (default) or
            JavaScript.
          </DocListItem>
          <DocListItem>
            <strong>Project Type</strong>: Select from options based on your
            language choice:
            <DocList>
              <DocListItem>
                TypeScript options: React (with TypeScript) or Node.js (with
                TypeScript)
              </DocListItem>
              <DocListItem>
                JavaScript options: React (with JavaScript), Node.js (with
                JavaScript), or Vanilla JavaScript
              </DocListItem>
            </DocList>
          </DocListItem>
        </DocList>

        <DocH4>Author Information</DocH4>
        <DocList>
          <DocListItem>
            <strong>Author Name</strong>: Your name or organization name.
          </DocListItem>
          <DocListItem>
            <strong>Author Email</strong>: Your email address.
          </DocListItem>
        </DocList>

        <DocH4>Project Structure & Features</DocH4>
        <DocList>
          <DocListItem>
            <strong>Internal Directory</strong>: Choose whether to include an
            internal directory for components not meant for public use.
          </DocListItem>
          <DocListItem>
            <strong>Webpack</strong>: Decide if you need to bundle your code
            using Webpack.
          </DocListItem>
          <DocListItem>
            <strong>ESLint</strong>: Choose whether to enforce coding standards
            with ESLint.
          </DocListItem>
          <DocListItem>
            <strong>PostCSS</strong>: Decide if your project will involve
            processing CSS (e.g., adding vendor prefixes).
          </DocListItem>
          <DocListItem>
            <strong>npmignore</strong>: Choose whether to include a .npmignore
            file to specify files to exclude from your npm package.
          </DocListItem>
        </DocList>

        <DocH4>Documentation & Legal</DocH4>
        <DocList>
          <DocListItem>
            <strong>License</strong>: Choose whether to include a LICENSE file
            and select the type (MIT, ISC, Apache-2.0, or GPL-3.0).
          </DocListItem>
          <DocListItem>
            <strong>Code of Conduct</strong>: Decide whether to include a
            CODE_OF_CONDUCT.md file for community guidelines.
          </DocListItem>
          <DocListItem>
            <strong>README</strong>: Choose whether to include a README.md file
            to describe your project.
          </DocListItem>
        </DocList>

        <DocH2 id="project-structure">Project Structure</DocH2>

        <DocParagraph>
          After initialization, PackShip will create a project with a structure
          based on your choices. Here&apos;s an example structure for a
          TypeScript React project:
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
            {`my-package/
├── src/
│   ├── index.tsx        # Main entry point
│   ├── declaration.d.ts # TypeScript declarations
│   └── internal/        # (Optional) Internal components
├── types/
│   └── index.ts         # Type definitions
├── styles/              # (Optional) CSS styles
├── dist/                # Compiled output (created after build)
├── package.json         # Package configuration
├── tsconfig.json        # TypeScript configuration
├── webpack.config.js    # (Optional) Webpack configuration
├── babel.config.json    # Babel configuration
├── postcss.config.js    # (Optional) PostCSS configuration
├── .eslintrc.json       # (Optional) ESLint configuration
├── .gitignore           # Git ignore file
├── .npmignore           # (Optional) npm ignore file
├── README.md            # (Optional) Documentation
├── LICENSE.md           # (Optional) License information
└── CODE_OF_CONDUCT.md   # (Optional) Code of conduct`}
          </pre>
        </div>

        <DocH3>Key Files</DocH3>

        <DocH4>src/index.tsx (or .jsx, .ts, .js)</DocH4>
        <DocParagraph>
          This is the main entry point of your package. All exports that should
          be available to consumers of your package should be exported from this
          file.
        </DocParagraph>

        <DocH4>package.json</DocH4>
        <DocParagraph>
          Contains metadata about your package and defines scripts,
          dependencies, and other configuration options. PackShip automatically
          configures this based on your choices.
        </DocParagraph>

        <DocH4>webpack.config.js (if selected)</DocH4>
        <DocParagraph>
          Configures how your package is bundled. PackShip sets up a default
          configuration that works well for your selected project type.
        </DocParagraph>

        <DocH2 id="next-steps">Next Steps</DocH2>

        <DocParagraph>After creating your project, you can:</DocParagraph>

        <DocList>
          <DocListItem>
            Navigate to your project directory:{" "}
            <DocCode>cd your-package-name</DocCode>
          </DocListItem>
          <DocListItem>
            Install dependencies with <DocCode>npm install</DocCode>
          </DocListItem>
          <DocListItem>
            Start developing your components in the <DocCode>src</DocCode>{" "}
            directory
          </DocListItem>
          <DocListItem>
            Build your package with <DocCode>npm run build</DocCode>
          </DocListItem>
          <DocListItem>
            Publish your package with <DocCode>packship publish</DocCode> or{" "}
            <DocCode>npm run packship:publish</DocCode>
          </DocListItem>
        </DocList>

        <DocNote>
          PackShip automatically adds a <DocCode>packship:publish</DocCode>{" "}
          script to your package.json, making it easy to publish your package
          using the PackShip CLI.
        </DocNote>

        {/* Next Page Button */}
        <NextPageButton title="Frontend Setup" href="/docs/frontend-setup" />
      </div>
    </>
  );
}
