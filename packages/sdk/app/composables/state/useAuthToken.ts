import type { Ref } from 'vue';
import { useRuntimeConfig, useCookie } from '#app';

export interface UseAuthToken {
  token: Ref<string>;
  setAuthToken: (token: string) => void;
  removeAuthToken: () => void;
}

export function useAuthToken(): UseAuthToken {
  const authTokenKey = useRuntimeConfig().public.thunderSdk.authToken;
  const cookie = useCookie(authTokenKey);

  async function setAuthToken(tokenData: string): Promise<void> {
    cookie.value = tokenData;
  }

  async function removeAuthToken(): Promise<void> {
    cookie.value = null;
  }

  return {
    token: computed(() => cookie.value ?? ''),
    setAuthToken,
    removeAuthToken
  };
}
