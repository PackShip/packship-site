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

export default function FrontendSetup() {
  const pathname = usePathname();

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
│   ├── index.tsx        # Main entry point
│   ├── components/      # React components
│   │   ├── Button/      # Component directory
│   │   │   ├── index.tsx
│   │   │   └── styles.css
│   │   └── Card/        # Another component
│   │       ├── index.tsx
│   │       └── styles.css
│   ├── utils/           # Utility functions
│   ├── hooks/           # Custom React hooks
│   ├── types/           # TypeScript type definitions
│   └── internal/        # (Optional) Internal components
├── dist/                # Compiled output
│   ├── cjs/             # CommonJS format
│   ├── esm/             # ES modules format
│   └── types/           # TypeScript declarations
├── node_modules/        # Dependencies
├── package.json         # Package configuration with _packshipInitialized flag
├── tsconfig.json        # TypeScript configuration
├── webpack.config.js    # Webpack configuration
├── babel.config.json    # Babel configuration
├── .eslintrc.json       # ESLint configuration
├── .gitignore           # Git ignore file
├── .npmignore           # npm ignore file
├── README.md            # Documentation
└── LICENSE.md           # License information`}
          </pre>
        </div>

        <DocH2 id="entry-point">Entry Point</DocH2>

        <DocParagraph>
          The entry point of your package is the{" "}
          <DocCode>src/index.tsx</DocCode> file. This is where you export all
          the components and utilities that should be available to consumers of
          your package.
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// src/index.tsx
import Button from './components/Button';
import Card from './components/Card';
import { useToggle } from './hooks/useToggle';
import { formatDate } from './utils/formatters';
import type { ButtonProps, CardProps } from './types';

// Export components
export { Button, Card };

// Export hooks
export { useToggle };

// Export utilities
export { formatDate };

// Export types
export type { ButtonProps, CardProps };

// Default export (optional)
export default { Button, Card };`}
            language="typescript"
          />
        </div>

        <DocNote>
          Only export components and utilities that you want to be part of your
          public API. Internal components and utilities in the{" "}
          <DocCode>src/internal</DocCode> directory should not be exported from
          the entry point as they are meant for internal use only.
        </DocNote>

        <DocH2 id="component-structure">Component Structure</DocH2>

        <DocParagraph>
          Components should be organized in the{" "}
          <DocCode>src/components</DocCode> directory. Each component should
          have its own directory containing all related files.
        </DocParagraph>

        <DocH3>Component Directory Structure</DocH3>

        <DocParagraph>
          For a well-organized component, use a directory structure like this:
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
            {`src/components/Button/
├── index.tsx         # Main component file
├── Button.test.tsx   # Component tests
├── styles.css        # Component styles
└── types.ts          # Component type definitions (optional)`}
          </pre>
        </div>

        <DocH3>Component Example</DocH3>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// src/components/Button/index.tsx
import React from 'react';
import './styles.css';

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  onClick, 
  variant = 'primary',
  disabled = false
}) => {
  const baseClasses = "button";
  const variantClasses = \`button--\${variant}\`;
  const stateClasses = disabled ? "button--disabled" : "";

  return (
    <button 
      className={\`\${baseClasses} \${variantClasses} \${stateClasses}\`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;`}
            language="typescript"
          />
        </div>

        <DocH3>Component Styles</DocH3>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`/* src/components/Button/styles.css */
.button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.button--primary {
  background-color: #3b82f6;
  color: white;
}

.button--primary:hover:not(.button--disabled) {
  background-color: #2563eb;
}

.button--secondary {
  background-color: #e5e7eb;
  color: #1f2937;
}

.button--secondary:hover:not(.button--disabled) {
  background-color: #d1d5db;
}

.button--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}`}
            language="css"
          />
        </div>

        <DocH3>Component Export</DocH3>

        <DocParagraph>
          Each component should be exported from its directory using an index
          file. This makes imports cleaner for consumers of your package.
        </DocParagraph>

        <DocH2 id="styling">Styling Components</DocH2>

        <DocParagraph>
          PackShip supports various styling approaches for your components:
        </DocParagraph>

        <DocH3>1. Standard CSS</DocH3>

        <DocParagraph>
          The simplest approach is to use standard CSS files imported directly
          into your components, as shown in the Button component example above.
        </DocParagraph>

        <DocH3>2. CSS Modules</DocH3>

        <DocParagraph>
          CSS Modules allow you to write CSS that is scoped to a specific
          component, preventing style conflicts.
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// src/components/Card/styles.module.css
.card {
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  background-color: white;
}

.cardHeader {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.cardBody {
  color: #4b5563;
}`}
            language="css"
          />
        </div>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// src/components/Card/index.tsx
import React from 'react';
import styles from './styles.module.css';

export interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>{title}</div>
      <div className={styles.cardBody}>{children}</div>
    </div>
  );
};

export default Card;`}
            language="typescript"
          />
        </div>

        <DocH3>3. Styled Components</DocH3>

        <DocParagraph>
          For CSS-in-JS styling, PackShip supports styled-components:
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
          PackShip initializes your project with a pre-configured{" "}
          <DocCode>tsconfig.json</DocCode> file optimized for package
          development. Here&apos;s the default configuration for a React
          TypeScript project:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`{
  "compilerOptions": {
    "target": "es2018",
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
    "noEmit": false,
    "jsx": "react-jsx",
    "declaration": true,
    "declarationDir": "./dist/types",
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts", "**/*.test.tsx"]
}`}
            language="json"
          />
        </div>

        <DocH3>Key TypeScript Configuration Options</DocH3>

        <DocList>
          <DocListItem>
            <strong>target</strong>: Specifies the ECMAScript target version
            (es2018 provides good browser compatibility while supporting modern
            features).
          </DocListItem>
          <DocListItem>
            <strong>jsx</strong>: Set to &quot;react-jsx&quot; for React 17+
            projects, which doesn&apos;t require importing React in every file.
          </DocListItem>
          <DocListItem>
            <strong>declaration</strong>: Generates .d.ts files to provide type
            information to consumers of your package.
          </DocListItem>
          <DocListItem>
            <strong>declarationDir</strong>: Specifies where to output the type
            declaration files.
          </DocListItem>
          <DocListItem>
            <strong>sourceMap</strong>: Generates source map files for easier
            debugging.
          </DocListItem>
          <DocListItem>
            <strong>paths</strong>: Configures path aliases for cleaner imports
            (e.g., <DocCode>@/components</DocCode> instead of{" "}
            <DocCode>../../components</DocCode>).
          </DocListItem>
        </DocList>

        <DocNote>
          The TypeScript configuration is optimized for both development
          experience and package consumption. The declaration files are
          essential for providing type information to users of your package.
        </DocNote>

        {/* Next Page Button */}
        <DocNavigation currentPath={pathname} />
      </div>
    </>
  );
}
