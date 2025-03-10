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

export default function FrontendSetup() {
  return (
    <>
      <div className="w-full flex flex-col gap-6">
        <DocParagraph>
          Setting up the frontend configuration for your PackShip project is
          essential for creating a well-structured and maintainable package.
          This guide will walk you through the basic setup process.
        </DocParagraph>

        <DocH2 id="project-structure">Project Structure</DocH2>

        <DocParagraph>
          A typical PackShip frontend project has the following structure:
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
            {`my-package/
├── src/
│   ├── index.ts        # Main entry point
│   ├── components/     # React components
│   └── utils/          # Utility functions
├── dist/               # Compiled output
├── node_modules/       # Dependencies
├── package.json        # Package configuration
├── tsconfig.json       # TypeScript configuration
└── webpack.config.js   # Webpack configuration`}
          </pre>
        </div>

        <DocH2 id="entry-point">Entry Point</DocH2>

        <DocParagraph>
          The entry point of your package is the <DocCode>src/index.ts</DocCode>{" "}
          file. This is where you export all the components and utilities that
          should be available to consumers of your package.
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// src/index.ts
import MyComponent from './components/MyComponent';
import MyOtherComponent from './components/MyOtherComponent';
import { someUtility } from './utils/someUtility';

export {
  MyComponent,
  MyOtherComponent,
  someUtility
};

// Default export (optional)
export default MyComponent;`}
            language="typescript"
          />
        </div>

        <DocNote>
          Only export components and utilities that you want to be part of your
          public API. Internal components and utilities should not be exported
          from the entry point.
        </DocNote>

        <DocH2 id="component-structure">Component Structure</DocH2>

        <DocParagraph>
          Components should be organized in the{" "}
          <DocCode>src/components</DocCode> directory. Each component should
          have its own file or directory, depending on its complexity.
        </DocParagraph>

        <DocH3>Simple Component Example</DocH3>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// src/components/Button.tsx
import React from 'react';

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  onClick, 
  variant = 'primary' 
}) => {
  const baseClasses = "px-4 py-2 rounded font-medium";
  const variantClasses = variant === 'primary' 
    ? "bg-blue-500 text-white hover:bg-blue-600" 
    : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <button 
      className={\`\${baseClasses} \${variantClasses}\`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;`}
            language="typescript"
          />
        </div>

        <DocH3>Complex Component Structure</DocH3>

        <DocParagraph>
          For more complex components, you might want to use a directory
          structure:
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
            {`src/components/DataTable/
├── index.ts           # Exports the component
├── DataTable.tsx      # Main component
├── TableHeader.tsx    # Sub-component
├── TableRow.tsx       # Sub-component
└── types.ts           # Type definitions`}
          </pre>
        </div>

        <DocH2 id="styling">Styling Components</DocH2>

        <DocParagraph>
          PackShip supports various styling approaches:
        </DocParagraph>

        <DocH3>CSS Modules</DocH3>

        <DocParagraph>
          CSS Modules allow you to write CSS that is scoped to a specific
          component.
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// Button.module.css
.button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: 500;
}

.primary {
  background-color: #3b82f6;
  color: white;
}

.primary:hover {
  background-color: #2563eb;
}

.secondary {
  background-color: #e5e7eb;
  color: #1f2937;
}

.secondary:hover {
  background-color: #d1d5db;
}`}
            language="css"
          />
        </div>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// Button.tsx
import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  onClick, 
  variant = 'primary' 
}) => {
  return (
    <button 
      className={\`\${styles.button} \${styles[variant]}\`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;`}
            language="typescript"
          />
        </div>

        <DocH3>Styled Components</DocH3>

        <DocParagraph>
          You can also use styled-components for CSS-in-JS styling:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// Button.tsx
import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const StyledButton = styled.button<{ variant: 'primary' | 'secondary' }>\`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: 500;
  background-color: \${props => props.variant === 'primary' ? '#3b82f6' : '#e5e7eb'};
  color: \${props => props.variant === 'primary' ? 'white' : '#1f2937'};

  &:hover {
    background-color: \${props => props.variant === 'primary' ? '#2563eb' : '#d1d5db'};
  }
\`;

const Button: React.FC<ButtonProps> = ({ 
  text, 
  onClick, 
  variant = 'primary' 
}) => {
  return (
    <StyledButton 
      variant={variant}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

export default Button;`}
            language="typescript"
          />
        </div>

        <DocH2 id="typescript-configuration">TypeScript Configuration</DocH2>

        <DocParagraph>
          PackShip projects come with a pre-configured{" "}
          <DocCode>tsconfig.json</DocCode> file. Here&apos;s a typical
          configuration:
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

        <DocNote>
          The <DocCode>declaration</DocCode> and{" "}
          <DocCode>declarationDir</DocCode> options are important for generating
          TypeScript declaration files, which provide type information to
          consumers of your package.
        </DocNote>

        {/* Next Page Button */}
        <NextPageButton title="Webpack Configuration" href="/docs/webpack" />
      </div>
    </>
  );
}
