import type { Page } from '@thunderstorefront/types';

export interface UsePage {
  fetchPage: (id: string) => Promise<Page>;
}

export function usePage(): UsePage {
  const client = useClient();

  async function fetchPage(id: string): Promise<Page> {
    return await client(`/api/page/${id}`);
  }

  return { fetchPage };
}
