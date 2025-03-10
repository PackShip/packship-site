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

export default function CliOther() {
  return (
    <>
      <div className="w-full flex flex-col gap-6">
        <DocParagraph>
          In addition to the core <DocCode>init</DocCode> and{" "}
          <DocCode>publish</DocCode> commands, PackShip provides several other
          useful commands. This guide explains these additional commands and
          their usage.
        </DocParagraph>

        <DocH2 id="report-command">packship report</DocH2>

        <DocParagraph>
          The <DocCode>report</DocCode> command generates a detailed report
          about your package, including size analysis, dependency information,
          and potential issues.
        </DocParagraph>

        <DocH3>Basic Usage</DocH3>

        <div className="mb-4">
          <CopyCodeSnippet code={`packship report`} language="bash" />
        </div>

        <DocParagraph>This command will:</DocParagraph>

        <DocList>
          <DocListItem>Analyze your package size</DocListItem>
          <DocListItem>List all dependencies and their versions</DocListItem>
          <DocListItem>Identify potential issues or improvements</DocListItem>
          <DocListItem>Generate a report in the console</DocListItem>
        </DocList>

        <DocH3>Command Options</DocH3>

        <DocH4>--output [format]</DocH4>

        <DocParagraph>
          Specify the output format for the report. Available formats are{" "}
          <DocCode>json</DocCode>, <DocCode>html</DocCode>, and{" "}
          <DocCode>text</DocCode> (default).
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`# Generate a JSON report
packship report --output json

# Generate an HTML report
packship report --output html`}
            language="bash"
          />
        </div>

        <DocH4>--file [path]</DocH4>

        <DocParagraph>
          Save the report to a file instead of displaying it in the console.
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`# Save the report to a file
packship report --file ./report.txt

# Save a JSON report to a file
packship report --output json --file ./report.json`}
            language="bash"
          />
        </div>

        <DocH3>Report Sections</DocH3>

        <DocParagraph>The report includes several sections:</DocParagraph>

        <DocH4>Package Information</DocH4>

        <DocParagraph>
          Basic information about your package, including name, version,
          description, and author.
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
            {`Package Information:
  Name: my-package
  Version: 1.0.0
  Description: A description of my package
  Author: Your Name
  License: MIT`}
          </pre>
        </div>

        <DocH4>Size Analysis</DocH4>

        <DocParagraph>
          Analysis of your package size, including the total size, size of each
          file, and size of dependencies.
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
            {`Size Analysis:
  Total Size: 256.4 KB
  Source Files: 45.2 KB
  Dependencies: 211.2 KB
  
  Largest Files:
    dist/index.js: 32.1 KB
    dist/components/DataTable.js: 8.5 KB
    dist/utils/formatters.js: 4.6 KB`}
          </pre>
        </div>

        <DocH4>Dependencies</DocH4>

        <DocParagraph>
          List of all dependencies, including their versions and sizes.
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
            {`Dependencies:
  react: ^17.0.2 (peer)
  react-dom: ^17.0.2 (peer)
  lodash: ^4.17.21 (45.6 KB)
  prop-types: ^15.8.1 (2.8 KB)
  
  Dev Dependencies:
    typescript: ^4.7.4
    webpack: ^5.73.0
    babel-loader: ^8.2.5`}
          </pre>
        </div>

        <DocH4>Issues and Recommendations</DocH4>

        <DocParagraph>
          Potential issues and recommendations for improving your package.
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
            {`Issues and Recommendations:
  ⚠️ Large bundle size: Consider code splitting or tree shaking
  ⚠️ Outdated dependency: lodash (4.17.21 -> 4.17.22)
  ✅ All peer dependencies are correctly specified
  ✅ TypeScript declarations are properly generated`}
          </pre>
        </div>

        <DocH2 id="telemetry-commands">Telemetry Commands</DocH2>

        <DocParagraph>
          PackShip collects anonymous usage data to help improve the tool. You
          can control telemetry with the following commands.
        </DocParagraph>

        <DocH3>packship telemetry status</DocH3>

        <DocParagraph>
          Check the current status of telemetry collection.
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code={`packship telemetry status`} language="bash" />
        </div>

        <DocParagraph>
          This will show whether telemetry is enabled or disabled.
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
            {`Telemetry is currently enabled.

PackShip collects anonymous usage data to help improve the tool.
No personal information or code is collected.`}
          </pre>
        </div>

        <DocH3>packship telemetry enable</DocH3>

        <DocParagraph>Enable telemetry collection.</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code={`packship telemetry enable`} language="bash" />
        </div>

        <DocParagraph>
          This will enable the collection of anonymous usage data.
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
            {`Telemetry has been enabled.

Thank you for helping us improve PackShip!`}
          </pre>
        </div>

        <DocH3>packship telemetry disable</DocH3>

        <DocParagraph>Disable telemetry collection.</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`packship telemetry disable`}
            language="bash"
          />
        </div>

        <DocParagraph>
          This will disable the collection of anonymous usage data.
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
            {`Telemetry has been disabled.

You can re-enable it at any time with 'packship telemetry enable'.`}
          </pre>
        </div>

        <DocNote>
          Telemetry data is anonymous and does not include any personal
          information or code. It only includes information about which commands
          are used and basic system information.
        </DocNote>

        <DocH2 id="version-command">packship version</DocH2>

        <DocParagraph>Display the current version of PackShip.</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code={`packship version`} language="bash" />
        </div>

        <DocParagraph>
          This will show the installed version of PackShip.
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>{`PackShip v2.0.0`}</pre>
        </div>

        <DocH2 id="help-command">packship help</DocH2>

        <DocParagraph>
          Display help information for PackShip commands.
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`# General help
packship help

# Command-specific help
packship help init
packship help publish
packship help report`}
            language="bash"
          />
        </div>

        <DocParagraph>
          This will show detailed information about the specified command,
          including available options and examples.
        </DocParagraph>

        <DocH2 id="update-command">packship update</DocH2>

        <DocParagraph>Update PackShip to the latest version.</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code={`packship update`} language="bash" />
        </div>

        <DocParagraph>This is a shortcut for:</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`npm install -g packship@latest`}
            language="bash"
          />
        </div>

        <DocH2 id="doctor-command">packship doctor</DocH2>

        <DocParagraph>
          Check your project for common issues and provide recommendations.
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code={`packship doctor`} language="bash" />
        </div>

        <DocParagraph>This command will:</DocParagraph>

        <DocList>
          <DocListItem>
            Verify that your project structure is correct
          </DocListItem>
          <DocListItem>Check for missing or outdated dependencies</DocListItem>
          <DocListItem>Validate your configuration files</DocListItem>
          <DocListItem>Suggest improvements</DocListItem>
        </DocList>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
            {`PackShip Doctor

✅ Project structure is valid
✅ All required dependencies are installed
⚠️ Outdated dependency: webpack (5.73.0 -> 5.75.0)
⚠️ Missing peer dependency: react-dom
✅ Configuration files are valid
✅ Build script is properly configured

Recommendations:
1. Update webpack to the latest version
2. Add react-dom as a peer dependency`}
          </pre>
        </div>

        <DocH2 id="clean-command">packship clean</DocH2>

        <DocParagraph>
          Clean up temporary files and build artifacts.
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code={`packship clean`} language="bash" />
        </div>

        <DocParagraph>This command will remove:</DocParagraph>

        <DocList>
          <DocListItem>
            The <DocCode>dist</DocCode> directory
          </DocListItem>
          <DocListItem>Build cache</DocListItem>
          <DocListItem>Temporary files</DocListItem>
        </DocList>

        <DocNote>
          This command does not remove <DocCode>node_modules</DocCode>. To
          remove node_modules, use <DocCode>rm -rf node_modules</DocCode> or{" "}
          <DocCode>packship clean --deep</DocCode>.
        </DocNote>

        {/* Next Page Button */}
        <NextPageButton title="Back to Home" href="/docs" />
      </div>
    </>
  );
}
