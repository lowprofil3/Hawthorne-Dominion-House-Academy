export default function DashboardPage() {
  return (
    <div className="bg-parchment">
      <main className="mx-auto min-h-[calc(100vh-10rem)] max-w-6xl px-6 py-24">
        <header className="fade-in space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-crimson">Scholastic Ledger</p>
          <h1 className="text-4xl font-semibold text-ink">Student Dashboard</h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-ink/70">
            A formal overview of your academic commitments. Future integrations will synchronise live data from the Academy’s
            secure records.
          </p>
        </header>
        <section className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          <article className="panel fade-in space-y-4">
            <header>
              <h2 className="text-2xl font-semibold text-ink">Professor Messages</h2>
              <p className="text-sm uppercase tracking-[0.3em] text-ink/60">Last correspondence</p>
            </header>
            <ul className="space-y-4 text-ink/75">
              <li>
                <p className="font-semibold text-ink">Dr. Wrenford — Classical Letters</p>
                <p className="text-sm">
                  “Review the annotated manuscripts prior to Friday’s symposium. Precision in translation is paramount.”
                </p>
              </li>
              <li>
                <p className="font-semibold text-ink">Sir Marlowe — Dominion Sciences</p>
                <p className="text-sm">
                  “Laboratory rotation confirmed. Submit hypotheses regarding resilient alloys before arrival.”
                </p>
              </li>
            </ul>
          </article>
          <article className="panel fade-in space-y-4">
            <header>
              <h2 className="text-2xl font-semibold text-ink">Assignments</h2>
              <p className="text-sm uppercase tracking-[0.3em] text-ink/60">Week 8</p>
            </header>
            <ul className="space-y-4 text-ink/75">
              <li>
                <p className="font-semibold text-ink">Treatise on Imperial Governance</p>
                <p className="text-sm">Draft a comparative analysis of dominion charters with footnoted citations.</p>
              </li>
              <li>
                <p className="font-semibold text-ink">Experimental Sciences Colloquium</p>
                <p className="text-sm">Prepare findings from bio-resilient alloy experiment for closed session defence.</p>
              </li>
              <li>
                <p className="font-semibold text-ink">House Service Report</p>
                <p className="text-sm">Submit ledger of community stewardship hours signed by Prefect Ashcroft.</p>
              </li>
            </ul>
          </article>
          <article className="panel fade-in space-y-4 xl:col-span-1 xl:row-span-2">
            <header>
              <h2 className="text-2xl font-semibold text-ink">Grades</h2>
              <p className="text-sm uppercase tracking-[0.3em] text-ink/60">Term standing</p>
            </header>
            <dl className="space-y-4 text-ink/80">
              <div>
                <dt className="text-sm uppercase tracking-[0.3em] text-ink/60">Classical Scholarship</dt>
                <dd className="text-3xl font-semibold text-ink">A</dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-[0.3em] text-ink/60">Dominion Sciences</dt>
                <dd className="text-3xl font-semibold text-ink">A-</dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-[0.3em] text-ink/60">Strategic Arts</dt>
                <dd className="text-3xl font-semibold text-ink">A</dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-[0.3em] text-ink/60">House Service</dt>
                <dd className="text-3xl font-semibold text-ink">Commended</dd>
              </div>
            </dl>
          </article>
          <article className="panel fade-in space-y-4 md:col-span-2 xl:col-span-2">
            <header>
              <h2 className="text-2xl font-semibold text-ink">Upcoming Engagements</h2>
              <p className="text-sm uppercase tracking-[0.3em] text-ink/60">Formal obligations</p>
            </header>
            <ul className="grid gap-4 md:grid-cols-2">
              <li className="rounded-2xl border border-gilded/40 bg-parchment/70 p-4 text-ink/75">
                <p className="font-semibold text-ink">Council Symposium</p>
                <p className="text-sm">12 October — Present research alongside senior fellows in the East Hall.</p>
              </li>
              <li className="rounded-2xl border border-gilded/40 bg-parchment/70 p-4 text-ink/75">
                <p className="font-semibold text-ink">Prefect Assembly</p>
                <p className="text-sm">18 October — Strategic Arts debrief and leadership review.</p>
              </li>
              <li className="rounded-2xl border border-gilded/40 bg-parchment/70 p-4 text-ink/75">
                <p className="font-semibold text-ink">Service Excursion</p>
                <p className="text-sm">22 October — Stewardship at the Dominion archives, full dress required.</p>
              </li>
              <li className="rounded-2xl border border-gilded/40 bg-parchment/70 p-4 text-ink/75">
                <p className="font-semibold text-ink">Faculty Consultation</p>
                <p className="text-sm">24 October — Individual progress review with Dr. Wrenford.</p>
              </li>
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
}
