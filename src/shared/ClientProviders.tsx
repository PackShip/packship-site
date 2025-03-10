"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { ReactNode } from "react";
import { ThemeProvider } from "@/context/ThemeContext";

interface ClientProvidersProps {
  children: ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
}
