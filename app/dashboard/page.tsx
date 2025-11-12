export default function DashboardPage() {
  return (
    <div className="bg-ink text-ivory">
      <main className="mx-auto min-h-[calc(100vh-10rem)] max-w-6xl px-6 py-24">
        <header className="fade-in space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-crimson">Scholastic Ledger</p>
          <h1 className="text-4xl font-semibold text-ivory">Student Dashboard</h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-ivory/80">
            A formal overview of your academic commitments. Future integrations will synchronise live data from the Academy’s
            secure records.
          </p>
        </header>
        <section className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          <article className="panel fade-in space-y-4">
            <header>
              <h2 className="text-2xl font-semibold text-ivory">Professor Messages</h2>
              <p className="text-sm uppercase tracking-[0.3em] text-ivory/70">Last correspondence</p>
            </header>
            <ul className="space-y-4 text-ivory/80">
              <li>
                <p className="font-semibold text-ivory">Dr. Wrenford — Classical Letters</p>
                <p className="text-sm">
                  “Review the annotated manuscripts prior to Friday’s symposium. Precision in translation is paramount.”
                </p>
              </li>
              <li>
                <p className="font-semibold text-ivory">Sir Marlowe — Dominion Sciences</p>
                <p className="text-sm">
                  “Laboratory rotation confirmed. Submit hypotheses regarding resilient alloys before arrival.”
                </p>
              </li>
            </ul>
          </article>
          <article className="panel fade-in space-y-4">
            <header>
              <h2 className="text-2xl font-semibold text-ivory">Assignments</h2>
              <p className="text-sm uppercase tracking-[0.3em] text-ivory/70">Week 8</p>
            </header>
            <ul className="space-y-4 text-ivory/80">
              <li>
                <p className="font-semibold text-ivory">Treatise on Imperial Governance</p>
                <p className="text-sm">Draft a comparative analysis of dominion charters with footnoted citations.</p>
              </li>
              <li>
                <p className="font-semibold text-ivory">Experimental Sciences Colloquium</p>
                <p className="text-sm">Prepare findings from bio-resilient alloy experiment for closed session defence.</p>
              </li>
              <li>
                <p className="font-semibold text-ivory">House Service Report</p>
                <p className="text-sm">Submit ledger of community stewardship hours signed by Prefect Ashcroft.</p>
              </li>
            </ul>
          </article>
          <article className="panel fade-in space-y-4 xl:col-span-1 xl:row-span-2">
            <header>
              <h2 className="text-2xl font-semibold text-ivory">Grades</h2>
              <p className="text-sm uppercase tracking-[0.3em] text-ivory/70">Term standing</p>
            </header>
            <dl className="space-y-4 text-ivory/85">
              <div>
                <dt className="text-sm uppercase tracking-[0.3em] text-ivory/70">Classical Scholarship</dt>
                <dd className="text-3xl font-semibold text-ivory">A</dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-[0.3em] text-ivory/70">Dominion Sciences</dt>
                <dd className="text-3xl font-semibold text-ivory">A-</dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-[0.3em] text-ivory/70">Strategic Arts</dt>
                <dd className="text-3xl font-semibold text-ivory">A</dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-[0.3em] text-ivory/70">House Service</dt>
                <dd className="text-3xl font-semibold text-ivory">Commended</dd>
              </div>
            </dl>
          </article>
          <article className="panel fade-in space-y-4 md:col-span-2 xl:col-span-2">
            <header>
              <h2 className="text-2xl font-semibold text-ivory">Upcoming Engagements</h2>
              <p className="text-sm uppercase tracking-[0.3em] text-ivory/70">Formal obligations</p>
            </header>
            <ul className="grid gap-4 md:grid-cols-2">
              <li className="rounded-2xl border border-gilded/40 bg-ink/60 p-4 text-ivory/80">
                <p className="font-semibold text-ivory">Council Symposium</p>
                <p className="text-sm">12 October — Present research alongside senior fellows in the East Hall.</p>
              </li>
              <li className="rounded-2xl border border-gilded/40 bg-ink/60 p-4 text-ivory/80">
                <p className="font-semibold text-ivory">Prefect Assembly</p>
                <p className="text-sm">18 October — Strategic Arts debrief and leadership review.</p>
              </li>
              <li className="rounded-2xl border border-gilded/40 bg-ink/60 p-4 text-ivory/80">
                <p className="font-semibold text-ivory">Service Excursion</p>
                <p className="text-sm">22 October — Stewardship at the Dominion archives, full dress required.</p>
              </li>
              <li className="rounded-2xl border border-gilded/40 bg-ink/60 p-4 text-ivory/80">
                <p className="font-semibold text-ivory">Faculty Consultation</p>
                <p className="text-sm">24 October — Individual progress review with Dr. Wrenford.</p>
              </li>
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
}
