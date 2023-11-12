/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // hostname: '192.168.0.234:4001',
        // hostname: '192.168.0.237:4001',
        hostname: 'server.sunderbanmart.com',
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
      'server.sunderbanmart.com',
    ],
  },
  i18n,
};

module.exports = nextConfig;
