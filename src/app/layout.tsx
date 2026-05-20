import type { Metadata, Viewport } from "next";
import "./globals.css";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ren-demo-public.vercel.app";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SEO Baseline Lab",
    url: BASE_URL,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SEO Baseline Lab",
    url: BASE_URL,
  },
];

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "SEO Baseline Lab",
    template: "%s | SEO Baseline Lab",
  },
  description:
    "A public demo site with intentionally unoptimized pages, designed as a neutral starting point for SEO and AI discoverability audit experiments.",
  openGraph: {
    type: "website",
    siteName: "SEO Baseline Lab",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
