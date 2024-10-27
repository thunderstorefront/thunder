export default defineAppConfig({
  thunderTemplateLayer: {
    name: 'Thunder Template Layer'
  }
});

declare module '@nuxt/schema' {
  interface AppConfigInput {
    thunderTemplateLayer?: {
      /** Project name */
      name?: string;
    };
  }
}
