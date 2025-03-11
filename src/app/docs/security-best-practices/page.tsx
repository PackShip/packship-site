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

export default function SecurityBestPractices() {
  const pathname = usePathname();

  return (
    <>
      <div className="w-full flex flex-col gap-6">
        <DocParagraph>
          Security is a critical aspect of package development. This guide
          outlines best practices for ensuring the security of your PackShip
          projects and the packages you publish.
        </DocParagraph>

        <DocH2 id="dependency-security">Dependency Security</DocH2>

        <DocH3>Auditing Dependencies</DocH3>

        <DocParagraph>
          Regularly audit your dependencies for security vulnerabilities:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code={`npm audit`} language="bash" />
        </div>

        <DocParagraph>
          To automatically fix vulnerabilities when possible:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code={`npm audit fix`} language="bash" />
        </div>

        <DocParagraph>
          For more severe issues that require major version updates:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code={`npm audit fix --force`} language="bash" />
        </div>

        <DocNote>
          Always review the changes made by{" "}
          <DocCode>npm audit fix --force</DocCode> as they might include
          breaking changes.
        </DocNote>

        <DocH3>Keeping Dependencies Updated</DocH3>

        <DocParagraph>
          Regularly update your dependencies to get security patches:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet code={`npm update`} language="bash" />
        </div>

        <DocParagraph>
          Use tools like npm-check-updates to identify outdated dependencies:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`# Install the tool
npm install -g npm-check-updates

# Check for updates
ncu

# Apply updates to package.json
ncu -u

# Install updated packages
npm install`}
            language="bash"
          />
        </div>

        <DocH3>Minimizing Dependencies</DocH3>

        <DocParagraph>
          Each dependency you add increases your security risk surface. Consider
          these guidelines:
        </DocParagraph>

        <DocList>
          <DocListItem>
            Only add dependencies that provide essential functionality
          </DocListItem>
          <DocListItem>
            Prefer well-maintained, popular packages with good security records
          </DocListItem>
          <DocListItem>
            Consider implementing simple functionality yourself instead of
            adding a dependency
          </DocListItem>
          <DocListItem>
            Regularly review and remove unused dependencies
          </DocListItem>
        </DocList>

        <DocH2 id="code-security">Code Security</DocH2>

        <DocH3>Input Validation</DocH3>

        <DocParagraph>
          Always validate and sanitize inputs to prevent injection attacks:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// Bad - vulnerable to injection
function processUserInput(input) {
  eval(input); // Never do this!
}

// Good - validate input
function processUserInput(input) {
  if (typeof input !== 'string' || !input.match(/^[a-zA-Z0-9]+$/)) {
    throw new Error('Invalid input');
  }
  // Process the validated input
}`}
            language="javascript"
          />
        </div>

        <DocH3>Avoiding Dangerous Functions</DocH3>

        <DocParagraph>
          Avoid using functions that can lead to security vulnerabilities:
        </DocParagraph>

        <DocList>
          <DocListItem>
            <DocCode>eval()</DocCode> - Executes arbitrary code
          </DocListItem>
          <DocListItem>
            <DocCode>Function()</DocCode> constructor - Similar to eval()
          </DocListItem>
          <DocListItem>
            <DocCode>setTimeout()</DocCode> / <DocCode>setInterval()</DocCode>{" "}
            with string arguments
          </DocListItem>
          <DocListItem>
            <DocCode>document.write()</DocCode> - Can enable XSS attacks
          </DocListItem>
          <DocListItem>
            <DocCode>innerHTML</DocCode> - Can enable XSS attacks if not
            properly sanitized
          </DocListItem>
        </DocList>

        <DocH3>Secure DOM Manipulation</DocH3>

        <DocParagraph>
          When manipulating the DOM, use safe methods to prevent XSS attacks:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// Bad - vulnerable to XSS
element.innerHTML = userProvidedContent;

// Good - use textContent for text
element.textContent = userProvidedContent;

// Good - create elements safely
const newElement = document.createElement('div');
newElement.textContent = userProvidedContent;
element.appendChild(newElement);`}
            language="javascript"
          />
        </div>

        <DocH2 id="npm-security">npm Security</DocH2>

        <DocH3>Two-Factor Authentication</DocH3>

        <DocParagraph>
          Enable two-factor authentication (2FA) for your npm account to prevent
          unauthorized access:
        </DocParagraph>

        <DocList>
          <DocListItem>
            Log in to your npm account at{" "}
            <a
              href="https://www.npmjs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-packship-purple-lite hover:underline"
            >
              npmjs.com
            </a>
          </DocListItem>
          <DocListItem>Go to Account Settings</DocListItem>
          <DocListItem>Enable Two-Factor Authentication</DocListItem>
        </DocList>

        <DocParagraph>
          You can also enable 2FA from the command line:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`npm profile enable-2fa auth-only`}
            language="bash"
          />
        </div>

        <DocH3>npm Tokens</DocH3>

        <DocParagraph>
          Use npm tokens for CI/CD pipelines instead of your npm password:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`# Create a new token
npm token create

# List existing tokens
npm token list

# Revoke a token
npm token revoke <token_id>`}
            language="bash"
          />
        </div>

        <DocNote>
          Never commit npm tokens to your repository. Use environment variables
          or secrets management in your CI/CD system.
        </DocNote>

        <DocH3>Package Access Control</DocH3>

        <DocParagraph>
          For organization scoped packages, you can control who has access to
          publish:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`# Add a user as a maintainer
npm access grant read-write username @scope/package

# Remove a user
npm access revoke username @scope/package

# List package permissions
npm access ls-collaborators @scope/package`}
            language="bash"
          />
        </div>

        <DocH2 id="secure-development">Secure Development Practices</DocH2>

        <DocH3>Using HTTPS</DocH3>

        <DocParagraph>
          Always use HTTPS for external resources and API calls:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// Bad - insecure HTTP
fetch('http://api.example.com/data');

// Good - secure HTTPS
fetch('https://api.example.com/data');`}
            language="javascript"
          />
        </div>

        <DocH3>Content Security Policy</DocH3>

        <DocParagraph>
          If your package includes a web component, consider implementing a
          Content Security Policy (CSP) to prevent XSS attacks:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`// Example CSP header
{
  'Content-Security-Policy': "default-src 'self'; script-src 'self'; object-src 'none';"
}`}
            language="javascript"
          />
        </div>

        <DocH3>Secure Storage</DocH3>

        <DocParagraph>
          If your package needs to store sensitive data:
        </DocParagraph>

        <DocList>
          <DocListItem>
            Never store sensitive data in client-side code
          </DocListItem>
          <DocListItem>Use environment variables for configuration</DocListItem>
          <DocListItem>Consider using a secure storage solution</DocListItem>
          <DocListItem>Encrypt sensitive data at rest</DocListItem>
        </DocList>

        <DocH2 id="security-tools">Security Tools</DocH2>

        <DocH3>Static Analysis</DocH3>

        <DocParagraph>
          Use static analysis tools to identify potential security issues:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`# Install ESLint security plugin
npm install --save-dev eslint-plugin-security

# Add to your ESLint configuration
// .eslintrc.js
module.exports = {
  plugins: ['security'],
  extends: ['plugin:security/recommended']
};`}
            language="javascript"
          />
        </div>

        <DocH3>Snyk</DocH3>

        <DocParagraph>
          Snyk is a tool that helps you find and fix vulnerabilities in your
          dependencies:
        </DocParagraph>

        <div className="mb-4">
          <CopyCodeSnippet
            code={`# Install Snyk
npm install -g snyk

# Authenticate
snyk auth

# Test your project
snyk test

# Monitor your project
snyk monitor`}
            language="bash"
          />
        </div>

        <DocH3>GitHub Security Features</DocH3>

        <DocParagraph>
          If you host your code on GitHub, take advantage of its security
          features:
        </DocParagraph>

        <DocList>
          <DocListItem>
            Enable Dependabot alerts for vulnerability notifications
          </DocListItem>
          <DocListItem>
            Use Dependabot security updates to automatically fix vulnerabilities
          </DocListItem>
          <DocListItem>
            Enable code scanning with CodeQL to find security issues in your
            code
          </DocListItem>
          <DocListItem>
            Set up branch protection rules to prevent force pushes and require
            reviews
          </DocListItem>
        </DocList>

        <DocH2 id="security-checklist">Security Checklist</DocH2>

        <DocParagraph>
          Use this checklist to ensure your package follows security best
          practices:
        </DocParagraph>

        <DocList>
          <DocListItem>☐ Enable 2FA for your npm account</DocListItem>
          <DocListItem>
            ☐ Regularly audit dependencies with <DocCode>npm audit</DocCode>
          </DocListItem>
          <DocListItem>☐ Keep dependencies updated</DocListItem>
          <DocListItem>☐ Validate and sanitize all inputs</DocListItem>
          <DocListItem>
            ☐ Avoid dangerous functions like <DocCode>eval()</DocCode>
          </DocListItem>
          <DocListItem>☐ Use HTTPS for all external resources</DocListItem>
          <DocListItem>
            ☐ Implement proper error handling without exposing sensitive
            information
          </DocListItem>
          <DocListItem>
            ☐ Use static analysis tools to identify security issues
          </DocListItem>
          <DocListItem>☐ Follow the principle of least privilege</DocListItem>
          <DocListItem>
            ☐ Document security considerations for users of your package
          </DocListItem>
        </DocList>

        {/* Next Page Button */}
        <DocNavigation currentPath={pathname} />
      </div>
    </>
  );
}
