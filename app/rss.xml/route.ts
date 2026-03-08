import { getWritingEntries } from '@/lib/content';
import { absoluteUrl, siteConfig } from '@/lib/site';

export const dynamic = 'force-static';

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function toRssDate(value: string) {
  const [year, month, day] = value.split('-').map(Number);

  return new Date(Date.UTC(year, month - 1, day)).toUTCString();
}

export async function GET() {
  const entries = getWritingEntries();
  const lastBuildDate = entries[0] ? toRssDate(entries[0].date) : new Date().toUTCString();

  const items = entries
    .map(
      (entry) => `
        <item>
          <title>${escapeXml(entry.title)}</title>
          <link>${absoluteUrl(`/writing/${entry.slug}`)}</link>
          <guid>${absoluteUrl(`/writing/${entry.slug}`)}</guid>
          <pubDate>${toRssDate(entry.date)}</pubDate>
          <description>${escapeXml(entry.description)}</description>
        </item>`
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escapeXml(siteConfig.name)}</title>
      <link>${siteConfig.url}</link>
      <description>${escapeXml(siteConfig.description)}</description>
      <language>en-us</language>
      <lastBuildDate>${lastBuildDate}</lastBuildDate>
      <atom:link href="${absoluteUrl('/rss.xml')}" rel="self" type="application/rss+xml" />
      ${items}
    </channel>
  </rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
    }
  });
}
