import { faker } from '@faker-js/faker';
import type {
  Route,
  RouteCategory,
  RouteData,
  RoutePage,
  RouteProduct,
  Routes
} from '@thunderstorefront/types';

export const mockRouteData = <T extends Routes>(type: T): RouteData<T> => ({
  type,
  redirectCode: faker.number.int({ min: 300, max: 399 }),
  relativeUrl: faker.internet.url()
});

export const mockRoutePage = (): RoutePage => ({
  ...mockRouteData('Page'),
  id: faker.string.uuid(),
  slug: faker.lorem.slug(),
  title: faker.lorem.sentence()
});

export const mockRouteProduct = (): RouteProduct => ({
  ...mockRouteData('Product'),
  title: faker.commerce.productName(),
  slug: faker.lorem.slug(),
  id: ''
});

export const mockRouteCategory = (): RouteCategory => ({
  ...mockRouteData('Category'),
  title: faker.commerce.department(),
  slug: faker.lorem.slug(),
  id: ''
});

export const mockRoute = (type: Routes): Route => {
  switch (type) {
    case 'Page':
      return mockRoutePage();
    case 'Product':
      return mockRouteProduct();
    case 'Category':
      return mockRouteCategory();
  }
};
