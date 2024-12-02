import { type Ref, computed } from 'vue';

export interface UseStoreToken {
  token: Ref<string>;
  setStoreToken: (id: string | null) => void;
  resetStoreToken: () => void;
}

export function useStoreToken(): UseStoreToken {
  const storeTokenKey = useRuntimeConfig().public.thunderSdk.storeToken;
  const cookie = useCookie(storeTokenKey);

  function setStoreToken(id: string | null): void {
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
