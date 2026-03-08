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
    <Container size="reading" className="space-y-12">
      <header className="space-y-6 border-b border-rule pb-10">
        <MetadataLine items={[formatDate(entry.date), ...entry.tags]} />
        <h1 className="text-[40px] font-bold leading-[1.05] tracking-[-0.08em] text-ink sm:text-[46px]">
          {entry.title}
        </h1>
        <p className="text-[16.5px] leading-8 text-body">{entry.description}</p>
      </header>

      <article>{content}</article>

      <nav className="border-t border-rule pt-8 text-[14px] text-body">
        <Link
          href="/work"
          className="text-accent transition-colors duration-200 hover:underline hover:underline-offset-4"
        >
          Back to work
        </Link>
      </nav>
    </Container>
  );
}
