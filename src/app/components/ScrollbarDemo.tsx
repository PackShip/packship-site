import React from "react";
import ScrollbarWrapper from "@/shared/ScrollbarWrapper";

export default function ScrollbarDemo() {
  return (
    <div className="max-w-md mx-auto my-8 p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Custom Scrollbar Demo</h2>

      <div className="h-64 border rounded-lg overflow-hidden">
        <ScrollbarWrapper style={{ height: "100%" }}>
          <div className="p-4">
            <h3 className="font-semibold mb-2">Cross-Browser Scrollbar</h3>
            <p className="mb-4">
              This scrollbar works on all browsers, including Safari!
            </p>

            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="p-2 mb-2 bg-gray-100 dark:bg-gray-800 rounded"
              >
                Scrollable content item #{i + 1}
              </div>
            ))}
          </div>
        </ScrollbarWrapper>
      </div>
    </div>
  );
}
