import type { Product } from '@thunderstorefront/types';

export interface UseProductActions {
  addToCart: (productId: string, quantity: number) => Promise<void>;
  addToWishlist: (productId: string) => Promise<void>;
}

export function useProductActions(product: Product): UseProductActions {
  const { addProductToWishlist } = useWishlistApi();
  const localizePath = useLocalePath();
  const { t } = useI18n();
  const { addItemAndUpdateCart } = useCartItem();
  const { showSuccess } = useUiNotification();
  const { showError } = useUiErrorHandler();

  async function addToCart(productId: string, quantity: number) {
    try {
      await addItemAndUpdateCart([
        {
          productId,
          quantity
        }
      ]);
      showSuccess(
        t('messages.shop.productAddedToCart').replace('%1', product.title)
      );
    } catch (error) {
      showError(error);
      navigateTo({
        path: localizePath(getProductPath(product.slug))
      });
    }
  }

  async function addToWishlist(productId: string) {
    try {
      if (productId) {
        const response = await addProductToWishlist(productId);

        if (response) {
          showSuccess(
            t('messages.wishlist.successAdded').replace('%1', product.title)
          );
        }
      }
    } catch (error) {
      showError(error);
    }
  }

  return {
    addToCart,
    addToWishlist
  };
}
