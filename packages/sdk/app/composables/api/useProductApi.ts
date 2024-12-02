import type {
  ProductList,
  ProductListInput,
  ProductPage
} from '@thunderstorefront/types';

export interface UseProductApi<
  TProductPage = ProductPage,
  TProductList = ProductList
> {
  fetchProductPage: (id: string) => Promise<TProductPage>;
  fetchProducts: (query?: ProductListInput) => Promise<TProductList>;
}

export function useProductApi(): UseProductApi {
  const client = useClient();

  async function fetchProducts(query?: ProductListInput): Promise<ProductList> {
    return await client('/api/products', {
      query
    });
  }

  async function fetchProductPage(id: string): Promise<ProductPage> {
    return await client(`/api/product-page/${id}`);
  }

  return {
    fetchProducts,
    fetchProductPage
  };
}
