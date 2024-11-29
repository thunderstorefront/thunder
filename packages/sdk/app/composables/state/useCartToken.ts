import type { Ref } from 'vue';
import { computed } from 'vue';
import { useCookie } from '#app';

export interface UseCartToken {
  token: Ref<string>;
  setCartToken: (id: string) => void;
  resetCartToken: () => void;
}

export function useCartToken(): UseCartToken {
  const cartTokenKey = useRuntimeConfig().public.thunderSdk.cartToken;
  const cookie = useCookie(cartTokenKey);

  function setCartToken(id: string): void {
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
