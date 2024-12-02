import type { StoreConfig } from '@thunderstorefront/types';

export interface UseStoreConfigApi<TStoreConfig = StoreConfig> {
  fetchStoresConfig: () => Promise<TStoreConfig[]>;
  fetchStoreConfig: (storeId: string) => Promise<TStoreConfig>;
}

export function useStoreConfigApi(): UseStoreConfigApi {
  const client = useClient();

  async function fetchStoresConfig(): Promise<StoreConfig[]> {
    return await client(`/api/stores`);
  }

  async function fetchStoreConfig(storeId: string): Promise<StoreConfig> {
    return await client(`/api/store/config/${storeId}`);
  }

  return {
    fetchStoresConfig,
    fetchStoreConfig
  };
}
