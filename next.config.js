module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  i18n: {
    locales: ['en-US'/*, 'ru'*/],
    defaultLocale: 'en-US',
    domains: [
      /*
      {
        domain: 'transforma.ru',
        defaultLocale: 'ru',
      }*/
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Developer',
            value: 'https://vaseker.ru',
          },
        ],
      }
    ]
  }
}
