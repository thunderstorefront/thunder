import type { Ref } from 'vue';
import { computed } from 'vue';
import { useRuntimeConfig, useCookie } from '#app';

export interface UseCartToken {
  token: Ref<string | null>;
  getCartId: () => string;
  setCartId: (id: string) => void;
}

export function useCartToken(): UseCartToken {
  const cartTokenKey = useRuntimeConfig().public.thunderSdk.cartToken;
  const cartIdCookie = useCookie(cartTokenKey);

  function getCartId(): string {
    return cartIdCookie.value ?? '';
  }

  function setCartId(id: string): void {
    cartIdCookie.value = id;
  }

  return {
    token: computed(() => cartIdCookie.value ?? null),
    setCartId,
    getCartId
  };
}
