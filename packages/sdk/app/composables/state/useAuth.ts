import { type Ref, nextTick } from 'vue';
import { useRuntimeConfig, useCookie, useState } from '#app';

export interface UseAuth {
  token: Ref<string | null>;
  onLogin: (tokenData: string) => Promise<void>;
  onLogout: () => Promise<void>;
}

export function useAuth(): UseAuth {
  const authTokenKey = useRuntimeConfig().public.thunderSdk.authToken;
  const cookie = useCookie(authTokenKey);
  const authToken = useState<string | null>(
    'authToken',
    () => cookie.value ?? null
  );

  async function onLogin(tokenData: string): Promise<void> {
    authToken.value = tokenData;
    cookie.value = tokenData;
    await nextTick();
  }

  async function onLogout(): Promise<void> {
    authToken.value = null;
    cookie.value = null;
    await nextTick();
  }

  return {
    token: authToken,
    onLogin,
    onLogout
  };
}
