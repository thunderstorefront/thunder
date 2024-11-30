import type { Route } from '@thunderstorefront/types';
import { useClient } from '../utils';

export interface UseStoreRouteApi<TRoute = Route> {
  fetchRoute: (route: string) => Promise<TRoute>;
}

export function useStoreRouteApi(): UseStoreRouteApi {
  const client = useClient();

  async function fetchRoute(route: string): Promise<Route> {
    return await client(`/api/route/${route}`);
  }

  return { fetchRoute };
}
