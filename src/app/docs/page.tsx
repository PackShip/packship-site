"use client";

import React from "react";
import Navigation from "@/shared/Navigation";
import Footer from "@/shared/Footer";
import SectionHeader from "@/shared/SectionHeader";
import CopyCodeSnippet from "@/shared/CopyCodeSnippet";

export default function Docs() {
  return (
    <>
      <Navigation />
      <div className="kontainer min-h-screen flex flex-col items-center justify-center bg-white text-black">
        <div className="row w-full flex flex-col justify-center">
          <h1 className="text-center sm:text-start text-4xl sm:text-5xl text-packship-red font-bold mt-8">
            Packship Installation Guide
          </h1>

          <div className="my-16 flex flex-col gap-8">
            <p>This guide will walk you through installing Packship&apos;s dependencies and configuring Webpack.</p>

            {/* Section: Getting Started */}
            <h2 className="text-2xl sm:text-3xl text-packship-red font-bold">1. Getting Started</h2>
            <p>Start by installing the Packship global command:</p>

            <SectionHeader className="text-xl sm:text-2xl" header="Packship Global Installation" />

            {/* MacOS & Linux Section */}
            <div className="mb-2 flex flex-col gap-4">
              <h4 className="font-bold">For MacOS & Linux</h4>
              <CopyCodeSnippet code="sudo npm i -g packship@latest" language="bash" />
            </div>

            {/* Windows Section */}
            <div className="mb-2 flex flex-col gap-4">
              <h4 className="font-bold">For Windows</h4>
              <CopyCodeSnippet code="npm i -g packship@latest" language="bash" />
            </div>

            <SectionHeader className="text-xl sm:text-2xl" header="Setting Up Your Package with Packship" />

            {/* Setup Section */}
            <div className="mb-2 flex flex-col gap-4">
              <CopyCodeSnippet code="npx -y packship init" language="bash" />
            </div>
            <p>Follow the prompts, and your package will be ready!</p>

            {/* Section: Dependency Installation */}
            <h2 className="text-2xl sm:text-3xl text-packship-red font-bold">2. Dependency Installation</h2>
            <p>Install the necessary dependencies to avoid redundancy and ensure proper package setup.</p>

            {/* Main Dependencies */}
            <SectionHeader className="text-xl sm:text-2xl" header="Main Dependencies" />

            {/* For TypeScript */}
            <div className="mb-2 flex flex-col gap-4">
              <h4 className="font-bold">For TypeScript</h4>
              <CopyCodeSnippet code="npm install --save typescript @types/react @types/react-dom" language="bash" />
            </div>

            {/* For JavaScript */}
            <div className="mb-2 flex flex-col gap-4">
              <h4 className="font-bold">For JavaScript</h4>
              <CopyCodeSnippet code="npm install react react-dom" language="bash" />
            </div>

            <p>
              Make sure <strong>TypeScript</strong> and <strong>React</strong> typings are installed for development purposes. Install these commands only <strong>once</strong> to avoid duplication.
            </p>

            {/* Babel for React & TypeScript */}
            <SectionHeader className="text-xl sm:text-2xl" header="Babel for React & TypeScript" />
            <p>Install Babel presets to compile TypeScript and JSX/React syntax:</p>

            {/* For TypeScript */}
            <div className="mb-2 flex flex-col gap-4">
              <h4 className="font-bold">For TypeScript</h4>
              <CopyCodeSnippet code="npm install --save-dev @babel/preset-typescript @babel/preset-react" language="bash" />
            </div>

            {/* For JavaScript */}
            <div className="mb-2 flex flex-col gap-4">
              <h4 className="font-bold">For JavaScript</h4>
              <CopyCodeSnippet code="npm install --save-dev @babel/preset-react" language="bash" />
            </div>

            {/* Babel & Webpack Loaders */}
            <SectionHeader className="text-xl sm:text-2xl" header="Babel & Webpack Loaders" />
            <div className="mb-2 flex flex-col gap-4">
              <p>Install the necessary loaders for Babel and Webpack:</p>
              <CopyCodeSnippet code="npm install --save-dev babel-loader webpack" language="bash" />
            </div>

            <p>These loaders ensure that Webpack and Babel can work together to transpile and bundle your code.</p>

            {/* Section: Publishing your Npm package */}
            <h2 className="text-2xl sm:text-3xl text-packship-red font-bold">3. Publishing Your Npm Package</h2>
            <div className="mb-2 flex flex-col gap-4">
              <p>To publish your package, ensure the build is successful:</p>
              <CopyCodeSnippet code="npm run build" language="bash" />
            </div>

            <div className="mb-2 flex flex-col gap-4">
              <h4 className="font-bold">For new packages</h4> 
              <p>Once the build succeeds, publish your package:</p>
              <CopyCodeSnippet code="packship publish" language="bash" />
            </div>
            
            <div className="mb-2 flex flex-col gap-4">
              <h4 className="font-bold">For existing packages</h4> 
              <p>If you&apos;re updating an existing package, update the version and then publish:</p>
              <CopyCodeSnippet code="npm version patch/minor/major      # Depending on your release" language="bash" />
              <CopyCodeSnippet code="packship publish" language="bash" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}