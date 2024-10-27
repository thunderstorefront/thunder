export interface UseStoreToken {
  token: Ref<string | null>;
  getStoreId: () => string;
  setStoreId: (id: string) => void;
}

export function useStoreToken(): UseStoreToken {
  const storeTokenKey = useRuntimeConfig().public.thunderSdk.storeToken;
  const storeIdCookie = useCookie(storeTokenKey);

  function getStoreId(): string {
    return storeIdCookie.value ?? '';
  }

  function setStoreId(id: string): void {
    storeIdCookie.value = id;
  }

  return {
    token: computed(() => storeIdCookie.value ?? null),
    setStoreId,
    getStoreId
  };
}
