import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "greenArea — Grow at your own pace",
  description: "Small steps make a greener, more balanced everyday life.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
