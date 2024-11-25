import type { Customer } from '@thunderstorefront/types';
import type { Ref } from 'vue';
import { useState } from '#app';
import { useCustomerApi } from '../api/useCustomerApi';

export interface UseCustomer {
  customer: Ref<Customer | null>;
  updateCustomer: () => Promise<Customer>;
}

export function useCustomer(): UseCustomer {
  const customer = useState<Customer | null>('customerData', () => null);
  const { fetchCustomer } = useCustomerApi();

  async function updateCustomer(): Promise<Customer> {
    customer.value = await fetchCustomer();
    return customer.value;
  }

  return {
    customer,
    updateCustomer
  };
}
