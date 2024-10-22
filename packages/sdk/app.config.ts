export default defineAppConfig({
  thunderSdkLayer: {
    name: 'Thunder SDK layer'
  }
});

declare module '@nuxt/schema' {
  interface AppConfigInput {
    thunderSdkLayer?: {
      /** Project name */
      name?: string;
    };
  }
}
