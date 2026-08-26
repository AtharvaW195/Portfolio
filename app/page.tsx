import Link from 'next/link';
import { links } from '@/data/links';

const currentItems = [
  { text: 'MCS student at NC State University', dotClass: 'text-accent' },
  { text: 'Exploring GenAI/LLMs and software engineering research', dotClass: 'text-accent-violet' },
  { text: 'Building software systems and AI-focused projects', dotClass: 'text-accent-rust' },
  { text: 'Seeking Software Engineering / AI/ML opportunities', dotClass: 'text-accent' }
];

export default function HomePage() {
  return (
    <main className="flex w-full flex-col">
      <section className="bg-surface">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl space-y-4">
            <p className="ui-eyebrow">Portfolio</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Atharva Waingankar
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-primary sm:text-xl">
              MCS Student @ NC State | Software Engineering • AI/ML • Systems
            </p>
            <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
              I build software systems and explore how AI and LLMs can improve software engineering and real-world applications.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="ui-pill border-accent text-accent"><span aria-hidden="true">●</span><span>Software Engineering</span></span>
              <span className="ui-pill border-accent-violet text-accent-violet"><span aria-hidden="true">●</span><span>AI/ML</span></span>
              <span className="ui-pill border-accent-rust text-accent-rust"><span aria-hidden="true">●</span><span>Systems</span></span>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="ui-button-primary"
            >
              View Projects
            </Link>
            <Link
              href="/resume"
              className="ui-button-secondary"
            >
              View Resume
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-muted">
            <a className="transition-colors hover:text-accent" href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="transition-colors hover:text-accent" href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="transition-colors hover:text-accent" href={`mailto:${links.email}`}>
              Email
            </a>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4">
            <h2 className="ui-eyebrow">Currently</h2>
            <ul className="space-y-3 text-base leading-7 text-primary sm:text-lg">
              {currentItems.map((item) => (
                <li key={item.text} className="flex gap-3 font-ui-mono">
                  <span className={['mt-2 text-xs leading-none', item.dotClass].join(' ')} aria-hidden="true">●</span>
                  <span className="font-sans font-normal text-primary">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}