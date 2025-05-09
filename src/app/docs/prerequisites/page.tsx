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

export default function Prerequisites() {
  const pathname = usePathname();

  return (
    <>
      <div className="w-full flex flex-col gap-6">
        <DocParagraph>
          Before you start using PackShip, make sure you have the following
          prerequisites installed and configured on your system.
        </DocParagraph>

        <DocH2 id="system-requirements">System Requirements</DocH2>
        <DocParagraph>
          As of March 2025, PackShip requires the following minimum software to
          be installed on your system:
        </DocParagraph>

        <DocList>
          <DocListItem>
            <strong>Node.js</strong> (version 20.x or higher)
          </DocListItem>
          <DocListItem>
            <strong>npm</strong> (version 9.x or higher)
          </DocListItem>
        </DocList>

        <DocH3>Operating System Compatibility</DocH3>
        <DocParagraph>PackShip is cross-platform and works on:</DocParagraph>

        <DocList>
          <DocListItem>
            <strong>Windows</strong>
          </DocListItem>
          <DocListItem>
            <strong>macOS</strong>
          </DocListItem>
          <DocListItem>
            <strong>Linux</strong>
          </DocListItem>
        </DocList>

        <DocParagraph>
          While PackShip can run on these minimum requirements, we recommend
          using:
        </DocParagraph>

        <DocList>
          <DocListItem>
            <strong>Node.js</strong> (version 22.x or higher) for optimal
            performance
          </DocListItem>
          <DocListItem>
            <strong>npm</strong> (version 10.x or higher) for improved
            dependency resolution
          </DocListItem>
        </DocList>

        <DocH3>Hardware Requirements</DocH3>
        <DocParagraph>
          PackShip is lightweight and has minimal hardware requirements:
        </DocParagraph>

        <DocList>
          <DocListItem>
            <strong>Disk Space:</strong> Minimal space required for the CLI tool
            itself. Additional space will be needed for your project
            dependencies.
          </DocListItem>
          <DocListItem>
            <strong>Internet Connection:</strong> Required for installing
            dependencies and publishing packages
          </DocListItem>
        </DocList>

        <DocNote>
          When building larger packages, more disk space may be required
          depending on your project&apos;s dependencies and build artifacts.
        </DocNote>

        <DocH3>Installing Node.js and npm</DocH3>

        <DocParagraph>
          You can download and install Node.js and npm from the{" "}
          <a
            href="https://nodejs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-packship-purple-lite hover:underline"
          >
            official Node.js website
          </a>
          .
        </DocParagraph>

        <DocParagraph>
          To verify that Node.js and npm are installed correctly, run the
          following commands in your terminal:
        </DocParagraph>

        <div className="mb-4 flex flex-col gap-3">
          <CopyCodeSnippet code="node --version" language="bash" />
          <CopyCodeSnippet code="npm --version" language="bash" />
        </div>

        <DocH3>Installing PackShip CLI</DocH3>

        <DocParagraph>
          Once you have Node.js and npm set up, you can install the PackShip CLI
          tool globally on your machine:
        </DocParagraph>

        <div className="mb-4 flex flex-col gap-3">
          <DocH4>For macOS/Linux</DocH4>
          <CopyCodeSnippet
            code="sudo npm i -g packship@latest"
            language="bash"
          />

          <DocH4>For Windows</DocH4>
          <CopyCodeSnippet code="npm i -g packship@latest" language="bash" />
        </div>

        <DocParagraph>
          This will install the PackShip command suite on your machine, making
          the <DocCode>packship</DocCode> command available globally.
        </DocParagraph>

        <DocParagraph>
          To verify that PackShip is installed correctly, run:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code="packship --version" language="bash" />
        </div>

        <DocH3>Development Environment</DocH3>

        <DocParagraph>
          While not strictly required, we recommend using a code editor with
          good TypeScript support, such as:
        </DocParagraph>

        <DocList>
          <DocListItem>
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-packship-purple-lite hover:underline"
            >
              Visual Studio Code
            </a>{" "}
            (recommended)
          </DocListItem>
          <DocListItem>
            <a
              href="https://www.jetbrains.com/webstorm/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-packship-purple-lite hover:underline"
            >
              WebStorm
            </a>
          </DocListItem>
        </DocList>

        <DocH2 id="npm-account">npm Account</DocH2>

        <DocParagraph>
          To publish packages, you&apos;ll need an npm account. If you
          don&apos;t have one already, you can create one at{" "}
          <a
            href="https://www.npmjs.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="text-packship-purple-lite hover:underline"
          >
            npmjs.com
          </a>
          .
        </DocParagraph>

        <DocParagraph>
          After creating an account, you&apos;ll need to log in via the command
          line:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code="npm login" language="bash" />
        </div>

        <DocNote>
          You&apos;ll be prompted to enter your username, password, and email
          address. If you have two-factor authentication enabled, you&apos;ll
          also need to provide an OTP (One-Time Password).
        </DocNote>

        {/* Next Page Button */}
        <DocNavigation currentPath={pathname} />
      </div>
    </>
  );
}
