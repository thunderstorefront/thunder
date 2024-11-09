import type { Cart, SetBillingAddressInput } from '@thunderstorefront/types';

export interface UseCart {
  cart: Ref<Cart | null>;
  fetchCart: (cartId: string) => Promise<Cart>;
  updateCart: (cartId: string) => Promise<Cart>;
  createEmptyCart: () => Promise<Cart>;
  mergeCarts: (
    sourceCartId: string,
    destinationCartId: string
  ) => Promise<Cart>;
  setGuestEmailToCart: (cartId: string, email: string) => Promise<Cart>;
  applyDiscountCode: (cartId: string, code: string) => Promise<Cart>;
  setBillingAddress: (input: SetBillingAddressInput) => Promise<Cart>;
  setPaymentMethod: (cartId: string, method: string) => Promise<Cart>;
  setShippingMethod: (cartId: string, method: string) => Promise<Cart>;
}

export function useCart(): UseCart {
  const cart = useState<Cart | null>('cart', () => null);
  const client = useClient();

  async function createEmptyCart(): Promise<Cart> {
    return await client('/api/cart/create', {
      method: 'POST'
    });
  }

  async function fetchCart(cartId: string): Promise<Cart> {
    return await client(`/api/cart`, {
      method: 'POST',
      body: {
        cartId
      }
    });
  }

  async function updateCart(cartId: string): Promise<Cart> {
    cart.value = await fetchCart(cartId);
    return cart.value;
  }

  async function mergeCarts(
    sourceCartId: string,
    destinationCartId: string
  ): Promise<Cart> {
    return await client(`/api/cart/merge`, {
      method: 'POST',
      body: {
        sourceCartId,
        destinationCartId
      }
    });
  }

  async function setGuestEmailToCart(
    cartId: string,
    email: string
  ): Promise<Cart> {
    return await client(`/api/cart/set-guest-email`, {
      method: 'POST',
      query: {
        cartId,
        email
      }
    });
  }

  async function applyDiscountCode(
    cartId: string,
    code: string
  ): Promise<Cart> {
    return await client(`/api/cart/discount/apply`, {
      method: 'POST',
      query: {
        cartId,
        code
      }
    });
  }

  async function setBillingAddress(
    input: SetBillingAddressInput
  ): Promise<Cart> {
    return await client(`/api/cart/set-billing-address`, {
      method: 'POST',
      body: input
    });
  }

  async function setPaymentMethod(
    cartId: string,
    method: string
  ): Promise<Cart> {
    return await client(`/api/cart/set-billing-address`, {
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
  ): Promise<Cart> {
    return await client(`/api/cart/set-shipping-method`, {
      method: 'POST',
      body: {
        cartId,
        method
      }
    });
  }

  return {
    cart,
    fetchCart,
    updateCart,
    createEmptyCart,
    mergeCarts,
    setGuestEmailToCart,
    applyDiscountCode,
    setBillingAddress,
    setPaymentMethod,
    setShippingMethod
  };
}
