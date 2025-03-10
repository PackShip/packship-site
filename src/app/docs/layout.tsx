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
    return lastSegment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <MobileDocsSidebar />
        <DocsSidebar />
        <div className="md:ml-[250px]">
          <div className="max-w-[1200px] mx-auto px-6 pt-24 pb-16 flex">
            <main className="flex-1 max-w-[850px]">
              <div className="mb-6">
                <h1 className="text-3xl sm:text-4xl font-bold text-white dark:text-white light:text-gray-900">
                  {getCurrentPageTitle()}
                </h1>
              </div>
              <div className="prose prose-invert dark:prose-invert light:prose-gray max-w-none">
                {children}
              </div>
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
