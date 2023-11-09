/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        // hostname: '192.168.0.234:4001',
        hostname: '192.168.0.237:4001',
        // hostname: 'hajjmanagment.online',
        port: '',
        pathname: '/*',
      },
    ],
    domains: [
      'basis.org.bd',
      '36.255.68.123',
      '192.168.0.234',
      '192.168.0.237',
      'hajjmanagment.online',
      'images.pexels.com',
      'http://192.168.0.234:4001/',
      'http://192.168.0.240:4001/',
      'http://192.168.0.237:4001/',
    ],
  },
  i18n,
};

module.exports = nextConfig;
