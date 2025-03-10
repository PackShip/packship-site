"use client";

import React from "react";

export default function PackageBox() {
  return (
    <div className="relative w-72 h-72">
      <div className="package-box">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="package-svg"
        >
          {/* Box base - all faces with cleaner look */}
          <g>
            {/* Bottom face */}
            <path
              d="M30 80L30 150L100 190L100 120L30 80Z"
              stroke="#DBC2FF"
              strokeWidth="1.5"
              strokeLinejoin="round"
              fill="rgba(63, 61, 86, 0.15)"
            />

            {/* Right face */}
            <path
              d="M100 120L100 190L170 150L170 80L100 120Z"
              stroke="#DBC2FF"
              strokeWidth="1.5"
              strokeLinejoin="round"
              fill="rgba(63, 61, 86, 0.1)"
            />

            {/* Top face */}
            <path
              d="M30 80L100 40L170 80L100 120L30 80Z"
              stroke="#DBC2FF"
              strokeWidth="1.5"
              strokeLinejoin="round"
              fill="rgba(63, 61, 86, 0.2)"
            />

            {/* Center line on top face */}
            <path
              d="M100 40L100 120"
              stroke="#DBC2FF"
              strokeWidth="1"
              strokeLinecap="round"
            />

            {/* Horizontal line on top face */}
            <path
              d="M40 80L160 80"
              stroke="#DBC2FF"
              strokeWidth="1"
              strokeLinecap="round"
            />

            {/* Label on front face with better perspective */}
            <g transform="translate(0, 0)">
              <rect
                x="65"
                y="135"
                width="40"
                height="25"
                transform="skewX(30) skewY(-5)"
                fill="rgba(63, 61, 86, 0.3)"
                stroke="#DBC2FF"
                strokeWidth="0.75"
              />
              <text
                x="85"
                y="150"
                fill="#DBC2FF"
                fontSize="9"
                textAnchor="middle"
                fontFamily="monospace"
                transform="skewX(30) skewY(-5)"
              >
                packship
              </text>
            </g>
          </g>
        </svg>
      </div>

      {/* Enhanced floating animation styles */}
      <style jsx>{`
        .package-box {
          position: relative;
          width: 100%;
          height: 100%;
          animation: float 8s ease-in-out infinite;
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .package-svg {
          filter: drop-shadow(0 0 20px rgba(219, 194, 255, 0.4));
        }

        @keyframes float {
          0% {
            transform: translateY(0px) rotate3d(0.1, 0.5, 0.2, 0deg);
          }
          25% {
            transform: translateY(-10px) rotate3d(0.1, 0.5, 0.2, 2deg);
          }
          50% {
            transform: translateY(-15px) rotate3d(0.1, 0.5, 0.2, 4deg);
          }
          75% {
            transform: translateY(-7px) rotate3d(0.1, 0.5, 0.2, 2deg);
          }
          100% {
            transform: translateY(0px) rotate3d(0.1, 0.5, 0.2, 0deg);
          }
        }
      `}</style>
    </div>
  );
}
