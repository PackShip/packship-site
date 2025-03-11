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
          If you haven&apos;t installed PackShip globally, you can use npx:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code="npx packship init" language="bash" />
        </div>

        <DocParagraph>
          This will start an interactive setup process that guides you through
          configuring your package.
        </DocParagraph>

        <DocH2 id="command-options">Command Options</DocH2>

        <DocParagraph>
          The <DocCode>init</DocCode> command supports the following option:
        </DocParagraph>

        <DocH3>--yes, -y</DocH3>

        <DocParagraph>Skip all prompts and use default values.</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code="packship init -y" language="bash" />
        </div>

        <DocParagraph>Or with npx:</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code="npx packship init -y" language="bash" />
        </div>

        <DocNote>
          Using <DocCode>-y</DocCode> will create a package with default values.
          You&apos;ll need to manually edit the package.json file afterward to
          customize your package details.
        </DocNote>

        <DocH2 id="configuration-prompts">Configuration Prompts</DocH2>

        <DocParagraph>
          When running <DocCode>packship init</DocCode> without the{" "}
          <DocCode>-y</DocCode> flag, you&apos;ll be prompted to provide package
          creation information.
        </DocParagraph>

        <DocH2 id="examples">Examples</DocH2>

        <DocH3>Quick Initialization with Defaults</DocH3>

        <div className="mb-4">
          <CopyCodeSnippet code="packship init -y" language="bash" />
        </div>

        <DocH3>Using npx for One-time Execution</DocH3>

        <div className="mb-4">
          <CopyCodeSnippet code="npx packship init" language="bash" />
        </div>

        {/* Next Page Button */}
        <DocNavigation currentPath={pathname} />
      </div>
    </>
  );
}
