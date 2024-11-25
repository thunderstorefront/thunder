import type {
  CustomerAddress,
  CustomerAddressInput,
  CustomerAddressListInput,
  UpdateCustomerAddressInput
} from '@thunderstorefront/types';
import { useClient } from '../utils';

export interface UseCustomerAddressApi<TCustomerAddress = CustomerAddress> {
  fetchCustomerAddresses: (
    input?: CustomerAddressListInput
  ) => Promise<TCustomerAddress[]>;
  addCustomerAddress: (
    input: CustomerAddressInput
  ) => Promise<TCustomerAddress>;
  updateCustomerAddress: (
    input: UpdateCustomerAddressInput
  ) => Promise<TCustomerAddress>;
}

export function useCustomerAddressApi(): UseCustomerAddressApi {
  const client = useClient();

  async function fetchCustomerAddresses(
    input?: CustomerAddressListInput
  ): Promise<CustomerAddress[]> {
    return await client('/api/account/customer/addresses', {
      query: input
    });
  }

  async function updateCustomerAddress(
    input: UpdateCustomerAddressInput
  ): Promise<CustomerAddress> {
    return await client('/api/account/customer/address/update', {
      method: 'POST',
      body: input
    });
  }

  async function addCustomerAddress(
    input: CustomerAddressInput
  ): Promise<CustomerAddress> {
    return await client('/api/account/customer/address/add', {
      method: 'POST',
      body: input
    });
  }

  return {
    fetchCustomerAddresses,
    addCustomerAddress,
    updateCustomerAddress
  };
}
