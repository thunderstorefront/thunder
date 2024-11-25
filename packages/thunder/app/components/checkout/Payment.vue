<script lang="ts" setup>
import type { CheckoutPayment, PaymentMethod } from '@thunderstorefront/types';

defineProps<{
  modelValue?: CheckoutPayment;
}>();

const { setPaymentMethod } = useCheckoutApi();
const { getCartId } = useCartToken();
const { showError } = useUiErrorHandler();

const emit = defineEmits<{
  (event: 'update:modelValue', value: CheckoutPayment): void;
}>();

async function selectPaymentMethod(method: PaymentMethod) {
  try {
    const response = await setPaymentMethod(getCartId(), method.code);
    emit('update:modelValue', response);
  } catch {
    showError('Can`t select payment method');
  }
}
</script>

<template>
  <div class="container mx-auto">
    <div v-if="modelValue" class="mt-6 space-y-8">
      <CheckoutPaymentMethod
        v-for="method in modelValue.availablePaymentMethods"
        :key="method.code"
        :item="method"
        :is-active="modelValue.selectedPaymentMethod?.code === method.code"
        @select-method="selectPaymentMethod"
      />
    </div>
    <div v-else>
      <BaseTypography class="mt-4">
        <span>{{ $t('messages.checkout.noPaymentMethods') }}</span>
      </BaseTypography>
    </div>
  </div>
</template>
