/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio_native' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio_native' : '',
};

module.exports = nextConfig;

