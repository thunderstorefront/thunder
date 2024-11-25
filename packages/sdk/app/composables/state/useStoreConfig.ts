import type { StoreConfig } from '@thunderstorefront/types';
import type { Ref } from 'vue';
import { useState } from '#app';
import { useStoreConfigApi } from '../api/useStoreConfigApi';

export interface UseStoreConfig {
  storeConfig: Ref<StoreConfig | null>;
  updateStoreConfig: (storeId: string) => Promise<StoreConfig>;
}

export function useStoreConfig(): UseStoreConfig {
  const storeConfig = useState<StoreConfig | null>('storeConfig', () => null);
  const { fetchStoreConfig } = useStoreConfigApi();

  async function updateStoreConfig(storeId: string): Promise<StoreConfig> {
    storeConfig.value = await fetchStoreConfig(storeId);
    return storeConfig.value;
  }

  return {
    storeConfig,
    updateStoreConfig
  };
}
