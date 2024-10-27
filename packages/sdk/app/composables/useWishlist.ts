import type { Wishlist, WishlistListInput } from '@thunderstorefront/types';

export interface UseWishlist {
  wishlist: Ref<Wishlist | null>;
  fetchWishlist: (input?: WishlistListInput) => Promise<Wishlist>;
  addProductToWishlist: (productId: string) => Promise<Wishlist>;
  removeProductFromWishlist: (productId: string) => Promise<Wishlist>;
}

export function useWishlist(): UseWishlist {
  const client = useClient();
  const wishlist = useState<Wishlist | null>('wishlist', () => null);

  async function fetchWishlist(input?: WishlistListInput): Promise<Wishlist> {
    return await client(`/api/wishlist`, {
      query: input
    });
  }

  async function addProductToWishlist(productId: string): Promise<Wishlist> {
    return await client(`/api/wishlist/add`, {
      method: 'POST',
      query: {
        productId
      }
    });
  }

  async function removeProductFromWishlist(
    productId: string
  ): Promise<Wishlist> {
    return await client(`/api/wishlist/remove`, {
      method: 'POST',
      query: {
        productId
      }
    });
  }

  return {
    wishlist,
    fetchWishlist,
    addProductToWishlist,
    removeProductFromWishlist
  };
}
