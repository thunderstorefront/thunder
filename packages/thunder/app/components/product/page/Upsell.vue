<script lang="ts" setup>
const props = defineProps<{
  productSlug: string;
}>();

const { fetchProducts } = useProduct();

const { data } = await useAsyncData('upsell-products', () =>
  fetchProducts({
    filters: {
      productSlug: {
        eq: props.productSlug
      }
    },
    pageSize: 4
  })
);
</script>

<template>
  <div v-if="data?.items?.length" class="flex w-full flex-col space-y-8">
    <BaseTypography variant="heading" color="text-gray-800 dark:text-white">
      <h2>
        {{ $t('messages.shop.youMayLike') }}
      </h2>
    </BaseTypography>
    <div>
      <ProductCarousel :products="data.items" />
    </div>
  </div>
</template>
