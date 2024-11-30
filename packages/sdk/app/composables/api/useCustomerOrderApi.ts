import type { CustomerOrder, OrderListInput } from '@thunderstorefront/types';
import { useClient } from '../utils';

export interface UseCustomerOrderApi<TCustomerOrder = CustomerOrder> {
  fetchOrders: (input?: OrderListInput) => Promise<TCustomerOrder[]>;
}

export function useCustomerOrderApi(): UseCustomerOrderApi {
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
