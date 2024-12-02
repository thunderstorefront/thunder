import type {
  CheckoutPayment,
  CheckoutAgreement,
  CheckoutShipping
} from '@thunderstorefront/types';

export interface UseCheckoutApi<
  TCheckoutAgreement = CheckoutAgreement,
  TCheckoutPayment = CheckoutPayment,
  TCheckoutShipping = CheckoutShipping
> {
  fetchAgreements: () => Promise<TCheckoutAgreement[]>;
  fetchPayment: (cartId: string) => Promise<TCheckoutPayment>;
  fetchShipping: (cartId: string) => Promise<TCheckoutShipping>;
  setPaymentMethod: (
    cartId: string,
    method: string
  ) => Promise<TCheckoutPayment>;
  setShippingMethod: (
    cartId: string,
    method: string
  ) => Promise<TCheckoutShipping>;
  createOrder: (cartId: string) => Promise<string>;
}

export function useCheckoutApi(): UseCheckoutApi {
  const client = useClient();

  async function fetchAgreements(): Promise<CheckoutAgreement[]> {
    return await client('/api/checkout/agreements');
  }

  async function fetchPayment(cartId: string): Promise<CheckoutPayment> {
    return await client(`/api/checkout/payment`, {
      method: 'POST',
      body: {
        cartId
      }
    });
  }

  async function fetchShipping(cartId: string): Promise<CheckoutShipping> {
    return await client(`/api/checkout/shipping`, {
      method: 'POST',
      body: {
        cartId
      }
    });
  }

  async function setPaymentMethod(
    cartId: string,
    method: string
  ): Promise<CheckoutPayment> {
    return await client(`/api/checkout/payment/set-method`, {
      method: 'POST',
      body: {
        cartId,
        method
      }
    });
  }

  async function setShippingMethod(
    cartId: string,
    method: string
  ): Promise<CheckoutShipping> {
    return await client(`/api/checkout/shipping/set-method`, {
      method: 'POST',
      body: {
        cartId,
        method
      }
    });
  }

  async function createOrder(cartId: string): Promise<string> {
    return await client('/api/checkout/order/create', {
      method: 'POST',
      body: {
        cartId
      }
    });
  }

  return {
    fetchAgreements,
    fetchPayment,
    fetchShipping,
    setPaymentMethod,
    setShippingMethod,
    createOrder
  };
}
