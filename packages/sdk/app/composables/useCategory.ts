import type { Category } from '@thunderstorefront/types';

export interface UseCategory {
  fetchCategory: (slug: string) => Promise<Category>;
}

export function useCategory(): UseCategory {
  const client = useClient();

  async function fetchCategory(id: string): Promise<Category> {
    return await client(`/api/category/${id}`);
  }

  return {
    fetchCategory
  };
}
