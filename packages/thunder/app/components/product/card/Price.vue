<script lang="ts" setup>
import type { Product } from '@thunderstorefront/types';

const props = defineProps<{
  product: Product;
}>();

const price = computed(() => props.product.priceRange);
const isConfigurable = computed(
  () => props.product.type === 'ConfigurableProduct'
);
</script>

<template>
  <div>
    <div v-if="isConfigurable" class="flex gap-2">
      <span>{{ $t('messages.shop.from') }}</span>
      <Money v-bind="price.minPrice" class="font-semibold" />
    </div>

    <div v-else>
      <ProductPrice :price-range="product.priceRange" />
    </div>
  </div>
</template>
