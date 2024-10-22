export default defineNuxtPlugin(async (): Promise<void> => {
  const sdkConfig = useRuntimeConfig().public.thunderSdk;
  const config = useRuntimeConfig().public.thunder;
  const cartToken = useCookie(sdkConfig.cartToken);
  const customerToken = useCookie(sdkConfig.authToken);
  const storeToken = useCookie(sdkConfig.storeToken);
  const isReloaded = useCookie(config.reloadedToken);
  const { storeConfig, fetchStoresConfig, fetchStoreConfig } = useStoreConfig();
  const { customer, fetchCustomer } = useCustomer();
  const { cart, createEmptyCart, fetchCart } = useCart();

  try {
    if (!storeToken.value) {
      const stores = await fetchStoresConfig();
      storeToken.value = stores[0].storeId;
    }

    const { data: storeConfigData } = await useAsyncData(
      'storeConfigData',
      () => fetchStoreConfig(storeToken.value as string)
    );

    storeConfig.value = storeConfigData.value;

    if (!cartToken.value) {
      const cartData = await createEmptyCart();
      cartToken.value = cartData.id;
    }

    const { data: cartData } = await useAsyncData('cartData', () =>
      fetchCart(cartToken.value as string)
    );

    cart.value = cartData.value;

    if (customerToken.value) {
      const { data: customerData } = await useAsyncData('customerData', () =>
        fetchCustomer()
      );
      customer.value = customerData.value;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    if (import.meta.client) {
      if (!isReloaded.value) {
        clearAllCookies();
        window.location.reload();
        isReloaded.value = '1';
      }
    }
  }
});
