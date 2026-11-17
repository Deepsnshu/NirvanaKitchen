/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/images/trolley.png',
        destination: '/images/Trolley.png',
      },
    ];
  },
};

export default nextConfig;
