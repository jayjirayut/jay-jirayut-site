import type { Metadata } from 'next';
import Link from 'next/link';
import { compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import remarkGfm from 'remark-gfm';

import { Container } from '@/components/container';
import { mdxComponents } from '@/components/mdx-components';
import { MetadataLine } from '@/components/metadata-line';
import { getWorkEntries, getWorkEntry } from '@/lib/content';
import { absoluteUrl, formatDate } from '@/lib/site';

type WorkPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getWorkEntries().map((entry) => ({
    slug: entry.slug
  }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getWorkEntry(slug);

  if (!entry) {
    return {};
  }

  return {
    title: entry.title,
    description: entry.description,
    keywords: entry.tags,
    alternates: {
      canonical: absoluteUrl(`/work/${entry.slug}`)
    },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url: absoluteUrl(`/work/${entry.slug}`),
      type: 'article'
    }
  };
}

export default async function WorkDetailPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const entry = getWorkEntry(slug);

  if (!entry) {
    notFound();
  }

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

  return (
    <Container size="shell" className="space-y-12">
      <header className="max-w-reading space-y-6 border-b border-rule pb-10">
        <p className="section-kicker">Work note</p>
        <MetadataLine items={[formatDate(entry.date), ...entry.tags]} />
        <h1 className="text-[40px] font-bold leading-[1.02] tracking-[-0.08em] text-ink sm:text-[48px]">
          {entry.title}
        </h1>
        <p className="max-w-2xl text-[16.5px] leading-8 text-body">{entry.description}</p>
      </header>

      <article className="editorial-prose">{content}</article>

      <nav className="border-t border-rule pt-8">
        <Link
          href="/work"
          className="surface-panel inline-flex p-5 text-[18px] tracking-[-0.04em] text-ink"
          data-static="true"
        >
          Back to work
        </Link>
      </nav>
    </Container>
  );
}
