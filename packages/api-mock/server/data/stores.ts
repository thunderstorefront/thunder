import { mockStoreConfig } from '../mocks';
import type { StoreConfig } from '@thunderstorefront/types';

export const stores: StoreConfig[] = [
  mockStoreConfig('usd', 'en_US', 'demo_store_1'),
  mockStoreConfig('eur', 'en_DE', 'demo_store_2')
];
