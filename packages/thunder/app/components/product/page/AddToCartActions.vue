<script lang="ts" setup>
import type { ProductPage } from '@thunderstorefront/types';

const props = defineProps<{
  product: ProductPage;
}>();

const { setInput, updateInput } = useAddToCartForm();

const quantity = ref(1);

const payload = computed(() => ({
  quantity: quantity.value,
  productId: props.product.id
}));

setInput(payload.value);

watch(payload, () => {
  updateInput(payload.value);
});
</script>

<template>
  <div class="flex w-full flex-col space-y-4">
    <div class="mb-4 flex items-center">
      <FormInputQty
        v-model="quantity"
        class="dark:border-primary bg-white px-2 dark:border dark:bg-transparent"
      />
    </div>
    <div class="flex items-center gap-4">
      <ProductPageAddToCartButton class="w-full flex-1 md:max-w-xs" />
      <slot name="secondary-actions" />
    </div>
  </div>
</template>
