import type {
  ProductList,
  ProductListInput,
  ProductPage
} from '@thunderstorefront/types';

export interface UseProduct {
  fetchProductPage: (id: string) => Promise<ProductPage>;
  fetchProducts: (query?: ProductListInput) => Promise<ProductList>;
}

export function useProduct(): UseProduct {
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
