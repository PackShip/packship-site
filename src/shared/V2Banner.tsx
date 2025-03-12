"use client";

import React from "react";
import Link from "next/link";

export default function V2Banner() {
  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-packship-purple-lite text-black py-2 text-center font-medium z-40">
      <span>
        PackShip v2 is now available! 🚀{" "}
        <Link
          href="/blog/packship-v2-open-source"
          className="underline hover:text-gray-800 transition-colors"
        >
          Learn more
        </Link>
      </span>
    </div>
  );
}
