export default defineNuxtRouteMiddleware(() => {
  const localizePath = useLocalePath();
  const { customer } = useCustomer();

  if (customer.value) {
    if (import.meta.server) {
      return navigateTo({ path: localizePath(ROUTES.account) });
    }

    return abortNavigation();
  }
});
