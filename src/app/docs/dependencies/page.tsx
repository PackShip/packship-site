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

export default function Dependencies() {
  const pathname = usePathname();

  return (
    <>
      <div className="w-full flex flex-col gap-6">
        <DocParagraph>
          Managing dependencies is a crucial aspect of package development. This
          guide explains how to handle different types of dependencies in your
          PackShip project.
        </DocParagraph>

        <DocH2 id="types-of-dependencies">Types of Dependencies</DocH2>

        <DocParagraph>
          In a Node.js package, there are three main types of dependencies:
        </DocParagraph>

        <DocH3>dependencies</DocH3>

        <DocParagraph>
          These are packages that your package needs to function in production.
          They are installed along with your package when someone installs it.
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
            {`"dependencies": {
  "lodash": "^4.17.21",
  "prop-types": "^15.8.1"
}`}
          </pre>
        </div>

        <DocH3>devDependencies</DocH3>

        <DocParagraph>
          These are packages that you need during development and testing, but
          not in production. They are not installed when someone installs your
          package.
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
            {`"devDependencies": {
  "@babel/core": "^7.18.6",
  "webpack": "^5.73.0",
  "typescript": "^4.7.4",
  "jest": "^28.1.2"
}`}
          </pre>
        </div>

        <DocH3>peerDependencies</DocH3>

        <DocParagraph>
          These are packages that your package needs but expects the consumer to
          provide. They are not installed automatically when someone installs
          your package.
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
            {`"peerDependencies": {
  "react": "^17.0.0 || ^18.0.0",
  "react-dom": "^17.0.0 || ^18.0.0"
}`}
          </pre>
        </div>

        <DocNote>
          For React component libraries, React and ReactDOM should typically be
          peerDependencies, not dependencies. This prevents multiple versions of
          React from being installed in the consumer&apos;s project.
        </DocNote>

        <DocH2 id="managing-dependencies">Managing Dependencies</DocH2>

        <DocH3>Adding Dependencies</DocH3>

        <DocParagraph>To add a runtime dependency:</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`npm install --save package-name`}
            language="bash"
          />
        </div>

        <DocParagraph>To add a development dependency:</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`npm install --save-dev package-name`}
            language="bash"
          />
        </div>

        <DocParagraph>To add a peer dependency:</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`npm install --save-peer package-name`}
            language="bash"
          />
        </div>

        <DocParagraph>
          You&apos;ll also need to install the peer dependency as a dev
          dependency to use it during development:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`npm install --save-dev package-name`}
            language="bash"
          />
        </div>

        <DocH3>Removing Dependencies</DocH3>

        <DocParagraph>To remove a dependency:</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`npm uninstall package-name`}
            language="bash"
          />
        </div>

        <DocH3>Updating Dependencies</DocH3>

        <DocParagraph>
          To update all dependencies to their latest versions according to the
          version ranges in your package.json:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code={`npm update`} language="bash" />
        </div>

        <DocParagraph>To update a specific dependency:</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code={`npm update package-name`} language="bash" />
        </div>

        <DocH2 id="version-ranges">Version Ranges</DocH2>

        <DocParagraph>
          npm uses semantic versioning (SemVer) for package versions.
          Here&apos;s how to specify version ranges in your package.json:
        </DocParagraph>

        <DocList>
          <DocListItem>
            <DocCode>^1.2.3</DocCode>: Compatible with 1.x.x, where x {">="} 2
            (will not update to 2.0.0)
          </DocListItem>
          <DocListItem>
            <DocCode>~1.2.3</DocCode>: Compatible with 1.2.x, where x {">="} 3
            (will not update to 1.3.0)
          </DocListItem>
          <DocListItem>
            <DocCode>1.2.3</DocCode>: Exact version
          </DocListItem>
          <DocListItem>
            <DocCode>*</DocCode>: Any version (not recommended)
          </DocListItem>
          <DocListItem>
            <DocCode>{">="}</DocCode>1.2.3: Version 1.2.3 or higher
          </DocListItem>
          <DocListItem>
            <DocCode>1.2.3 - 1.5.0</DocCode>: Range of versions
          </DocListItem>
          <DocListItem>
            <DocCode>^1.2.3 || ^2.0.0</DocCode>: Multiple ranges (either 1.x.x
            or 2.x.x)
          </DocListItem>
        </DocList>

        <DocH2 id="dependency-best-practices">Best Practices</DocH2>

        <DocH3>Minimize Dependencies</DocH3>

        <DocParagraph>
          Keep your dependencies to a minimum to reduce package size and
          potential security issues. Before adding a new dependency, consider:
        </DocParagraph>

        <DocList>
          <DocListItem>
            Is this functionality essential to your package?
          </DocListItem>
          <DocListItem>
            Could you implement this functionality yourself with a small amount
            of code?
          </DocListItem>
          <DocListItem>
            Is the dependency well-maintained and secure?
          </DocListItem>
          <DocListItem>
            What is the size impact of adding this dependency?
          </DocListItem>
        </DocList>

        <DocH3>Use Specific Version Ranges</DocH3>

        <DocParagraph>
          Use specific version ranges to avoid unexpected breaking changes:
        </DocParagraph>

        <DocList>
          <DocListItem>
            For dependencies, use <DocCode>^</DocCode> to allow minor and patch
            updates
          </DocListItem>
          <DocListItem>
            For critical dependencies, consider using <DocCode>~</DocCode> to
            allow only patch updates
          </DocListItem>
          <DocListItem>
            For peerDependencies, use a wider range to be compatible with more
            consumer setups
          </DocListItem>
        </DocList>

        <DocH3>Regularly Update Dependencies</DocH3>

        <DocParagraph>
          Regularly update your dependencies to get bug fixes and security
          patches. Tools like npm audit can help identify security issues in
          your dependencies:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code={`npm audit`} language="bash" />
        </div>

        <DocParagraph>To fix security issues automatically:</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code={`npm audit fix`} language="bash" />
        </div>

        <DocH3>Use package-lock.json</DocH3>

        <DocParagraph>
          The <DocCode>package-lock.json</DocCode> file ensures that the same
          dependencies are installed consistently across different environments.
          Always commit this file to your version control system.
        </DocParagraph>

        <DocH2 id="troubleshooting">Troubleshooting</DocH2>

        <DocH3>Dependency Conflicts</DocH3>

        <DocParagraph>
          If you encounter dependency conflicts, you can try using the{" "}
          <DocCode>--legacy-peer-deps</DocCode> flag:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`npm install --legacy-peer-deps`}
            language="bash"
          />
        </div>

        <DocH3>Clearing npm Cache</DocH3>

        <DocParagraph>
          Sometimes, clearing the npm cache can resolve dependency issues:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code={`npm cache clean --force`} language="bash" />
        </div>

        <DocH3>Reinstalling Dependencies</DocH3>

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
        <DocNavigation currentPath={pathname} />
      </div>
    </>
  );
}
