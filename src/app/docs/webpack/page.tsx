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
import path from 'path';

export default {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    library: {
      type: 'umd',
      name: 'MyPackage',
    },
    globalObject: 'this',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
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
      {
        test: /\\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]',
        },
      },
      {
        test: /\\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
};`}
          </pre>
        </div>

        <DocH2 id="key-configuration-options">Key Configuration Options</DocH2>

        <DocH3>Entry Point</DocH3>

        <DocParagraph>
          The <DocCode>entry</DocCode> option specifies the entry point of your
          package. By default, it&apos;s set to{" "}
          <DocCode>./src/index.tsx</DocCode>.
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`entry: './src/index.tsx',`}
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
            <DocCode>path</DocCode>: The directory where the bundled files will
            be placed (default: <DocCode>dist</DocCode>)
          </DocListItem>
          <DocListItem>
            <DocCode>filename</DocCode>: The name of the output file (default:{" "}
            <DocCode>index.js</DocCode>)
          </DocListItem>
          <DocListItem>
            <DocCode>library</DocCode>: Configures how the library is exposed,
            using UMD format by default
          </DocListItem>
          <DocListItem>
            <DocCode>globalObject</DocCode>: Determines the global object
            reference, set to <DocCode>this</DocCode> for compatibility
          </DocListItem>
          <DocListItem>
            <DocCode>publicPath</DocCode>: The public URL of the output
            directory when referenced in a browser
          </DocListItem>
        </DocList>

        <DocH3>Module Rules</DocH3>

        <DocParagraph>
          The <DocCode>module.rules</DocCode> array defines how different file
          types should be processed:
        </DocParagraph>

        <DocList>
          <DocListItem>
            TypeScript/TSX files are processed with <DocCode>ts-loader</DocCode>{" "}
            (with transpileOnly for faster builds) and{" "}
            <DocCode>babel-loader</DocCode>
          </DocListItem>
          <DocListItem>
            JavaScript/JSX files are processed with{" "}
            <DocCode>babel-loader</DocCode>
          </DocListItem>
          <DocListItem>
            Images and SVGs are handled as assets with customizable output paths
          </DocListItem>
          <DocListItem>
            CSS files are processed with <DocCode>style-loader</DocCode> and{" "}
            <DocCode>css-loader</DocCode>
          </DocListItem>
        </DocList>

        <DocH3>Resolve</DocH3>

        <DocParagraph>
          The <DocCode>resolve.extensions</DocCode> array specifies which file
          extensions webpack should resolve automatically. This allows you to
          import modules without specifying their extensions.
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`resolve: {
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
},`}
            language="javascript"
          />
        </div>

        <DocH3>Externals</DocH3>

        <DocParagraph>
          The <DocCode>externals</DocCode> option specifies dependencies that
          should not be bundled with your package. By default, React and
          ReactDOM are marked as external, which means they won&apos;t be
          included in your bundle. This is important for React component
          libraries to avoid bundling React twice.
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`externals: {
  react: 'react',
  'react-dom': 'react-dom',
},`}
            language="javascript"
          />
        </div>

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
export default {
  // ... other config
  module: {
    rules: [
      // ... other rules
      {
        test: /\\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};`}
            language="javascript"
          />
        </div>

        <DocH3>Adding Support for PostCSS</DocH3>

        <DocParagraph>
          To use PostCSS for advanced CSS processing, install the required
          packages:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`npm install --save-dev postcss postcss-loader autoprefixer postcss-preset-env`}
            language="bash"
          />
        </div>

        <DocParagraph>Create a postcss.config.js file:</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-preset-env')({
      stage: 3,
      features: {
        'nesting-rules': true,
      },
    }),
  ],
};`}
            language="javascript"
          />
        </div>

        <DocParagraph>Then update your webpack configuration:</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// webpack.config.js
export default {
  // ... other config
  module: {
    rules: [
      // ... other rules
      {
        test: /\\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
};`}
            language="javascript"
          />
        </div>

        <DocH3>Multiple Output Formats</DocH3>

        <DocParagraph>
          To build your package for multiple formats (CommonJS, ESM, and UMD),
          you can create separate webpack configurations:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// webpack.config.js
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Base configuration
const baseConfig = {
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      // ... rules as before
    ],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
};

// UMD build
const umdConfig = {
  ...baseConfig,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist/umd'),
    filename: 'index.js',
    library: {
      type: 'umd',
      name: 'MyPackage',
    },
    globalObject: 'this',
  },
};

// CommonJS build
const cjsConfig = {
  ...baseConfig,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist/cjs'),
    filename: 'index.js',
    library: {
      type: 'commonjs2',
    },
  },
};

// ESM build
const esmConfig = {
  ...baseConfig,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist/esm'),
    filename: 'index.js',
    library: {
      type: 'module',
    },
  },
  experiments: {
    outputModule: true,
  },
};

export default [umdConfig, cjsConfig, esmConfig];`}
            language="javascript"
          />
        </div>

        <DocParagraph>
          Then update your package.json to specify the different entry points:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`{
  "name": "my-package",
  "version": "1.0.0",
  "main": "dist/cjs/index.js",
  "module": "dist/esm/index.js",
  "unpkg": "dist/umd/index.js",
  "types": "dist/types/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/esm/index.js",
      "require": "./dist/cjs/index.js",
      "types": "./dist/types/index.d.ts"
    }
  },
  // ... other package.json fields
}`}
            language="json"
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
import path from 'path';

export default (env) => {
  const isDevelopment = env.development === true;
  
  return {
    mode: isDevelopment ? 'development' : 'production',
    entry: './src/index.tsx',
    output: {
      path: path.resolve('dist'),
      filename: 'index.js',
      library: {
        type: 'umd',
        name: 'MyPackage',
      },
      globalObject: 'this',
      publicPath: '/',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
      rules: [
        // ... module rules
      ],
    },
    externals: {
      react: 'react',
      'react-dom': 'react-dom',
    },
    devtool: isDevelopment ? 'inline-source-map' : 'source-map',
    ...(isDevelopment && {
      devServer: {
        static: './dist',
        hot: true,
        open: true,
        port: 9000,
      },
    }),
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
            code={`npm run build -- --env development`}
            language="bash"
          />
        </div>

        <DocH3>Adding a Development Server</DocH3>

        <DocParagraph>
          To use webpack-dev-server for development, install the required
          package:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`npm install --save-dev webpack-dev-server`}
            language="bash"
          />
        </div>

        <DocParagraph>Add a script to your package.json:</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`{
  "scripts": {
    "start": "webpack serve --env development",
    "build": "webpack --env production"
  }
}`}
            language="json"
          />
        </div>

        <DocNote>
          Using webpack-dev-server provides features like hot module replacement
          (HMR), which allows you to see changes in real-time without refreshing
          the page.
        </DocNote>

        {/* Next Page Button */}
        <NextPageButton title="Babel Configuration" href="/docs/babel" />
      </div>
    </>
  );
}
