import type { MetadataRoute } from 'next';

import { getWorkEntries, getWritingEntries } from '@/lib/content';
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

  return [...staticRoutes, ...writingRoutes, ...workRoutes];
}
