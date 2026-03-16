import { ImageResponse } from 'next/og';

import { getWritingEntries, getWritingEntry } from '@/lib/content';

export function generateStaticParams() {
  return getWritingEntries().map((entry) => ({
    slug: entry.slug
  }));
}

export const size = {
  width: 1200,
  height: 630
};

export const contentType = 'image/png';

export default async function OpenGraphImage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getWritingEntry(slug);

  const title = entry?.title ?? 'Writing';
  const description = entry?.description ?? '';

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#fafaf8',
          color: '#111111',
          padding: '72px',
          fontFamily: 'sans-serif'
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: 2,
            textTransform: 'uppercase',
            color: '#7a7a7a'
          }}
        >
          Jay Jirayut Chatphet
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 900 }}>
          <div
            style={{
              fontSize: 56,
              lineHeight: 1.08,
              letterSpacing: -3,
              fontWeight: 700
            }}
          >
            {title}
          </div>
          {description ? (
            <div
              style={{
                fontSize: 26,
                lineHeight: 1.4,
                color: '#3d3d3d'
              }}
            >
              {description}
            </div>
          ) : null}
        </div>
        <div
          style={{
            height: 1,
            width: '100%',
            background: '#e2e1dd'
          }}
        />
      </div>
    ),
    { ...size }
  );
}
