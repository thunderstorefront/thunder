export default defineAppConfig({
  apiMockLayer: {
    name: 'Thunder Api Mock layer'
  }
});

declare module '@nuxt/schema' {
  interface AppConfigInput {
    apiMockLayer?: {
      /** Project name */
      name?: string;
    };
  }
}
