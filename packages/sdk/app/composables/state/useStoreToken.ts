import type { Ref } from 'vue';
import { computed } from 'vue';
import { useRuntimeConfig, useCookie } from '#app';

export interface UseStoreToken {
  token: Ref<string>;
  setStoreToken: (id: string) => void;
  resetStoreToken: () => void;
}

export function useStoreToken(): UseStoreToken {
  const storeTokenKey = useRuntimeConfig().public.thunderSdk.storeToken;
  const cookie = useCookie(storeTokenKey);

  function setStoreToken(id: string): void {
    cookie.value = id;
  }

  function resetStoreToken(): void {
    cookie.value = null;
  }

  return {
    token: computed(() => cookie.value ?? ''),
    setStoreToken,
    resetStoreToken
  };
}