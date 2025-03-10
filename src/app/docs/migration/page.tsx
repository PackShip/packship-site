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
          Version 2.0 of PackShip introduces several breaking changes and new
          features. Follow these steps to migrate your project from v1.x to
          v2.x.
        </DocParagraph>

        <DocH3>Update PackShip CLI</DocH3>

        <DocParagraph>
          First, update the PackShip CLI to the latest version:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`npm install -g packship@latest`}
            language="bash"
          />
        </div>

        <DocH3>Project Configuration Changes</DocH3>

        <DocParagraph>
          Version 2.0 uses a new configuration file format. You need to update
          your <DocCode>packship.config.js</DocCode> file:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// v1.x format (old)
module.exports = {
  name: 'my-package',
  entry: './src/index.ts',
  output: './dist',
  typescript: true,
  react: true
};

// v2.x format (new)
module.exports = {
  package: {
    name: 'my-package',
  },
  build: {
    entry: './src/index.ts',
    output: './dist',
  },
  features: {
    typescript: true,
    react: true
  }
};`}
            language="javascript"
          />
        </div>

        <DocNote>
          The migration tool can automatically convert your configuration file.
          Run <DocCode>packship migrate</DocCode> to use it.
        </DocNote>

        <DocH3>Webpack Configuration Changes</DocH3>

        <DocParagraph>
          In v2.x, the webpack configuration structure has changed. If you have
          a custom webpack configuration, you need to update it:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// v1.x format (old)
module.exports = {
  // ... webpack config
};

// v2.x format (new)
module.exports = (env, argv) => {
  return {
    // ... webpack config
  };
};`}
            language="javascript"
          />
        </div>

        <DocH3>Package.json Scripts</DocH3>

        <DocParagraph>
          Update your <DocCode>package.json</DocCode> scripts to use the new CLI
          commands:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// v1.x scripts (old)
"scripts": {
  "build": "packship build",
  "publish": "packship publish"
}

// v2.x scripts (new)
"scripts": {
  "build": "packship build",
  "publish": "packship publish",
  "dev": "packship dev"
}`}
            language="json"
          />
        </div>

        <DocH3>TypeScript Configuration</DocH3>

        <DocParagraph>
          Version 2.0 requires TypeScript 4.0 or later. Update your{" "}
          <DocCode>tsconfig.json</DocCode> file:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx", // Updated from "react"
    "declaration": true,
    "declarationDir": "dist/types",
    "outDir": "dist"
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist", "**/*.test.ts", "**/*.test.tsx"]
}`}
            language="json"
          />
        </div>

        <DocH3>Babel Configuration</DocH3>

        <DocParagraph>
          Update your <DocCode>.babelrc</DocCode> file to use the new preset
          options:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`{
  "presets": [
    "@babel/preset-env",
    ["@babel/preset-react", {
      "runtime": "automatic" // New in v2.x
    }],
    "@babel/preset-typescript"
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-runtime"
  ]
}`}
            language="json"
          />
        </div>

        <DocH3>API Changes</DocH3>

        <DocParagraph>
          Several API methods have been renamed or changed in v2.x:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// v1.x API (old)
import { configure, build } from 'packship';

configure({
  // config options
});

build();

// v2.x API (new)
import { createConfig, buildPackage } from 'packship';

const config = createConfig({
  // config options
});

buildPackage(config);`}
            language="javascript"
          />
        </div>

        <DocH2 id="automated-migration">Automated Migration Tool</DocH2>

        <DocParagraph>
          PackShip provides an automated migration tool to help you upgrade your
          project:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code={`packship migrate`} language="bash" />
        </div>

        <DocParagraph>This tool will:</DocParagraph>

        <DocList>
          <DocListItem>Update your configuration files</DocListItem>
          <DocListItem>Update your package.json scripts</DocListItem>
          <DocListItem>
            Update your webpack and Babel configurations
          </DocListItem>
          <DocListItem>
            Provide guidance on API changes that need manual updates
          </DocListItem>
        </DocList>

        <DocNote>
          Always back up your project before running the migration tool. While
          it attempts to preserve your custom configurations, manual adjustments
          might still be necessary.
        </DocNote>

        <DocH2 id="troubleshooting">Troubleshooting Migration Issues</DocH2>

        <DocH3>Common Issues</DocH3>

        <DocH4>Build Failures</DocH4>

        <DocParagraph>
          If your build fails after migration, check the following:
        </DocParagraph>

        <DocList>
          <DocListItem>
            Ensure all dependencies are updated to compatible versions
          </DocListItem>
          <DocListItem>
            Verify that your webpack configuration is correctly formatted
          </DocListItem>
          <DocListItem>
            Check for API usage that needs to be updated
          </DocListItem>
        </DocList>

        <DocH4>TypeScript Errors</DocH4>

        <DocParagraph>If you encounter TypeScript errors:</DocParagraph>

        <DocList>
          <DocListItem>Update TypeScript to version 4.0 or later</DocListItem>
          <DocListItem>
            Update type definitions for React and other dependencies
          </DocListItem>
          <DocListItem>
            Check for breaking changes in TypeScript 4.0 that might affect your
            code
          </DocListItem>
        </DocList>

        <DocH3>Getting Help</DocH3>

        <DocParagraph>
          If you encounter issues during migration that you can&apos;t resolve,
          you can:
        </DocParagraph>

        <DocList>
          <DocListItem>
            Check the{" "}
            <a
              href="https://github.com/packship/packship/issues"
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
