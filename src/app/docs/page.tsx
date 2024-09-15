"use client";

import React, { useCallback } from "react";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import copy from 'copy-to-clipboard'; // You might need to install this package
import Navigation from "@/shared/Navigation";
import Footer from "@/shared/Footer";
import SectionHeader from "@/shared/SectionHeader";

export default function Docs() {
  const copyCodeToClipboard = useCallback((code: string) => {
    copy(code);
    alert('Code copied to clipboard!');
  }, []);

  return (
    <>
      <Navigation />
      <div className="kontainer min-h-screen flex flex-col items-center justify-center bg-white text-black">
        <div className="row">
          <div className="w-full flex flex-col justify-center">
            <h1 className="text-center sm:text-start text-4xl sm:text-5xl text-packship-red font-bold mt-8">Packship Installation Guide</h1>
            <div className="my-16 flex flex-col justify-center gap-8">
              <p>
                This guide will walk you through installing Packship&apos;s dependencies and
                ensuring your Webpack configuration is correctly set up.
              </p>

              <h2 className="text-2xl sm:text-3xl text-packship-red font-bold">1. Dependency Installation</h2>
              <p>
                Start by installing the necessary dependencies. The list below avoids
                redundancy and ensures the correct packages are installed.
              </p>

              <SectionHeader className="text-xl sm:text-2xl" header="Main Dependencies" />
              <div className="mb-2 flex flex-col justify-center gap-2">
                <h4 className="font-bold">For TypeScript</h4>
                <div className="bg-[#1E1E1E] p-2 rounded-lg w-full flex flex-col sm:flex-row justify-between gap-4">
                  <SyntaxHighlighter language="bash" style={vs2015}>
                    {`npm install --save typescript @types/react @types/react-dom`}
                  </SyntaxHighlighter>
                  <button className="bg-packship-red px-4 py-2 text-white font-bold text-sm rounded-full" onClick={() => copyCodeToClipboard(`npm install --save typescript @types/react @types/react-dom`)}>Copy Code</button>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-2">
                <h4 className="font-bold">For JavaScript</h4>
                <div className="bg-[#1E1E1E] p-2 rounded-lg w-full flex flex-col sm:flex-row justify-between gap-4">
                  <SyntaxHighlighter language="bash" style={vs2015}>
                    {`npm install react react-dom`}
                  </SyntaxHighlighter>
                  <button className="bg-packship-red px-4 py-2 text-white font-bold text-sm rounded-full" onClick={() => copyCodeToClipboard(`npm install react react-dom`)}>Copy Code</button>
                </div>
              </div>
              <p>
                Ensure <strong>TypeScript</strong> and <strong>React</strong> typings
                are installed for development purposes. Make sure you only install this
                command <strong>once</strong> to avoid duplication.
              </p>

              <SectionHeader className="text-xl sm:text-2xl" header="Babel for React & TypeScript" />
              <p>
                To ensure proper compilation of React and TypeScript files, you&apos;ll need
                the following Babel presets:
              </p>
              <div className="mb-2 flex flex-col justify-center gap-2">
                <h4 className="font-bold">For TypeScript</h4>
                <div className="bg-[#1E1E1E] p-2 rounded-lg w-full flex flex-col sm:flex-row justify-between gap-4">
                  <SyntaxHighlighter language="bash" style={vs2015}>
                    {`npm install --save-dev @babel/preset-typescript @babel/preset-react`}
                  </SyntaxHighlighter>
                  <button className="bg-packship-red px-4 py-2 text-white font-bold text-sm rounded-full" onClick={() => copyCodeToClipboard(`npm install --save typescript @types/react @types/react-dom`)}>Copy Code</button>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-2">
                <h4 className="font-bold">For JavaScript</h4>
                <div className="bg-[#1E1E1E] p-2 rounded-lg w-full flex flex-col sm:flex-row justify-between gap-4">
                  <SyntaxHighlighter language="bash" style={vs2015}>
                    {`npm install --save-dev @babel/preset-react`}
                  </SyntaxHighlighter>
                  <button className="bg-packship-red px-4 py-2 text-white font-bold text-sm rounded-full" onClick={() => copyCodeToClipboard(`npm install react react-dom`)}>Copy Code</button>
                </div>
              </div>
              <p>
                These presets will allow Babel to understand both TypeScript and JSX/React syntax.
              </p>

              <SectionHeader className="text-xl sm:text-2xl" header="Babel & Webpack Loaders" />
              <p>
                Next, install the necessary loaders for <strong>Babel</strong> and
                <strong>Webpack</strong>:
              </p>
              <div className="bg-[#1E1E1E] p-2 rounded-lg w-full flex flex-col sm:flex-row justify-between gap-4">
                <SyntaxHighlighter language="bash" style={vs2015}>
                  {`npm install --save-dev babel-loader webpack`}
                </SyntaxHighlighter>
                <button className="bg-packship-red px-4 py-2 text-white font-bold text-sm rounded-full" onClick={() => copyCodeToClipboard(`npm install --save-dev babel-loader@8 webpack@5`)}>Copy Code</button>
              </div>
              <p>
                These loaders ensure that Webpack and Babel can work together to
                transpile and bundle your code.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
