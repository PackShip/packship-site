"use client";

import React from "react";
import DocsSectionHeader from "@/shared/DocsSectionHeader";
import CopyCodeSnippet from "@/shared/CopyCodeSnippet";
import Image from "next/image";
import DependacyResIssuePreview from "../../../public/assets/dep-res-issue.png";
import EACCESSPreview from "../../../public/assets/eas-issue.png";
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

export default function Docs() {
  return (
    <>
      <div className="w-full flex flex-col justify-center">
        <div className="w-full flex flex-col gap-6">
          <DocParagraph>
            This guide will walk you through installing Packship&apos;s
            dependencies and configuring Webpack.
          </DocParagraph>

          {/* Section: Getting Started */}
          <DocH2 id="getting-started">1. Getting Started</DocH2>
          <DocParagraph>
            Start by installing the Packship global command:
          </DocParagraph>

          <DocH3>Packship Global Installation</DocH3>

          {/* MacOS & Linux Section */}
          <div className="mb-4 flex flex-col gap-3">
            <DocH4>For MacOS & Linux</DocH4>
            <CopyCodeSnippet
              code="sudo npm i -g packship@latest"
              language="bash"
            />
          </div>

          {/* Windows Section */}
          <div className="mb-4 flex flex-col gap-3">
            <DocH4>For Windows</DocH4>
            <CopyCodeSnippet code="npm i -g packship@latest" language="bash" />
          </div>

          <DocH3>Setting Up Your Package with Packship</DocH3>

          {/* Setup Section */}
          <div className="mb-4 flex flex-col gap-3">
            <CopyCodeSnippet code="packship init" language="bash" />
          </div>
          <DocParagraph>
            Follow the prompts, and your package will be ready!
          </DocParagraph>

          {/* Section: Dependency Installation */}
          <DocH2 id="dependency-installation">2. Dependency Installation</DocH2>

          {/* Initialize Node Modules and Package-Lock */}
          <DocH3>Initialize `node modules` and `package-lock.json`</DocH3>
          <DocParagraph>
            Install the necessary dependencies to ensure your package runs
            smoothly.
          </DocParagraph>
          <CopyCodeSnippet code="npm install" language="bash" />
          <DocParagraph>
            If you encounter dependency resolution issues, similar to this:
          </DocParagraph>
          <figure className="w-full mb-4">
            <Image
              src={DependacyResIssuePreview}
              alt="Dependency Resolution Issues"
              className="w-full border-2 border-packship-purple-lite rounded-lg"
            />
          </figure>
          <DocParagraph>
            Run the following command to install dependencies:
          </DocParagraph>
          <CopyCodeSnippet
            code="npm install --legacy-peer-deps"
            language="bash"
          />
          <DocParagraph>
            If you see an EACCES error, run the following command to fix
            permissions:
          </DocParagraph>
          <figure className="w-full mb-4">
            <Image
              src={EACCESSPreview}
              alt="EACCES Issue"
              className="w-full border-2 border-packship-purple-lite rounded-lg"
            />
          </figure>
          <CopyCodeSnippet
            code='sudo chown -R $(whoami) "$(npm config get cache)"'
            language="bash"
          />
          <DocParagraph>
            Then, try installing the dependencies again:
          </DocParagraph>
          <CopyCodeSnippet code="npm install" language="bash" />

          <DocNote>
            If you encounter deprecated package warnings, you can safely ignore
            them or update the packages as needed.
          </DocNote>

          <DocParagraph>
            Install the necessary dependencies to avoid redundancy and ensure
            proper package setup.
          </DocParagraph>

          {/* Main Dependencies */}
          <DocH3>Main Dependencies</DocH3>

          {/* For TypeScript */}
          <div className="mb-4 flex flex-col gap-3">
            <DocH4>For TypeScript</DocH4>
            <CopyCodeSnippet
              code="npm install --save typescript @types/react @types/react-dom"
              language="bash"
            />
          </div>

          {/* For JavaScript */}
          <div className="mb-4 flex flex-col gap-3">
            <DocH4>For JavaScript</DocH4>
            <CopyCodeSnippet
              code="npm install react react-dom"
              language="bash"
            />
          </div>

          <DocParagraph>
            Make sure <strong>TypeScript</strong> and <strong>React</strong>{" "}
            typings are installed for development purposes. Install these
            commands only <strong>once</strong> to avoid duplication.
          </DocParagraph>

          {/* Babel for React & TypeScript */}
          <DocH3>Babel for React & TypeScript</DocH3>
          <DocParagraph>
            Install Babel presets to compile TypeScript and JSX/React syntax:
          </DocParagraph>

          {/* For TypeScript */}
          <div className="mb-4 flex flex-col gap-3">
            <DocH4>For TypeScript</DocH4>
            <CopyCodeSnippet
              code="npm install --save-dev @babel/preset-typescript @babel/preset-react"
              language="bash"
            />
          </div>

          {/* For JavaScript */}
          <div className="mb-4 flex flex-col gap-3">
            <DocH4>For JavaScript</DocH4>
            <CopyCodeSnippet
              code="npm install --save-dev @babel/preset-react"
              language="bash"
            />
          </div>

          {/* Babel & Webpack Loaders */}
          <DocH3>Babel & Webpack Loaders</DocH3>
          <div className="mb-4 flex flex-col gap-3">
            <DocParagraph>
              Install the necessary loaders for Babel and Webpack:
            </DocParagraph>
            <CopyCodeSnippet
              code="npm install --save-dev babel-loader webpack"
              language="bash"
            />
          </div>

          <DocParagraph>
            These loaders ensure that Webpack and Babel can work together to
            transpile and bundle your code.
          </DocParagraph>

          {/* Section: Publishing your Npm package */}
          <DocH2 id="publishing">3. Publishing Your Npm Package</DocH2>
          <div className="mb-4 flex flex-col gap-3">
            <DocParagraph>
              To publish your package, ensure the build is successful:
            </DocParagraph>
            <CopyCodeSnippet code="npm run build" language="bash" />
          </div>

          <div className="mb-4 flex flex-col gap-3">
            <DocH4>For new packages</DocH4>
            <DocParagraph>
              Once the build succeeds, publish your package:
            </DocParagraph>
            <CopyCodeSnippet code="packship publish" language="bash" />
          </div>

          <div className="mb-4 flex flex-col gap-3">
            <DocH4>For existing packages</DocH4>
            <DocParagraph>
              If you&apos;re updating an existing package, update the version
              and then publish:
            </DocParagraph>
            <CopyCodeSnippet
              code="npm version patch/minor/major      # Depending on your release"
              language="bash"
            />
            <CopyCodeSnippet code="packship publish" language="bash" />
          </div>

          {/* Next Page Button */}
          <NextPageButton title="Prerequisites" href="/docs/prerequisites" />
        </div>
      </div>
    </>
  );
}
