<script lang="ts" setup>
import type { PriceRange } from '@thunderstorefront/types';

defineProps<{
  priceRange: PriceRange;
}>();
</script>

<template>
  <div>
    <div v-if="priceRange.maxPrice" class="flex gap-4">
      <Money class="font-semibold" v-bind="priceRange.minPrice" />
      <Money
        v-if="priceRange.maxPrice.value > priceRange.minPrice.value"
        v-bind="priceRange.maxPrice"
        class="text-sm line-through lg:text-base"
      />
    </div>
    <div v-else>
      <Money v-bind="priceRange.minPrice" />
    </div>
  </div>
</template>
