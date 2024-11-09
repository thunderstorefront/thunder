export default defineNuxtPlugin(async (): Promise<void> => {
  const sdkConfig = useRuntimeConfig().public.thunderSdk;
  const config = useRuntimeConfig().public.thunder;

  const cartToken = useCookie(sdkConfig.cartToken);
  const customerToken = useCookie(sdkConfig.authToken);
  const storeToken = useCookie(sdkConfig.storeToken);
  const isReloaded = useCookie(config.reloadedToken);

  const {
    storeConfig,
    fetchStoresConfig,
    fetchStoreConfig,
    updateStoreConfig
  } = useStoreConfig();
  const { updateCustomer } = useCustomer();
  const { cart, createEmptyCart, fetchCart, updateCart } = useCart();

  const handleInitError = () => {
    if (import.meta.client && !isReloaded.value) {
      clearAllCookies();
      isReloaded.value = 'true';
      window.location.reload();
    }
  };

  if (storeToken.value) {
    await useAsyncData(`storeConfig-${storeToken.value}`, () =>
      updateStoreConfig(storeToken.value as string)
    );
  } else {
    const { data } = await useAsyncData('storesConfigData', () =>
      fetchStoresConfig()
    );

    if (!data.value || !data.value[0]) {
      handleInitError();
      return;
    }

    storeToken.value = data.value[0].storeId;
    storeConfig.value = data.value[0];
  }

  if (cartToken.value) {
    await useAsyncData(`cart-${cartToken.value}`, () =>
      updateCart(cartToken.value as string)
    );
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
    await useAsyncData('customer', () => updateCustomer());
  }
});
