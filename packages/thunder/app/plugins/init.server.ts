export default defineNuxtPlugin(async (): Promise<void> => {
  const config = useRuntimeConfig().public.thunder;

  const { token: storeToken, setStoreToken } = useStoreToken();
  const { token: cartToken, setCartToken } = useCartToken();
  const { token: customerToken, setAuthToken } = useAuthToken();
  const isReloaded = useCookie(config.reloadedToken);

  const { storeConfig, updateStoreConfig } = useStoreConfig();
  const { updateCustomer } = useCustomer();
  const { cart, updateCart } = useCart();

  const { fetchStoresConfig } = useStoreConfigApi();
  const { createEmptyCart } = useCartApi();

  const handleInitError = (): void => {
    setStoreToken(null);
    setCartToken(null);
    setAuthToken(null);

    if (import.meta.client && !isReloaded.value) {
      isReloaded.value = 'true';
      window.location.reload();
    }
  };

  const initializeStore = async (): Promise<void> => {
    if (storeToken.value) {
      const { error } = await useAsyncData(
        `storeConfig-${storeToken.value}`,
        () => updateStoreConfig(storeToken.value!)
      );

      if (error.value) throw error.value;
    } else {
      const { data, error } = await useAsyncData(
        'storesConfigData',
        fetchStoresConfig
      );

      if (error.value) throw error.value;

      setStoreToken(data.value?.[0]?.storeId ?? null);
      storeConfig.value = data.value?.[0] ?? null;
    }
  };

  const initializeCart = async (): Promise<void> => {
    if (cartToken.value) {
      const { error } = await useAsyncData(`cart-${cartToken.value}`, () =>
        updateCart(cartToken.value!)
      );

      if (error.value) throw error.value;
    } else {
      const { data, error } = await useAsyncData('createCart', createEmptyCart);

      if (error.value) throw error.value;

      setCartToken(data.value?.id ?? null);
      cart.value = data.value ?? null;
    }
  };

  const initializeCustomer = async (): Promise<void> => {
    if (customerToken.value) {
      const { error } = await useAsyncData('customer', updateCustomer);

      if (error.value) throw error.value;
    }
  };

  try {
    await initializeStore();
    await initializeCart();
    await initializeCustomer();
  } catch (error) {
    console.error('Initialization failed:', error);
    handleInitError();
  }
});
