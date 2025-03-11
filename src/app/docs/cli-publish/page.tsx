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

export default function CLIPublish() {
  const pathname = usePathname();

  return (
    <>
      <div className="w-full flex flex-col gap-6">
        <DocParagraph>
          The <DocCode>packship publish</DocCode> command is used to publish
          your package to the npm registry. This guide explains how to use the
          command and its various options.
        </DocParagraph>

        <DocH2 id="basic-usage">Basic Usage</DocH2>

        <DocParagraph>To publish your package to npm, simply run:</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code={`packship publish`} language="bash" />
        </div>

        <DocParagraph>This command will:</DocParagraph>

        <DocList>
          <DocListItem>Build your package</DocListItem>
          <DocListItem>Run tests (if configured)</DocListItem>
          <DocListItem>Publish to npm</DocListItem>
        </DocList>

        <DocH2 id="command-options">Command Options</DocH2>

        <DocParagraph>
          The <DocCode>publish</DocCode> command supports several options to
          customize the publishing process:
        </DocParagraph>

        <DocH3>--tag [tag]</DocH3>

        <DocParagraph>
          Specify a tag for the published package. By default, packages are
          published with the <DocCode>latest</DocCode> tag.
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`# Publish with the beta tag
packship publish --tag beta

# Publish with the next tag
packship publish --tag next`}
            language="bash"
          />
        </div>

        <DocParagraph>Users can then install specific versions:</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`# Install latest stable version
npm install my-package

# Install beta version
npm install my-package@beta`}
            language="bash"
          />
        </div>

        <DocH3>--access [public|restricted]</DocH3>

        <DocParagraph>
          Specify the access level for scoped packages. By default, scoped
          packages are published as restricted (private).
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`# Publish a scoped package as public
packship publish --access public`}
            language="bash"
          />
        </div>

        <DocH3>--dry-run</DocH3>

        <DocParagraph>
          Perform a dry run to see what would happen without actually publishing
          the package.
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`packship publish --dry-run`}
            language="bash"
          />
        </div>

        <DocH3>--no-build</DocH3>

        <DocParagraph>Skip the build step before publishing.</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`packship publish --no-build`}
            language="bash"
          />
        </div>

        <DocNote>
          Use this option only if you&apos;ve already built your package and are
          sure that the build is up to date.
        </DocNote>

        <DocH3>--no-test</DocH3>

        <DocParagraph>Skip running tests before publishing.</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`packship publish --no-test`}
            language="bash"
          />
        </div>

        <DocH2 id="publishing-workflow">Publishing Workflow</DocH2>

        <DocParagraph>
          The <DocCode>packship publish</DocCode> command follows a specific
          workflow:
        </DocParagraph>

        <DocH3>1. Pre-publish Checks</DocH3>

        <DocParagraph>
          Before publishing, PackShip performs several checks:
        </DocParagraph>

        <DocList>
          <DocListItem>Verifies that you&apos;re logged in to npm</DocListItem>
          <DocListItem>
            Checks if the package name is available (for new packages)
          </DocListItem>
          <DocListItem>Validates the package.json file</DocListItem>
          <DocListItem>
            Ensures that the version hasn&apos;t already been published
          </DocListItem>
        </DocList>

        <DocH3>2. Building</DocH3>

        <DocParagraph>
          Unless <DocCode>--no-build</DocCode> is specified, PackShip will build
          your package:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code={`npm run build`} language="bash" />
        </div>

        <DocH3>3. Testing</DocH3>

        <DocParagraph>
          Unless <DocCode>--no-test</DocCode> is specified, PackShip will run
          your tests:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code={`npm test`} language="bash" />
        </div>

        <DocH3>4. Publishing</DocH3>

        <DocParagraph>
          Finally, PackShip publishes your package to npm:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`npm publish [--tag <tag>] [--access <public|restricted>]`}
            language="bash"
          />
        </div>

        <DocH2 id="versioning">Versioning</DocH2>

        <DocParagraph>
          Before publishing, you should update your package version. PackShip
          follows semantic versioning (SemVer):
        </DocParagraph>

        <DocList>
          <DocListItem>
            <strong>MAJOR</strong> version for incompatible API changes
          </DocListItem>
          <DocListItem>
            <strong>MINOR</strong> version for new functionality in a
            backward-compatible manner
          </DocListItem>
          <DocListItem>
            <strong>PATCH</strong> version for backward-compatible bug fixes
          </DocListItem>
        </DocList>

        <DocParagraph>To update your package version:</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`# Increment patch version (1.0.0 -> 1.0.1)
npm version patch

# Increment minor version (1.0.0 -> 1.1.0)
npm version minor

# Increment major version (1.0.0 -> 2.0.0)
npm version major`}
            language="bash"
          />
        </div>

        <DocH2 id="publishing-examples">Publishing Examples</DocH2>

        <DocH3>Publishing a New Package</DocH3>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`# Initialize a new package
packship init

# Make your changes
# ...

# Build and publish
packship publish`}
            language="bash"
          />
        </div>

        <DocH3>Publishing an Update</DocH3>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`# Update the version
npm version patch

# Build and publish
packship publish`}
            language="bash"
          />
        </div>

        <DocH3>Publishing a Beta Version</DocH3>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`# Update the version with a beta tag
npm version prerelease --preid=beta

# Build and publish with the beta tag
packship publish --tag beta`}
            language="bash"
          />
        </div>

        <DocH3>Publishing a Scoped Package</DocH3>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`# For a public scoped package
packship publish --access public

# For a private scoped package (default)
packship publish`}
            language="bash"
          />
        </div>

        <DocH2 id="troubleshooting">Troubleshooting</DocH2>

        <DocH3>Authentication Issues</DocH3>

        <DocParagraph>If you encounter authentication issues:</DocParagraph>

        <DocList>
          <DocListItem>
            Ensure you&apos;re logged in with <DocCode>npm login</DocCode>
          </DocListItem>
          <DocListItem>
            Check your npm token if you&apos;re using one
          </DocListItem>
          <DocListItem>
            Verify that you have the necessary permissions to publish
          </DocListItem>
        </DocList>

        <DocH3>Version Conflicts</DocH3>

        <DocParagraph>
          If you get an error about the version already existing:
        </DocParagraph>

        <DocList>
          <DocListItem>
            Update your package version with <DocCode>npm version</DocCode>
          </DocListItem>
          <DocListItem>
            Check the npm registry to see what versions are already published
          </DocListItem>
        </DocList>

        <DocH3>Build Failures</DocH3>

        <DocParagraph>If your build fails during publishing:</DocParagraph>

        <DocList>
          <DocListItem>
            Run <DocCode>npm run build</DocCode> separately to debug the issue
          </DocListItem>
          <DocListItem>Check your build configuration</DocListItem>
          <DocListItem>Ensure all dependencies are installed</DocListItem>
        </DocList>

        <DocH2 id="best-practices">Best Practices</DocH2>

        <DocList>
          <DocListItem>
            <strong>Always test before publishing</strong>: Ensure your package
            works as expected
          </DocListItem>
          <DocListItem>
            <strong>Use semantic versioning</strong>: Follow SemVer to
            communicate changes to users
          </DocListItem>
          <DocListItem>
            <strong>Include comprehensive documentation</strong>: Make it easy
            for users to understand your package
          </DocListItem>
          <DocListItem>
            <strong>Use a .npmignore file</strong>: Exclude unnecessary files
            from your package
          </DocListItem>
          <DocListItem>
            <strong>Set up CI/CD for publishing</strong>: Automate the
            publishing process
          </DocListItem>
        </DocList>

        {/* Next Page Button */}
        <DocNavigation currentPath={pathname} />
      </div>
    </>
  );
}
