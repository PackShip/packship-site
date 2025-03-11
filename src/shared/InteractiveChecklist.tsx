"use client";

import React, { useState, useEffect, useRef } from "react";

export interface ChecklistItem {
  id: string;
  text: React.ReactNode;
}

interface InteractiveChecklistProps {
  items: ChecklistItem[];
  storageKey: string;
}

const InteractiveChecklist: React.FC<InteractiveChecklistProps> = ({
  items,
  storageKey,
}) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [progress, setProgress] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const checkSoundRef = useRef<HTMLAudioElement | null>(null);
  const completeSoundRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio elements
  useEffect(() => {
    if (typeof window !== "undefined") {
      checkSoundRef.current = new Audio("/sounds/check.mp3");
      completeSoundRef.current = new Audio("/sounds/complete.mp3");
    }
  }, []);

  // Load checked items from localStorage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedItems = localStorage.getItem(`checklist-${storageKey}`);
      if (savedItems) {
        try {
          const parsedItems = JSON.parse(savedItems);
          setCheckedItems(parsedItems);

          // Calculate initial progress
          const checkedCount =
            Object.values(parsedItems).filter(Boolean).length;
          setProgress(Math.round((checkedCount / items.length) * 100));
        } catch (e) {
          console.error("Failed to parse saved checklist items", e);
        }
      }
    }
  }, [storageKey, items.length]);

  // Calculate progress whenever checkedItems changes
  useEffect(() => {
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    const newProgress = Math.round((checkedCount / items.length) * 100);
    const previousProgress = progress;
    setProgress(newProgress);

    // Show confetti when all items are checked
    if (
      newProgress === 100 &&
      previousProgress !== 100 &&
      Object.keys(checkedItems).length > 0
    ) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);

      // Play completion sound
      if (completeSoundRef.current) {
        completeSoundRef.current.volume = 0.5;
        completeSoundRef.current
          .play()
          .catch((e) => console.log("Error playing sound:", e));
      }
    }
  }, [checkedItems, items.length, progress]);

  // Save checked items to localStorage when they change
  useEffect(() => {
    if (typeof window !== "undefined" && Object.keys(checkedItems).length > 0) {
      localStorage.setItem(
        `checklist-${storageKey}`,
        JSON.stringify(checkedItems)
      );
    }
  }, [checkedItems, storageKey]);

  const toggleItem = (id: string) => {
    const newValue = !checkedItems[id];

    // Play check sound
    if (checkSoundRef.current && newValue) {
      checkSoundRef.current.volume = 0.3;
      checkSoundRef.current.currentTime = 0;
      checkSoundRef.current
        .play()
        .catch((e) => console.log("Error playing sound:", e));
    }

    setCheckedItems((prev) => ({
      ...prev,
      [id]: newValue,
    }));
  };

  const resetChecklist = () => {
    setCheckedItems({});
    localStorage.removeItem(`checklist-${storageKey}`);
    setProgress(0);
    setShowConfetti(false);
  };

  return (
    <div className="bg-black/20 dark:bg-black/20 light:bg-gray-100 rounded-lg p-6 border border-white/10 dark:border-white/10 light:border-gray-300 shadow-lg relative overflow-hidden">
      {showConfetti && (
        <div className="confetti-container absolute inset-0 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10px`,
                backgroundColor: [
                  "#DBC2FF", // packship-purple-lite
                  "#EBD3F8", // packship-purple-semilite
                  "#FFBE1A", // packship-yellow
                  "#CB3837", // packship-red
                  "#3F3D56", // packship-purple
                ][Math.floor(Math.random() * 5)],
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                opacity: Math.random(),
                animation: `confetti ${Math.random() * 3 + 2}s linear forwards`,
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-white dark:text-white light:text-gray-900">
          Security Checklist
        </h3>
        <div className="flex items-center gap-4">
          <div className="text-sm text-white/70 dark:text-white/70 light:text-gray-600">
            Progress: {progress}%
          </div>
          <div className="w-24 h-2 bg-black/30 dark:bg-black/30 light:bg-gray-300 rounded-full overflow-hidden">
            <div
              className={`h-full bg-packship-purple-lite transition-all duration-500 ease-out ${
                progress === 100 ? "animate-pulse" : ""
              }`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <button
            onClick={resetChecklist}
            className="text-xs text-white/60 hover:text-white/90 dark:text-white/60 dark:hover:text-white/90 light:text-gray-500 light:hover:text-gray-700 transition-colors relative group"
            aria-label="Reset checklist"
          >
            Reset
            <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 dark:bg-black/80 light:bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              Clear all checked items
            </span>
          </button>
        </div>
      </div>

      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-start gap-3 p-2 rounded-md hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-gray-100 transition-colors cursor-pointer"
            onClick={() => toggleItem(item.id)}
          >
            <div
              className={`flex-shrink-0 w-5 h-5 mt-0.5 border rounded transition-all duration-300 ${
                checkedItems[item.id]
                  ? "bg-packship-purple-lite border-packship-purple-lite scale-110"
                  : "border-white/30 dark:border-white/30 light:border-gray-400 hover:border-packship-purple-lite/70"
              }`}
            >
              {checkedItems[item.id] && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white dark:text-white light:text-white animate-[checkmark_0.2s_ease-in-out]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <span
              className={`text-sm transition-all duration-300 ${
                checkedItems[item.id]
                  ? "text-white/60 dark:text-white/60 light:text-gray-500 line-through"
                  : "text-white dark:text-white light:text-gray-900"
              }`}
            >
              {item.text}
            </span>
          </li>
        ))}
      </ul>

      {progress === 100 && (
        <div className="mt-4 p-4 bg-packship-purple-lite/20 border border-packship-purple-lite/30 rounded text-sm text-white dark:text-white light:text-gray-900 animate-[fadeIn_0.5s_ease-in-out]">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎉</span>
            <div>
              <p className="font-medium">Congratulations!</p>
              <p>
                Your package now follows all security best practices. Your users
                will thank you for prioritizing security!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveChecklist;
