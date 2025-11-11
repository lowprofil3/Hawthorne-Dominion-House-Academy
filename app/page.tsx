export default function Home() {
  const pillars = [
    {
      title: "Scholarly Excellence",
      description:
        "Faculty-guided seminars and studio labs challenge scholars to explore the frontiers of science, arts, and diplomacy.",
    },
    {
      title: "Character & Stewardship",
      description:
        "Daily community circles and mentorship cultivate empathy, courage, and a lifelong commitment to service.",
    },
    {
      title: "Experiential Pathways",
      description:
        "Immersive residencies across the Dominion House network connect classroom insights with global impact initiatives.",
    },
  ];

  const highlights = [
    "Adaptive curriculum tailored to each learner’s curiosity",
    "Residence life teams that celebrate culture, tradition, and wellbeing",
    "Research fellowships co-designed with civic and private partners",
    "An alumni guild that mentors scholars as they chart their future",
  ];

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 pb-16 pt-20 sm:px-12 lg:px-16">
      <section className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/70 p-10 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-300/60 to-purple-400/40 blur-3xl" />
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-purple-200/70 to-indigo-500/50 blur-3xl" />
        <div className="relative z-10 flex flex-col gap-6 sm:max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-200">
            Hawthorne Dominion House Academy
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            A sanctuary for scholars, storytellers, and stewards of the dominion.
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-200">
            Rooted in centuries of tradition and aligned with tomorrow’s frontiers, our academy nurtures confident leaders who
            honor heritage while shaping a just and luminous future.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a className="btn-primary" href="#programs">
              Explore our programs
            </a>
            <a
              className="inline-flex items-center text-sm font-semibold text-indigo-700 transition-colors hover:text-indigo-900 dark:text-indigo-200 dark:hover:text-indigo-50"
              href="#about"
            >
              Meet the Dominion faculty →
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <article className="flex flex-col gap-6 rounded-3xl border border-slate-200/60 bg-white/80 p-8 shadow-lg backdrop-blur md:p-12 dark:border-slate-700/60 dark:bg-slate-900/40">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            Learning beyond the lecture hall
          </h2>
          <p className="text-base leading-relaxed text-slate-700 dark:text-slate-200">
            Apprenticeships, symposiums, and expeditionary learning are interwoven across every House. Scholars collaborate with
            master tutors, archivists, and artisans to bring the Dominion’s living history into dialogue with contemporary
            discovery.
          </p>
          <p className="text-base leading-relaxed text-slate-700 dark:text-slate-200">
            Each term culminates in a cross-disciplinary colloquy where students present imaginative responses to real-world
            challenges, supported by alumni guild mentors and civic partners.
          </p>
        </article>
        <aside className="flex flex-col gap-4 rounded-3xl border border-indigo-200/70 bg-indigo-50/70 p-6 shadow-lg backdrop-blur-sm dark:border-indigo-500/40 dark:bg-indigo-500/10">
          <h3 className="text-lg font-semibold uppercase tracking-wider text-indigo-700 dark:text-indigo-200">
            Highlights from the Houses
          </h3>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-100">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 flex-none rounded-full bg-indigo-500" aria-hidden />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section id="programs" className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-200">Foundational Pillars</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            Every scholar’s journey is shaped by these guiding lights
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-700 dark:text-slate-200">
            Our integrated approach invites students to explore scholarship, artistry, and service through immersive residencies
            and collaborative inquiry.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/80 p-8 text-left shadow-lg backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/40"
            >
              <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-200">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200/70 bg-white/80 p-10 text-center shadow-xl backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/40">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Ready to tour the Academy?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-700 dark:text-slate-200">
          Schedule a guided visit to experience our Houses, meet current scholars, and discover how Hawthorne Dominion House Academy
          can illuminate your path.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a className="btn-primary" href="mailto:admissions@hawthorneacademy.dom">
            Book a visit
          </a>
          <a
            className="inline-flex items-center text-sm font-semibold text-indigo-700 transition-colors hover:text-indigo-900 dark:text-indigo-200 dark:hover:text-indigo-50"
            href="mailto:hello@hawthorneacademy.dom"
          >
            Connect with admissions →
          </a>
        </div>
      </section>
    </main>
  );
}
