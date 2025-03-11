"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown, FaChevronRight, FaBars, FaTimes } from "react-icons/fa";
import "@/styles/scrollbar.css";
import ScrollbarWrapper from "./ScrollbarWrapper";

// Define the sidebar structure - same as DocsSidebar
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

export default function MobileDocsSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >(
    // Initialize with all sections expanded
    sidebarItems.reduce((acc, item) => {
      acc[item.title] = true;
      return acc;
    }, {} as Record<string, boolean>)
  );

  // Scroll to active link when sidebar opens or pathname changes
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        const activeLink = document.querySelector(
          ".bg-packship-purple-lite\\/30"
        );
        if (activeLink) {
          activeLink.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    }
  }, [isOpen, pathname]);

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleSidebar}
        className="fixed top-20 left-4 z-10 bg-packship-purple-lite/20 p-2 rounded-md"
        aria-label="Toggle sidebar"
      >
        <FaBars size={24} className="text-packship-purple-lite" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={closeSidebar}>
          <div
            className="relative w-full max-w-[300px] bg-black/30 dark:bg-black/30 light:bg-gray-100 h-full bg-opacity-90 backdrop-blur-sm bg-gradient-to-b from-black/35 to-black/25"
            style={{ height: "100vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeSidebar}
              className="absolute top-4 right-4 text-packship-purple-lite"
              aria-label="Close sidebar"
            >
              <FaTimes size={24} />
            </button>

            <ScrollbarWrapper style={{ height: "100vh", paddingTop: "60px" }}>
              <nav>
                <ul className="space-y-2 pb-20">
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
                                    ? "bg-packship-purple-lite/30 text-packship-purple-lite font-medium"
                                    : "text-white/70 dark:text-white/70 light:text-gray-600 hover:text-packship-purple-lite hover:bg-white/5"
                                }`}
                                onClick={closeSidebar}
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
              </nav>
            </ScrollbarWrapper>
          </div>
        </div>
      )}
    </div>
  );
}
