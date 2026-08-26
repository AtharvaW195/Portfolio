"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { links } from '@/data/links';

const navigationItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/research', label: 'Research' },
  { href: '/experience', label: 'Experience' },
  { href: '/resume', label: 'Resume' }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const socialLinks = useMemo(
    () => [
      { href: links.github, label: 'GitHub', icon: Github, external: true },
      { href: links.linkedin, label: 'LinkedIn', icon: Linkedin, external: true },
      { href: `mailto:${links.email}`, label: 'Email', icon: Mail, external: true }
    ],
    []
  );

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-medium tracking-wide text-primary">
          Atharva Waingankar
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 md:flex" aria-label="Primary">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={[
                'ui-nav-link',
                isActive(item.href) ? 'ui-nav-link-active' : ''
              ].join(' ')}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex" aria-label="Social links">
          {socialLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="rounded-[6px] border border-border p-2 text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-[6px] border border-border p-2 text-muted transition-colors hover:border-accent hover:text-accent md:hidden"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileMenuOpen((currentValue) => !currentValue)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div id="mobile-navigation" className="border-t border-border bg-surface md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6 lg:px-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={[
                  'ui-nav-link block w-full px-3 py-3 text-left',
                  isActive(item.href) ? 'ui-nav-link-active' : ''
                ].join(' ')}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-2 flex items-center gap-2 px-3 pt-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="rounded-[6px] border border-border p-2 text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}