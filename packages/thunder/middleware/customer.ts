export default defineNuxtRouteMiddleware(() => {
  const localePath = useLocalePath();
  const { customer } = useCustomer();

  if (!customer.value) {
    return navigateTo({ path: localePath(paths.authLogin) });
  }
});
