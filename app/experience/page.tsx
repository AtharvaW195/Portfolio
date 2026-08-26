import { education, experience } from '@/data/experience';

export default function ExperiencePage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <section className="max-w-3xl space-y-4">
        <p className="ui-eyebrow">Experience</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Work and education</h1>
        <p className="text-base leading-7 text-muted sm:text-lg">
          A concise overview of internship experience and academic background.
        </p>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="ui-eyebrow">Experience</h2>
          <p className="text-base leading-7 text-muted sm:text-lg">One current role with room to expand later.</p>
        </div>

        <div className="relative space-y-6">
          <div className="absolute left-3 top-2 bottom-2 hidden w-px bg-border md:block" aria-hidden="true" />

          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="ui-card relative p-6 md:pl-10">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold tracking-tight">{item.company}</h3>
                  <p className="text-sm font-medium text-muted">{item.role}</p>
                </div>
                <p className="text-sm font-medium text-muted">{item.duration}</p>
              </div>

              <ul className="mt-5 space-y-2 text-sm leading-6 text-primary sm:text-base">
                {item.highlights.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-border" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6 border-t border-border pt-10">
        <div className="space-y-2">
          <h2 className="ui-eyebrow">Education</h2>
          <p className="text-base leading-7 text-muted sm:text-lg">Academic background and current graduate study.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {education.map((item) => (
            <article key={item.institution} className="ui-card p-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold tracking-tight">{item.institution}</h3>
                <p className="text-sm font-medium text-muted">{item.degree}</p>
                {item.duration ? <p className="text-sm text-muted">{item.duration}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}