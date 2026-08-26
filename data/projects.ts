export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  slug: string;
  summary: string;
  techStack: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [];