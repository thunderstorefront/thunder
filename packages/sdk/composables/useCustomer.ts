import type {
  Cart,
  Customer,
  RegisterAccountInput,
  UpdateUserInput
} from '@thunderstorefront/types';

export interface UseCustomer {
  customer: Ref<Customer | null>;
  fetchCustomer: () => Promise<Customer>;
  fetchCustomerCart: () => Promise<Cart>;
  registerCustomer: (input: RegisterAccountInput) => Promise<Customer>;
  changeCustomerPassword: (
    currentPassword: string,
    newPassword: string
  ) => Promise<Customer>;
  changeCustomerEmail: (email: string) => Promise<Customer>;
  changeCustomerData: (input: UpdateUserInput) => Promise<Customer>;
}

export function useCustomer(): UseCustomer {
  const client = useClient();
  const customer = useState<Customer | null>('customerData', () => null);

  async function fetchCustomer(): Promise<Customer> {
    return await client('/api/account/customer');
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
    customer,
    registerCustomer,
    fetchCustomer,
    fetchCustomerCart,
    changeCustomerPassword,
    changeCustomerEmail,
    changeCustomerData
  };
}
