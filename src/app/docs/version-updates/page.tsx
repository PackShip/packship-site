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

export default function VersionUpdates() {
  return (
    <>
      <div className="w-full flex flex-col gap-6">
        <DocParagraph>
          Keeping your PackShip projects up to date is important for security,
          performance, and access to new features. This guide explains how to
          update PackShip and manage version updates in your projects.
        </DocParagraph>

        <DocH2 id="updating-packship">Updating PackShip</DocH2>

        <DocParagraph>
          To update PackShip to the latest version, run the following command:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`npm install -g packship@latest`}
            language="bash"
          />
        </div>

        <DocParagraph>
          For MacOS and Linux users, you might need to use{" "}
          <DocCode>sudo</DocCode>:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`sudo npm install -g packship@latest`}
            language="bash"
          />
        </div>

        <DocH2 id="checking-version">Checking Your Current Version</DocH2>

        <DocParagraph>
          To check which version of PackShip you currently have installed, run:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code={`packship --version`} language="bash" />
        </div>

        <DocH2 id="version-numbering">Version Numbering</DocH2>

        <DocParagraph>
          PackShip follows semantic versioning (SemVer) with version numbers in
          the format of <DocCode>MAJOR.MINOR.PATCH</DocCode>:
        </DocParagraph>

        <DocList>
          <DocListItem>
            <strong>MAJOR</strong> version increments indicate incompatible API
            changes
          </DocListItem>
          <DocListItem>
            <strong>MINOR</strong> version increments indicate new functionality
            in a backward-compatible manner
          </DocListItem>
          <DocListItem>
            <strong>PATCH</strong> version increments indicate
            backward-compatible bug fixes
          </DocListItem>
        </DocList>

        <DocH2 id="updating-dependencies">Updating Project Dependencies</DocH2>

        <DocParagraph>
          To update the dependencies in your PackShip project, you can use
          npm&apos;s update command:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code={`npm update`} language="bash" />
        </div>

        <DocParagraph>
          This will update all packages listed in your{" "}
          <DocCode>package.json</DocCode> to the latest version that satisfies
          the version range specified in the file.
        </DocParagraph>

        <DocH3>Updating to Latest Major Versions</DocH3>

        <DocParagraph>
          To update packages to their latest major versions (which might include
          breaking changes), you can use the{" "}
          <DocCode>npm-check-updates</DocCode> tool:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`# Install the tool
npm install -g npm-check-updates

# Check for updates
ncu

# Apply updates to package.json
ncu -u

# Install updated packages
npm install`}
            language="bash"
          />
        </div>

        <DocNote>
          Always review the changes before updating to major versions, as they
          might include breaking changes that require code modifications.
        </DocNote>

        <DocH2 id="updating-specific-packages">
          Updating Specific Packages
        </DocH2>

        <DocParagraph>
          To update a specific package to its latest version:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code={`npm update package-name`} language="bash" />
        </div>

        <DocParagraph>
          To update a specific package to a specific version:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`npm install package-name@version`}
            language="bash"
          />
        </div>

        <DocH2 id="handling-breaking-changes">Handling Breaking Changes</DocH2>

        <DocParagraph>
          When updating to a new major version of PackShip or its dependencies,
          you might encounter breaking changes. Here are some tips for handling
          them:
        </DocParagraph>

        <DocList>
          <DocListItem>
            Always read the release notes or changelog before updating
          </DocListItem>
          <DocListItem>
            Create a backup or use version control before making significant
            updates
          </DocListItem>
          <DocListItem>
            Update one major dependency at a time to isolate issues
          </DocListItem>
          <DocListItem>
            Run tests after each update to catch issues early
          </DocListItem>
        </DocList>

        <DocH2 id="lockfile-management">Managing package-lock.json</DocH2>

        <DocParagraph>
          The <DocCode>package-lock.json</DocCode> file ensures that the same
          dependencies are installed consistently across different environments.
          When updating dependencies, the lock file will be updated
          automatically.
        </DocParagraph>

        <DocParagraph>
          If you encounter issues with the lock file, you can regenerate it:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`# Remove the lock file
rm package-lock.json

# Reinstall dependencies and generate a new lock file
npm install`}
            language="bash"
          />
        </div>

        <DocNote>
          Always commit the updated <DocCode>package-lock.json</DocCode> file to
          your version control system to ensure consistent builds across your
          team.
        </DocNote>

        <DocH2 id="troubleshooting">Troubleshooting Update Issues</DocH2>

        <DocH3>Dependency Conflicts</DocH3>

        <DocParagraph>
          If you encounter dependency conflicts during updates, you can try
          using the <DocCode>--legacy-peer-deps</DocCode> flag:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`npm install --legacy-peer-deps`}
            language="bash"
          />
        </div>

        <DocH3>Clearing npm Cache</DocH3>

        <DocParagraph>
          Sometimes, clearing the npm cache can resolve update issues:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code={`npm cache clean --force`} language="bash" />
        </div>

        <DocH3>Reinstalling Node Modules</DocH3>

        <DocParagraph>
          If all else fails, you can try removing the{" "}
          <DocCode>node_modules</DocCode> directory and reinstalling all
          dependencies:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`# Remove node_modules
rm -rf node_modules

# Reinstall dependencies
npm install`}
            language="bash"
          />
        </div>

        {/* Next Page Button */}
        <NextPageButton title="Migration Guide" href="/docs/migration" />
      </div>
    </>
  );
}
