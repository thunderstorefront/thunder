import { products } from '../../data/products';
import { categories } from '../../data/categories';

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');
  const rootCategory = categories[0];

  return {
    ...products.find((product) => product.id === id),
    categories: rootCategory ? rootCategory.children : []
  };
});
