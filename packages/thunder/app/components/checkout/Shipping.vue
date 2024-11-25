<script lang="ts" setup>
import type {
  CheckoutShipping,
  ShippingMethod
} from '@thunderstorefront/types';

const { showError } = useUiErrorHandler();
const { setShippingMethod } = useCheckoutApi();
const { getCartId } = useCartToken();

defineProps<{
  modelValue?: CheckoutShipping;
}>();

const emit = defineEmits<{
  (event: 'update:modelValue', value: CheckoutShipping): void;
}>();

async function selectShippingMethod(item: ShippingMethod): Promise<void> {
  try {
    const response = await setShippingMethod(getCartId(), item.methodCode);
    emit('update:modelValue', response);
  } catch {
    showError('Unable to set the shipping method');
  }
}
</script>

<template>
  <div>
    <div v-if="modelValue" class="mt-6 space-y-8">
      <CheckoutShippingItem
        v-for="(item, index) in modelValue.availableShippingMethods"
        :key="index"
        :is-active="
          modelValue.selectedShippingMethod?.methodCode === item.methodCode
        "
        :item="item"
        @select-method="selectShippingMethod"
      />
    </div>
    <div v-else>
      <BaseTypography class="mt-4">
        <span>{{ $t('messages.checkout.noShippingMethods') }}</span>
      </BaseTypography>
    </div>
  </div>
</template>
