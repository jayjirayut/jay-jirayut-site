import type { Metadata } from 'next';
import Link from 'next/link';

import { Container } from '@/components/container';
import { MetadataLine } from '@/components/metadata-line';
import { getWritingEntries } from '@/lib/content';
import { absoluteUrl, formatDate } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Writing on AI, decision-making, and useful technology.',
  alternates: {
    canonical: absoluteUrl('/writing')
  }
};

export default function WritingIndexPage() {
  const entries = getWritingEntries();

  return (
    <Container size="shell" className="space-y-14">
      <header className="max-w-reading space-y-5 border-b border-rule pb-10">
        <p className="section-kicker">Writing</p>
        <h1 className="text-[40px] font-bold tracking-[-0.08em] text-ink sm:text-[48px]">
          Writing grounded in real work, not hype.
        </h1>
        <p className="max-w-2xl text-[16.5px] leading-8 text-body">
          Essays on useful AI, making decisions under constraint, and why clarity still matters
          when the subject gets noisy.
        </p>
      </header>

      <div className="border-y border-rule">
        {entries.map((entry) => (
          <article
            key={entry.slug}
            className="grid gap-4 py-8 md:grid-cols-[140px_minmax(0,1fr)_auto] md:gap-8"
          >
            <MetadataLine items={[formatDate(entry.date)]} className="pt-1" />

            <div className="space-y-3">
              {entry.featured ? (
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  Start here
                </p>
              ) : null}

              <Link href={`/writing/${entry.slug}`} className="block">
                <h2 className="text-[28px] font-semibold leading-[1.08] tracking-[-0.06em] text-ink transition-colors duration-200 hover:text-accent">
                  {entry.title}
                </h2>
              </Link>
              <p className="max-w-2xl text-[16.5px] leading-8 text-body">{entry.description}</p>
            </div>

            <div className="pt-1 md:text-right">
              <Link
                href={`/writing/${entry.slug}`}
                className="text-[14px] text-accent transition-colors duration-200 hover:underline hover:underline-offset-4"
              >
                Read essay
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
