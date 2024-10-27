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
      <StarRating :value="product.ratingSummary" :size="'24px'" />
      <a
        v-if="product.reviewCount"
        href="#reviews"
        class="cursor-pointer text-sm font-normal leading-3 text-gray-500 underline duration-100 hover:text-gray-700"
      >
        {{ product.reviewCount }} {{ $t('messages.shop.reviews') }}
      </a>
    </div>

    <div class="mb-6 text-sm text-gray-700 md:mb-10">
      <span v-html="product.shortDescription" />
    </div>

    <slot name="variants"> </slot>

    <slot name="options"> </slot>

    <slot name="add-to-cart">
      <ProductPageAddToCartActions :product="product">
        <template #secondary-actions>
          <ProductAddToWishlist
            :product-title="product.title"
            :product-id="product.id"
          />
        </template>
      </ProductPageAddToCartActions>
    </slot>
  </div>
</template>
