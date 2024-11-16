<script lang="ts" setup>
import type { Product } from '@thunderstorefront/types';

const props = defineProps<{
  product: Product;
}>();

const { t } = useI18n();
const { errors, inputs } = useAddToCartForm();
const { addItemAndUpdateCart } = useCartItem();
const { showSuccess, showNotification } = useUiNotification();
const { showError } = useUiErrorHandler();

const input = computed(() => inputs.value[props.product.id] ?? null);

async function submitAddToCartForm(): Promise<void> {
  if (errors.value.length) {
    showNotification(errors.value);
    return;
  }

  if (!input.value) return;

  try {
    await addItemAndUpdateCart([input.value]);
    showSuccess(
      t('messages.shop.productAddedToCart').replace('%1', props.product.title)
    );
  } catch (error) {
    showError(error);
  }
}
</script>

<template>
  <form class="w-full" @submit.prevent="submitAddToCartForm">
    <slot />
  </form>
</template>
