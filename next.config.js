/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [''],
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    // localeDetection: false,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

module.exports = nextConfig;
