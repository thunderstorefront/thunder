import { mockRoute, mockRouteData } from '../../mocks';
import type { Category } from '@thunderstorefront/types';
import { categories } from '../../data/categories';
import { products } from '../../data/products';

function findCategoryBySlug(
  category: Category,
  slug?: string
): Category | null {
  if (category.slug === slug) {
    return category;
  }
  if (category.children) {
    for (const child of category.children) {
      const foundCategory = findCategoryBySlug(child, slug);
      if (foundCategory) {
        return foundCategory;
      }
    }
  }
  return null;
}

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug');
  const rootCategory = categories[0];

  if (rootCategory) {
    const category = findCategoryBySlug(rootCategory, slug);

    if (category) {
      return {
        ...mockRouteData('Category'),
        id: category.id,
        title: category.title,
        slug: category.slug
      };
    }
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
