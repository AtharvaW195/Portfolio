import { education, experience } from '@/data/experience';

export default function ExperiencePage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <section className="max-w-3xl space-y-4">
        <p className="text-sm font-medium tracking-[0.18em] text-zinc-500 uppercase">Experience</p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">Work and education</h1>
        <p className="text-base leading-7 text-zinc-600 sm:text-lg">
          A concise overview of internship experience and academic background.
        </p>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-sm font-medium tracking-[0.18em] text-zinc-500 uppercase">Experience</h2>
          <p className="text-base leading-7 text-zinc-600 sm:text-lg">One current role with room to expand later.</p>
        </div>

        <div className="relative space-y-6">
          <div className="absolute left-3 top-2 bottom-2 hidden w-px bg-zinc-200 md:block" aria-hidden="true" />

          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="relative rounded-2xl border border-zinc-200 bg-white p-6 md:pl-10">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-950">{item.company}</h3>
                  <p className="text-sm font-medium text-zinc-600">{item.role}</p>
                </div>
                <p className="text-sm font-medium text-zinc-500">{item.duration}</p>
              </div>

              <ul className="mt-5 space-y-2 text-sm leading-6 text-zinc-600 sm:text-base">
                {item.highlights.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6 border-t border-zinc-200 pt-10">
        <div className="space-y-2">
          <h2 className="text-sm font-medium tracking-[0.18em] text-zinc-500 uppercase">Education</h2>
          <p className="text-base leading-7 text-zinc-600 sm:text-lg">Academic background and current graduate study.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {education.map((item) => (
            <article key={item.institution} className="rounded-2xl border border-zinc-200 bg-white p-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold tracking-tight text-zinc-950">{item.institution}</h3>
                <p className="text-sm font-medium text-zinc-600">{item.degree}</p>
                {item.duration ? <p className="text-sm text-zinc-500">{item.duration}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}