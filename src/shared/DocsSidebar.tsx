"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

// Define the sidebar structure
const sidebarItems = [
  {
    title: "Quick Start",
    isExpandable: true,
    items: [
      { name: "What is PackShip?", href: "/docs" },
      { name: "Prerequisites", href: "/docs/prerequisites" },
      { name: "Create a Project", href: "/docs/create-project" },
    ],
  },
  {
    title: "Frontend Configuration",
    isExpandable: true,
    items: [
      { name: "Setup", href: "/docs/frontend-setup" },
      { name: "Webpack", href: "/docs/webpack" },
      { name: "Babel", href: "/docs/babel" },
    ],
  },
  {
    title: "Upgrade & Migrate",
    isExpandable: true,
    items: [
      { name: "Version Updates", href: "/docs/version-updates" },
      { name: "Migration Guide", href: "/docs/migration" },
    ],
  },
  {
    title: "Core Concepts",
    isExpandable: true,
    items: [
      { name: "Package Structure", href: "/docs/package-structure" },
      { name: "Dependencies", href: "/docs/dependencies" },
      { name: "Publishing", href: "/docs/publishing" },
    ],
  },
  {
    title: "Security",
    isExpandable: true,
    items: [
      { name: "Best Practices", href: "/docs/security-best-practices" },
      { name: "NPM Authentication", href: "/docs/npm-auth" },
    ],
  },
  {
    title: "CLI Commands",
    isExpandable: true,
    items: [
      { name: "init", href: "/docs/cli-init" },
      { name: "publish", href: "/docs/cli-publish" },
      { name: "Other Commands", href: "/docs/cli-other" },
    ],
  },
];

export default function DocsSidebar() {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >(
    // Initialize with all sections expanded
    sidebarItems.reduce((acc, item) => {
      acc[item.title] = true;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="hidden md:block w-[250px] h-full fixed left-0 top-[72px] bottom-0 border-r border-white/10 dark:border-white/10 light:border-gray-200 bg-black/5 dark:bg-black/5 light:bg-white/5">
      <div className="h-full overflow-y-auto py-6 px-4">
        <ul className="space-y-1">
          {sidebarItems.map((section) => (
            <li key={section.title} className="mb-4">
              <div
                className="flex items-center justify-between cursor-pointer text-white/80 dark:text-white/80 light:text-gray-700 hover:text-packship-purple-lite transition-colors py-1"
                onClick={() => toggleSection(section.title)}
              >
                <span className="font-medium">{section.title}</span>
                {section.isExpandable &&
                  (expandedSections[section.title] ? (
                    <FaChevronDown size={12} />
                  ) : (
                    <FaChevronRight size={12} />
                  ))}
              </div>
              {expandedSections[section.title] && (
                <ul className="ml-4 mt-1 space-y-1">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`block py-1 px-2 rounded-md transition-colors ${
                          pathname === item.href
                            ? "bg-packship-purple-lite/20 text-packship-purple-lite"
                            : "text-white/70 dark:text-white/70 light:text-gray-600 hover:text-packship-purple-lite"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
