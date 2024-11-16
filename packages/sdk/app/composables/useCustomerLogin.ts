import type { LoginUserInput } from '@thunderstorefront/types';

export interface UseCustomerLogin {
  login: (input: LoginUserInput) => Promise<string>;
  logout: () => Promise<void>;
}

export function useCustomerLogin(): UseCustomerLogin {
  const client = useClient();
  const { customer } = useCustomer();
  const { onLogout } = useAuth();

  async function login(input: LoginUserInput): Promise<string> {
    const response = await client<{ token: string }>('/api/account/login', {
      method: 'POST',
      body: input
    });

    if (!response.token) {
      throw new Error('The user cannot log in.');
    }

    return response.token;
  }

  async function logout(): Promise<void> {
    await client('/api/account/logout', {
      method: 'POST'
    });
    await onLogout();
    customer.value = null;
  }

  return {
    login,
    logout
  };
}
