<script lang="ts" setup>
import type { Product } from '@thunderstorefront/types';

const props = defineProps<{
  product: Product;
}>();

const { variants } = useVariants();

const selectedVariant = computed(() => variants.value[props.product.id]);

const price = computed(
  () => selectedVariant.value?.priceRange ?? props.product.priceRange
);
const isConfigurable = computed(
  () => props.product.type === 'ConfigurableProduct'
);
</script>

<template>
  <div class="text-lg">
    <div v-if="isConfigurable" class="flex gap-2">
      <span v-if="!selectedVariant">{{ $t('messages.shop.from') }}</span>
      <Money v-bind="price.minPrice" class="font-semibold" />
    </div>

    <div v-else>
      <ProductPrice :price-range="product.priceRange" />
    </div>
  </div>
</template>
