"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          {children}
        </Provider>
        <Script
          id="shapo-embed-js"
          src="https://cdn.shapo.io/js/embed.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}