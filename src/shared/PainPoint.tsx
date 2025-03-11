import React from "react";

interface PainPointProps {
  title: string;
  hours: string;
  description: string;
}

export default function PainPoint({
  title,
  hours,
  description,
}: PainPointProps) {
  return (
    <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm p-6 rounded-xl border border-white/10 h-full flex flex-col">
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <div className="flex items-center mt-2">
        <span className="text-packship-purple-lite font-bold">{hours}</span>
        <span className="text-white/70 ml-2">{description}</span>
      </div>
    </div>
  );
}
