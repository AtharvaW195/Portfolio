import Link from 'next/link';
import { resumes } from '@/data/resumes';

export default function ResumePage() {
  const downloadResumePath = '/resumes/swe-resume.pdf';

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <section className="space-y-4">
        <p className="ui-eyebrow">Resume</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Resume</h1>
        <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
          Download my resume for a detailed overview of my education, experience, projects, and technical skills.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {resumes.map((resume) => (
          <Link
            key={resume.path}
            href={resume.path}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="ui-card px-5 py-4 text-sm font-medium text-primary transition-colors hover:border-accent hover:text-accent"
          >
            {resume.label}
          </Link>
        ))}
      </section>

      <section className="ui-card space-y-4 p-6">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold tracking-tight">General Download</h2>
          <p className="text-sm leading-6 text-muted">
            The software engineering resume is set as the default download, while the ML resume is available in the list above.
          </p>
        </div>

        <Link
          href={downloadResumePath}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="ui-button-primary"
        >
          Download Resume
        </Link>
      </section>
    </main>
  );
}