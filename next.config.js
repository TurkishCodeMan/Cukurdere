const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {

  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ["en", "fr", "de"],
    defaultLocale: "en",
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap.xml',
      },
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/tr',
        destination: '/references',
        permanent: true,
      },
      {
        source: '/tr/İletişim-2',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/en',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tr/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/tr/td-750',
        destination: '/machines',
        permanent: true,
      },
      {
        source: '/tr/cukurdere-sondaj',
        destination: '/',
        permanent: true,
      },
    ]
  },
};
 
module.exports = withNextIntl(nextConfig);

