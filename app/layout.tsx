import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: 'Atharva Waingankar | Software Engineer & Researcher',
  description: 'Atharva Waingankar builds software systems across software engineering, AI/ML, and systems, with research interests in LLMs and applied machine learning.',
  openGraph: {
    title: 'Atharva Waingankar | Software Engineer & Researcher',
    description: 'Atharva Waingankar builds software systems across software engineering, AI/ML, and systems, with research interests in LLMs and applied machine learning.',
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Atharva Waingankar Portfolio'
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-primary antialiased">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        {/* Replace app/favicon.ico with your final icon when ready; Next serves this slot automatically. */}
      </body>
    </html>
  );
}