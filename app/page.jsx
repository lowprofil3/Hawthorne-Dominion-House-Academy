import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-950 px-6 py-16 text-center text-slate-100">
      <h1 className="text-4xl font-semibold sm:text-5xl">Welcome to Hawthorne Dominion House Academy</h1>
      <p className="max-w-xl text-base text-slate-300">
        Discover the next chapter of scholarship, artistry, and stewardship across our Houses.
      </p>
      <Link
        href="/login"
        className="rounded-full bg-indigo-500 px-6 py-2 text-sm font-medium text-white transition hover:bg-indigo-400"
      >
        Proceed to login
      </Link>
    </main>
  );
}
