export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('client:error', (error) => {
    const { showError } = useUiErrorHandler();
    showError(error);
  });
});
