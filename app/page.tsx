import Link from "next/link";

const academies = [
  {
    title: "Classical Scholarship",
    description:
      "Rigorous studies in literature, philosophy, and history are guided by dons who demand clarity of mind and civility of debate.",
  },
  {
    title: "Sciences of the Dominion",
    description:
      "Laboratories equipped for modern inquiry ensure that innovation flourishes within the academy’s disciplined framework.",
  },
  {
    title: "Strategic Arts",
    description:
      "Diplomacy, economics, and governance form the triad of leadership education entrusted to Hawthorne scholars.",
  },
];

const facultyHighlights = [
  {
    name: "Dr. Aurelia Wrenford",
    role: "Dean of Classical Letters",
    note: "Renowned for her translations of imperial-era manuscripts and her unwavering standards for rhetoric.",
  },
  {
    name: "Sir Bennett Marlowe",
    role: "Chair of Dominion Sciences",
    note: "Knighted for advancing bio-resilient architecture, he now mentors the next generation of innovators.",
  },
  {
    name: "Colonel Isolde Ashcroft (Ret.)",
    role: "Director of Strategic Arts",
    note: "A veteran diplomat whose seminars on statecraft are invitation-only and fiercely sought after.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-ink text-ivory">
      <section className="hero-backdrop candle-flicker fade-in border-b border-gilded/20">
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-32 text-center">
          <div className="relative mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-gilded/60 bg-ink/60 text-3xl font-semibold uppercase tracking-[0.4em] text-gilded shadow-regal">
            HD
          </div>
          <h1 className="font-display text-5xl font-semibold uppercase tracking-[0.55em] text-gilded md:text-6xl">
            Hawthorne Dominion House Academy
          </h1>
          <div className="divider mt-6" aria-hidden="true" />
          <p className="mt-6 max-w-3xl font-body text-lg leading-relaxed text-ivory/85">
            Founded in 1847, Hawthorne Dominion House Academy forges scholars of unwavering conviction. Within our halls,
            tradition and modern scholarship convene to cultivate minds prepared to steward the dominion with wisdom and grace.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/login" className="button-primary" prefetch={false}>
              Enter Academy
            </Link>
            <Link href="/#about" className="button-link" prefetch={false}>
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="fade-in-delayed section-vignette border-b border-gilded/10 bg-parchmentDark/60">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.6em] text-gilded">About the Academy</h2>
            <div className="divider" aria-hidden="true" />
            <p className="font-body text-lg leading-relaxed text-ivory/85">
              Hawthorne Dominion House Academy is an elite private institution devoted to the preservation of order, excellence,
              and honor. Our faculty, fellows, and prefects uphold a code of scholarly conduct that balances classical tradition
              with contemporary research. Students are selected not merely for aptitude, but for their commitment to service and
              their readiness to shoulder responsibility.
            </p>
            <p className="font-body text-lg leading-relaxed text-ivory/75">
              Through ceremonial Houses and rigorous tutorial systems, every scholar is mentored to ascend beyond expectation.
              Our community is one of quiet resolve, precision, and refined courtesy.
            </p>
          </div>
          <div className="panel space-y-6 backdrop-blur">
            <h3 className="font-display text-2xl font-semibold uppercase tracking-[0.35em] text-gilded">Dominion Standards</h3>
            <ul className="space-y-4 font-body text-base leading-relaxed text-ivory/80">
              <li>
                <span className="font-semibold text-ivory">Order:</span> Every day commences with ceremonial assembly and articulated intention.
              </li>
              <li>
                <span className="font-semibold text-ivory">Excellence:</span> Tutors cultivate bespoke study regimens to ensure relentless progress.
              </li>
              <li>
                <span className="font-semibold text-ivory">Honor:</span> Service to the dominion is embedded within each term’s obligations.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="academics" className="fade-in section-vignette border-b border-gilded/10 bg-ink">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-4xl">
            <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.6em] text-gilded">Academics</h2>
            <div className="divider mt-4" aria-hidden="true" />
            <p className="mt-8 font-body text-lg leading-relaxed text-ivory/80">
              Disciplines at Hawthorne Dominion House Academy are organized into Colleges that meld time-honored instruction with
              exacting assessment. Scholars progress through bespoke tutorials, symposiums, and evaluative councils that measure
              intellect as well as character.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {academies.map((item) => (
              <article key={item.title} className="panel h-full space-y-4">
                <h3 className="font-display text-xl font-semibold uppercase tracking-[0.4em] text-gilded">{item.title}</h3>
                <p className="font-body text-base leading-relaxed text-ivory/80">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="admissions" className="fade-in-delayed section-vignette border-b border-gilded/10 bg-parchmentDark/60">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.6em] text-gilded">Admissions</h2>
            <div className="divider" aria-hidden="true" />
            <p className="font-body text-lg leading-relaxed text-ivory/85">
              Entry to Hawthorne Dominion House Academy is accorded to those whose scholarly record and personal comportment
              reflect the academy’s ideals. Invitations to the winter examinations are extended upon review of recommendations
              and essays of intent.
            </p>
            <p className="font-body text-lg leading-relaxed text-ivory/75">
              Prospective scholars should prepare dossiers attesting to academic rigor, leadership in service, and mastery of the
              arts or sciences. Interviews with the Faculty Council reaffirm character and commitment before induction.
            </p>
          </div>
          <aside className="panel space-y-4 backdrop-blur">
            <h3 className="font-display text-xl font-semibold uppercase tracking-[0.35em] text-gilded">Application Milestones</h3>
            <ul className="space-y-3 font-body text-base leading-relaxed text-ivory/80">
              <li>
                <span className="font-semibold text-ivory">October:</span> Dossier submissions open.
              </li>
              <li>
                <span className="font-semibold text-ivory">December:</span> Winter examinations conducted on campus.
              </li>
              <li>
                <span className="font-semibold text-ivory">January:</span> Council deliberations and invitations to matriculate.
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="faculty" className="fade-in section-vignette border-b border-gilded/10 bg-ink">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-4xl">
            <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.6em] text-gilded">Faculty</h2>
            <div className="divider mt-4" aria-hidden="true" />
            <p className="mt-8 font-body text-lg leading-relaxed text-ivory/80">
              Guided by deans and fellows of exceptional pedigree, the faculty of Hawthorne Dominion House Academy safeguard the
              integrity of every discipline. Their mentorship ensures that the academy’s ethos is carried forward in each cohort.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {facultyHighlights.map((faculty) => (
              <article key={faculty.name} className="panel h-full space-y-4">
                <h3 className="font-display text-xl font-semibold uppercase tracking-[0.4em] text-gilded">{faculty.name}</h3>
                <p className="font-display text-xs uppercase tracking-[0.6em] text-ivory/70">{faculty.role}</p>
                <p className="font-body text-base leading-relaxed text-ivory/80">{faculty.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-gilded/20 bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-10 text-center">
          <span className="font-display text-xs uppercase tracking-[0.6em] text-gilded">Sapientia et Disciplina</span>
          <p className="font-display text-[11px] uppercase tracking-[0.5em] text-ivory/60">
            Hawthorne Dominion House Academy • Established 1847
          </p>
        </div>
      </footer>
    </main>
  );
}
