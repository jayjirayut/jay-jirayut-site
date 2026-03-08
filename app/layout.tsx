import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import type { ReactNode } from 'react';

import '@/app/globals.css';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { absoluteUrl, siteConfig } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: '%s — Jay Jirayut Chatphet'
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: absoluteUrl('/')
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description
  },
  icons: {
    icon: '/icon.svg'
  }
};

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const showDevThemeToggle = process.env.NODE_ENV === 'development';
  const DevThemeToggle = showDevThemeToggle
    ? (await import('@/components/dev-theme-toggle')).DevThemeToggle
    : null;

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg font-sans text-[16px] text-body">
        {showDevThemeToggle ? (
          <script
            dangerouslySetInnerHTML={{
              __html:
                "try{document.documentElement.dataset.previewTheme=localStorage.getItem('jay-preview-theme')==='dark'?'dark':'light';}catch(e){}"
            }}
          />
        ) : null}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0 hidden lg:block"
        >
          <div className="mx-auto h-full max-w-[72rem] border-x border-rule opacity-80" />
        </div>
        <div className="relative z-10 flex min-h-screen flex-col">
          <SiteHeader />
          <main className="page-shell flex-1 px-5 pb-24 pt-36 sm:px-8 sm:pt-28 lg:px-10">
            {children}
          </main>
          <SiteFooter />
        </div>
        {DevThemeToggle ? <DevThemeToggle /> : null}
      </body>
    </html>
  );
}
