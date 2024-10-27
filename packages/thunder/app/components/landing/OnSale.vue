<script lang="ts" setup>
const { fetchProducts } = useProduct();

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
        {{ $t('messages.shop.onSale') }}
      </h2>
    </BaseTypography>
    <div>
      <ProductCarousel :products="data.items" />
    </div>
  </div>
</template>
