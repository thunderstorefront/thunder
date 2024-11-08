import { mockStoreConfig } from '../mocks';
import type { StoreConfig } from '@thunderstorefront/types';

export const stores: StoreConfig[] = [
  mockStoreConfig('USD', 'en_US', 'demo_store_1'),
  mockStoreConfig('EUR', 'en_DE', 'demo_store_2')
];
