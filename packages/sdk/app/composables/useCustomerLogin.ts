import type { LoginUserInput } from '@thunderstorefront/types';

export interface UseCustomerLogin {
  login: (input: LoginUserInput) => Promise<void>;
  logout: () => Promise<void>;
}

export function useCustomerLogin(): UseCustomerLogin {
  const client = useClient();
  const { onLogin, onLogout } = useAuth();
  const { customer } = useCustomer();

  async function login(input: LoginUserInput): Promise<void> {
    const response = await client<{ token: string }>('/api/account/login', {
      method: 'POST',
      body: input
    });

    if (!response.token) {
      throw new Error('The user cannot log in.');
    }

    onLogin(`Bearer ${response.token}`);
  }

  async function logout(): Promise<void> {
    const response = await client('/api/account/logout', {
      method: 'POST'
    });

    if (!response) {
      throw new Error('The user cannot logged out.');
    }

    customer.value = null;
    onLogout();
  }

  return {
    login,
    logout
  };
}
