import { products } from '../../data/products';
import { categories } from '../../data/categories';

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');
  return {
    ...products.find((product) => product.id === id),
    categories: categories[0].children
  };
});
