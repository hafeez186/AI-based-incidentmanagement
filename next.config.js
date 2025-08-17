/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,

  images: {
    unoptimized: false,
    domains: [],
  },

  compress: true,
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
    ];
  },

  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
