export default function DashboardPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-10 px-6 py-16">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-200">Dashboard</p>
        <h1 className="text-4xl font-semibold text-slate-900 dark:text-slate-100">Welcome to the Academy hub</h1>
        <p className="max-w-2xl text-base text-slate-700 dark:text-slate-300">
          This secure area will grow with tools and insights for scholars and faculty as authentication features expand.
        </p>
      </header>
      <section className="rounded-3xl border border-slate-200/70 bg-white/80 p-10 shadow-xl backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/40">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">You are signed in</h2>
        <p className="mt-4 text-sm text-slate-700 dark:text-slate-200">
          After logging in, you will be redirected here. Future releases can surface personalized schedules, course updates,
          and messages from the House mentors.
        </p>
      </section>
    </main>
  );
}
