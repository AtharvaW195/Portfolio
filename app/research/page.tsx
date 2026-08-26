import { research } from '@/data/research';

const comingSoonSections = ['Papers', 'Technical Reports', 'GitHub Repositories'];

export default function ResearchPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <section className="max-w-3xl space-y-4">
        <p className="ui-eyebrow">Research</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Selected research</h1>
        <p className="text-base leading-7 text-muted sm:text-lg">
          Research work spanning software engineering, generative AI, and applied machine learning.
        </p>
      </section>

      <section className="space-y-6">
        {research.map((item) => (
          <article key={item.slug} className="ui-card p-6">
            <div className="space-y-5">
              <div className="space-y-3">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{item.title}</h2>
                  <p className="text-sm font-medium text-muted">{item.meta}</p>
                </div>
                <span className={[
                  'ui-pill max-w-full whitespace-normal break-words',
                  item.status.toLowerCase().includes('ongoing') ? 'ui-pill-progress' : 'ui-pill-accent'
                ].join(' ')}>
                  <span aria-hidden="true">●</span>
                  {item.status}
                </span>
              </div>

              {item.description ? (
                <p className="max-w-3xl text-sm leading-6 text-muted sm:text-base">{item.description}</p>
              ) : null}

              {item.bullets ? (
                <ul className="space-y-2 text-sm leading-6 text-primary sm:text-base">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-border" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="ui-pill">
                    <span aria-hidden="true">●</span>
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="space-y-6 border-t border-border pt-10">
        <div className="space-y-2">
          <p className="ui-eyebrow">Coming Soon</p>
          <p className="text-base leading-7 text-muted sm:text-lg">Placeholder sections for future research material.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {comingSoonSections.map((section) => (
            <section key={section} className="ui-card border-dashed p-6">
              <h2 className="text-lg font-medium">{section}</h2>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}