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
    <Container size="reading" className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="space-y-6 border-b border-rule pb-10">
        <MetadataLine items={[formatDate(entry.date), entry.readingTime]} />
        <h1 className="text-[40px] font-bold leading-[1.05] tracking-[-0.08em] text-ink sm:text-[46px]">
          {entry.title}
        </h1>
        <p className="text-[16.5px] leading-8 text-body">{entry.description}</p>
      </header>

      <article>{content}</article>

      <nav className="flex flex-col gap-4 border-t border-rule pt-8 text-[14px] text-body sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/writing"
          className="text-accent transition-colors duration-200 hover:underline hover:underline-offset-4"
        >
          Back to writing
        </Link>

        <div className="flex flex-col gap-3 sm:items-end">
          {newer ? (
            <Link
              href={`/writing/${newer.slug}`}
              className="transition-colors duration-200 hover:text-accent"
            >
              Newer / {newer.title}
            </Link>
          ) : null}
          {older ? (
            <Link
              href={`/writing/${older.slug}`}
              className="transition-colors duration-200 hover:text-accent"
            >
              Older / {older.title}
            </Link>
          ) : null}
        </div>
      </nav>
    </Container>
  );
}
