import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/scrollbar.css";
import Script from "next/script";
import { Metadata } from "next";
import ClientProviders from "@/shared/ClientProviders";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://packship.dev"),
  title: "PackShip - Open Source NPM Package Builder",
  description:
    "Simplify your NPM package releases with PackShip, an open-source CLI tool for efficient package development and publishing.",
  keywords:
    "npm, package, management, open source, cli, javascript, typescript, development",
  openGraph: {
    title: "PackShip - Open Source NPM Package Builder",
    description:
      "Simplify your NPM package releases with PackShip, an open-source CLI tool for efficient package development and publishing.",
    url: "https://packship.dev",
    siteName: "PackShip",
    images: [
      {
        url: "/letter-logo.png",
        width: 1200,
        height: 630,
        alt: "PackShip - Open Source NPM Package Builder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PackShip - Open Source NPM Package Builder",
    description:
      "Simplify your NPM package releases with PackShip, an open-source CLI tool for efficient package development and publishing.",
    images: ["/letter-logo.png"],
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
        <meta name="impact-site-verification" content="fd85fd65-7c0e-47c2-8379-d72fb8a896d8" />
      </head>
      <body className={`${inter.className} relative`}>
        {/* Grid background overlay - spans the entire page including behind nav */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:44px_44px]"></div>

        <ClientProviders>{children}</ClientProviders>

        {/* Toast notifications */}
        <Toaster position="bottom-right" />

        <Script
          id="shapo-embed-js"
          src="https://cdn.shapo.io/js/embed.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
