import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "All For One",
  description: "All For One - NextJS rebuild",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
