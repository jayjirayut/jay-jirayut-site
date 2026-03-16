import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';
import readingTime from 'reading-time';
import { z } from 'zod';

export type ContentCollection = 'writing' | 'work';

const contentFrontmatterSchema = z.object({
  title: z.string(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be YYYY-MM-DD'),
  description: z.string(),
  tags: z.array(z.string()).default([]),
  published: z.boolean().default(false),
  featured: z.boolean().default(false)
});

export type ContentFrontmatter = z.infer<typeof contentFrontmatterSchema>;

export type ContentEntry = ContentFrontmatter & {
  slug: string;
  body: string;
  readingTime: string;
  collection: ContentCollection;
};

const contentRoot = path.join(process.cwd(), 'content');

function getCollectionPath(collection: ContentCollection) {
  return path.join(contentRoot, collection);
}

function sortEntries(entries: ContentEntry[]) {
  return entries.sort((left, right) => right.date.localeCompare(left.date));
}

function readEntry(filePath: string, collection: ContentCollection): ContentEntry {
  const source = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(source);
  const slug = path.basename(filePath).replace(/\.mdx?$/, '');

  const frontmatter = contentFrontmatterSchema.parse(data);

  return {
    ...frontmatter,
    slug,
    body: content,
    readingTime: readingTime(content).text,
    collection
  };
}

function getEntries(collection: ContentCollection) {
  const directory = getCollectionPath(collection);
  const files = fs
    .readdirSync(directory)
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'));

  return sortEntries(
    files
      .map((fileName) => readEntry(path.join(directory, fileName), collection))
      .filter((entry) => entry.published)
  );
}

export function getWritingEntries() {
  return getEntries('writing');
}

export function getWorkEntries() {
  return getEntries('work');
}

export function getWritingEntry(slug: string) {
  return getWritingEntries().find((entry) => entry.slug === slug);
}

export function getWorkEntry(slug: string) {
  return getWorkEntries().find((entry) => entry.slug === slug);
}

export function getAdjacentWritingEntries(slug: string) {
  const entries = getWritingEntries();
  const index = entries.findIndex((entry) => entry.slug === slug);

  return {
    newer: index > 0 ? entries[index - 1] : undefined,
    older: index >= 0 ? entries[index + 1] : undefined
  };
}

export function getWritingTags() {
  const entries = getWritingEntries();
  const tagMap = new Map<string, number>();

  for (const entry of entries) {
    for (const tag of entry.tags) {
      tagMap.set(tag, (tagMap.get(tag) ?? 0) + 1);
    }
  }

  return Array.from(tagMap.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

export function getWritingEntriesByTag(tag: string) {
  return getWritingEntries().filter((entry) => entry.tags.includes(tag));
}
