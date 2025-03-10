"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { ReactNode } from "react";

interface ClientProvidersProps {
  children: ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return <Provider store={store}>{children}</Provider>;
}
