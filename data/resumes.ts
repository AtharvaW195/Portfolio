export interface ResumeEntry {
  label: string;
  path: string;
}

export const resumes: ResumeEntry[] = [
  { label: 'Software Engineering Resume', path: '/resumes/swe-resume.pdf' },
  { label: 'AI/ML Resume', path: '/resumes/ai-ml-resume.pdf' },
  { label: 'Systems/Networking Resume', path: '/resumes/systems-resume.pdf' },
  { label: 'Data/Analytics Resume', path: '/resumes/data-resume.pdf' }
];