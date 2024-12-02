import type { Ref } from 'vue';

export interface UseCheckoutOrder {
  orderNumber: Ref<string | null>;
}

export function useCheckoutOrder(): UseCheckoutOrder {
  const orderNumber = useState<string | null>('orderNumber', () => null);

  return {
    orderNumber
  };
}
