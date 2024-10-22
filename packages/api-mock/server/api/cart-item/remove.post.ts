import { cart } from '../../data/cart';

export default defineEventHandler(async (event) => {
  const body = await readBody<{ cartId: string; itemId: string }>(event);
  cart.items = cart.items.filter((item) => item.id !== body.itemId);
  cart.totalQuantity = cart.items.length;
  return cart;
});
