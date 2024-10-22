import type { ProductListInput } from '@thunderstorefront/types';

export interface UseProductList {
  getProductListQuery: (input?: ProductListInput) => ProductListInput;
}

export function useProductList(): UseProductList {
  const { getFilters } = useFiltering();
  const { getSearch } = useSearch();
  const { getSort } = useSorting();
  const { getPage } = usePagination();
  const { storeConfig } = useStoreConfig();

  function getProductListQuery(input?: ProductListInput): ProductListInput {
    return {
      sort: { ...getSort(), ...input?.sort },
      filters: { ...getFilters(), ...input?.filters },
      currentPage: getPage() || input?.currentPage,
      pageSize: input?.pageSize || storeConfig.value?.gridPerPage,
      search: getSearch() || input?.search
    };
  }

  return {
    getProductListQuery
  };
}
