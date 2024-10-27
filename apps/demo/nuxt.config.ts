// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@thunderstorefront/thunder'],

  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  compatibilityDate: '2024-10-01'
})
