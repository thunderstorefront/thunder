<script lang="ts" setup>
import type { Product } from '@thunderstorefront/types';

defineProps<{
  product: Product;
  qty: number;
}>();
</script>

<template>
  <div class="mb-5 flex gap-4">
    <div>
      <NuxtImg
        format="webp"
        :src="product.thumbnail.url"
        :alt="product.thumbnail.label"
        class="max-w-[45px] rounded-lg md:max-w-[60px]"
      />
    </div>
    <div>
      <BaseTypography class="flex flex-col text-sm">
        <span class="mb-2">
          {{ product.title }}
        </span>
        <div class="flex items-center">
          <span class="mr-2">{{ qty }}</span>
          <span class="mr-2">x</span>
          <span class="text-base font-semibold">
            <ProductPrice :price-range="product.priceRange" />
          </span>
        </div>
      </BaseTypography>
    </div>
  </div>
</template>
