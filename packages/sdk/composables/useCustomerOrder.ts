import type { CustomerOrder, OrderListInput } from '@thunderstorefront/types';

export interface UseCustomerOrder {
  fetchOrders: (input?: OrderListInput) => Promise<CustomerOrder[]>;
}

export function useCustomerOrder(): UseCustomerOrder {
  const client = useClient();

  async function fetchOrders(input?: OrderListInput): Promise<CustomerOrder[]> {
    return await client('/api/account/customer/orders', {
      query: input
    });
  }

  return {
    fetchOrders
  };
}
