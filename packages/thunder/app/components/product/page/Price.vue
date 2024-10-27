<script lang="ts" setup>
import type { ProductPage } from '@thunderstorefront/types';

const props = defineProps<{
  product: ProductPage;
}>();

const price = computed(() => props.product.priceRange);
</script>

<template>
  <div class="text-lg lg:text-xl">
    <div v-if="price.maxPrice?.value === price.minPrice.value">
      <ProductPrice :price="price.minPrice" />
    </div>
    <div v-else class="flex gap-4">
      <ProductPrice class="font-semibold" :price="price.minPrice" />
      <ProductPrice
        v-if="price.maxPrice"
        :price="price.maxPrice"
        class="text-sm line-through lg:text-base"
      />
    </div>
  </div>
</template>
