"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({ error: "Unable to login." }));
        throw new Error(data.error ?? "Unable to login.");
      }

      await response.json();
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to login.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center gap-8 px-6 py-16">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">Welcome back</h1>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Sign in to continue to the Hawthorne Dominion House Academy dashboard.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-slate-200/70 bg-white/80 p-8 shadow-lg backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/40">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
          />
        </div>
        {error ? <p className="text-sm text-rose-600 dark:text-rose-400">{error}</p> : null}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-400"
        >
          {isSubmitting ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </main>
  );
}
