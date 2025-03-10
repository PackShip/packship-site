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

export default function Babel() {
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
          default Babel configuration in the <DocCode>.babelrc</DocCode> file:
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
            {`{
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
          You can customize it to target specific browsers:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`{
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "browsers": [
          "last 2 versions",
          "not dead",
          "> 0.5%"
        ]
      }
    }],
    // ... other presets
  ]
}`}
            language="json"
          />
        </div>

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
            code={`{
  "presets": [
    // ... other presets
    ["@babel/preset-react", {
      "runtime": "automatic"
    }]
  ]
}`}
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
          JavaScript classes:
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

        <DocH3>@babel/plugin-transform-runtime</DocH3>

        <DocParagraph>
          This plugin helps reduce the size of your bundle by extracting Babel
          helpers into a separate runtime package:
        </DocParagraph>

        <DocList>
          <DocListItem>
            Prevents duplication of Babel helper functions in each file
          </DocListItem>
          <DocListItem>
            Provides a sandboxed environment for built-ins like{" "}
            <DocCode>Promise</DocCode>, <DocCode>Set</DocCode>, and{" "}
            <DocCode>Map</DocCode>
          </DocListItem>
        </DocList>

        <DocH2 id="customizing-babel">Customizing Babel Configuration</DocH2>

        <DocParagraph>
          You can customize the Babel configuration to suit your specific needs.
          Here are some common customizations:
        </DocParagraph>

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
    "@babel/plugin-proposal-class-properties",
    // ... other plugins
  ]
}`}
            language="json"
          />
        </div>

        <DocNote>
          The decorator plugin must come before the class properties plugin in
          the plugins list.
        </DocNote>

        <DocH3>
          Adding Support for Optional Chaining and Nullish Coalescing
        </DocH3>

        <DocParagraph>
          To add support for optional chaining (<DocCode>?.</DocCode>) and
          nullish coalescing (<DocCode>??</DocCode>) operators:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`npm install --save-dev @babel/plugin-proposal-optional-chaining @babel/plugin-proposal-nullish-coalescing-operator`}
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
    // ... other plugins
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-nullish-coalescing-operator"
  ]
}`}
            language="json"
          />
        </div>

        <DocH2 id="babel-with-webpack">Using Babel with Webpack</DocH2>

        <DocParagraph>
          In PackShip projects, Babel is integrated with Webpack using{" "}
          <DocCode>babel-loader</DocCode>. The webpack configuration includes a
          rule for processing TypeScript and JavaScript files with Babel:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// webpack.config.js
module.exports = {
  // ... other config
  module: {
    rules: [
      {
        test: /\\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      // ... other rules
    ]
  }
};`}
            language="javascript"
          />
        </div>

        <DocParagraph>
          You can customize the Babel loader options directly in the webpack
          configuration:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// webpack.config.js
module.exports = {
  // ... other config
  module: {
    rules: [
      {
        test: /\\.tsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true, // Enables caching for faster builds
            // You can also specify Babel options here instead of using .babelrc
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ]
          }
        },
        exclude: /node_modules/
      },
      // ... other rules
    ]
  }
};`}
            language="javascript"
          />
        </div>

        {/* Next Page Button */}
        <NextPageButton title="Version Updates" href="/docs/version-updates" />
      </div>
    </>
  );
}
