export default defineNuxtRouteMiddleware(() => {
  const localePath = useLocalePath();
  const { customer } = useCustomer();

  if (customer.value) {
    if (import.meta.server) {
      return navigateTo({ path: localePath(ROUTES.account) });
    }

    return abortNavigation();
  }
});
