const { i18n } = require('./next-i18next.config');

module.exports = {
  experimental: {
    appDir: true,
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
        destination: '/references',
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
    ]
  },
};
