import { cart } from '../../data/cart';
import { products } from '../../data/products';
import { mockCartItemPrices } from '../../mocks';
import type { CartItemInput } from '@thunderstorefront/types';
import { faker } from '@faker-js/faker';

export default defineEventHandler(async (event) => {
  const body = await readBody<{ cartId: string; cartItems: CartItemInput[] }>(
    event
  );
  const productsToAdd = products.filter((product) =>
    body.cartItems.map((item) => item.productId).includes(product.id)
  );
  cart.items.push(
    ...productsToAdd.map((product) => ({
      id: faker.string.uuid(),
      quantity:
        body.cartItems.find((item) => item.productId === product.id)
          ?.quantity ?? 1,
      product: product,
      prices: mockCartItemPrices()
    }))
  );
  cart.totalQuantity = cart.items.length;
  return cart;
});
