import { Github, Linkedin, Mail } from 'lucide-react';
import { links } from '@/data/links';

const footerLinks = [
  { href: links.github, label: 'GitHub', icon: Github },
  { href: links.linkedin, label: 'LinkedIn', icon: Linkedin },
  { href: `mailto:${links.email}`, label: 'Email', icon: Mail }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm font-medium text-zinc-950">Atharva Waingankar</p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-600">
          {footerLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-zinc-950"
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>

        <p className="text-sm text-zinc-500">© 2026 Atharva Waingankar</p>
      </div>
    </footer>
  );
}