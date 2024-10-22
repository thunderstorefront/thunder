<script lang="ts" setup>
import type { Product } from '@thunderstorefront/types';

defineProps<{
  products: Product[];
}>();
</script>

<template>
  <Swiper
    v-if="products.length"
    :slides-per-view="'auto'"
    :space-between="16"
    :breakpoints="{
      1024: {
        spaceBetween: 24
      }
    }"
    :loop="false"
    class="product-slider"
  >
    <SwiperSlide
      v-for="(product, index) in products"
      :key="index"
      :product="product"
      class="product-slide"
    >
      <ProductCard :product="product" :variant="'filled'" />
    </SwiperSlide>
  </Swiper>
</template>

<style lang="postcss" scoped>
.product-slide {
  @apply w-[300px] lg:w-[375px];
  height: unset;
}
</style>

<style lang="postcss">
.product-slider {
  &:not(.swiper-initialized) {
    @apply overflow-hidden;

    .swiper-wrapper {
      @apply gap-4 lg:gap-6;
    }
  }
}
</style>
