"use client";

import React from "react";
import { usePathname } from "next/navigation";
import CopyCodeSnippet from "@/shared/CopyCodeSnippet";
import DocNavigation from "@/shared/DocNavigation";
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

export default function CliInit() {
  const pathname = usePathname();

  return (
    <>
      <div className="w-full flex flex-col gap-6">
        <DocParagraph>
          The <DocCode>packship init</DocCode> command is the starting point for
          creating a new package with PackShip. This guide explains all the
          options and features of this command.
        </DocParagraph>

        <DocH2 id="basic-usage">Basic Usage</DocH2>

        <DocParagraph>
          To initialize a new package project, simply run:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code="packship init" language="bash" />
        </div>

        <DocParagraph>
          This will start an interactive setup process that guides you through
          configuring your package.
        </DocParagraph>

        <DocH2 id="command-options">Command Options</DocH2>

        <DocParagraph>
          The <DocCode>init</DocCode> command supports several options to
          customize the initialization process:
        </DocParagraph>

        <DocH3>--template [name]</DocH3>

        <DocParagraph>
          Specify a template to use for your package. Available templates
          include:
        </DocParagraph>

        <DocList>
          <DocListItem>
            <DocCode>react</DocCode>: For React component libraries (default)
          </DocListItem>
          <DocListItem>
            <DocCode>vanilla</DocCode>: For plain JavaScript/TypeScript
            libraries
          </DocListItem>
          <DocListItem>
            <DocCode>node</DocCode>: For Node.js packages
          </DocListItem>
        </DocList>

        <div className="mb-4">
          <CopyCodeSnippet
            code="packship init --template vanilla"
            language="bash"
          />
        </div>

        <DocH3>--typescript</DocH3>

        <DocParagraph>
          Initialize the project with TypeScript support (this is the default).
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code="packship init --typescript" language="bash" />
        </div>

        <DocH3>--javascript</DocH3>

        <DocParagraph>
          Initialize the project with JavaScript instead of TypeScript.
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code="packship init --javascript" language="bash" />
        </div>

        <DocH3>--yes, -y</DocH3>

        <DocParagraph>Skip all prompts and use default values.</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code="packship init -y" language="bash" />
        </div>

        <DocNote>
          Using <DocCode>-y</DocCode> will create a package with default values.
          You&apos;ll need to manually edit the package.json file afterward to
          customize your package details.
        </DocNote>

        <DocH2 id="configuration-prompts">Configuration Prompts</DocH2>

        <DocParagraph>
          When running <DocCode>packship init</DocCode> without the{" "}
          <DocCode>-y</DocCode> flag, you&apos;ll be prompted to provide the
          following information:
        </DocParagraph>

        <DocH4>Package Name</DocH4>
        <DocParagraph>
          The name of your package. This should be unique on npm and follow npm
          naming conventions.
        </DocParagraph>

        <DocH4>Package Description</DocH4>
        <DocParagraph>
          A brief description of what your package does.
        </DocParagraph>

        <DocH4>Author</DocH4>
        <DocParagraph>Your name or organization name.</DocParagraph>

        <DocH4>License</DocH4>
        <DocParagraph>
          The license for your package. The default is MIT.
        </DocParagraph>

        <DocH4>Version</DocH4>
        <DocParagraph>
          The initial version of your package. The default is 0.1.0.
        </DocParagraph>

        <DocH2 id="examples">Examples</DocH2>

        <DocH3>Creating a React Component Library</DocH3>

        <div className="mb-4">
          <CopyCodeSnippet
            code="packship init --template react"
            language="bash"
          />
        </div>

        <DocH3>Creating a JavaScript Utility Library</DocH3>

        <div className="mb-4">
          <CopyCodeSnippet
            code="packship init --template vanilla --javascript"
            language="bash"
          />
        </div>

        <DocH3>Quick Initialization with Defaults</DocH3>

        <div className="mb-4">
          <CopyCodeSnippet code="packship init -y" language="bash" />
        </div>

        {/* Next Page Button */}
        <DocNavigation currentPath={pathname} />
      </div>
    </>
  );
}
