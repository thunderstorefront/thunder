// https://nuxt.com/docs/api/configuration/nuxt-config
import thunderConfig from '@thunderstorefront/thunder/thunder.config';
import thunderSdkConfig from '@thunderstorefront/sdk/thunder-sdk.config';

export default defineNuxtConfig({
  extends: [
    '@thunderstorefront/sdk',
    '@thunderstorefront/thunder',
    '@thunderstorefront/api-mock'
  ],

  modules: ['@nuxt/eslint'],

  future: {
    compatibilityVersion: 4
  },

  runtimeConfig: {
    public: {
      thunder: thunderConfig,
      thunderSdk: thunderSdkConfig
    }
  },

  devtools: { enabled: true },

  compatibilityDate: '2024-10-01'
});
