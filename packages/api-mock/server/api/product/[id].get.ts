import { products } from '../../data/products';

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');
  return products.find((product) => product.id === id) ?? null;
});
