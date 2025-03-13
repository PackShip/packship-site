"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import "@/styles/scrollbar.css";
import ScrollbarWrapper from "./ScrollbarWrapper";

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
      { name: "Version Flag", href: "/docs/cli-version" },
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

  // Scroll to active link when component mounts or pathname changes
  useEffect(() => {
    const activeLink = document.querySelector(".bg-packship-purple-lite\\/30");
    if (activeLink) {
      activeLink.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [pathname]);

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="hidden md:block w-[250px] h-full fixed left-0 top-[104px] bottom-0 border-r-2 border-white/15 dark:border-white/15 light:border-gray-300 bg-black/20 dark:bg-black/20 light:bg-gray-100 bg-opacity-90 backdrop-blur-sm bg-gradient-to-b from-black/25 to-black/15 shadow-lg shadow-black/10">
      <ScrollbarWrapper className="py-6 px-4">
        <ul className="space-y-4 pb-20">
          {sidebarItems.map((section) => (
            <li key={section.title} className="mb-4">
              <div
                className="flex items-center justify-between cursor-pointer text-white/90 dark:text-white/90 light:text-gray-800 hover:text-packship-purple-lite hover:bg-white/5 rounded-md px-2 transition-colors py-2 font-medium text-[15px] uppercase tracking-wide"
                onClick={() => toggleSection(section.title)}
              >
                <span>{section.title}</span>
                {section.isExpandable &&
                  (expandedSections[section.title] ? (
                    <FaChevronDown size={12} />
                  ) : (
                    <FaChevronRight size={12} />
                  ))}
              </div>
              {expandedSections[section.title] && (
                <ul className="ml-2 mt-1 space-y-1 border-l border-white/10 pl-2">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`block py-1.5 px-2 rounded-md transition-colors text-[14px] ${
                          pathname === item.href
                            ? "bg-packship-purple-lite/30 !text-white dark:!text-white light:!text-white font-medium"
                            : "text-white/70 dark:text-white/70 light:text-gray-600 hover:text-packship-purple-lite hover:bg-white/5"
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
      </ScrollbarWrapper>
    </div>
  );
}
