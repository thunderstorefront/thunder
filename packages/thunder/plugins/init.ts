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

  const handleInitError = () => {
    if (import.meta.client) {
      if (!isReloaded.value) {
        clearAllCookies();
        window.location.reload();
        isReloaded.value = 'true';
      }
    }
  };

  if (storeToken.value) {
    const { data } = await useAsyncData(
      `storeConfigData-${storeToken.value}`,
      () => fetchStoreConfig(storeToken.value as string)
    );

    storeConfig.value = data.value;
  } else {
    const { data } = await useAsyncData('storesConfigData', () =>
      fetchStoresConfig()
    );

    if (!data.value?.[0]) {
      handleInitError();
      return;
    }

    storeToken.value = data.value[0].storeId;
    storeConfig.value = data.value[0];
  }

  if (cartToken.value) {
    const { data } = await useAsyncData(`cartData-${cartToken.value}`, () =>
      fetchCart(cartToken.value as string)
    );

    cart.value = data.value;
  } else {
    const { data } = await useAsyncData('createCart', () => createEmptyCart());

    if (!data.value) {
      handleInitError();
      return;
    }

    cartToken.value = data.value.id;
    cart.value = data.value;
  }

  if (customerToken.value) {
    const { data } = await useAsyncData('customer', () => fetchCustomer());

    customer.value = data.value;
  }
});
