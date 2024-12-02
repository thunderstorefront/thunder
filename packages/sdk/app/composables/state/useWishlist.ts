import type { Wishlist, WishlistListInput } from '@thunderstorefront/types';
import type { Ref } from 'vue';

export interface UseWishlist {
  wishlist: Ref<Wishlist | null>;
  updateWishlist: (input?: WishlistListInput) => Promise<Wishlist>;
}

export function useWishlist(): UseWishlist {
  const wishlist = useState<Wishlist | null>('wishlist', () => null);
  const { fetchWishlist } = useWishlistApi();

  async function updateWishlist(input?: WishlistListInput): Promise<Wishlist> {
    wishlist.value = await fetchWishlist(input);
    return wishlist.value;
  }

  return {
    wishlist,
    updateWishlist
  };
}
