import React from "react";

interface ComingSoonBadgeProps {
  className?: string;
}

const ComingSoonBadge: React.FC<ComingSoonBadgeProps> = ({
  className = "",
}) => {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-packship-purple-lite/20 text-packship-purple-lite dark:text-packship-purple-lite light:text-packship-purple ${className}`}
    >
      <span className="mr-1 h-1.5 w-1.5 rounded-full bg-packship-purple-lite"></span>
      Coming Soon
    </span>
  );
};

export default ComingSoonBadge;
