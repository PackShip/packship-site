"use client";

import React, { useState, useEffect } from "react";
import { FaExclamationTriangle } from "react-icons/fa";

interface LightModeWarningModalProps {
  isOpen: boolean;
  onClose: (dontShowAgain?: boolean) => void;
  onStayInDarkMode: () => void;
}

export default function LightModeWarningModal({
  isOpen,
  onClose,
  onStayInDarkMode,
}: LightModeWarningModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Reset the checkbox when the modal opens
  useEffect(() => {
    if (isOpen) {
      setDontShowAgain(false);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  const handleClose = () => {
    // Pass the dontShowAgain value to the parent component
    onClose(dontShowAgain);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
        isOpen ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
    >
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      ></div>
      <div className="relative dark:bg-gray-900 light:bg-white border dark:border-packship-purple-lite/30 light:border-packship-purple/30 rounded-lg shadow-xl max-w-md w-full p-6 transform transition-all duration-300 scale-100">
        <div className="flex items-center mb-4 text-yellow-500">
          <FaExclamationTriangle size={24} className="mr-3" />
          <h3 className="text-xl font-semibold dark:text-white light:text-gray-800">
            Light Mode Warning
          </h3>
        </div>
        <div className="mb-6">
          <p className="dark:text-white/90 light:text-gray-700 mb-3">
            Light mode is not yet fully optimized and some details may be
            difficult to see due to color blending issues.
          </p>
          <p className="dark:text-white/90 light:text-gray-700">
            For the best experience, we recommend using Dark mode until Light
            mode is fully optimized.
          </p>
        </div>
        <div className="mb-4">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-packship-purple-lite rounded border-gray-300 focus:ring-packship-purple-lite"
              checked={dontShowAgain}
              onChange={(e) => setDontShowAgain(e.target.checked)}
            />
            <span className="ml-2 text-sm dark:text-white/80 light:text-gray-600">
              Don&apos;t show this warning again
            </span>
          </label>
        </div>
        <div className="flex flex-col md:flex-row gap-2 justify-between">
          <button
            onClick={handleClose}
            className="px-4 py-2 dark:bg-gray-700 dark:hover:bg-gray-600 light:bg-gray-200 light:hover:bg-gray-300 dark:text-white light:text-gray-800 rounded-md transition-colors"
          >
            Continue to Light Mode
          </button>
          <button
            onClick={onStayInDarkMode}
            className="px-4 py-2 bg-purple-500 hover:bg-purple-400 text-white rounded-md transition-colors"
          >
            Stay in Dark Mode
          </button>
        </div>
      </div>
    </div>
  );
}
