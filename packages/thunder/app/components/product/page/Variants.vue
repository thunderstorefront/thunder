<script setup lang="ts">
import type { ProductPage } from '@thunderstorefront/types';

const props = defineProps<{ product: ProductPage }>();

const { productPath } = useProductCard(props.product);
</script>

<template>
  <div v-if="product.variants.length">
    <BaseTypography variant="subtitle" class="mb-4 font-semibold">
      {{ $t('messages.shop.moreVariants') }}
    </BaseTypography>
    <div class="flex flex-wrap gap-4">
      <NuxtLink
        v-for="variant in product.variants"
        :key="variant.id"
        :to="productPath"
        :class="{ 'hover:cursor-pointer': !variant.inStock }"
        class="w-20"
      >
        <div
          class="flex rounded-lg border border-gray-200 bg-white p-2"
          :class="[
            variant.inStock ? 'hover:shadow-md' : 'bg-gray-100 opacity-60'
          ]"
        >
          <NuxtImg
            class="mx-auto h-14 w-auto rounded-lg object-contain"
            :src="variant.thumbnail.url"
            :alt="variant.thumbnail.label"
          />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
