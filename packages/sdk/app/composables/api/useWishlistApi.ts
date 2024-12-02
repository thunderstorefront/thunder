import type { Wishlist, WishlistListInput } from '@thunderstorefront/types';

export interface UseWishlistApi<TWishlist = Wishlist> {
  fetchWishlist: (input?: WishlistListInput) => Promise<TWishlist>;
  addProductToWishlist: (productId: string) => Promise<TWishlist>;
  removeProductFromWishlist: (productId: string) => Promise<TWishlist>;
}

export function useWishlistApi(): UseWishlistApi {
  const client = useClient();

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
    fetchWishlist,
    addProductToWishlist,
    removeProductFromWishlist
  };
}
