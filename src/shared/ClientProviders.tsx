"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@/context/ThemeContext";

interface ClientProvidersProps {
  children: ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
