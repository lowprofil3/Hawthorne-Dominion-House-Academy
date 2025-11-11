import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hawthorne Dominion House Academy",
  description:
    "Hawthorne Dominion House Academy is a modern learning environment for curious minds across the dominion.",
  keywords: [
    "Hawthorne Dominion House Academy",
    "education",
    "boarding school",
    "learning community",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-surface text-ink">
        {children}
      </body>
    </html>
  );
}
