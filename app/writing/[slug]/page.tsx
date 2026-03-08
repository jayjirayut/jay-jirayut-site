import type { Metadata } from 'next';
import Link from 'next/link';
import { compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import remarkGfm from 'remark-gfm';

import { Container } from '@/components/container';
import { mdxComponents } from '@/components/mdx-components';
import { MetadataLine } from '@/components/metadata-line';
import { getAdjacentWritingEntries, getWritingEntries, getWritingEntry } from '@/lib/content';
import { absoluteUrl, formatDate, siteConfig } from '@/lib/site';

type WritingPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getWritingEntries().map((entry) => ({
    slug: entry.slug
  }));
}

export async function generateMetadata({ params }: WritingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getWritingEntry(slug);

  if (!entry) {
    return {};
  }

  return {
    title: entry.title,
    description: entry.description,
    keywords: entry.tags,
    alternates: {
      canonical: absoluteUrl(`/writing/${entry.slug}`)
    },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url: absoluteUrl(`/writing/${entry.slug}`),
      type: 'article',
      publishedTime: entry.date,
      authors: [siteConfig.name],
      tags: entry.tags
    }
  };
}

export default async function WritingPostPage({ params }: WritingPageProps) {
  const { slug } = await params;
  const entry = getWritingEntry(slug);

  if (!entry) {
    notFound();
  }

  const { newer, older } = getAdjacentWritingEntries(entry.slug);
  const { content } = await compileMDX({
    source: entry.body,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm]
      }
    }
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: entry.title,
    description: entry.description,
    datePublished: entry.date,
    dateModified: entry.date,
    author: {
      '@type': 'Person',
      name: siteConfig.name
    },
    publisher: {
      '@type': 'Person',
      name: siteConfig.name
    },
    mainEntityOfPage: absoluteUrl(`/writing/${entry.slug}`)
  };

  return (
    <Container size="shell" className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="max-w-reading space-y-6 border-b border-rule pb-10">
        <p className="section-kicker">Essay</p>
        <MetadataLine items={[formatDate(entry.date), entry.readingTime]} />
        <h1 className="text-[40px] font-bold leading-[1.02] tracking-[-0.08em] text-ink sm:text-[48px]">
          {entry.title}
        </h1>
        <p className="max-w-2xl text-[16.5px] leading-8 text-body">{entry.description}</p>
      </header>

      <article className="editorial-prose">{content}</article>

      <nav className="grid gap-4 border-t border-rule pt-8 sm:grid-cols-2">
        <Link
          href="/writing"
          className="surface-panel flex h-full flex-col justify-between p-5"
          data-static="true"
        >
          <span className="section-kicker">Back</span>
          <span className="mt-3 text-[18px] tracking-[-0.04em] text-ink">All writing</span>
        </Link>

        <div className="grid gap-4">
          {newer ? (
            <Link
              href={`/writing/${newer.slug}`}
              className="surface-panel flex h-full flex-col justify-between p-5"
            >
              <span className="section-kicker">Newer</span>
              <span className="mt-3 text-[18px] leading-7 tracking-[-0.04em] text-ink">
                {newer.title}
              </span>
            </Link>
          ) : null}
          {older ? (
            <Link
              href={`/writing/${older.slug}`}
              className="surface-panel flex h-full flex-col justify-between p-5"
            >
              <span className="section-kicker">Older</span>
              <span className="mt-3 text-[18px] leading-7 tracking-[-0.04em] text-ink">
                {older.title}
              </span>
            </Link>
          ) : null}
        </div>
      </nav>
    </Container>
  );
}
