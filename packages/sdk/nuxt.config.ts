// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';
import thunderSdkConfig from './thunder-sdk.config';

export default defineNuxtConfig({
  extends: ['@thunderstorefront/api-mock'],

  runtimeConfig: {
    thunderSdk: thunderSdkConfig,
    public: {
      thunderSdk: thunderSdkConfig
    }
  },

  alias: {
    '@thunderstorefront/types': fileURLToPath(
      new URL('../../packages/types/src', import.meta.url)
    ),
    '@thunderstorefront/types/*': fileURLToPath(
      new URL('../../packages/types/src/*', import.meta.url)
    )
  },

  compatibilityDate: '2024-10-01'
});
