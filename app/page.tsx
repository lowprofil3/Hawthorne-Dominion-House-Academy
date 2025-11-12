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
    <main className="bg-parchment">
      <section className="fade-in border-b border-gilded/30 bg-ivory/60">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <p className="text-xs uppercase tracking-[0.6em] text-crimson">Virtus. Disciplina. Honor.</p>
            <h1 className="text-5xl font-semibold leading-tight text-ink md:text-6xl">
              Hawthorne Dominion House Academy
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-ink/80">
              Founded in 1847, Hawthorne Dominion House Academy forges scholars of unwavering conviction. Within our halls,
              tradition and modern scholarship convene to cultivate minds prepared to steward the dominion with wisdom and grace.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/login" className="button-primary" prefetch={false}>
                Enter Academy
              </Link>
              <Link
                href="/#about"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-ink/70 transition-colors hover:text-crimson"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative mx-auto flex max-w-sm flex-col items-center gap-4 rounded-[40px] border border-gilded/40 bg-ivory/70 p-10 text-center shadow-regal">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-gilded/50 bg-parchment/60 text-lg font-semibold uppercase tracking-[0.6em] text-crimson">
              HDH
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="fade-in">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold uppercase tracking-[0.45em] text-crimson">About the Academy</h2>
            <p className="text-lg leading-relaxed text-ink/85">
              Hawthorne Dominion House Academy is an elite private institution devoted to the preservation of order, excellence,
              and honor. Our faculty, fellows, and prefects uphold a code of scholarly conduct that balances classical tradition
              with contemporary research. Students are selected not merely for aptitude, but for their commitment to service and
              their readiness to shoulder responsibility.
            </p>
            <p className="text-lg leading-relaxed text-ink/70">
              Through ceremonial Houses and rigorous tutorial systems, every scholar is mentored to ascend beyond expectation.
              Our community is one of quiet resolve, precision, and refined courtesy.
            </p>
          </div>
          <div className="space-y-6 rounded-[32px] border border-gilded/40 bg-ivory/80 p-10 shadow-regal">
            <h3 className="text-2xl font-semibold text-ink">Dominion Standards</h3>
            <ul className="space-y-4 text-ink/75">
              <li><span className="font-semibold text-ink">Order:</span> Every day commences with ceremonial assembly and articulated intention.</li>
              <li><span className="font-semibold text-ink">Excellence:</span> Tutors cultivate bespoke study regimens to ensure relentless progress.</li>
              <li><span className="font-semibold text-ink">Honor:</span> Service to the dominion is embedded within each term’s obligations.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="academics" className="fade-in border-y border-gilded/20 bg-ivory/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-3xl font-semibold uppercase tracking-[0.45em] text-crimson">Academics</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/80">
            Disciplines at Hawthorne Dominion House Academy are organized into Colleges that meld time-honored instruction with
            exacting assessment. Scholars progress through bespoke tutorials, symposiums, and evaluative councils that measure
            intellect as well as character.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {academies.map((item) => (
              <article key={item.title} className="panel h-full space-y-4">
                <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                <p className="text-base leading-relaxed text-ink/75">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="admissions" className="fade-in">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold uppercase tracking-[0.45em] text-crimson">Admissions</h2>
            <p className="text-lg leading-relaxed text-ink/80">
              Entry to Hawthorne Dominion House Academy is accorded to those whose scholarly record and personal comportment
              reflect the academy’s ideals. Invitations to the winter examinations are extended upon review of recommendations
              and essays of intent.
            </p>
            <p className="text-lg leading-relaxed text-ink/70">
              Prospective scholars should prepare dossiers attesting to academic rigor, leadership in service, and mastery of the
              arts or sciences. Interviews with the Faculty Council reaffirm character and commitment before induction.
            </p>
          </div>
          <aside className="panel space-y-4">
            <h3 className="text-xl font-semibold text-ink">Application Milestones</h3>
            <ul className="space-y-3 text-ink/75">
              <li><span className="font-semibold text-ink">October:</span> Dossier submissions open.</li>
              <li><span className="font-semibold text-ink">December:</span> Winter examinations conducted on campus.</li>
              <li><span className="font-semibold text-ink">January:</span> Council deliberations and invitations to matriculate.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="faculty" className="fade-in border-t border-gilded/20 bg-ivory/50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-3xl font-semibold uppercase tracking-[0.45em] text-crimson">Faculty</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/80">
            Guided by deans and fellows of exceptional pedigree, the faculty of Hawthorne Dominion House Academy safeguard the
            integrity of every discipline. Their mentorship ensures that the academy’s ethos is carried forward in each cohort.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {facultyHighlights.map((faculty) => (
              <article key={faculty.name} className="panel h-full space-y-3">
                <h3 className="text-xl font-semibold text-ink">{faculty.name}</h3>
                <p className="text-sm uppercase tracking-[0.3em] text-crimson/80">{faculty.role}</p>
                <p className="text-base leading-relaxed text-ink/75">{faculty.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
