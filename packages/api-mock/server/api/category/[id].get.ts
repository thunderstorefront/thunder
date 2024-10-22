import { categories } from '../../data/categories';
import type { Category } from '@thunderstorefront/types';

function findCategoryById(category: Category, id?: string): Category | null {
  if (category.id === id) {
    return category;
  }
  if (category.children) {
    for (const child of category.children) {
      const foundCategory = findCategoryById(child, id);
      if (foundCategory) {
        return foundCategory;
      }
    }
  }
  return null;
}

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id');
  return findCategoryById(categories[0], id);
});
