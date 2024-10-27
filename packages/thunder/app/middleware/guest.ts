export default defineNuxtRouteMiddleware(() => {
  const localePath = useLocalePath();
  const { customer } = useCustomer();

  if (customer.value) {
    if (import.meta.server) {
      return navigateTo({ path: localePath(paths.account) });
    }

    return abortNavigation();
  }
});
