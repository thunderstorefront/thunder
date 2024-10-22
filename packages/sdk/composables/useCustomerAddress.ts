import type {
  CustomerAddress,
  CustomerAddressInput,
  CustomerAddressListInput,
  UpdateCustomerAddressInput
} from '@thunderstorefront/types';

export interface UseCustomerAddress {
  fetchCustomerAddresses: (
    input?: CustomerAddressListInput
  ) => Promise<CustomerAddress[]>;
  addCustomerAddress: (input: CustomerAddressInput) => Promise<CustomerAddress>;
  updateCustomerAddress: (
    input: UpdateCustomerAddressInput
  ) => Promise<CustomerAddress>;
}

export function useCustomerAddress(): UseCustomerAddress {
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
