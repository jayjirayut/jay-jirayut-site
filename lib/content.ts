import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';
import readingTime from 'reading-time';

export type ContentCollection = 'writing' | 'work';

export type ContentFrontmatter = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  published: boolean;
  featured: boolean;
};

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

  return {
    ...(data as ContentFrontmatter),
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
