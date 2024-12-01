import type { Ref } from 'vue';
import { computed } from 'vue';
import { useCookie } from '#app';

export interface UseCartToken {
  token: Ref<string>;
  setCartToken: (id: string | null) => void;
  resetCartToken: () => void;
}

export function useCartToken(): UseCartToken {
  const cartTokenKey = useRuntimeConfig().public.thunderSdk.cartToken;
  const cookie = useCookie(cartTokenKey);

  function setCartToken(id: string | null): void {
    cookie.value = id;
  }

  function resetCartToken(): void {
    cookie.value = null;
  }

  return {
    token: computed(() => cookie.value ?? ''),
    setCartToken,
    resetCartToken
  };
}
