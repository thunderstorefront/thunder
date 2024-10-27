import type { Route } from '@thunderstorefront/types';

export interface UseStoreRoute {
  fetchRoute: (route: string) => Promise<Route>;
}

export function useStoreRoute(): UseStoreRoute {
  const client = useClient();
  async function fetchRoute(route: string): Promise<Route> {
    return await client(`/api/route/${route}`);
  }
  return { fetchRoute };
}
