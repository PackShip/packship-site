"use client";

import React from "react";

interface ChecklistCodeProps {
  children: React.ReactNode;
  className?: string;
}

export default function ChecklistCode({
  children,
  className = "",
}: ChecklistCodeProps) {
  return (
    <code
      className={`inline-block bg-black/30 dark:bg-black/30 light:bg-gray-200 px-1.5 py-0.5 rounded text-packship-purple-lite dark:text-packship-purple-lite light:text-purple-600 font-mono checklist-code ${className}`}
    >
      {children}
    </code>
  );
}
