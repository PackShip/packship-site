"use client";

import React from "react";
import Navigation from "@/shared/Navigation";
import DocsFooter from "@/shared/DocsFooter";
import DocsSidebar from "@/shared/DocsSidebar";
import MobileDocsSidebar from "@/shared/MobileDocsSidebar";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Extract the current page title from the pathname
  const getCurrentPageTitle = () => {
    const path = pathname.split("/").filter(Boolean);
    if (path.length === 1 && path[0] === "docs") {
      return "What is PackShip?";
    }

    const lastSegment = path[path.length - 1];

    // Special handling for CLI pages
    if (lastSegment.startsWith("cli-")) {
      const parts = lastSegment.split("-");
      // Capitalize "CLI" properly
      parts[0] = "CLI";
      // Capitalize the rest of the words
      for (let i = 1; i < parts.length; i++) {
        parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
      }
      return parts.join(" ");
    }

    // Regular handling for non-CLI pages
    return lastSegment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen flex">
        <MobileDocsSidebar />
        <DocsSidebar />
        <div className="w-full md:pl-[250px]">
          <div className="w-full max-w-[1000px] mx-auto md:mx-0 px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 md:pt-40 pb-16">
            <main className="w-full">
              <div className="w-full mb-4 sm:mb-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-packship-purple-lite dark:text-packship-purple-lite light:text-packship-purple">
                  {getCurrentPageTitle()}
                </h1>
              </div>
              <div className="w-full prose-override">{children}</div>
            </main>
          </div>
        </div>
      </div>
      <DocsFooter />

      {/* Toast notifications for docs section */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "rgba(20, 20, 20, 0.9)",
            color: "#fff",
            border: "1px solid rgba(138, 75, 175, 0.5)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          },
        }}
      />
    </>
  );
}
