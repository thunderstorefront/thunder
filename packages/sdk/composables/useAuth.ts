export interface UseAuth {
  token: Ref<string | null>;
  onLogin: (tokenData: string) => void;
  onLogout: () => void;
}

export function useAuth(): UseAuth {
  const authTokenKey = useRuntimeConfig().public.thunderSdk.authToken;
  const authToken = useCookie(authTokenKey);

  function onLogin(tokenData: string): void {
    authToken.value = tokenData;
  }

  function onLogout(): void {
    authToken.value = '';
  }

  return {
    token: computed(() => authToken.value ?? null),
    onLogin,
    onLogout
  };
}
