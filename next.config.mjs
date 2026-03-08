/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/writing/what-real-world-ai-work-taught-me-about-judgment',
        destination: '/writing/what-real-world-ai-work-taught-me-about-decision-making',
        permanent: true
      },
      {
        source: '/work/jw-marriott-441-rooms',
        destination: '/work',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
