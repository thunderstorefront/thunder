import type {
  Cart,
  Customer,
  LoginUserInput,
  RegisterAccountInput,
  UpdateUserInput
} from '@thunderstorefront/types';

export interface UseCustomerApi<TCustomer = Customer, TCart = Cart> {
  fetchCustomer: () => Promise<TCustomer>;
  loginCustomer: (input: LoginUserInput) => Promise<{ token: string }>;
  fetchCustomerCart: () => Promise<TCart>;
  registerCustomer: (input: RegisterAccountInput) => Promise<TCustomer>;
  changeCustomerPassword: (
    currentPassword: string,
    newPassword: string
  ) => Promise<TCustomer>;
  changeCustomerEmail: (email: string) => Promise<TCustomer>;
  changeCustomerData: (input: UpdateUserInput) => Promise<TCustomer>;
}

export function useCustomerApi(): UseCustomerApi {
  const client = useClient();

  async function fetchCustomer(): Promise<Customer> {
    return await client('/api/account/customer');
  }

  async function loginCustomer(
    input: LoginUserInput
  ): Promise<{ token: string }> {
    return await client<{ token: string }>('/api/account/login', {
      method: 'POST',
      body: input
    });
  }

  async function registerCustomer(
    input: RegisterAccountInput
  ): Promise<Customer> {
    return await client('/api/account/register', {
      method: 'POST',
      body: {
        input
      }
    });
  }

  async function changeCustomerPassword(
    currentPassword: string,
    newPassword: string
  ): Promise<Customer> {
    return await client('/api/account/customer/change-password', {
      method: 'POST',
      body: {
        currentPassword,
        newPassword
      }
    });
  }

  async function changeCustomerEmail(email: string): Promise<Customer> {
    return await client('/api/account/customer/change-email', {
      method: 'POST',
      body: {
        email
      }
    });
  }

  async function changeCustomerData(input: UpdateUserInput): Promise<Customer> {
    return await client('/api/account/customer/change-email', {
      method: 'POST',
      body: {
        input
      }
    });
  }

  async function fetchCustomerCart(): Promise<Cart> {
    return await client('/api/account/customer/cart');
  }

  return {
    fetchCustomer,
    loginCustomer,
    registerCustomer,
    fetchCustomerCart,
    changeCustomerPassword,
    changeCustomerEmail,
    changeCustomerData
  };
}
