/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/work/jw-marriott-441-rooms',
        destination: '/work',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
