import type { Product } from '@thunderstorefront/types';
import type { ComputedRef } from 'vue';

export interface UseProductCard {
  productPath: ComputedRef<string>;
  addToCart: (productId: string, quantity: number) => Promise<void>;
  addToWishlist: (productId: string) => Promise<void>;
}

export function useProductCard(product: Product): UseProductCard {
  const { addProductToWishlist } = useWishlist();
  const localePath = useLocalePath();
  const { t } = useI18n();
  const { addItemAndUpdateCart } = useCartItem();
  const { showSuccess } = useUiNotification();
  const { showError } = useUiErrorHandler();

  const productPath = computed(() => localePath(getProductPath(product.slug)));

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
        path: productPath.value
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
    productPath,
    addToCart,
    addToWishlist
  };
}
