// https://nuxt.com/docs/api/configuration/nuxt-config
import thunderSdkConfig from './thunder-sdk.config';

export default defineNuxtConfig({
  extends: ['@thunderstorefront/api-mock'],

  runtimeConfig: {
    thunderSdk: thunderSdkConfig,
    public: {
      thunderSdk: thunderSdkConfig
    }
  },

  compatibilityDate: '2024-10-01'
});
