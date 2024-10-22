import { faker } from '@faker-js/faker';
import type { StoreConfig } from '@thunderstorefront/types';
import {
  DEFAULT_GRID_PER_PAGE,
  DEFAULT_SORT_BY,
  DEFAULT_SORT_ORDER
} from './const';

export const mockStoreConfig = (
  currencyCode: string,
  locale: string,
  storeId: string
): StoreConfig => ({
  locale: locale,
  secureBaseMediaUrl: faker.internet.url(),
  storeId: storeId,
  storeName: 'default',
  storeSortOrder: DEFAULT_SORT_ORDER,
  catalogDefaultSortBy: DEFAULT_SORT_BY,
  gridPerPage: DEFAULT_GRID_PER_PAGE,
  rootCategoryId: 'cat-electronics',
  baseCurrencyCode: currencyCode
});
