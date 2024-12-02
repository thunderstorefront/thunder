import type { Category } from '@thunderstorefront/types';

export interface UseCategoryApi<TCategory = Category> {
  fetchCategory: (slug: string) => Promise<TCategory>;
}

export function useCategoryApi(): UseCategoryApi {
  const client = useClient();

  async function fetchCategory(id: string): Promise<Category> {
    return await client(`/api/category/${id}`);
  }

  return {
    fetchCategory
  };
}
