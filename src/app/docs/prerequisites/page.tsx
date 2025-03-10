"use client";

import React from "react";
import DocsSectionHeader from "@/shared/DocsSectionHeader";
import CopyCodeSnippet from "@/shared/CopyCodeSnippet";

export default function Prerequisites() {
  return (
    <>
      <div className="w-full flex flex-col gap-8">
        <p>
          Before you start using PackShip, make sure you have the following
          prerequisites installed and configured on your system.
        </p>

        <h2
          id="system-requirements"
          className="text-2xl sm:text-3xl text-packship-purple-semilite font-bold"
        >
          System Requirements
        </h2>

        <div className="mb-2 flex flex-col gap-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Node.js (version 14.x or higher)</li>
            <li>npm (version 6.x or higher) or yarn (version 1.x or higher)</li>
            <li>Git (for version control)</li>
          </ul>
        </div>

        <DocsSectionHeader
          color="text-packship-purple-semilite"
          className="text-xl sm:text-2xl"
          header="Checking Your Node.js Version"
        />

        <div className="mb-2 flex flex-col gap-4">
          <p>You can check your Node.js version by running:</p>
          <CopyCodeSnippet code="node --version" language="bash" />
          <p>
            If you need to update or install Node.js, visit the{" "}
            <a
              href="https://nodejs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-packship-purple-lite hover:underline"
            >
              official Node.js website
            </a>
            .
          </p>
        </div>

        <DocsSectionHeader
          color="text-packship-purple-semilite"
          className="text-xl sm:text-2xl"
          header="Checking Your npm Version"
        />

        <div className="mb-2 flex flex-col gap-4">
          <p>You can check your npm version by running:</p>
          <CopyCodeSnippet code="npm --version" language="bash" />
          <p>npm is included with Node.js, but you might need to update it:</p>
          <CopyCodeSnippet code="npm install -g npm@latest" language="bash" />
        </div>

        <h2
          id="npm-account"
          className="text-2xl sm:text-3xl text-packship-purple-semilite font-bold"
        >
          npm Account
        </h2>

        <div className="mb-2 flex flex-col gap-4">
          <p>
            To publish packages, you&apos;ll need an npm account. If you
            don&apos;t have one, you can create it at{" "}
            <a
              href="https://www.npmjs.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-packship-purple-lite hover:underline"
            >
              npmjs.com
            </a>
            .
          </p>

          <p>After creating an account, log in via the terminal:</p>
          <CopyCodeSnippet code="npm login" language="bash" />
          <p>Follow the prompts to enter your username, password, and email.</p>
        </div>

        <h2
          id="development-environment"
          className="text-2xl sm:text-3xl text-packship-purple-semilite font-bold"
        >
          Development Environment
        </h2>

        <div className="mb-2 flex flex-col gap-4">
          <p>
            We recommend using a code editor with good JavaScript/TypeScript
            support, such as:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Visual Studio Code</li>
            <li>WebStorm</li>
            <li>Atom</li>
            <li>Sublime Text</li>
          </ul>
        </div>

        <div className="mt-4">
          <p>
            Once you have all the prerequisites in place, you&apos;re ready to{" "}
            <a
              href="/docs/create-project"
              className="text-packship-purple-lite hover:underline"
            >
              create your first project
            </a>{" "}
            with PackShip!
          </p>
        </div>
      </div>
    </>
  );
}
