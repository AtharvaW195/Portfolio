import Link from 'next/link';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <section className="max-w-3xl space-y-4">
        <p className="ui-eyebrow">Projects</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Selected work</h1>
        <p className="text-base leading-7 text-muted sm:text-lg">
          A concise view of software engineering, AI/ML, systems, and research work.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="ui-card flex h-full flex-col p-6"
          >
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="space-y-2">
                  <p className="ui-eyebrow">{project.category}</p>
                  <h2 className="text-xl font-semibold tracking-tight">{project.name}</h2>
                </div>
                <span className={[
                  'ui-pill max-w-full whitespace-normal break-words',
                  project.status.toLowerCase().includes('in progress') ? 'ui-pill-progress' : 'ui-pill-accent'
                ].join(' ')}>
                  <span aria-hidden="true">●</span>
                  {project.status}
                </span>
              </div>

              {project.description ? (
                <p className="text-sm leading-6 text-muted">{project.description}</p>
              ) : null}

              <ul className="space-y-2 text-sm leading-6 text-primary">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-border" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 space-y-4 pt-4">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="ui-pill">
                    <span aria-hidden="true">●</span>
                    <span>{tech}</span>
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={project.githubUrl}
                  className="ui-button-secondary px-4 py-2"
                >
                  GitHub
                </Link>
                <Link
                  href={project.demoUrl}
                  className="ui-button-primary px-4 py-2"
                >
                  Demo
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}