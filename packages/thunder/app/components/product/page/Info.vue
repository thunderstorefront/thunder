<script setup lang="ts">
import type { ProductPage } from '@thunderstorefront/types';

defineProps<{
  product: ProductPage;
}>();
</script>

<template>
  <div>
    <slot name="title">
      <h1>{{ product.title }}</h1>
    </slot>

    <div class="mb-4 flex items-center justify-start lg:mb-6">
      <slot name="price" />
    </div>

    <div class="mb-4 flex flex-col gap-4 lg:mb-6">
      <slot name="rating"></slot>
    </div>

    <div class="mb-6 text-sm text-gray-700 md:mb-10">
      <slot name="description"></slot>
    </div>

    <slot name="options"> </slot>

    <slot name="variants"> </slot>

    <slot name="add-to-cart"> </slot>
  </div>
</template>
