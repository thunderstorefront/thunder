import type { Ref } from 'vue';

export interface UseCheckoutOrder {
  orderNumber: Ref<string | null>;
  placeOrder: () => Promise<void>;
}

export function useCheckoutOrder(): UseCheckoutOrder {
  const client = useClient();
  const { getCartId } = useCartToken();
  const orderNumber = useState<string | null>('orderNumber', () => null);

  async function placeOrder(): Promise<void> {
    orderNumber.value = await client('/api/checkout/order', {
      method: 'POST',
      body: {
        cartId: getCartId()
      }
    });
  }

  return {
    orderNumber,
    placeOrder
  };
}
