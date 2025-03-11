"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import LightModeWarningModal from "@/shared/LightModeWarningModal";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [showLightModeWarning, setShowLightModeWarning] = useState(false);
  const [pendingThemeChange, setPendingThemeChange] = useState<Theme | null>(
    null
  );
  const [hasAcknowledgedWarning, setHasAcknowledgedWarning] = useState(false);

  // Initialize theme and warning acknowledgment from localStorage if available
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const warningAcknowledged =
      localStorage.getItem("lightModeWarningAcknowledged") === "true";

    if (savedTheme) {
      setTheme(savedTheme);
    }

    if (warningAcknowledged) {
      setHasAcknowledgedWarning(true);
    }
  }, []);

  // Update document with theme class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "dark") {
      // If switching to light mode, show warning first (unless already acknowledged)
      if (!hasAcknowledgedWarning) {
        setShowLightModeWarning(true);
        setPendingThemeChange("light");
      } else {
        // User has already acknowledged the warning, switch directly
        setTheme("light");
      }
    } else {
      // If switching to dark mode, no warning needed
      setTheme("dark");
    }
  };

  const handleCloseWarning = (dontShowAgain = false) => {
    setShowLightModeWarning(false);
    // Apply the pending theme change if user confirmed
    if (pendingThemeChange) {
      setTheme(pendingThemeChange);
      setPendingThemeChange(null);

      // Remember that user has acknowledged the warning if they checked the box
      if (dontShowAgain) {
        setHasAcknowledgedWarning(true);
        localStorage.setItem("lightModeWarningAcknowledged", "true");
      }
    }
  };

  const handleStayInDarkMode = () => {
    setShowLightModeWarning(false);
    setPendingThemeChange(null);
    // Ensure we're in dark mode
    setTheme("dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      <LightModeWarningModal
        isOpen={showLightModeWarning}
        onClose={handleCloseWarning}
        onStayInDarkMode={handleStayInDarkMode}
      />
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
