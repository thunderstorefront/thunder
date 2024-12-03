import type { Ref } from 'vue';

export interface UseCartToken {
  token: Ref<string>;
  setCartToken: (id: string | null) => void;
  resetCartToken: () => void;
}

export function useCartToken(): UseCartToken {
  const cartTokenKey = useRuntimeConfig().public.thunderSdk.cartToken;
  const cookie = useCookie(cartTokenKey);
  const tokenState = useState<string | null>(
    cartTokenKey,
    () => cookie.value ?? null
  );

  watch(tokenState, (newVal) => {
    cookie.value = newVal;
  });

  function setCartToken(id: string | null): void {
    tokenState.value = id;
  }

  function resetCartToken(): void {
    tokenState.value = null;
  }

  return {
    token: computed(() => tokenState.value ?? ''),
    setCartToken,
    resetCartToken
  };
}
