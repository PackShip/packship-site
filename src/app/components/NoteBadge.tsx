import React from "react";

interface NoteBadgeProps {
  className?: string;
  children: React.ReactNode;
}

const NoteBadge: React.FC<NoteBadgeProps> = ({ className = "", children }) => {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-700 dark:text-packship-yellow border border-amber-500/50 ${className}`}
    >
      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-amber-600 dark:bg-amber-500"></span>
      {children}
    </span>
  );
};

export default NoteBadge;
