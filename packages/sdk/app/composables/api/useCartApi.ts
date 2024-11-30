import type { Cart, SetCartAddressInput } from '@thunderstorefront/types';
import { useClient } from '../utils/useClient';

export interface UseCartApi<TCart = Cart> {
  fetchCart: (cartId: string) => Promise<TCart>;
  createEmptyCart: () => Promise<TCart>;
  mergeCarts: (
    sourceCartId: string,
    destinationCartId: string
  ) => Promise<TCart>;
  setGuestEmailToCart: (cartId: string, email: string) => Promise<TCart>;
  applyDiscountCode: (cartId: string, code: string) => Promise<TCart>;
  setCartAddress: (input: SetCartAddressInput) => Promise<TCart>;
}

export function useCartApi(): UseCartApi {
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
      body: {
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
      body: {
        cartId,
        code
      }
    });
  }

  async function setCartAddress(input: SetCartAddressInput): Promise<Cart> {
    return await client(`/api/cart/address/set-address`, {
      method: 'POST',
      body: input
    });
  }

  return {
    fetchCart,
    createEmptyCart,
    mergeCarts,
    setGuestEmailToCart,
    applyDiscountCode,
    setCartAddress
  };
}
