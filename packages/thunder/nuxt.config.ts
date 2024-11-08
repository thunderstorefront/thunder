import thunderConfig from './thunder.config';

export default defineNuxtConfig({
  debug: process.env.NODE_ENV === 'development',

  extends: ['@thunderstorefront/sdk'],

  future: {
    compatibilityVersion: 4
  },

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@nuxt/icon',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    'nuxt-swiper'
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  i18n: {
    strategy: 'prefix',
    locales: [
      {
        code: 'en',
        iso: 'en-EN',
        file: 'en-US.json'
      }
    ],
    langDir: './lang',
    defaultLocale: 'en'
  },

  typescript: {
    includeWorkspace: true
  },

  image: {
    domains: ['vercel.app']
  },

  routeRules: {
    '/': { isr: false },
    '/content/**': { isr: false },
    '/category/**': { isr: false },
    '/product/**': { isr: false },
    '/cart/**': { ssr: false },
    '/checkout/**': { ssr: false },
    '/account/**': { ssr: false }
  },

  runtimeConfig: {
    nitro: { envPrefix: 'VERCEL_' },
    region: process.env.VERCEL_REGION,
    thunder: thunderConfig,
    public: {
      thunder: thunderConfig
    }
  },

  googleFonts: {
    families: {
      'Red Hat Display': [400, 700]
    }
  },

  swiper: {
    modules: ['navigation', 'pagination']
  },

  colorMode: {
    preference: 'light'
  },

  icon: {
    serverBundle: {
      collections: [
        'solar',
        'ri',
        'tabler',
        'material-symbols',
        'heroicons',
        'octicon'
      ]
    }
  },

  compatibilityDate: '2024-10-01'
});
