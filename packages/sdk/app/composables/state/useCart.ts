import type { Cart } from '@thunderstorefront/types';
import type { Ref } from 'vue';
import { useState } from '#app';
import { useCartToken } from './useCartToken';
import { useCartApi } from '../api/useCartApi';

export interface UseCart {
  cart: Ref<Cart | null>;
  updateCart: (cartId: string) => Promise<Cart>;
  resetCart: () => Promise<Cart>;
}

export function useCart(): UseCart {
  const cart = useState<Cart | null>('cart', () => null);
  const { fetchCart, createEmptyCart } = useCartApi();
  const { setCartToken } = useCartToken();

  async function updateCart(cartId: string): Promise<Cart> {
    cart.value = await fetchCart(cartId);
    return cart.value;
  }

  async function resetCart(): Promise<Cart> {
    cart.value = await createEmptyCart();
    setCartToken(cart.value.id);
    return cart.value;
  }

  return {
    cart,
    updateCart,
    resetCart
  };
}
