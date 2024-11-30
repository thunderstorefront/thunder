import { useAuthToken } from './useAuthToken';

export interface UseAuth {
  onLogin: (tokenData: string) => Promise<void>;
  onLogout: () => Promise<void>;
}

export function useAuth(): UseAuth {
  const { setAuthToken, removeAuthToken } = useAuthToken();

  async function onLogin(tokenData: string): Promise<void> {
    setAuthToken(tokenData);
  }

  async function onLogout(): Promise<void> {
    removeAuthToken();
  }

  return {
    onLogin,
    onLogout
  };
}
