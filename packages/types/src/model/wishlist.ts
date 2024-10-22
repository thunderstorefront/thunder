import { Product } from './product';

export type WishlistItem = {
  id: string;
  product: Product;
};

export type Wishlist = {
  id: string;
  itemsCount: number;
  items: WishlistItem[];
};
