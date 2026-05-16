import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ren Demo Public",
  description: "A compact Next.js demo application for image-agent GitHub learning tests."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
