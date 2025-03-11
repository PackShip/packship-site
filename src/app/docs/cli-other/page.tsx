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

export default function CLIOther() {
  const pathname = usePathname();

  return (
    <>
      <div className="w-full flex flex-col gap-6">
        <DocParagraph>
          In addition to the core <DocCode>init</DocCode>,{" "}
          <DocCode>publish</DocCode>, and the version flag commands, PackShip
          provides several other useful commands. This guide explains these
          additional commands and their usage.
        </DocParagraph>

        <DocH2 id="report-command">packship report</DocH2>

        <DocParagraph>
          The <DocCode>report</DocCode> command allows you to report issues with
          the PackShip tool itself directly to the GitHub repository.
        </DocParagraph>

        <DocH3>Basic Usage</DocH3>

        <div className="mb-4">
          <CopyCodeSnippet code={`packship report`} language="bash" />
        </div>

        <DocParagraph>This command will:</DocParagraph>

        <DocList>
          <DocListItem>
            Guide you through an interactive process to report an issue
          </DocListItem>
          <DocListItem>
            Allow you to choose between automatic or manual submission
          </DocListItem>
          <DocListItem>
            Collect necessary information about the issue
          </DocListItem>
          <DocListItem>
            Optionally include system information to help with troubleshooting
          </DocListItem>
        </DocList>

        <DocH3>Submission Methods</DocH3>

        <DocH4>Automatic Submission</DocH4>

        <DocParagraph>
          Submit the issue directly to GitHub from the CLI. This requires a
          GitHub personal access token with the &quot;repo&quot; scope.
        </DocParagraph>

        <DocParagraph>
          If you don&apos;t have a token configured, the CLI will prompt you to
          enter one and optionally save it for future use.
        </DocParagraph>

        <DocH4>Manual Submission</DocH4>

        <DocParagraph>
          The CLI will format your issue and provide instructions for manually
          submitting it to GitHub.
        </DocParagraph>

        <DocH3>Issue Categories</DocH3>

        <DocParagraph>You can report different types of issues:</DocParagraph>

        <DocList>
          <DocListItem>
            Bug Report - For problems with the PackShip tool
          </DocListItem>
          <DocListItem>
            Feature Request - For suggesting new features
          </DocListItem>
          <DocListItem>
            Documentation Issue - For reporting errors or gaps in documentation
          </DocListItem>
          <DocListItem>
            Question - For general questions about PackShip
          </DocListItem>
          <DocListItem>
            Other - For any other PackShip-related issues
          </DocListItem>
        </DocList>

        <DocNote>
          The <DocCode>report</DocCode> command is designed for reporting issues
          with the PackShip tool itself. If you suspect the PackShip CLI is
          causing problems with your npm package, you can either use{" "}
          <DocCode>packship report</DocCode> or submit an issue directly on our{" "}
          <a
            href="https://github.com/CodeNKoffee/packship/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-packship-purple-lite hover:underline"
          >
            GitHub Issues
          </a>{" "}
          page.
        </DocNote>

        <DocH2 id="telemetry-commands">Telemetry Commands</DocH2>

        <DocParagraph>
          PackShip collects anonymous usage data to help improve the tool. This
          data includes command usage and error rates, but never includes
          personal information or code. You can control telemetry with the
          following commands.
        </DocParagraph>

        <DocNote>
          By default, telemetry is turned on when you first install and use
          PackShip. This helps us understand how the tool is being used and
          identify areas for improvement. You can disable it at any time using
          the commands below.
        </DocNote>

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
This data includes command usage and error rates, but never includes personal information or code.`}
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
          <pre>{`Telemetry has been enabled.`}</pre>
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
          <pre>{`Telemetry has been disabled.`}</pre>
        </div>

        <DocNote>
          Telemetry data is anonymous and does not include any personal
          information or code. It only includes information about which commands
          are used and basic system information to help improve the tool.
        </DocNote>

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

        {/* Commented out update command
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
        */}

        {/* Commented out doctor command
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
        */}

        {/* Commented out clean command
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
        */}

        {/* Next Page Button */}
        <DocNavigation currentPath={pathname} />
      </div>
    </>
  );
}
