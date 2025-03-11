import React from "react";

interface DocHeadingProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function DocH1({ children, id, className = "" }: DocHeadingProps) {
  return (
    <h1
      id={id}
      className={`text-3xl sm:text-4xl font-bold text-white mb-6 ${className}`}
    >
      {children}
    </h1>
  );
}

export function DocH2({ children, id, className = "" }: DocHeadingProps) {
  return (
    <h2
      id={id}
      className={`text-2xl sm:text-3xl font-bold text-packship-purple-semilite mt-10 mb-4 ${className}`}
    >
      {children}
    </h2>
  );
}

export function DocH3({ children, id, className = "" }: DocHeadingProps) {
  return (
    <h3
      id={id}
      className={`text-xl sm:text-2xl font-semibold text-packship-purple-lite mt-8 mb-3 ${className}`}
    >
      {children}
    </h3>
  );
}

export function DocH4({ children, id, className = "" }: DocHeadingProps) {
  return (
    <h4
      id={id}
      className={`text-lg font-bold text-white/90 mt-6 mb-2 ${className}`}
    >
      {children}
    </h4>
  );
}

interface DocTextProps {
  children: React.ReactNode;
  className?: string;
}

export function DocParagraph({ children, className = "" }: DocTextProps) {
  return (
    <p
      className={`text-white/80 dark:text-white/80 light:text-gray-700 mb-4 leading-relaxed ${className}`}
    >
      {children}
    </p>
  );
}

export function DocCode({ children, className = "" }: DocTextProps) {
  return (
    <code
      className={`bg-black/30 px-1.5 py-0.5 rounded text-packship-purple-lite font-mono ${className}`}
    >
      {children}
    </code>
  );
}

export function DocNote({ children, className = "" }: DocTextProps) {
  return (
    <div
      className={`bg-packship-purple/70 dark:bg-packship-purple-lite/10 border-l-4 border-purple-500 dark:border-packship-purple-lite p-4 rounded-md my-6 shadow-sm ${className}`}
    >
      <p
        className="!text-white font-semibold leading-relaxed"
        style={{ color: "white" }}
      >
        {children}
      </p>
    </div>
  );
}

export function DocList({ children, className = "" }: DocTextProps) {
  return (
    <ul
      className={`list-disc pl-6 mb-4 space-y-2 text-white/80 dark:text-white/80 light:text-gray-700 ${className}`}
    >
      {children}
    </ul>
  );
}

export function DocListItem({ children, className = "" }: DocTextProps) {
  return <li className={`leading-relaxed ${className}`}>{children}</li>;
}
