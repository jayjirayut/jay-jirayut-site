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
        <p className="section-kicker">Work</p>
        <h1 className="text-[40px] font-bold tracking-[-0.08em] text-ink sm:text-[48px]">
          Selected notes on building under constraint.
        </h1>
        <p className="text-[16.5px] leading-8 text-body">
          These notes stay high-level on purpose. The point is how I think, where I was wrong, and
          what changed after the work met reality.
        </p>
      </header>

      <div className="grid gap-4 lg:grid-cols-2">
        {entries.map((entry, index) => (
          <article key={entry.slug} className="surface-panel flex h-full flex-col justify-between p-6 sm:p-7">
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <MetadataLine items={[formatDate(entry.date)]} />
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  0{index + 1}
                </span>
              </div>

              <div className="space-y-3">
                <h2 className="text-[28px] font-semibold leading-[1.08] tracking-[-0.06em] text-ink">
                  {entry.title}
                </h2>
                <p className="text-[16.5px] leading-8 text-body">{entry.description}</p>
              </div>
            </div>

            <Link
              href={`/work/${entry.slug}`}
              className="mt-8 text-[14px] text-accent transition-colors duration-200 hover:underline hover:underline-offset-4"
            >
              Read note
            </Link>
          </article>
        ))}
      </div>
    </Container>
  );
}
