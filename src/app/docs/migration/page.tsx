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

export default function Migration() {
  return (
    <>
      <div className="w-full flex flex-col gap-6">
        <DocParagraph>
          This guide provides instructions for migrating between major versions
          of PackShip. Each major version may introduce breaking changes that
          require updates to your project.
        </DocParagraph>

        <DocH2 id="migration-v1-v2">Migrating from v1.x to v2.x</DocH2>

        <DocParagraph>
          Version 2.0 of PackShip marks a significant transition from a
          commercial product to an open-source project. This change was made to
          foster community-driven innovation, improve accessibility, increase
          transparency, and provide educational resources for developers.
        </DocParagraph>

        <DocH3>Key Changes in v2.x</DocH3>

        <DocParagraph>The primary changes in v2.x focus on:</DocParagraph>

        <DocList>
          <DocListItem>
            <strong>Licensing:</strong> PackShip is now fully open source,
            removing all commercial licensing restrictions
          </DocListItem>
          <DocListItem>
            <strong>Publishing Improvements:</strong> Resolved edge cases and
            improved reliability in the package publishing process
          </DocListItem>
          <DocListItem>
            <strong>Community Focus:</strong> Added infrastructure for community
            contributions and feedback
          </DocListItem>
        </DocList>

        <DocH3>Update PackShip CLI</DocH3>

        <DocParagraph>
          To migrate to v2.x, update the PackShip CLI to the latest version:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`npm install -g packship@latest`}
            language="bash"
          />
        </div>

        <DocH3>Getting Involved</DocH3>

        <DocParagraph>
          As an open-source project, PackShip now welcomes community
          contributions. You can get involved by:
        </DocParagraph>

        <DocList>
          <DocListItem>
            Starring and watching the{" "}
            <a
              href="https://github.com/CodeNKoffee/packship"
              target="_blank"
              rel="noopener noreferrer"
              className="text-packship-purple-lite hover:underline"
            >
              GitHub repository
            </a>
          </DocListItem>
          <DocListItem>Providing feedback through GitHub issues</DocListItem>
          <DocListItem>Contributing code, documentation, or ideas</DocListItem>
          <DocListItem>
            Spreading the word about PackShip in your developer communities
          </DocListItem>
        </DocList>

        <DocNote>
          All existing PackShip projects will continue to work with v2.x without
          requiring configuration changes. The transition to open source does
          not introduce breaking changes to the API or configuration.
        </DocNote>

        <DocH2 id="future-plans">Future Plans</DocH2>

        <DocParagraph>
          The open-source journey for PackShip is just beginning. The roadmap
          for future versions includes:
        </DocParagraph>

        <DocList>
          <DocListItem>
            <strong>PackShip Pug:</strong> A desktop GUI application for visual
            package management
          </DocListItem>
          <DocListItem>
            <strong>Enhanced Plugin System:</strong> For extending functionality
            with community-developed plugins
          </DocListItem>
          <DocListItem>
            <strong>Framework Integrations:</strong> Better integration with
            popular frameworks and tools
          </DocListItem>
          <DocListItem>
            <strong>Improved Documentation:</strong> Expanded learning resources
            and examples
          </DocListItem>
        </DocList>

        <DocH3>Getting Help</DocH3>

        <DocParagraph>
          If you encounter issues during migration or have questions about
          PackShip v2, you can:
        </DocParagraph>

        <DocList>
          <DocListItem>
            Check the{" "}
            <a
              href="https://github.com/CodeNKoffee/packship/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-packship-purple-lite hover:underline"
            >
              GitHub issues
            </a>{" "}
            for similar problems and solutions
          </DocListItem>
          <DocListItem>
            Join the{" "}
            <a
              href="https://discord.gg/packship"
              target="_blank"
              rel="noopener noreferrer"
              className="text-packship-purple-lite hover:underline"
            >
              PackShip Discord community
            </a>{" "}
            for real-time help
          </DocListItem>
          <DocListItem>
            File a new issue on GitHub if you believe you&apos;ve found a bug
          </DocListItem>
        </DocList>

        {/* Next Page Button */}
        <NextPageButton
          title="Package Structure"
          href="/docs/package-structure"
        />
      </div>
    </>
  );
}
