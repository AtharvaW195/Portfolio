import Link from 'next/link';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <section className="max-w-3xl space-y-4">
        <p className="text-sm font-medium tracking-[0.18em] text-zinc-500 uppercase">Projects</p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">Selected work</h1>
        <p className="text-base leading-7 text-zinc-600 sm:text-lg">
          A concise view of software engineering, AI/ML, systems, and research work.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300"
          >
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="space-y-2">
                  <p className="text-xs font-medium tracking-[0.18em] text-zinc-500 uppercase">{project.category}</p>
                  <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{project.name}</h2>
                </div>
                <span className="inline-flex max-w-full rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium leading-4 text-zinc-700 whitespace-normal break-words">
                  {project.status}
                </span>
              </div>

              {project.description ? (
                <p className="text-sm leading-6 text-zinc-600">{project.description}</p>
              ) : null}

              <ul className="space-y-2 text-sm leading-6 text-zinc-600">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 space-y-4 pt-4">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={project.githubUrl}
                  className="inline-flex items-center justify-center rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
                >
                  GitHub
                </Link>
                <Link
                  href={project.demoUrl}
                  className="inline-flex items-center justify-center rounded-md border border-zinc-900 bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
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