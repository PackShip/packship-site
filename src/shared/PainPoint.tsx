import React from "react";

interface PainPointProps {
  title: string;
  hours: string;
  description: string;
  creatorExperience?: string;
}

export default function PainPoint({
  title,
  hours,
  description,
  creatorExperience,
}: PainPointProps) {
  return (
    <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm p-5 sm:p-6 rounded-xl border border-white/10 h-full flex flex-col">
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white min-h-[3rem] sm:h-14 flex items-center">
        {title}
      </h3>
      <div className="mb-2 flex flex-col items-start gap-1 sm:gap-2">
        <span className="text-packship-purple-lite font-bold whitespace-nowrap">
          {hours}
        </span>
        <span className="text-white/70 text-sm sm:text-base">
          {description}
        </span>
      </div>
      {creatorExperience && (
        <div className="mt-auto pt-2 sm:pt-3 border-t border-white/10">
          <div className="flex items-start">
            <span className="text-packship-purple-lite text-xs sm:text-sm font-semibold">
              Creator&apos;s experience:
            </span>
          </div>
          <div className="mt-1">
            <span className="text-white font-bold text-sm sm:text-base">
              {creatorExperience}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
