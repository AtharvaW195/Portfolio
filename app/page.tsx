import Link from 'next/link';
import { links } from '@/data/links';

const currentItems = [
  'MCS student at NC State University',
  'Exploring GenAI/LLMs and software engineering research',
  'Building software systems and AI-focused projects',
  'Seeking Software Engineering / AI/ML opportunities'
];

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <section className="max-w-3xl space-y-8">
        <div className="space-y-4">
          <p className="text-sm font-medium tracking-[0.18em] text-zinc-500 uppercase">
            Portfolio
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
            Atharva Waingankar
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-700 sm:text-xl">
            MCS Student @ NC State | Software Engineering • AI/ML • Systems
          </p>
          <p className="max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
            I build software systems and explore how AI and LLMs can improve software engineering and real-world applications.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-md border border-zinc-900 bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            View Projects
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center justify-center rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
          >
            View Resume
          </Link>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-zinc-600">
          <a className="transition-colors hover:text-zinc-950" href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="transition-colors hover:text-zinc-950" href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="transition-colors hover:text-zinc-950" href={`mailto:${links.email}`}>
            Email
          </a>
        </div>
      </section>

      <section className="max-w-2xl space-y-4">
        <h2 className="text-sm font-medium tracking-[0.18em] text-zinc-500 uppercase">
          Currently
        </h2>
        <ul className="space-y-3 text-base leading-7 text-zinc-700 sm:text-lg">
          {currentItems.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-zinc-400" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}