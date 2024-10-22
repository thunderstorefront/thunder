import { cart } from '../../data/cart';

export default defineEventHandler(async (event) => {
  const body = await readBody<{
    cartId: string;
    itemId: string;
    quantity: number;
  }>(event);
  cart.items = cart.items.map((item) => {
    if (item.id === body.itemId) {
      item.quantity = body.quantity;
    }
    return item;
  });
  return cart;
});
