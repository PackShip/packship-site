import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Metadata } from "next";
import ClientProviders from "@/shared/ClientProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Packship - Open Source NPM Package Management",
  description:
    "Simplify your NPM package releases with Packship, an open-source CLI tool for efficient package development and publishing.",
  keywords:
    "npm, package, management, open source, cli, javascript, typescript, development",
  openGraph: {
    title: "Packship - Open Source NPM Package Management",
    description:
      "Simplify your NPM package releases with Packship, an open-source CLI tool for efficient package development and publishing.",
    url: "https://packship.dev",
    siteName: "Packship",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Packship - Open Source NPM Package Management",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ClientProviders>{children}</ClientProviders>
        <Script
          id="shapo-embed-js"
          src="https://cdn.shapo.io/js/embed.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
