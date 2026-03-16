import type { Metadata } from 'next';
import Link from 'next/link';

import { Container } from '@/components/container';
import { getWritingTags } from '@/lib/content';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Tags',
  description: 'Browse writing by topic.',
  alternates: {
    canonical: absoluteUrl('/writing/tags')
  }
};

export default function TagsIndexPage() {
  const tags = getWritingTags();

  return (
    <Container size="shell" className="space-y-14">
      <header className="max-w-reading space-y-5 border-b border-rule pb-10">
        <p className="section-kicker">Tags</p>
        <h1 className="text-[40px] font-bold tracking-[-0.08em] text-ink sm:text-[48px]">
          Browse by topic
        </h1>
      </header>

      <ul className="flex flex-wrap gap-3">
        {tags.map(({ tag, count }) => (
          <li key={tag}>
            <Link
              href={`/writing/tags/${tag}`}
              className="surface-panel inline-flex items-center gap-2 px-4 py-2.5 text-[15px] text-ink transition-colors duration-200"
            >
              {tag}
              <span className="font-mono text-[11px] text-muted">{count}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
