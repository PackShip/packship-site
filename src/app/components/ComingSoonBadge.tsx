import React from "react";

interface ComingSoonBadgeProps {
  className?: string;
}

const ComingSoonBadge: React.FC<ComingSoonBadgeProps> = ({
  className = "",
}) => {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-800 text-white ${className}`}
    >
      <span className="mr-1 h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"></span>
      Coming Soon
    </span>
  );
};

export default ComingSoonBadge;
