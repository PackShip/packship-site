"use client";

import { useTheme } from "@/context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="dark:text-white/80 light:text-gray-700 hover:text-packship-purple-lite transition-colors p-2 rounded-md"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <FaSun size={18} className="text-yellow-300" />
      ) : (
        <FaMoon size={18} className="text-packship-purple-lite" />
      )}
    </button>
  );
}
