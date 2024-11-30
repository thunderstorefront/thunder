<script lang="ts" setup>
defineProps<{
  productSlug: string;
}>();

const { fetchProducts } = useProductApi();

const { data } = await useAsyncData('crossSellProducts', () =>
  fetchProducts({
    pageSize: 8
  })
);
</script>

<template>
  <div v-if="data?.items?.length" class="flex w-full flex-col space-y-8">
    <BaseTypography variant="heading">
      <h2>
        {{ $t('messages.shop.moreChoices') }}
      </h2>
    </BaseTypography>
    <div>
      <ProductCarousel :products="data.items" />
    </div>
  </div>
</template>
