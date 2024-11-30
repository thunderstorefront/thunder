export default defineNuxtRouteMiddleware(() => {
  const localizePath = useLocalePath();
  const { customer } = useCustomer();

  if (!customer.value) {
    return navigateTo({ path: localizePath(ROUTES.authLogin) });
  }
});
