<script lang="ts" setup>
const { fetchProducts } = useProductApi();

const { data } = await useAsyncData('bestsellerProducts', () =>
  fetchProducts({
    pageSize: 8,
    filters: { price: { from: '20', to: '30' } }
  })
);
</script>

<template>
  <div v-if="data?.items?.length" class="flex w-full flex-col space-y-8">
    <BaseTypography variant="heading">
      <h2>
        {{ $t('messages.shop.bestsellers') }}
      </h2>
    </BaseTypography>
    <div>
      <ProductCarousel :products="data.items" />
    </div>
  </div>
</template>
