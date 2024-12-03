import { categories } from '../../data/categories';
import type { Category } from '@thunderstorefront/types';

function findCategoryById(
  categories: Category[],
  id?: string
): Category | null {
  for (const category of categories) {
    if (category.id === id) {
      return category;
    }
    if (category.children) {
      const foundCategory = findCategoryById(category.children, id);
      if (foundCategory) {
        return foundCategory;
      }
    }
  }
  return null;
}

export default defineEventHandler((event): Category | undefined => {
  const id = getRouterParam(event, 'id');
  const category = findCategoryById(categories, id);

  if (!category) throw new Error('Cant find category');

  return category;
});
