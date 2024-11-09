import { categories } from '../../data/categories';
import type { Category } from '@thunderstorefront/types';

function findCategoryById(
  category: Category,
  id?: string
): Category | undefined {
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
}

export default defineEventHandler((event): Category | undefined => {
  const id = getRouterParam(event, 'id');
  const rootCategory = categories[0];

  if (!rootCategory) return;

  return findCategoryById(rootCategory, id);
});
