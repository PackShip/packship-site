"use client";

import React from "react";
import { usePathname } from "next/navigation";
import CopyCodeSnippet from "@/shared/CopyCodeSnippet";
import DocNavigation from "@/shared/DocNavigation";
import {
  DocH2,
  DocH3,
  DocParagraph,
  DocCode,
  DocNote,
} from "@/shared/DocTypography";

export default function CliVersion() {
  const pathname = usePathname();

  return (
    <>
      <div className="w-full flex flex-col gap-6">
        <DocParagraph>
          You can check the current version of PackShip installed on your system
          using the version flag.
        </DocParagraph>

        <DocH2 id="checking-version">Checking PackShip Version</DocH2>

        <DocParagraph>
          To check the version of PackShip, use the <DocCode>--version</DocCode>{" "}
          flag:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code="packship --version" language="bash" />
        </div>

        <DocParagraph>
          If you haven&apos;t installed PackShip globally, you can use npx:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code="npx packship --version" language="bash" />
        </div>

        <DocH2 id="output">Output</DocH2>

        <DocParagraph>
          The command will display the current version of PackShip in the
          following format:
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>packship v1.0.0</pre>
        </div>

        <DocH2 id="shorthand-version">Using the Shorthand Flag</DocH2>

        <DocParagraph>
          You can also use the shorthand <DocCode>-V</DocCode> flag:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code="packship -V" language="bash" />
        </div>

        <DocNote>
          Checking the version is useful when you need to verify which version
          of PackShip you&apos;re using, especially when troubleshooting issues
          or ensuring compatibility with specific features.
        </DocNote>

        {/* Next Page Button */}
        <DocNavigation currentPath={pathname} />
      </div>
    </>
  );
}
