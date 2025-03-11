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
    <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm p-6 rounded-xl border border-white/10 h-full flex flex-col">
      <h3 className="text-xl font-semibold mb-3 text-white h-14 flex items-center">
        {title}
      </h3>
      <div className="flex items-start">
        <span className="text-packship-purple-lite font-bold whitespace-nowrap w-16">
          {hours}
        </span>
        <span className="text-white/70 ml-2">{description}</span>
      </div>
      {creatorExperience && (
        <div className="mt-auto pt-3 border-t border-white/10">
          <div className="flex items-start">
            <span className="text-packship-purple-lite text-sm font-semibold">
              Creator's experience:
            </span>
          </div>
          <div className="mt-1">
            <span className="text-white font-bold">{creatorExperience}</span>
          </div>
        </div>
      )}
    </div>
  );
}
