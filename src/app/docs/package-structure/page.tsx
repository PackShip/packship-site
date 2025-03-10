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

export default function PackageStructure() {
  return (
    <>
      <div className="w-full flex flex-col gap-6">
        <DocParagraph>
          Understanding the structure of a PackShip project is essential for
          effective development and maintenance. This guide explains the
          standard directory structure and key files in a PackShip project.
        </DocParagraph>

        <DocH2 id="directory-structure">Directory Structure</DocH2>

        <DocParagraph>
          A typical PackShip project has the following directory structure:
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
            {`my-package/
├── src/                  # Source code
│   ├── index.ts          # Main entry point
│   ├── components/       # React components
│   └── utils/            # Utility functions
├── dist/                 # Compiled output (generated)
├── node_modules/         # Dependencies (generated)
├── tests/                # Test files
├── .babelrc              # Babel configuration
├── .gitignore            # Git ignore file
├── package.json          # Package configuration
├── README.md             # Documentation
├── tsconfig.json         # TypeScript configuration
└── webpack.config.js     # Webpack configuration`}
          </pre>
        </div>

        <DocH2 id="key-files">Key Files and Directories</DocH2>

        <DocH3>src/ Directory</DocH3>

        <DocParagraph>
          The <DocCode>src/</DocCode> directory contains all your source code.
          It&apos;s organized as follows:
        </DocParagraph>

        <DocH4>index.ts</DocH4>

        <DocParagraph>
          This is the main entry point of your package. All components and
          utilities that should be available to consumers of your package should
          be exported from this file.
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// src/index.ts
import Button from './components/Button';
import Card from './components/Card';
import { formatDate } from './utils/dateUtils';

export {
  Button,
  Card,
  formatDate
};

// Default export (optional)
export default {
  Button,
  Card,
  formatDate
};`}
            language="typescript"
          />
        </div>

        <DocH4>components/ Directory</DocH4>

        <DocParagraph>
          The <DocCode>components/</DocCode> directory contains all your React
          components. Each component should be in its own file or directory,
          depending on its complexity.
        </DocParagraph>

        <DocParagraph>
          For simple components, a single file is sufficient:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// src/components/Button.tsx
import React from 'react';

export interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;`}
            language="typescript"
          />
        </div>

        <DocParagraph>
          For more complex components, use a directory structure:
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
            {`components/
├── DataTable/
│   ├── index.ts           # Re-exports the component
│   ├── DataTable.tsx      # Main component
│   ├── TableHeader.tsx    # Sub-component
│   ├── TableRow.tsx       # Sub-component
│   └── types.ts           # Type definitions`}
          </pre>
        </div>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// src/components/DataTable/index.ts
export { default } from './DataTable';
export * from './types';`}
            language="typescript"
          />
        </div>

        <DocH4>utils/ Directory</DocH4>

        <DocParagraph>
          The <DocCode>utils/</DocCode> directory contains utility functions and
          helpers that are used across your components.
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// src/utils/dateUtils.ts
export function formatDate(date: Date, format: string = 'yyyy-MM-dd'): string {
  // Implementation
  return format
    .replace('yyyy', date.getFullYear().toString())
    .replace('MM', (date.getMonth() + 1).toString().padStart(2, '0'))
    .replace('dd', date.getDate().toString().padStart(2, '0'));
}`}
            language="typescript"
          />
        </div>

        <DocH3>dist/ Directory</DocH3>

        <DocParagraph>
          The <DocCode>dist/</DocCode> directory contains the compiled output of
          your package. This is what gets published to npm. It&apos;s generated
          when you run <DocCode>npm run build</DocCode>.
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
            {`dist/
├── index.js              # Main bundle
├── index.d.ts            # TypeScript declarations
└── types/                # Additional type declarations`}
          </pre>
        </div>

        <DocNote>
          You should never modify files in the <DocCode>dist/</DocCode>{" "}
          directory directly. Always make changes to the source files in{" "}
          <DocCode>src/</DocCode> and rebuild.
        </DocNote>

        <DocH3>tests/ Directory</DocH3>

        <DocParagraph>
          The <DocCode>tests/</DocCode> directory contains test files for your
          components and utilities. PackShip supports Jest for testing.
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// tests/Button.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../src/components/Button';

describe('Button', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button text="Click me" />);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button text="Click me" onClick={handleClick} />
    );
    fireEvent.click(getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});`}
            language="typescript"
          />
        </div>

        <DocH3>Configuration Files</DocH3>

        <DocH4>package.json</DocH4>

        <DocParagraph>
          The <DocCode>package.json</DocCode> file contains metadata about your
          package and defines scripts, dependencies, and other configuration
          options.
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`{
  "name": "my-package",
  "version": "1.0.0",
  "description": "A description of my package",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist"
  ],
  "scripts": {
    "build": "packship build",
    "test": "jest",
    "lint": "eslint src",
    "prepublishOnly": "npm run build"
  },
  "dependencies": {
    // Runtime dependencies
  },
  "peerDependencies": {
    "react": "^17.0.0 || ^18.0.0",
    "react-dom": "^17.0.0 || ^18.0.0"
  },
  "devDependencies": {
    // Development dependencies
  },
  "keywords": [
    "react",
    "component",
    "ui"
  ],
  "author": "Your Name",
  "license": "MIT"
}`}
            language="json"
          />
        </div>

        <DocH4>tsconfig.json</DocH4>

        <DocParagraph>
          The <DocCode>tsconfig.json</DocCode> file configures TypeScript for
          your project.
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
    "jsx": "react-jsx",
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

        <DocH4>webpack.config.js</DocH4>

        <DocParagraph>
          The <DocCode>webpack.config.js</DocCode> file configures how your
          package is bundled.
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'MyPackage',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
};`}
            language="javascript"
          />
        </div>

        <DocH4>.babelrc</DocH4>

        <DocParagraph>
          The <DocCode>.babelrc</DocCode> file configures Babel for transpiling
          your code.
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
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

        <DocH2 id="best-practices">Best Practices</DocH2>

        <DocList>
          <DocListItem>
            <strong>Keep the entry point clean</strong>: Only export components
            and utilities that are part of your public API from{" "}
            <DocCode>src/index.ts</DocCode>.
          </DocListItem>
          <DocListItem>
            <strong>Use a consistent component structure</strong>: Decide on a
            pattern for your components (function components vs. class
            components, named exports vs. default exports) and stick to it.
          </DocListItem>
          <DocListItem>
            <strong>Organize by feature</strong>: For larger packages, consider
            organizing components by feature rather than by type.
          </DocListItem>
          <DocListItem>
            <strong>Document your code</strong>: Use JSDoc comments to document
            your components and functions.
          </DocListItem>
          <DocListItem>
            <strong>Write tests</strong>: Ensure good test coverage for your
            components and utilities.
          </DocListItem>
        </DocList>

        {/* Next Page Button */}
        <NextPageButton title="Dependencies" href="/docs/dependencies" />
      </div>
    </>
  );
}
