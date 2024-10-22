import type { StoreConfig } from '@thunderstorefront/types';

export interface UseStoreConfig {
  storeConfig: Ref<StoreConfig | null>;
  fetchStoresConfig: () => Promise<StoreConfig[]>;
  fetchStoreConfig: (storeId: string) => Promise<StoreConfig>;
}

export function useStoreConfig(): UseStoreConfig {
  const client = useClient();
  const storeConfig = useState<StoreConfig | null>('storeConfig', () => null);

  async function fetchStoresConfig(): Promise<StoreConfig[]> {
    return await client(`/api/stores`);
  }

  async function fetchStoreConfig(storeId: string): Promise<StoreConfig> {
    return await client(`/api/store/config/${storeId}`);
  }

  return {
    storeConfig,
    fetchStoresConfig,
    fetchStoreConfig
  };
}
