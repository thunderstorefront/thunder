<script setup lang="ts">
import type { Product } from '@thunderstorefront/types';

const props = defineProps<{
  product: Product;
  variant: 'regular' | 'filled';
}>();

const { productPath, addToCart, addToWishlist } = useProductCard(props.product);

const quantity = ref(1);
const hover = ref(false);

const price = computed(() => props.product.priceRange);
</script>

<template>
  <NuxtLink class="w-full" :title="product.title" :to="productPath">
    <div
      class="relative flex h-full w-full flex-col justify-between"
      :class="{
        'rounded-xl bg-white p-4': variant === 'filled'
      }"
    >
      <div class="relative mb-4 rounded-xl bg-white p-2 lg:p-4">
        <div class="absolute left-2 top-2">
          <span
            v-if="price.maxPrice?.value !== price.minPrice.value"
            class="inline-block rounded-full bg-green-300 px-2 py-1 text-xs uppercase last:mr-0"
          >
            {{ $t('messages.shop.sale') }}
          </span>
        </div>
        <div class="absolute right-2 top-2 z-10">
          <UButton
            color="primary"
            variant="ghost"
            size="lg"
            :title="$t('messages.shop.addToWishlist')"
            class="p-2"
            @click.prevent="addToWishlist(product.id)"
          >
            <template #leading>
              <Icon
                name="solar:heart-linear"
                class="h-5 w-5 lg:h-6 lg:w-6"
                :title="$t('messages.shop.addToWishlist')"
              />
            </template>
          </UButton>
        </div>
        <div v-if="product.reviewCount" class="absolute bottom-2 left-2 z-10">
          <StarRating :value="product.ratingSummary" :size="'16px'" />
        </div>
        <div>
          <NuxtImg
            :src="product.thumbnail.url"
            :alt="product.thumbnail.label"
            :title="product.title"
            format="webp"
            quality="100"
            loading="lazy"
            class="mx-auto h-[200px] w-auto object-contain md:h-[250px] xl:h-[300px]"
          />
        </div>
      </div>
      <div
        class="flex h-full flex-col"
        :class="{
          'dark:text-gray-900': variant === 'filled'
        }"
      >
        <span class="font-bold">{{ product.title }}</span>
        <span class="hidden text-xs text-gray-500 md:block">
          <span class="line-clamp-2">
            {{ product.shortDescription }}
          </span></span
        >
        <div class="mt-auto flex w-full items-center justify-between">
          <div v-if="price.maxPrice?.value === price.minPrice.value">
            <ProductPrice :price="price.minPrice" />
          </div>
          <div v-else class="flex items-center gap-2 lg:gap-4">
            <ProductPrice class="lg:font-semibold" :price="price.minPrice" />
            <ProductPrice
              v-if="price.maxPrice"
              :price="price.maxPrice"
              class="hidden text-xs line-through lg:block lg:text-sm"
            />
          </div>
          <UButton
            color="green"
            variant="ghost"
            size="lg"
            :padded="false"
            :title="$t('messages.shop.addToCart')"
            class="p-2"
            @click.prevent="addToCart(product.id, quantity)"
          >
            <template #leading>
              <Icon
                name="solar:cart-large-minimalistic-linear"
                class="h-5 w-5 lg:h-6 lg:w-6"
                :title="$t('messages.shop.addToCart')"
              />
            </template>
          </UButton>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
