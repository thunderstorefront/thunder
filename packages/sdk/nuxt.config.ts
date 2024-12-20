// https://nuxt.com/docs/api/configuration/nuxt-config
import thunderSdkConfig from './thunder-sdk.config';

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },

  runtimeConfig: {
    thunderSdk: thunderSdkConfig,
    public: {
      thunderSdk: thunderSdkConfig
    }
  },

  typescript: {
    includeWorkspace: true
  },

  compatibilityDate: '2024-10-01'
});
