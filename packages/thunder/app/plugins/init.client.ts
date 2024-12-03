export default defineNuxtPlugin(async (nuxtApp): Promise<void> => {
  const config = useRuntimeConfig().public.thunder;
  const isReloaded = useCookie(config.reloadedToken);

  if (isReloaded.value) {
    window.location.reload();
  }
});
