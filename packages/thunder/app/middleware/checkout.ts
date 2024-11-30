export default defineNuxtRouteMiddleware(() => {
  const localizePath = useLocalePath();
  const { cart } = useCart();

  if (!cart.value?.items?.length) {
    return navigateTo({ path: localizePath(ROUTES.home) });
  }
});
