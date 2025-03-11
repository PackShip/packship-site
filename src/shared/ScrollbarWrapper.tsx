import React, { ReactNode, useState, useEffect, useRef } from "react";
import "@/styles/scrollbar.css";

interface ScrollbarWrapperProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function ScrollbarWrapper({
  children,
  className = "",
  style = {},
}: ScrollbarWrapperProps) {
  const [isSafari, setIsSafari] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  // Detect Safari browser on client side to avoid hydration issues
  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(userAgent);
    setIsSafari(isSafariBrowser);
  }, []);

  // Handle scrollbar thumb position for Safari
  useEffect(() => {
    if (!isSafari || !scrollRef.current || !thumbRef.current) return;

    const updateThumbPosition = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current!;
      const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
      const thumbHeight = Math.max(
        30,
        (clientHeight / scrollHeight) * clientHeight
      );
      const thumbTop = scrollPercentage * (clientHeight - thumbHeight);

      if (thumbRef.current) {
        thumbRef.current.style.height = `${thumbHeight}px`;
        thumbRef.current.style.top = `${thumbTop}px`;
      }
    };

    const scrollElement = scrollRef.current;
    scrollElement.addEventListener("scroll", updateThumbPosition);
    updateThumbPosition(); // Initial position

    return () => {
      scrollElement.removeEventListener("scroll", updateThumbPosition);
    };
  }, [isSafari]);

  return (
    <div className={`${isSafari ? "safari-scrollbar" : ""}`}>
      <div
        ref={scrollRef}
        className={`custom-scrollbar ${className}`}
        style={{
          ...style,
          height: style.height || "calc(100vh - 72px)",
        }}
      >
        {children}
      </div>
      {isSafari && <div ref={thumbRef} className="safari-scrollbar-thumb" />}
    </div>
  );
}
