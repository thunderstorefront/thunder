export default defineNuxtRouteMiddleware(() => {
  const localePath = useLocalePath();
  const { cart } = useCart();

  if (!cart.value?.items?.length) {
    return navigateTo({ path: localePath(ROUTES.home) });
  }
});
