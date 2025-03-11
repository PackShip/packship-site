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

export default function Prerequisites() {
  return (
    <>
      <div className="w-full flex flex-col gap-6">
        <DocParagraph>
          Before you start using PackShip, make sure you have the following
          prerequisites installed and configured on your system.
        </DocParagraph>

        <DocH2 id="system-requirements">System Requirements</DocH2>
        <DocParagraph>
          PackShip requires the following minimum software to be installed on
          your system:
        </DocParagraph>

        <DocList>
          <DocListItem>
            <strong>Node.js</strong> (version 12.x or higher)
          </DocListItem>
          <DocListItem>
            <strong>npm</strong> (version 6.x or higher)
          </DocListItem>
        </DocList>

        <DocH3>Operating System Compatibility</DocH3>
        <DocParagraph>PackShip is cross-platform and works on:</DocParagraph>

        <DocList>
          <DocListItem>
            <strong>Windows</strong> (Windows 10 or higher)
          </DocListItem>
          <DocListItem>
            <strong>macOS</strong> (10.15 Catalina or higher)
          </DocListItem>
          <DocListItem>
            <strong>Linux</strong> (Most major distributions)
          </DocListItem>
        </DocList>

        <DocParagraph>
          While PackShip can run on these minimum requirements, we recommend
          using:
        </DocParagraph>

        <DocList>
          <DocListItem>
            <strong>Node.js</strong> (version 16.x or higher) for optimal
            performance
          </DocListItem>
          <DocListItem>
            <strong>npm</strong> (version 7.x or higher) for improved dependency
            resolution
          </DocListItem>
        </DocList>

        <DocH3>Hardware Requirements</DocH3>
        <DocParagraph>
          PackShip is lightweight and has minimal hardware requirements:
        </DocParagraph>

        <DocList>
          <DocListItem>
            <strong>Disk Space:</strong> ~50MB for the CLI tool and its
            dependencies
          </DocListItem>
          <DocListItem>
            <strong>Memory:</strong> 256MB RAM minimum (512MB recommended)
          </DocListItem>
          <DocListItem>
            <strong>Processor:</strong> Any modern CPU (1GHz or faster)
          </DocListItem>
        </DocList>

        <DocNote>
          When building larger packages, more memory and disk space may be
          required depending on your project&apos;s dependencies.
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
        <NextPageButton title="Create a Project" href="/docs/create-project" />
      </div>
    </>
  );
}
