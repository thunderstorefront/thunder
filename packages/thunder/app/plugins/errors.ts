export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('client:error', (error) => {
    console.error(error);
  });
});
