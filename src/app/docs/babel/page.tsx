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

export default function Babel() {
  const pathname = usePathname();

  return (
    <>
      <div className="w-full flex flex-col gap-6">
        <DocParagraph>
          Babel is a JavaScript compiler that allows you to use next-generation
          JavaScript features and JSX syntax in your code. PackShip uses Babel
          to transpile your TypeScript and React code into JavaScript that can
          run in all browsers.
        </DocParagraph>

        <DocH2 id="default-configuration">Default Configuration</DocH2>

        <DocParagraph>
          When you initialize a new project with PackShip, it generates a
          default Babel configuration in the{" "}
          <DocCode>babel.config.json</DocCode> file:
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
            {`{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false,
        "targets": {
          "node": "current"
        }
      }
    ],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  "env": {
    "test": {
      "presets": [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript"
      ],
      "plugins": [
        [
          "@babel/plugin-proposal-class-properties",
          {
            "spec": true
          }
        ]
      ]
    }
  },
  "plugins": [
    [
      "@babel/plugin-proposal-class-properties",
      {
        "spec": true
      }
    ],
    "@babel/plugin-proposal-object-rest-spread"
  ]
}`}
          </pre>
        </div>

        <DocH2 id="babel-presets">Babel Presets</DocH2>

        <DocParagraph>
          Presets are collections of plugins that support specific language
          features or frameworks:
        </DocParagraph>

        <DocH3>@babel/preset-env</DocH3>

        <DocParagraph>
          This preset allows you to use the latest JavaScript features without
          worrying about which syntax transforms are needed for your target
          environments.
        </DocParagraph>

        <DocParagraph>
          In PackShip&apos;s default configuration, preset-env is configured
          with:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`[
  "@babel/preset-env",
  {
    "modules": false,
    "targets": {
      "node": "current"
    }
  }
]`}
            language="json"
          />
        </div>

        <DocList>
          <DocListItem>
            <DocCode>modules: false</DocCode>: Preserves ES modules syntax for
            webpack to handle, enabling tree-shaking optimizations
          </DocListItem>
          <DocListItem>
            <DocCode>targets.node: &quot;current&quot;</DocCode>: Targets the
            Node.js version you&apos;re currently using for development
          </DocListItem>
        </DocList>

        <DocH3>@babel/preset-react</DocH3>

        <DocParagraph>
          This preset includes plugins for React JSX syntax and other
          React-specific features.
        </DocParagraph>

        <DocParagraph>
          You can customize it to use the new JSX transform introduced in React
          17:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`[
  "@babel/preset-react",
  {
    "runtime": "automatic"
  }
]`}
            language="json"
          />
        </div>

        <DocNote>
          The <DocCode>&quot;runtime&quot;: &quot;automatic&quot;</DocCode>{" "}
          option enables the new JSX transform, which doesn&apos;t require
          importing React in files that only use JSX.
        </DocNote>

        <DocH3>@babel/preset-typescript</DocH3>

        <DocParagraph>
          This preset allows Babel to transpile TypeScript code. It strips away
          TypeScript type annotations and transforms the code to JavaScript.
        </DocParagraph>

        <DocParagraph>
          You can customize it to handle specific TypeScript features:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`{
  "presets": [
    // ... other presets
    ["@babel/preset-typescript", {
      "isTSX": true,
      "allExtensions": true
    }]
  ]
}`}
            language="json"
          />
        </div>

        <DocH2 id="babel-plugins">Babel Plugins</DocH2>

        <DocParagraph>
          Plugins are individual JavaScript transformations that Babel applies
          to your code:
        </DocParagraph>

        <DocH3>@babel/plugin-proposal-class-properties</DocH3>

        <DocParagraph>
          This plugin allows you to use class properties syntax in your
          JavaScript classes. In PackShip, it&apos;s configured with{" "}
          <DocCode>spec: true</DocCode> for stricter spec compliance:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`[
  "@babel/plugin-proposal-class-properties",
  {
    "spec": true
  }
]`}
            language="json"
          />
        </div>

        <DocParagraph>
          This enables you to write class components with class properties:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`class MyComponent extends React.Component {
  // Class property
  state = {
    count: 0
  };

  // Arrow function class property (auto-binds 'this')
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        Clicked {this.state.count} times
      </button>
    );
  }
}`}
            language="typescript"
          />
        </div>

        <DocH3>@babel/plugin-proposal-object-rest-spread</DocH3>

        <DocParagraph>
          This plugin enables the use of the rest and spread operators for
          objects:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// Rest operator
const { id, ...rest } = props;

// Spread operator
const newProps = { ...props, newProp: 'value' };`}
            language="javascript"
          />
        </div>

        <DocH3>Environment-Specific Configuration</DocH3>

        <DocParagraph>
          PackShip&apos;s Babel configuration includes environment-specific
          settings using the <DocCode>env</DocCode> key. For example, the test
          environment has its own configuration:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`"env": {
  "test": {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-typescript"
    ],
    "plugins": [
      [
        "@babel/plugin-proposal-class-properties",
        {
          "spec": true
        }
      ]
    ]
  }
}`}
            language="json"
          />
        </div>

        <DocNote>
          The test environment configuration is automatically used when running
          tests with Jest or other test frameworks that set{" "}
          <DocCode>NODE_ENV=test</DocCode>.
        </DocNote>

        <DocH2 id="customizing-babel">Customizing Babel Configuration</DocH2>

        <DocParagraph>
          You can customize the Babel configuration to suit your specific needs.
          Here are some common customizations:
        </DocParagraph>

        <DocH3>Targeting Specific Browsers</DocH3>

        <DocParagraph>
          To target specific browsers instead of Node.js, modify the preset-env
          configuration:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`[
  "@babel/preset-env",
  {
    "modules": false,
    "targets": {
      "browsers": [
        "last 2 versions",
        "not dead",
        "> 0.5%"
      ]
    }
  }
]`}
            language="json"
          />
        </div>

        <DocH3>Adding Support for Decorators</DocH3>

        <DocParagraph>
          To add support for decorators (used in libraries like MobX), you need
          to install the decorator plugin:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`npm install --save-dev @babel/plugin-proposal-decorators`}
            language="bash"
          />
        </div>

        <DocParagraph>Then update your Babel configuration:</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`{
  "presets": [
    // ... existing presets
  ],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "spec": true }],
    "@babel/plugin-proposal-object-rest-spread"
  ]
}`}
            language="json"
          />
        </div>

        <DocNote>
          The decorator plugin must come before the class properties plugin in
          the plugins list.
        </DocNote>

        <DocH3>Adding Runtime Helpers</DocH3>

        <DocParagraph>
          To reduce bundle size by extracting Babel helpers, add the
          transform-runtime plugin:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`npm install --save-dev @babel/plugin-transform-runtime`}
            language="bash"
          />
        </div>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`{
  "plugins": [
    // ... existing plugins
    "@babel/plugin-transform-runtime"
  ]
}`}
            language="json"
          />
        </div>

        <DocH2 id="babel-with-webpack">Using Babel with Webpack</DocH2>

        <DocParagraph>
          In PackShip projects, Babel is integrated with Webpack using{" "}
          <DocCode>babel-loader</DocCode>. The webpack configuration includes
          rules for processing TypeScript and JavaScript files with Babel:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// webpack.config.js
export default {
  // ... other config
  module: {
    rules: [
      {
        test: /\\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      // ... other rules
    ]
  }
};`}
            language="javascript"
          />
        </div>

        <DocParagraph>
          This configuration uses both <DocCode>ts-loader</DocCode> and{" "}
          <DocCode>babel-loader</DocCode> for TypeScript files:
        </DocParagraph>

        <DocList>
          <DocListItem>
            <DocCode>ts-loader</DocCode>: Handles TypeScript compilation with{" "}
            <DocCode>transpileOnly: true</DocCode> for faster builds
          </DocListItem>
          <DocListItem>
            <DocCode>babel-loader</DocCode>: Applies Babel transformations to
            the output from ts-loader
          </DocListItem>
        </DocList>

        <DocNote>
          The <DocCode>babel.config.json</DocCode> file is automatically used by
          babel-loader, but you can also specify options directly in the webpack
          configuration for more granular control.
        </DocNote>

        {/* Next Page Button */}
        <DocNavigation currentPath={pathname} />
      </div>
    </>
  );
}
