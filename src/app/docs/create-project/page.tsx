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

        <DocH4>Package Name</DocH4>
        <DocParagraph>
          Enter a unique name for your package. This will be the name used when
          publishing to npm.
        </DocParagraph>

        <DocH4>Package Description</DocH4>
        <DocParagraph>
          Provide a brief description of what your package does.
        </DocParagraph>

        <DocH4>Author</DocH4>
        <DocParagraph>Enter your name or organization name.</DocParagraph>

        <DocH4>License</DocH4>
        <DocParagraph>
          Choose a license for your package (default: MIT).
        </DocParagraph>

        <DocH4>Version</DocH4>
        <DocParagraph>Set the initial version (default: 0.1.0).</DocParagraph>

        <DocH2 id="project-structure">Project Structure</DocH2>

        <DocParagraph>
          After initialization, PackShip will create a project with the
          following structure:
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
            {`my-package/
├── src/
│   ├── index.ts        # Main entry point
│   └── components/     # React components
├── dist/               # Compiled output
├── node_modules/       # Dependencies
├── package.json        # Package configuration
├── tsconfig.json       # TypeScript configuration
├── webpack.config.js   # Webpack configuration
└── README.md           # Documentation`}
          </pre>
        </div>

        <DocH3>Key Files</DocH3>

        <DocH4>src/index.ts</DocH4>
        <DocParagraph>
          This is the main entry point of your package. All exports that should
          be available to consumers of your package should be exported from this
          file.
        </DocParagraph>

        <DocH4>package.json</DocH4>
        <DocParagraph>
          Contains metadata about your package and defines scripts,
          dependencies, and other configuration options.
        </DocParagraph>

        <DocH4>webpack.config.js</DocH4>
        <DocParagraph>
          Configures how your package is bundled. PackShip sets up a default
          configuration that works well for most React packages.
        </DocParagraph>

        <DocH2 id="next-steps">Next Steps</DocH2>

        <DocParagraph>After creating your project, you can:</DocParagraph>

        <DocList>
          <DocListItem>
            Install dependencies with <DocCode>npm install</DocCode>
          </DocListItem>
          <DocListItem>
            Start developing your components in the{" "}
            <DocCode>src/components</DocCode> directory
          </DocListItem>
          <DocListItem>
            Export your components from <DocCode>src/index.ts</DocCode>
          </DocListItem>
          <DocListItem>
            Build your package with <DocCode>npm run build</DocCode>
          </DocListItem>
          <DocListItem>
            Publish your package with <DocCode>packship publish</DocCode>
          </DocListItem>
        </DocList>

        <DocNote>
          Remember to update the version in <DocCode>package.json</DocCode>{" "}
          before publishing updates to your package.
        </DocNote>

        {/* Next Page Button */}
        <NextPageButton title="Frontend Setup" href="/docs/frontend-setup" />
      </div>
    </>
  );
}
