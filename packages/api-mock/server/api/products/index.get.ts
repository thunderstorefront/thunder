import type { ProductList, ProductListInput } from '@thunderstorefront/types';
import { products } from '../../data/products';
import { filters } from '../../data/filters';
import { DEFAULT_SORT_BY, SORT_FIELD_OPTIONS } from '../../mocks/const';

export default defineEventHandler((event): ProductList => {
  const { pageSize = 24, currentPage = 1 } = getQuery<ProductListInput>(event);
  const totalPages = Math.ceil(products.length / pageSize);

  return {
    items: products.slice((currentPage - 1) * pageSize, currentPage * pageSize),
    filters: filters,
    sort: {
      default: DEFAULT_SORT_BY,
      options: SORT_FIELD_OPTIONS
    },
    pageInfo: {
      currentPage,
      totalPages
    },
    totalCount: products.length
  };
});
