<script setup lang="ts">
import type { Product } from '@thunderstorefront/types';

defineProps<{
  product: Product;
}>();

const imgWidth = 80;
const imgHeight = 80;
</script>

<template>
  <div
    class="gap-4justify-start mb-6 flex justify-between rounded-lg bg-white p-6 shadow-md"
  >
    <div>
      <NuxtImg
        :src="product.thumbnail.url"
        :alt="product.thumbnail.label"
        class="rounded-lg"
        :width="imgWidth"
        :height="imgHeight"
        format="webp"
        quality="50"
      />
    </div>

    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
      <div>
        <BaseTypography variant="subtitle" color="text-gray-800 mb-4">
          <span>
            {{ product.title }}
          </span>
        </BaseTypography>

        <BaseTypography variant="caption" color="text-gray-800">
          <div>
            {{ product.shortDescription }}
          </div>
        </BaseTypography>
      </div>
      <div
        class="mt-4 flex justify-between sm:mt-0 sm:block sm:space-x-6 sm:space-y-6"
      >
        <div class="flex justify-end">
          <BaseTypography color="text-gray-800">
            <ProductPrice :price-range="product.priceRange" />
          </BaseTypography>
        </div>
        <div>
          <slot name="actions" />
        </div>
      </div>
    </div>
  </div>
</template>
