import type { CartItemInput, CartItem } from '@thunderstorefront/types';
import { type Ref, type ComputedRef, computed } from 'vue';

export interface UseCartItem {
  loading: Ref<boolean>;
  removeItemAndUpdateCart: (itemId: string) => Promise<void>;
  changeQuantityAndUpdateCart: (
    itemId: string,
    quantity: number
  ) => Promise<void>;
  addItemAndUpdateCart: (input: CartItemInput[]) => Promise<void>;
  cartItems: ComputedRef<CartItem[]>;
}

export function useCartItem(): UseCartItem {
  const loading = useState<boolean>('cartItemLoading', () => false);
  const { cart } = useCart();
  const { token } = useCartToken();
  const { removeItem, addItem, changeQuantity } = useCartItemApi();

  async function removeItemAndUpdateCart(itemId: string): Promise<void> {
    try {
      loading.value = true;
      cart.value = await removeItem(token.value, itemId);
    } finally {
      loading.value = false;
    }
  }

  async function changeQuantityAndUpdateCart(
    itemId: string,
    quantity: number
  ): Promise<void> {
    try {
      loading.value = true;
      cart.value = await changeQuantity(token.value, itemId, quantity);
    } finally {
      loading.value = false;
    }
  }

  async function addItemAndUpdateCart(
    cartItems: CartItemInput[]
  ): Promise<void> {
    try {
      loading.value = true;
      cart.value = await addItem(token.value, cartItems);
    } finally {
      loading.value = false;
    }
  }

  const cartItems = computed(() => cart.value?.items ?? []);

  return {
    loading,
    cartItems,
    addItemAndUpdateCart,
    removeItemAndUpdateCart,
    changeQuantityAndUpdateCart
  };
}
