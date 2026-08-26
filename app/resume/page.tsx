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
            The button below currently points to the Software Engineering resume by default. Update it whenever you want a different primary resume.
          </p>
        </div>

        <Link
          href={downloadResumePath}
          className="ui-button-primary"
        >
          Download Resume
        </Link>
      </section>

      <p className="text-sm leading-6 text-muted">
        Note: these are placeholder paths for now. Drop the PDF files into public/resumes/ so the links resolve to actual files later.
      </p>
    </main>
  );
}