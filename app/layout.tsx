import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const navigation = [
  { href: "/#about", label: "About" },
  { href: "/#academics", label: "Academics" },
  { href: "/#admissions", label: "Admissions" },
  { href: "/#faculty", label: "Faculty" },
  { href: "/login", label: "Login" },
];

export const metadata: Metadata = {
  title: "Hawthorne Dominion House Academy",
  description:
    "Hawthorne Dominion House Academy is a bastion of order, excellence, and honor with a modern academic presence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.className} bg-parchment text-ink antialiased`}>
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-white/40 bg-ink-deep/95 text-white backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
              <Link
                href="/"
                className="flex items-center gap-3 text-lg font-semibold uppercase tracking-[0.3em] text-white"
              >
                <span className="hidden sm:inline">Hawthorne Dominion House Academy</span>
                <span className="sm:hidden">HDH Academy</span>
              </Link>
              <nav className="flex items-center gap-6 text-sm text-white/80">
                {navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="transition-colors hover:text-white"
                    prefetch={false}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-white/40 bg-ink-deep/95 py-6 text-center text-xs uppercase tracking-[0.3em] text-white/80">
            © Hawthorne Dominion House Academy. All Rights Reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
