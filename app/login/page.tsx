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
    <div className="bg-parchment">
      <main className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-4xl flex-col justify-center gap-10 px-6 py-24">
        <header className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-crimson">Scholars’ Entrance</p>
          <h1 className="text-4xl font-semibold text-white">Student Login</h1>
          <p className="mx-auto max-w-2xl text-base text-ivory/80">
            Access your Hawthorne Dominion House Academy dashboard to review assignments, receive faculty correspondence, and
            remain apprised of your standing.
          </p>
        </header>
        <form
          onSubmit={handleSubmit}
          className="mx-auto w-full max-w-xl space-y-6 rounded-[32px] border border-white/40 bg-ivory/85 p-10 shadow-regal"
        >
          <div className="space-y-2 text-left">
            <label htmlFor="email" className="block text-sm uppercase tracking-[0.3em] text-white/90">
              Academy Email
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-lg border border-white/40 bg-parchment/60 px-3 py-2 text-base text-ink shadow-sm focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson"
            />
          </div>
          <div className="space-y-2 text-left">
            <label htmlFor="password" className="block text-sm uppercase tracking-[0.3em] text-white/90">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-lg border border-white/40 bg-parchment/60 px-3 py-2 text-base text-ink shadow-sm focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson"
            />
          </div>
          {error ? <p className="text-sm text-crimson">{error}</p> : null}
          <button
            type="submit"
            disabled={isSubmitting}
            className="button-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Signing In" : "Enter the Hall"}
          </button>
        </form>
      </main>
    </div>
  );
}
