<script setup lang="ts">
import type { ProductPage, ProductVariant } from '@thunderstorefront/types';

const props = defineProps<{ product: ProductPage }>();

const localePath = useLocalePath();

const { variants, setVariant } = useVariants();

const selectedVariant = computed(() => variants.value[props.product.id]);

const { setPreviewImage } = usePreviewImage();

function getVariantPath(variant: ProductVariant) {
  return localePath(
    getProductPath(`${props.product.slug}?variant=${variant.id}`)
  );
}

function selectVariant(variant: ProductVariant) {
  setPreviewImage(variant.thumbnail.url);
  setVariant(props.product.id, variant);
}

watch(selectedVariant, () => {
  if (selectedVariant.value) {
    selectVariant(selectedVariant.value);
  }
});
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
        :to="getVariantPath(variant)"
        :class="{ 'hover:cursor-pointer': !variant.inStock }"
        class="w-20"
        @click.prevent="selectVariant(variant)"
      >
        <div
          class="flex rounded-lg border border-gray-200 bg-white p-2"
          :class="[
            variant.inStock ? 'hover:shadow-md' : 'bg-gray-100 opacity-60',
            variant.id === selectedVariant?.id && 'border-gray-400'
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
