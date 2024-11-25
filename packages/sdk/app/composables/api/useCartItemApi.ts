import type { Cart, CartItemInput } from '@thunderstorefront/types';
import { useClient } from '../utils';

export interface UseCartItemApi<TCart = Cart> {
  removeItem: (cartId: string, itemId: string) => Promise<TCart>;
  changeQuantity: (
    cartId: string,
    itemId: string,
    quantity: number
  ) => Promise<TCart>;
  addItem: (cartId: string, input: CartItemInput[]) => Promise<TCart>;
}

export function useCartItemApi(): UseCartItemApi {
  const client = useClient();

  async function removeItem(cartId: string, itemId: string): Promise<Cart> {
    return await client('/api/cart-item/remove', {
      method: 'post',
      body: {
        cartId,
        itemId
      }
    });
  }

  async function changeQuantity(
    cartId: string,
    itemId: string,
    quantity: number
  ): Promise<Cart> {
    return await client('/api/cart-item/update', {
      method: 'post',
      body: {
        cartId,
        itemId,
        quantity
      }
    });
  }

  async function addItem(
    cartId: string,
    cartItems: CartItemInput[]
  ): Promise<Cart> {
    return await client('/api/cart-item/add', {
      method: 'post',
      body: {
        cartId,
        cartItems
      }
    });
  }

  return {
    addItem,
    removeItem,
    changeQuantity
  };
}
