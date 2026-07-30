import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.brandName} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: ["thrift", "secondhand fashion", "sustainable fashion", siteConfig.brandName],
  openGraph: {
    title: siteConfig.brandName,
    description: siteConfig.description,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
