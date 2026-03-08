import type { Metadata } from 'next';
import Link from 'next/link';

import { Container } from '@/components/container';
import { MetadataLine } from '@/components/metadata-line';
import { getWorkEntries } from '@/lib/content';
import { absoluteUrl, formatDate } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected notes on work, decision-making, and system design.',
  alternates: {
    canonical: absoluteUrl('/work')
  }
};

export default function WorkIndexPage() {
  const entries = getWorkEntries();

  return (
    <Container size="shell" className="space-y-14">
      <header className="max-w-reading space-y-5 border-b border-rule pb-10">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-muted">Work</p>
        <h1 className="text-[40px] font-bold tracking-[-0.08em] text-ink sm:text-[46px]">
          Selected work, kept deliberately high-level.
        </h1>
        <p className="text-[16.5px] leading-8 text-body">
          I&apos;m most useful when the work is ambiguous, cross-functional, technical, and
          commercially real. This section stays focused on how decisions get made and what
          principles guide the work, not confidential specifics.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        {entries.map((entry) => (
          <article
            key={entry.slug}
            className="flex h-full flex-col justify-between rounded-sm border border-rule bg-surface p-6"
          >
            <div className="space-y-4">
              <MetadataLine items={[formatDate(entry.date), ...entry.tags.slice(0, 2)]} />
              <h2 className="text-[24px] font-semibold tracking-[-0.05em] text-ink">
                {entry.title}
              </h2>
              <p className="text-[16px] leading-7 text-body">{entry.description}</p>
            </div>
            <Link
              href={`/work/${entry.slug}`}
              className="mt-6 text-[14px] text-accent transition-colors duration-200 hover:underline hover:underline-offset-4"
            >
              Read note
            </Link>
          </article>
        ))}
      </div>
    </Container>
  );
}
