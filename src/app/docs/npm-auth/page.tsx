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

export default function NpmAuth() {
  const pathname = usePathname();

  return (
    <>
      <div className="w-full flex flex-col gap-6">
        <DocParagraph>
          Authentication with npm is essential for publishing packages and
          accessing private packages. This guide explains how to authenticate
          with npm and manage your authentication credentials securely.
        </DocParagraph>

        <DocH2 id="npm-login">Logging in to npm</DocH2>

        <DocParagraph>
          To authenticate with npm, you need to log in using the npm CLI:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code={`npm login`} language="bash" />
        </div>

        <DocParagraph>
          You&apos;ll be prompted to enter your username, password, and email
          address. If you have two-factor authentication enabled, you&apos;ll
          also need to provide an OTP (One-Time Password).
        </DocParagraph>

        <DocH3>Verifying Login Status</DocH3>

        <DocParagraph>
          To check if you&apos;re logged in and see your current npm user:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code={`npm whoami`} language="bash" />
        </div>

        <DocParagraph>
          If you&apos;re not logged in, this command will return an error.
        </DocParagraph>

        <DocH2 id="two-factor-authentication">Two-Factor Authentication</DocH2>

        <DocParagraph>
          Two-factor authentication (2FA) adds an extra layer of security to
          your npm account. It requires a second form of authentication in
          addition to your password.
        </DocParagraph>

        <DocH3>Enabling 2FA</DocH3>

        <DocParagraph>You can enable 2FA from the command line:</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`# Enable 2FA for authentication only
npm profile enable-2fa auth-only

# Enable 2FA for authentication and publishing
npm profile enable-2fa auth-and-writes`}
            language="bash"
          />
        </div>

        <DocParagraph>
          You&apos;ll need an authenticator app that supports TOTP (Time-based
          One-Time Password) such as Google Authenticator, Authy, or Microsoft
          Authenticator.
        </DocParagraph>

        <DocH3>Using 2FA</DocH3>

        <DocParagraph>
          When 2FA is enabled, you&apos;ll need to provide an OTP when:
        </DocParagraph>

        <DocList>
          <DocListItem>Logging in to npm</DocListItem>
          <DocListItem>
            Publishing packages (if you enabled 2FA for writes)
          </DocListItem>
          <DocListItem>Managing tokens and organization members</DocListItem>
        </DocList>

        <DocH3>Disabling 2FA</DocH3>

        <DocParagraph>If you need to disable 2FA:</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code={`npm profile disable-2fa`} language="bash" />
        </div>

        <DocNote>
          Disabling 2FA reduces the security of your npm account. It&apos;s
          recommended to keep 2FA enabled.
        </DocNote>

        <DocH2 id="npm-tokens">npm Tokens</DocH2>

        <DocParagraph>
          npm tokens allow you to authenticate without using your username and
          password. They are especially useful for CI/CD pipelines and automated
          processes.
        </DocParagraph>

        <DocH3>Creating Tokens</DocH3>

        <DocParagraph>To create a new token:</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code={`npm token create`} language="bash" />
        </div>

        <DocParagraph>
          You can specify the token&apos;s permissions and expiration:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`# Create a read-only token
npm token create --read-only

# Create a token with an expiration date
npm token create --cidr=192.168.1.0/24 --readonly --cidr=::1/128`}
            language="bash"
          />
        </div>

        <DocH3>Listing Tokens</DocH3>

        <DocParagraph>To list your existing tokens:</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code={`npm token list`} language="bash" />
        </div>

        <DocH3>Revoking Tokens</DocH3>

        <DocParagraph>To revoke a token:</DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`# Get the token ID from npm token list
npm token revoke <token_id>`}
            language="bash"
          />
        </div>

        <DocH2 id="using-tokens-ci-cd">Using Tokens in CI/CD</DocH2>

        <DocParagraph>
          For automated publishing in CI/CD pipelines, you can use npm tokens
          instead of your credentials:
        </DocParagraph>

        <DocH3>Setting Up .npmrc</DocH3>

        <DocParagraph>
          Create or edit the <DocCode>.npmrc</DocCode> file:
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>{`//registry.npmjs.org/:_authToken=\${NPM_TOKEN}`}</pre>
        </div>

        <DocParagraph>
          Then set the <DocCode>NPM_TOKEN</DocCode> environment variable in your
          CI/CD system with your npm token.
        </DocParagraph>

        <DocH3>GitHub Actions Example</DocH3>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
            {`# .github/workflows/publish.yml
name: Publish Package

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
          registry-url: 'https://registry.npmjs.org/'
      - run: npm ci
      - run: npm run build
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: \${{ secrets.NPM_TOKEN }}`}
          </pre>
        </div>

        <DocNote>
          Store your npm token as a secret in your CI/CD system. Never commit
          tokens to your repository.
        </DocNote>

        <DocH2 id="scoped-packages">Authentication for Scoped Packages</DocH2>

        <DocParagraph>
          Scoped packages (e.g., <DocCode>@username/package-name</DocCode>) can
          be private or public. Private packages require authentication to
          access.
        </DocParagraph>

        <DocH3>Accessing Private Scoped Packages</DocH3>

        <DocParagraph>
          To authenticate for a specific scope, add the following to your{" "}
          <DocCode>.npmrc</DocCode> file:
        </DocParagraph>

        <div className="mb-4 font-mono text-sm bg-black/20 p-4 rounded-md text-white/80 overflow-x-auto">
          <pre>
            {`@scope:registry=https://registry.npmjs.org/
//registry.npmjs.org/:_authToken=\${NPM_TOKEN}`}
          </pre>
        </div>

        <DocH3>Organization Scopes</DocH3>

        <DocParagraph>
          For npm organizations, you need to be a member of the organization to
          access private packages:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`# Log in with your npm account
npm login

# Install a private package from your organization
npm install @your-org/private-package`}
            language="bash"
          />
        </div>

        <DocH2 id="troubleshooting">
          Troubleshooting Authentication Issues
        </DocH2>

        <DocH3>Common Issues</DocH3>

        <DocH4>401 Unauthorized</DocH4>

        <DocParagraph>If you see a 401 Unauthorized error:</DocParagraph>

        <DocList>
          <DocListItem>
            Check if you&apos;re logged in with <DocCode>npm whoami</DocCode>
          </DocListItem>
          <DocListItem>
            Try logging in again with <DocCode>npm login</DocCode>
          </DocListItem>
          <DocListItem>
            Verify that your token has the correct permissions
          </DocListItem>
          <DocListItem>Check if your token has expired</DocListItem>
        </DocList>

        <DocH4>403 Forbidden</DocH4>

        <DocParagraph>If you see a 403 Forbidden error:</DocParagraph>

        <DocList>
          <DocListItem>
            Verify that you have access to the package or organization
          </DocListItem>
          <DocListItem>
            Check if your subscription is active (for paid organizations)
          </DocListItem>
          <DocListItem>
            Ensure you&apos;re using the correct registry URL
          </DocListItem>
        </DocList>

        <DocH3>Clearing npm Cache</DocH3>

        <DocParagraph>
          Sometimes, clearing the npm cache can resolve authentication issues:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code={`npm cache clean --force`} language="bash" />
        </div>

        <DocH3>Checking .npmrc Files</DocH3>

        <DocParagraph>
          npm reads configuration from multiple <DocCode>.npmrc</DocCode> files:
        </DocParagraph>

        <DocList>
          <DocListItem>
            Project-level: <DocCode>./project/.npmrc</DocCode>
          </DocListItem>
          <DocListItem>
            User-level: <DocCode>~/.npmrc</DocCode>
          </DocListItem>
          <DocListItem>
            Global: <DocCode>/etc/npmrc</DocCode> or{" "}
            <DocCode>%APPDATA%/npm/etc/npmrc</DocCode>
          </DocListItem>
        </DocList>

        <DocParagraph>
          Check these files for conflicting configurations.
        </DocParagraph>

        <DocH2 id="security-best-practices">Security Best Practices</DocH2>

        <DocList>
          <DocListItem>
            <strong>Enable 2FA</strong>: Always use two-factor authentication
            for your npm account
          </DocListItem>
          <DocListItem>
            <strong>Use tokens with limited scope</strong>: Create tokens with
            the minimum required permissions
          </DocListItem>
          <DocListItem>
            <strong>Set token expiration</strong>: Use tokens with expiration
            dates for temporary access
          </DocListItem>
          <DocListItem>
            <strong>Rotate tokens regularly</strong>: Create new tokens and
            revoke old ones periodically
          </DocListItem>
          <DocListItem>
            <strong>Use environment variables</strong>: Store tokens in
            environment variables, not in code
          </DocListItem>
          <DocListItem>
            <strong>Audit access regularly</strong>: Review who has access to
            your packages and organizations
          </DocListItem>
        </DocList>

        {/* Next Page Button */}
        <DocNavigation currentPath={pathname} />
      </div>
    </>
  );
}
