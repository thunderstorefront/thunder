import type { Ref } from 'vue';

export interface UseStoreToken {
  token: Ref<string>;
  setStoreToken: (id: string | null) => void;
  resetStoreToken: () => void;
}

export function useStoreToken(): UseStoreToken {
  const storeTokenKey = useRuntimeConfig().public.thunderSdk.storeToken;
  const cookie = useCookie(storeTokenKey);
  const tokenState = useState<string | null>(
    storeTokenKey,
    () => cookie.value ?? null
  );

  watch(tokenState, (newVal) => {
    cookie.value = newVal;
  });

  function setStoreToken(id: string | null): void {
    tokenState.value = id;
  }

  function resetStoreToken(): void {
    tokenState.value = null;
  }

  return {
    token: computed(() => tokenState.value ?? ''),
    setStoreToken,
    resetStoreToken
  };
}
