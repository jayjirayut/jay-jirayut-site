import type { MetadataRoute } from 'next';

import { getWorkEntries, getWritingEntries, getWritingTags } from '@/lib/content';
import { absoluteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/writing', '/work', '/now', '/about'].map((route) => ({
    url: absoluteUrl(route || '/'),
    lastModified: new Date()
  }));

  const writingRoutes = getWritingEntries().map((entry) => ({
    url: absoluteUrl(`/writing/${entry.slug}`),
    lastModified: new Date(entry.date)
  }));

  const workRoutes = getWorkEntries().map((entry) => ({
    url: absoluteUrl(`/work/${entry.slug}`),
    lastModified: new Date(entry.date)
  }));

  const tagRoutes = getWritingTags().map(({ tag }) => ({
    url: absoluteUrl(`/writing/tags/${tag}`),
    lastModified: new Date()
  }));

  return [...staticRoutes, ...writingRoutes, ...workRoutes, ...tagRoutes];
}
