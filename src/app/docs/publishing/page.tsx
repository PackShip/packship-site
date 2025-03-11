"use client";

import React from "react";
import { usePathname } from "next/navigation";
import CopyCodeSnippet from "@/shared/CopyCodeSnippet";
import DocNavigation from "@/shared/DocNavigation";
import { DocH2, DocH3, DocH4, DocParagraph, DocCode, DocNote, DocList, DocListItem } from "@/shared/DocTypography";

export default function Publishing() {
  const pathname = usePathname();

  return (
    <>
      <div className="w-full flex flex-col gap-6">
        <DocParagraph>
          Publishing your package to npm makes it available for others to install and use. This guide explains how to prepare and publish your PackShip project to the npm registry.
        </DocParagraph>

        <DocH2 id="prerequisites">
          Prerequisites
        </DocH2>

        <DocParagraph>
          Before publishing your package, ensure you have:
        </DocParagraph>

        <DocList>
          <DocListItem>
            An npm account (create one at <a href="https://www.npmjs.com/signup" target="_blank" rel="noopener noreferrer" className="text-packship-purple-lite hover:underline">npmjs.com</a>)
          </DocListItem>
          <DocListItem>
            Logged in to npm via the command line
          </DocListItem>
          <DocListItem>
            A properly configured <DocCode>package.json</DocCode> file
          </DocListItem>
          <DocListItem>
            Built your package
          </DocListItem>
        </DocList>

        <DocH2 id="npm-login">
          Logging in to npm
        </DocH2>

        <DocParagraph>
          To publish packages, you need to be logged in to npm. Run the following command:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet 
            code={`npm login`}
            language="bash"
          />
        </div>

        <DocParagraph>
          You&apos;ll be prompted to enter your username, password, and email address. If you have two-factor authentication enabled, you&apos;ll also need to provide an OTP (One-Time Password).
        </DocParagraph>

        <DocH2 id="package-preparation">
          Preparing Your Package
        </DocH2>

        <DocH3>
          Package.json Configuration
        </DocH3>

        <DocParagraph>
          Ensure your <DocCode>package.json</DocCode> file is properly configured:
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
{`{
  "name": "my-package",          // Must be unique on npm
  "version": "1.0.0",            // Follow semantic versioning
  "description": "A description of my package",
  "main": "dist/index.js",       // Entry point for CommonJS
  "module": "dist/index.esm.js", // Entry point for ES modules
  "types": "dist/index.d.ts",    // TypeScript declarations
  "files": [                     // Files to include in the package
    "dist",
    "README.md",
    "LICENSE"
  ],
  "scripts": {
    "build": "packship build",
    "prepublishOnly": "npm run build"
  },
  "keywords": [                  // Help users find your package
    "react",
    "component",
    "ui"
  ],
  "author": "Your Name",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/username/my-package.git"
  },
  "bugs": {
    "url": "https://github.com/username/my-package/issues"
  },
  "homepage": "https://github.com/username/my-package#readme"
}`}
          </pre>
        </div>

        <DocH3>
          Building Your Package
        </DocH3>

        <DocParagraph>
          Before publishing, build your package to generate the distribution files:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet 
            code={`npm run build`}
            language="bash"
          />
        </div>

        <DocParagraph>
          This will create the compiled files in the <DocCode>dist/</DocCode> directory.
        </DocParagraph>

        <DocH3>
          README and Documentation
        </DocH3>

        <DocParagraph>
          Ensure your package has a comprehensive README.md file that includes:
        </DocParagraph>

        <DocList>
          <DocListItem>
            Package name and description
          </DocListItem>
          <DocListItem>
            Installation instructions
          </DocListItem>
          <DocListItem>
            Usage examples
          </DocListItem>
          <DocListItem>
            API documentation
          </DocListItem>
          <DocListItem>
            License information
          </DocListItem>
        </DocList>

        <DocH3>
          License
        </DocH3>

        <DocParagraph>
          Include a LICENSE file in your package. Common open-source licenses include MIT, Apache 2.0, and GPL.
        </DocParagraph>

        <DocH2 id="publishing-package">
          Publishing Your Package
        </DocH2>

        <DocH3>
          Using PackShip
        </DocH3>

        <DocParagraph>
          PackShip provides a simplified publishing workflow. To publish your package:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet 
            code={`packship publish`}
            language="bash"
          />
        </div>

        <DocParagraph>
          This command will:
        </DocParagraph>

        <DocList>
          <DocListItem>
            Build your package
          </DocListItem>
          <DocListItem>
            Run tests (if configured)
          </DocListItem>
          <DocListItem>
            Publish to npm
          </DocListItem>
        </DocList>

        <DocH3>
          Using npm
        </DocH3>

        <DocParagraph>
          Alternatively, you can use the standard npm publish command:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet 
            code={`npm publish`}
            language="bash"
          />
        </div>

        <DocNote>
          If you&apos;ve set up the <DocCode>prepublishOnly</DocCode> script in your package.json, npm will automatically build your package before publishing.
        </DocNote>

        <DocH3>
          Publishing a Scoped Package
        </DocH3>

        <DocParagraph>
          If your package is scoped (e.g., <DocCode>@username/package-name</DocCode>), you need to specify that it&apos;s public:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet 
            code={`npm publish --access public`}
            language="bash"
          />
        </div>

        <DocH2 id="versioning">
          Versioning
        </DocH2>

        <DocParagraph>
          Follow semantic versioning (SemVer) for your package versions:
        </DocParagraph>

        <DocList>
          <DocListItem>
            <strong>MAJOR</strong> version for incompatible API changes
          </DocListItem>
          <DocListItem>
            <strong>MINOR</strong> version for new functionality in a backward-compatible manner
          </DocListItem>
          <DocListItem>
            <strong>PATCH</strong> version for backward-compatible bug fixes
          </DocListItem>
        </DocList>

        <DocParagraph>
          To update your package version:
        </DocParagraph>

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

        <DocH2 id="publishing-updates">
          Publishing Updates
        </DocH2>

        <DocParagraph>
          To publish an update to your package:
        </DocParagraph>

        <DocList>
          <DocListItem>
            Make your changes
          </DocListItem>
          <DocListItem>
            Update the version number
          </DocListItem>
          <DocListItem>
            Build the package
          </DocListItem>
          <DocListItem>
            Publish to npm
          </DocListItem>
        </DocList>

        <div className="mb-4">
          <CopyCodeSnippet 
            code={`# Update version
npm version patch

# Publish
packship publish`}
            language="bash"
          />
        </div>

        <DocH2 id="unpublishing">
          Unpublishing
        </DocH2>

        <DocParagraph>
          npm has strict policies about unpublishing packages. You can unpublish a package within 72 hours of publishing:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet 
            code={`npm unpublish my-package@1.0.0`}
            language="bash"
          />
        </div>

        <DocNote>
          After 72 hours, you can only unpublish a package in special circumstances. It&apos;s better to deprecate a package instead.
        </DocNote>

        <DocH3>
          Deprecating a Package
        </DocH3>

        <DocParagraph>
          To mark a package as deprecated:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet 
            code={`npm deprecate my-package@1.0.0 "This version is deprecated, please use version 2.0.0 instead"`}
            language="bash"
          />
        </div>

        <DocH2 id="best-practices">
          Publishing Best Practices
        </DocH2>

        <DocList>
          <DocListItem>
            <strong>Test before publishing</strong>: Ensure your package works as expected before publishing.
          </DocListItem>
          <DocListItem>
            <strong>Use a .npmignore file</strong>: Exclude unnecessary files from your package to reduce its size.
          </DocListItem>
          <DocListItem>
            <strong>Include comprehensive documentation</strong>: Make it easy for users to understand and use your package.
          </DocListItem>
          <DocListItem>
            <strong>Follow semantic versioning</strong>: Help users understand the impact of updates.
          </DocListItem>
          <DocListItem>
            <strong>Use npm tags</strong>: Tag releases as <DocCode>latest</DocCode>, <DocCode>beta</DocCode>, etc.
          </DocListItem>
        </DocList>

        <DocH3>
          Using npm Tags
        </DocH3>

        <DocParagraph>
          You can publish a package with a specific tag:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet 
            code={`# Publish as beta
npm publish --tag beta

# Publish as next
npm publish --tag next`}
            language="bash"
          />
        </div>

        <DocParagraph>
          Users can then install specific versions:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet 
            code={`# Install latest stable version
npm install my-package

# Install beta version
npm install my-package@beta`}
            language="bash"
          />
        </div>

        {/* Next Page Button */}
        <DocNavigation currentPath={pathname} />
      </div>
    </>
  );
} 