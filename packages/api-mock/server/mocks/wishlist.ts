import { faker } from '@faker-js/faker';
import type { Wishlist } from '@thunderstorefront/types';

// Mock for Wishlist
export const mockWishlist = (): Wishlist => ({
  id: faker.string.uuid(),
  itemsCount: faker.number.int(),
  items: []
});
