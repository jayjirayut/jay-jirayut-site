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
    <Container size="reading" className="space-y-14">
      <header className="space-y-5 border-b border-rule pb-10">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-muted">Writing</p>
        <h1 className="text-[40px] font-bold tracking-[-0.08em] text-ink sm:text-[46px]">
          Writing that starts from reality, not performance.
        </h1>
        <p className="max-w-2xl text-[16.5px] leading-8 text-body">
          Essays on useful AI, making decisions under constraint, and why clarity still matters
          when the subject gets noisy.
        </p>
      </header>

      <div className="divide-y divide-rule border-y border-rule">
        {entries.map((entry) => (
          <article key={entry.slug} className="py-8">
            <MetadataLine items={[formatDate(entry.date)]} />
            <Link href={`/writing/${entry.slug}`} className="mt-3 block">
              <h2 className="text-[28px] font-semibold tracking-[-0.06em] text-ink transition-colors duration-200 hover:text-accent">
                {entry.title}
              </h2>
            </Link>
            <p className="mt-3 text-[16.5px] leading-8 text-body">{entry.description}</p>
          </article>
        ))}
      </div>
    </Container>
  );
}
