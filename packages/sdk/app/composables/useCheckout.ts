import type {
  AvailableShippingMethod,
  PaymentMethod,
  ShippingMethod,
  CartBillingAddress,
  CheckoutAgreement
} from '@thunderstorefront/types';

export interface UseCheckout {
  billingAddress: ComputedRef<CartBillingAddress | null>;
  selectedShippingMethod: ComputedRef<ShippingMethod | null>;
  selectedPaymentMethod: ComputedRef<PaymentMethod | null>;
  availableShippingMethods: ComputedRef<AvailableShippingMethod[]>;
  availablePaymentMethods: ComputedRef<PaymentMethod[]>;
  fetchAgreements: () => Promise<CheckoutAgreement[]>;
}

export function useCheckout(): UseCheckout {
  const client = useClient();
  const { cart } = useCart();

  const billingAddress = computed(() => cart.value?.billingAddress ?? null);

  const selectedPaymentMethod = computed(() => {
    return cart.value?.selectedPaymentMethod ?? null;
  });

  const selectedShippingMethod = computed(() => {
    return cart.value?.shippingAddresses?.[0]?.selectedShippingMethod ?? null;
  });

  const availableShippingMethods = computed(
    () => cart.value?.shippingAddresses?.[0]?.availableShippingMethods ?? []
  );

  const availablePaymentMethods = computed(
    () => cart?.value?.availablePaymentMethods ?? []
  );

  async function fetchAgreements(): Promise<CheckoutAgreement[]> {
    return await client('/api/checkout/agreements');
  }

  return {
    billingAddress,
    selectedShippingMethod,
    selectedPaymentMethod,
    availableShippingMethods,
    availablePaymentMethods,
    fetchAgreements
  };
}
