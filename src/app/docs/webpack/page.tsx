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

export default function Webpack() {
  return (
    <>
      <div className="w-full flex flex-col gap-6">
        <DocParagraph>
          Webpack is a powerful bundler that PackShip uses to compile and
          package your code. This guide explains the webpack configuration used
          in PackShip projects and how to customize it for your needs.
        </DocParagraph>

        <DocH2 id="default-configuration">Default Configuration</DocH2>

        <DocParagraph>
          When you initialize a new project with PackShip, it generates a
          default webpack configuration that works well for most React component
          libraries. Here&apos;s what it looks like:
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
            {`// webpack.config.js
const path = require('path');
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
          </pre>
        </div>

        <DocH2 id="key-configuration-options">Key Configuration Options</DocH2>

        <DocH3>Entry Point</DocH3>

        <DocParagraph>
          The <DocCode>entry</DocCode> option specifies the entry point of your
          package. By default, it&apos;s set to{" "}
          <DocCode>./src/index.ts</DocCode>.
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`entry: './src/index.ts',`}
            language="javascript"
          />
        </div>

        <DocH3>Output</DocH3>

        <DocParagraph>
          The <DocCode>output</DocCode> option configures how webpack emits the
          bundled files:
        </DocParagraph>

        <DocList>
          <DocListItem>
            <DocCode>filename</DocCode>: The name of the output file (default:{" "}
            <DocCode>index.js</DocCode>)
          </DocListItem>
          <DocListItem>
            <DocCode>path</DocCode>: The directory where the bundled files will
            be placed (default: <DocCode>dist</DocCode>)
          </DocListItem>
          <DocListItem>
            <DocCode>libraryTarget</DocCode>: The format of the library
            (default: <DocCode>umd</DocCode> for Universal Module Definition)
          </DocListItem>
          <DocListItem>
            <DocCode>library</DocCode>: The name of the library when it&apos;s
            used as a global variable
          </DocListItem>
        </DocList>

        <DocH3>Module Rules</DocH3>

        <DocParagraph>
          The <DocCode>module.rules</DocCode> array defines how different file
          types should be processed:
        </DocParagraph>

        <DocList>
          <DocListItem>
            TypeScript/JavaScript files are processed with{" "}
            <DocCode>babel-loader</DocCode>
          </DocListItem>
          <DocListItem>
            CSS files are processed with <DocCode>style-loader</DocCode> and{" "}
            <DocCode>css-loader</DocCode>
          </DocListItem>
        </DocList>

        <DocH3>Externals</DocH3>

        <DocParagraph>
          The <DocCode>externals</DocCode> option specifies dependencies that
          should not be bundled with your package. By default, React and
          ReactDOM are marked as external, which means they won&apos;t be
          included in your bundle. This is important for React component
          libraries to avoid bundling React twice.
        </DocParagraph>

        <DocNote>
          Marking dependencies as external reduces the size of your bundle and
          avoids potential issues with duplicate dependencies.
        </DocNote>

        <DocH2 id="customizing-webpack">
          Customizing Webpack Configuration
        </DocH2>

        <DocParagraph>
          You can customize the webpack configuration to suit your specific
          needs. Here are some common customizations:
        </DocParagraph>

        <DocH3>Adding Support for SASS/SCSS</DocH3>

        <DocParagraph>
          To add support for SASS/SCSS files, you need to install the required
          loaders:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`npm install --save-dev sass sass-loader`}
            language="bash"
          />
        </div>

        <DocParagraph>Then update your webpack configuration:</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// webpack.config.js
module.exports = {
  // ... other config
  module: {
    rules: [
      // ... other rules
      {
        test: /\\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};`}
            language="javascript"
          />
        </div>

        <DocH3>Adding Support for Images and Fonts</DocH3>

        <DocParagraph>
          To handle images and fonts, you can use the{" "}
          <DocCode>file-loader</DocCode> or <DocCode>url-loader</DocCode>:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`npm install --save-dev file-loader url-loader`}
            language="bash"
          />
        </div>

        <DocParagraph>Then update your webpack configuration:</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// webpack.config.js
module.exports = {
  // ... other config
  module: {
    rules: [
      // ... other rules
      {
        test: /\\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // Convert images < 8kb to base64 strings
              name: 'images/[name].[hash:7].[ext]'
            }
          }
        ]
      },
      {
        test: /\\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[hash:7].[ext]'
            }
          }
        ]
      }
    ]
  }
};`}
            language="javascript"
          />
        </div>

        <DocH3>Multiple Entry Points</DocH3>

        <DocParagraph>
          If you need to create multiple bundles, you can specify multiple entry
          points:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// webpack.config.js
module.exports = {
  entry: {
    main: './src/index.ts',
    utils: './src/utils/index.ts'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: ['MyPackage', '[name]'],
    umdNamedDefine: true,
    globalObject: 'this'
  },
  // ... other config
};`}
            language="javascript"
          />
        </div>

        <DocH2 id="development-mode">Development Mode</DocH2>

        <DocParagraph>
          For development, you might want to use a different webpack
          configuration. You can create a separate configuration file or use
          environment variables to switch between development and production
          modes.
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// webpack.config.js
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  
  return {
    entry: './src/index.ts',
    output: {
      filename: isProduction ? 'index.js' : 'index.dev.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'umd',
      library: 'MyPackage',
      umdNamedDefine: true,
      globalObject: 'this'
    },
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    // ... other config
    plugins: [
      new CleanWebpackPlugin()
    ]
  };
};`}
            language="javascript"
          />
        </div>

        <DocParagraph>
          You can then run webpack in development mode with:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`npm run build -- --mode=development`}
            language="bash"
          />
        </div>

        {/* Next Page Button */}
        <NextPageButton title="Babel Configuration" href="/docs/babel" />
      </div>
    </>
  );
}
