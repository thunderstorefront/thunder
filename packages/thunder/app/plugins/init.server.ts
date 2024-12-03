export default defineNuxtPlugin(async (nuxtApp): Promise<void> => {
  const config = useRuntimeConfig().public.thunder;
  const thunderConfig = useRuntimeConfig().public.thunderSdk;

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
    if (!isReloaded.value) {
      setStoreToken(null);
      setCartToken(null);
      setAuthToken(null);
      isReloaded.value = 'true';
    }
  };

  const initializeStore = async (): Promise<void> => {
    if (storeToken.value) {
      await updateStoreConfig(storeToken.value);
    } else {
      const stores = await fetchStoresConfig();
      const storeData = stores[0];
      setStoreToken(storeData?.storeId ?? null);
      storeConfig.value = storeData ?? null;
    }
    nuxtApp.provide(thunderConfig.storeToken, storeToken.value);
  };

  const initializeCart = async (): Promise<void> => {
    if (cartToken.value) {
      await updateCart(cartToken.value);
    } else {
      const cartData = await createEmptyCart();

      setCartToken(cartData.id);
      cart.value = cartData;
    }
  };

  const initializeCustomer = async (): Promise<void> => {
    if (customerToken.value) {
      await updateCustomer();
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
