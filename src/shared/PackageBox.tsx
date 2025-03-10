export default function PackageBox() {
  return (
    <div className="relative w-64 h-64">
      <div className="package-box">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="package-svg"
        >
          {/* Box base - bottom face */}
          <path
            d="M20 80L20 140L100 180L100 120L20 80Z"
            stroke="#DBC2FF"
            strokeWidth="2"
            strokeLinejoin="round"
            fill="rgba(63, 61, 86, 0.2)"
          />

          {/* Box base - right face */}
          <path
            d="M100 120L100 180L180 140L180 80L100 120Z"
            stroke="#DBC2FF"
            strokeWidth="2"
            strokeLinejoin="round"
            fill="rgba(63, 61, 86, 0.1)"
          />

          {/* Box base - top face */}
          <path
            d="M20 80L100 40L180 80L100 120L20 80Z"
            stroke="#DBC2FF"
            strokeWidth="2"
            strokeLinejoin="round"
            fill="rgba(63, 61, 86, 0.3)"
          />

          {/* Lid - left side */}
          <path
            d="M20 80L20 60L100 20L100 40L20 80Z"
            stroke="#DBC2FF"
            strokeWidth="2"
            strokeLinejoin="round"
            fill="rgba(219, 194, 255, 0.1)"
          />

          {/* Lid - right side */}
          <path
            d="M100 40L100 20L180 60L180 80L100 40Z"
            stroke="#DBC2FF"
            strokeWidth="2"
            strokeLinejoin="round"
            fill="rgba(219, 194, 255, 0.2)"
          />

          {/* Lid - top face */}
          <path
            d="M20 60L100 20L180 60L100 100L20 60Z"
            stroke="#DBC2FF"
            strokeWidth="2"
            strokeLinejoin="round"
            fill="rgba(219, 194, 255, 0.15)"
            opacity="0.8"
          />

          {/* Tape line on top of box */}
          <path
            d="M100 20L100 100"
            stroke="#DBC2FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Tape line across the box */}
          <path
            d="M60 70L140 70"
            stroke="#DBC2FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Package label */}
          <text
            x="100"
            y="130"
            fill="#DBC2FF"
            fontSize="12"
            textAnchor="middle"
            fontFamily="monospace"
          >
            packship
          </text>
        </svg>
      </div>
    </div>
  );
}
