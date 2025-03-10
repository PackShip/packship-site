"use client";

import React from "react";
import DocsSectionHeader from "@/shared/DocsSectionHeader";
import CopyCodeSnippet from "@/shared/CopyCodeSnippet";

export default function CliInit() {
  return (
    <>
      <div className="w-full flex flex-col gap-8">
        <p>
          The{" "}
          <code className="bg-black/30 px-1 py-0.5 rounded">packship init</code>{" "}
          command is the starting point for creating a new package with
          PackShip. This guide explains all the options and features of this
          command.
        </p>

        <h2
          id="basic-usage"
          className="text-2xl sm:text-3xl text-packship-purple-semilite font-bold"
        >
          Basic Usage
        </h2>

        <div className="mb-2 flex flex-col gap-4">
          <p>To initialize a new package project, run:</p>
          <CopyCodeSnippet code="packship init" language="bash" />
          <p>
            This will start an interactive prompt to configure your package.
          </p>
        </div>

        <DocsSectionHeader
          color="text-packship-purple-semilite"
          className="text-xl sm:text-2xl"
          header="Command Options"
        />

        <div className="mb-2 flex flex-col gap-4">
          <p>
            The <code className="bg-black/30 px-1 py-0.5 rounded">init</code>{" "}
            command supports several options to customize the initialization
            process:
          </p>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-black/20">
                <th className="border border-gray-700 p-2 text-left">Option</th>
                <th className="border border-gray-700 p-2 text-left">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-700 p-2">
                  <code>--name, -n</code>
                </td>
                <td className="border border-gray-700 p-2">
                  Specify the package name
                </td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">
                  <code>--description, -d</code>
                </td>
                <td className="border border-gray-700 p-2">
                  Provide a package description
                </td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">
                  <code>--author, -a</code>
                </td>
                <td className="border border-gray-700 p-2">
                  Set the package author
                </td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">
                  <code>--license, -l</code>
                </td>
                <td className="border border-gray-700 p-2">
                  Specify the license (default: MIT)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">
                  <code>--typescript, -ts</code>
                </td>
                <td className="border border-gray-700 p-2">
                  Initialize with TypeScript support
                </td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">
                  <code>--yes, -y</code>
                </td>
                <td className="border border-gray-700 p-2">
                  Skip prompts and use defaults
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <DocsSectionHeader
          color="text-packship-purple-semilite"
          className="text-xl sm:text-2xl"
          header="Examples"
        />

        <div className="mb-2 flex flex-col gap-4">
          <p>Initialize a package with default settings (skipping prompts):</p>
          <CopyCodeSnippet code="packship init --yes" language="bash" />

          <p>Initialize a TypeScript package with a specific name:</p>
          <CopyCodeSnippet
            code='packship init --name "my-awesome-package" --typescript'
            language="bash"
          />

          <p>Initialize with custom author and license:</p>
          <CopyCodeSnippet
            code='packship init --author "Your Name" --license Apache-2.0'
            language="bash"
          />
        </div>

        <h2
          id="generated-files"
          className="text-2xl sm:text-3xl text-packship-purple-semilite font-bold"
        >
          Generated Files
        </h2>

        <div className="mb-2 flex flex-col gap-4">
          <p>
            The <code className="bg-black/30 px-1 py-0.5 rounded">init</code>{" "}
            command generates the following files and directories:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>package.json</strong>: Contains package metadata and
              dependencies
            </li>
            <li>
              <strong>README.md</strong>: Basic documentation template
            </li>
            <li>
              <strong>LICENSE</strong>: License file based on your selection
            </li>
            <li>
              <strong>.gitignore</strong>: Configured to ignore common files
            </li>
            <li>
              <strong>src/</strong>: Directory for your source code
            </li>
            <li>
              <strong>webpack.config.js</strong>: Webpack configuration for
              building your package
            </li>
            <li>
              <strong>tsconfig.json</strong>: TypeScript configuration (if using
              TypeScript)
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <p>
            After initializing your project, you can proceed to{" "}
            <a
              href="/docs/cli-publish"
              className="text-packship-purple-lite hover:underline"
            >
              publishing your package
            </a>{" "}
            with the{" "}
            <code className="bg-black/30 px-1 py-0.5 rounded">
              packship publish
            </code>{" "}
            command.
          </p>
        </div>
      </div>
    </>
  );
}
