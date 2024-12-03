import { mockRoute, mockRouteData } from '../../mocks';
import type { Category } from '@thunderstorefront/types';
import { categories } from '../../data/categories';
import { products } from '../../data/products';

function findCategoryBySlug(
  categories: Category[],
  slug?: string
): Category | null {
  for (const category of categories) {
    if (category.slug === slug) {
      return category;
    }
    if (category.children) {
      const foundCategory = findCategoryBySlug(category.children, slug);
      if (foundCategory) {
        return foundCategory;
      }
    }
  }
  return null;
}

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug');
  const category = findCategoryBySlug(categories, slug);

  if (category) {
    return {
      ...mockRouteData('Category'),
      id: category.id,
      title: category.title,
      slug: category.slug
    };
  }

  const product = products.find((product) => product.slug === slug);

  if (product) {
    return {
      ...mockRouteData('Product'),
      id: product.id,
      title: product.title,
      slug: product.slug
    };
  }

  return mockRoute('Page');
});
