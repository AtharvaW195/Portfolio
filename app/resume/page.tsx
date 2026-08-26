import Link from 'next/link';
import { resumes } from '@/data/resumes';

export default function ResumePage() {
  const downloadResumePath = '/resumes/swe-resume.pdf';

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <section className="space-y-4">
        <p className="text-sm font-medium tracking-[0.18em] text-zinc-500 uppercase">Resume</p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">Resume</h1>
        <p className="max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
          Download my resume for a detailed overview of my education, experience, projects, and technical skills.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {resumes.map((resume) => (
          <Link
            key={resume.path}
            href={resume.path}
            className="rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
          >
            {resume.label}
          </Link>
        ))}
      </section>

      <section className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-6">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold tracking-tight text-zinc-950">General Download</h2>
          <p className="text-sm leading-6 text-zinc-600">
            The button below currently points to the Software Engineering resume by default. Update it whenever you want a different primary resume.
          </p>
        </div>

        <Link
          href={downloadResumePath}
          className="inline-flex items-center justify-center rounded-md border border-zinc-900 bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
        >
          Download Resume
        </Link>
      </section>

      <p className="text-sm leading-6 text-zinc-500">
        Note: these are placeholder paths for now. Drop the PDF files into public/resumes/ so the links resolve to actual files later.
      </p>
    </main>
  );
}