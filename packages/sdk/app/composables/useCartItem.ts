import type { CartItemInput, CartItem } from '@thunderstorefront/types';

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
  const client = useClient();
  const loading = useState<boolean>('cartItemLoading', () => false);
  const { cart } = useCart();

  async function removeItemAndUpdateCart(itemId: string): Promise<void> {
    try {
      loading.value = true;
      cart.value = await client('/api/cart-item/remove', {
        method: 'post',
        body: {
          cartId: cart.value?.id,
          itemId
        }
      });
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
      cart.value = await client('/api/cart-item/update', {
        method: 'post',
        body: {
          cartId: cart.value?.id,
          itemId,
          quantity
        }
      });
    } finally {
      loading.value = false;
    }
  }

  async function addItemAndUpdateCart(
    cartItems: CartItemInput[]
  ): Promise<void> {
    try {
      loading.value = true;
      cart.value = await client('/api/cart-item/add', {
        method: 'post',
        body: {
          cartId: cart.value?.id,
          cartItems
        }
      });
    } finally {
      loading.value = false;
    }
  }

  const cartItems = computed(() => cart.value?.items ?? []);

  return {
    loading,
    addItemAndUpdateCart,
    removeItemAndUpdateCart,
    changeQuantityAndUpdateCart,
    cartItems
  };
}
