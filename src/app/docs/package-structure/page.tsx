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

export default function PackageStructure() {
  const pathname = usePathname();

  return (
    <>
      <div className="w-full flex flex-col gap-6">
        <DocParagraph>
          Understanding the structure of your package is essential for effective
          development and maintenance. PackShip creates a well-organized project
          structure based on your choices during initialization.
        </DocParagraph>

        <DocH2 id="project-types">Project Types</DocH2>

        <DocParagraph>
          PackShip supports multiple project types, each with its own
          recommended structure. The structure varies based on your language
          choice (TypeScript or JavaScript) and project type.
        </DocParagraph>

        <DocH3 id="typescript-react">TypeScript React Package</DocH3>

        <DocParagraph>
          A TypeScript React package is structured to support component
          development with type safety:
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
            {`my-package/
├── src/
│   ├── index.tsx           # Main entry point
│   ├── declaration.d.ts    # TypeScript declarations
│   └── internal/           # (Optional) Internal components
│       └── index.tsx
├── types/
│   └── index.ts            # Type definitions
├── styles/                 # (Optional) CSS styles
│   └── style.css
├── dist/                   # Compiled output (created after build)
├── package.json            # Package configuration
├── tsconfig.json           # TypeScript configuration
├── webpack.config.js       # (Optional) Webpack configuration
├── babel.config.json       # Babel configuration
├── postcss.config.js       # (Optional) PostCSS configuration
├── .eslintrc.json          # (Optional) ESLint configuration
├── .gitignore              # Git ignore file
├── .npmignore              # (Optional) npm ignore file
├── README.md               # (Optional) Documentation
├── LICENSE.md              # (Optional) License information
└── CODE_OF_CONDUCT.md      # (Optional) Code of conduct`}
          </pre>
        </div>

        <DocH3 id="typescript-node">TypeScript Node.js Package</DocH3>

        <DocParagraph>
          A TypeScript Node.js package is structured for server-side
          development:
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
            {`my-package/
├── src/
│   ├── index.ts            # Main entry point
│   ├── declaration.d.ts    # TypeScript declarations
│   └── internal/           # (Optional) Internal modules
│       └── index.ts
├── types/
│   └── index.ts            # Type definitions
├── dist/                   # Compiled output (created after build)
├── package.json            # Package configuration
├── tsconfig.json           # TypeScript configuration
├── webpack.config.js       # (Optional) Webpack configuration
├── .eslintrc.json          # (Optional) ESLint configuration
├── .gitignore              # Git ignore file
├── .npmignore              # (Optional) npm ignore file
├── README.md               # (Optional) Documentation
├── LICENSE.md              # (Optional) License information
└── CODE_OF_CONDUCT.md      # (Optional) Code of conduct`}
          </pre>
        </div>

        <DocH3 id="javascript-react">JavaScript React Package</DocH3>

        <DocParagraph>
          A JavaScript React package is structured for component development
          without TypeScript:
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
            {`my-package/
├── src/
│   ├── index.jsx           # Main entry point
│   └── internal/           # (Optional) Internal components
│       └── index.jsx
├── styles/                 # (Optional) CSS styles
│   └── style.css
├── dist/                   # Compiled output (created after build)
├── package.json            # Package configuration
├── webpack.config.js       # (Optional) Webpack configuration
├── babel.config.json       # Babel configuration
├── postcss.config.js       # (Optional) PostCSS configuration
├── .eslintrc.json          # (Optional) ESLint configuration
├── .gitignore              # Git ignore file
├── .npmignore              # (Optional) npm ignore file
├── README.md               # (Optional) Documentation
├── LICENSE.md              # (Optional) License information
└── CODE_OF_CONDUCT.md      # (Optional) Code of conduct`}
          </pre>
        </div>

        <DocH3 id="javascript-node">JavaScript Node.js Package</DocH3>

        <DocParagraph>
          A JavaScript Node.js package is structured for server-side development
          without TypeScript:
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
            {`my-package/
├── src/
│   ├── index.js            # Main entry point
│   └── internal/           # (Optional) Internal modules
│       └── index.js
├── dist/                   # Compiled output (created after build)
├── package.json            # Package configuration
├── webpack.config.js       # (Optional) Webpack configuration
├── .eslintrc.json          # (Optional) ESLint configuration
├── .gitignore              # Git ignore file
├── .npmignore              # (Optional) npm ignore file
├── README.md               # (Optional) Documentation
├── LICENSE.md              # (Optional) License information
└── CODE_OF_CONDUCT.md      # (Optional) Code of conduct`}
          </pre>
        </div>

        <DocH3 id="vanilla-js">Vanilla JavaScript Package</DocH3>

        <DocParagraph>
          A Vanilla JavaScript package is structured for browser-based utilities
          without framework dependencies:
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
            {`my-package/
├── src/
│   ├── index.js            # Main entry point
│   └── internal/           # (Optional) Internal utilities
│       └── index.js
├── styles/                 # (Optional) CSS styles
│   └── style.css
├── dist/                   # Compiled output (created after build)
├── package.json            # Package configuration
├── webpack.config.js       # (Optional) Webpack configuration
├── postcss.config.js       # (Optional) PostCSS configuration
├── .eslintrc.json          # (Optional) ESLint configuration
├── .gitignore              # Git ignore file
├── .npmignore              # (Optional) npm ignore file
├── README.md               # (Optional) Documentation
├── LICENSE.md              # (Optional) License information
└── CODE_OF_CONDUCT.md      # (Optional) Code of conduct`}
          </pre>
        </div>

        <DocH2 id="key-files">Key Files and Directories</DocH2>

        <DocH3 id="entry-points">Entry Points</DocH3>

        <DocParagraph>
          The entry point is the main file that exports your package&apos;s
          functionality:
        </DocParagraph>

        <DocList>
          <DocListItem>
            <DocCode>src/index.tsx</DocCode> or <DocCode>src/index.jsx</DocCode>
            : Main entry point for React packages
          </DocListItem>
          <DocListItem>
            <DocCode>src/index.ts</DocCode> or <DocCode>src/index.js</DocCode>:
            Main entry point for Node.js and Vanilla JS packages
          </DocListItem>
        </DocList>

        <DocParagraph>Example of a TypeScript React entry point:</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// src/index.tsx
import MyComponent from './components/MyComponent';
import MyOtherComponent from './components/MyOtherComponent';

// Export components
export { MyComponent, MyOtherComponent };

// Default export
export default { MyComponent, MyOtherComponent };`}
            language="typescript"
          />
        </div>

        <DocH3 id="type-definitions">Type Definitions</DocH3>

        <DocParagraph>
          TypeScript packages include type definitions to provide type
          information:
        </DocParagraph>

        <DocList>
          <DocListItem>
            <DocCode>types/index.ts</DocCode>: Contains shared type definitions
          </DocListItem>
          <DocListItem>
            <DocCode>src/declaration.d.ts</DocCode>: Contains module
            declarations for non-TypeScript files
          </DocListItem>
        </DocList>

        <DocParagraph>Example of type definitions:</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// types/index.ts
export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export type Theme = 'light' | 'dark' | 'system';`}
            language="typescript"
          />
        </div>

        <DocH3 id="configuration-files">Configuration Files</DocH3>

        <DocParagraph>
          PackShip generates several configuration files based on your choices:
        </DocParagraph>

        <DocList>
          <DocListItem>
            <DocCode>package.json</DocCode>: Defines package metadata,
            dependencies, and scripts
          </DocListItem>
          <DocListItem>
            <DocCode>tsconfig.json</DocCode>: Configures TypeScript compiler
            options
          </DocListItem>
          <DocListItem>
            <DocCode>webpack.config.js</DocCode>: Configures bundling options
            (if Webpack is selected)
          </DocListItem>
          <DocListItem>
            <DocCode>babel.config.json</DocCode>: Configures Babel for
            transpilation (for React projects)
          </DocListItem>
          <DocListItem>
            <DocCode>postcss.config.js</DocCode>: Configures PostCSS for CSS
            processing (if selected)
          </DocListItem>
          <DocListItem>
            <DocCode>.eslintrc.json</DocCode>: Configures ESLint for code
            linting (if selected)
          </DocListItem>
        </DocList>

        <DocH3 id="package-json">package.json</DocH3>

        <DocParagraph>
          The <DocCode>package.json</DocCode> file contains important metadata
          and configuration:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`{
  "name": "my-package",
  "version": "0.1.0",
  "description": "My awesome package",
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "type": "module",
  "scripts": {
    "test": "echo 'Error: no test specified' && exit 1",
    "build": "tsc && npm run build-babel && npm run build-webpack",
    "build-babel": "babel src --out-dir dist --presets=@babel/preset-react,@babel/preset-env",
    "build-webpack": "webpack --config webpack.config.js",
    "lint": "eslint .",
    "packship:publish": "packship publish"
  },
  "keywords": [],
  "author": {
    "name": "Your Name",
    "email": "your.email@example.com"
  },
  "license": "MIT",
  "_packshipInitialized": true,
  "peerDependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@babel/cli": "^7.10.5",
    "@babel/core": "^7.23.9",
    "@babel/preset-env": "^7.23.9",
    "@babel/preset-react": "^7.23.3",
    "@babel/preset-typescript": "^7.24.7",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "ts-loader": "^9.5.1",
    "typescript": "^4.9.5",
    "webpack": "^5.0.0",
    "webpack-cli": "^5.1.4",
    "eslint": "^7.32.0",
    "eslint-plugin-react": "^7.24.0",
    "@typescript-eslint/eslint-plugin": "^5.0.0",
    "@typescript-eslint/parser": "^5.0.0",
    "autoprefixer": "^10.3.1",
    "postcss": "^8.4.5"
  }
}`}
            language="json"
          />
        </div>

        <DocNote>
          The <DocCode>_packshipInitialized</DocCode> property is added to your
          package.json to indicate that the package was initialized with
          PackShip.
        </DocNote>

        <DocH2 id="customizing-structure">
          Customizing Your Project Structure
        </DocH2>

        <DocParagraph>
          While PackShip provides a solid foundation, you can customize your
          project structure to fit your specific needs:
        </DocParagraph>

        <DocH3 id="adding-directories">Adding Directories</DocH3>

        <DocList>
          <DocListItem>
            <DocCode>src/components/</DocCode>: For React components
          </DocListItem>
          <DocListItem>
            <DocCode>src/hooks/</DocCode>: For React hooks
          </DocListItem>
          <DocListItem>
            <DocCode>src/utils/</DocCode>: For utility functions
          </DocListItem>
          <DocListItem>
            <DocCode>src/services/</DocCode>: For service modules
          </DocListItem>
          <DocListItem>
            <DocCode>src/constants/</DocCode>: For constant values
          </DocListItem>
          <DocListItem>
            <DocCode>tests/</DocCode>: For test files
          </DocListItem>
        </DocList>

        <DocH3 id="recommended-practices">Recommended Practices</DocH3>

        <DocList>
          <DocListItem>
            Keep related files together in feature-based directories
          </DocListItem>
          <DocListItem>Use clear, consistent naming conventions</DocListItem>
          <DocListItem>
            Export public APIs only from the main entry point
          </DocListItem>
          <DocListItem>
            Use the internal directory for components not meant for public
            consumption
          </DocListItem>
          <DocListItem>Keep configuration files at the root level</DocListItem>
        </DocList>

        <DocNote>
          While you can customize your project structure, following the PackShip
          conventions makes it easier to use the built-in tools and workflows.
        </DocNote>

        <DocNavigation currentPath={pathname} />
      </div>
    </>
  );
}
