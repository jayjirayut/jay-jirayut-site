import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
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
              fontSize: 72,
              lineHeight: 1,
              letterSpacing: -4,
              fontWeight: 700
            }}
          >
            I build AI systems that work in the real world.
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.4,
              color: '#3d3d3d'
            }}
          >
            Based in Bangkok. I write about building AI, making better decisions, and
            technology people can actually use.
          </div>
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
    {
      ...size
    }
  );
}
