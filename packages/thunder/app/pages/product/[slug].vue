<script lang="ts" setup>
const params = useRoute().params;
const { fetchRoute } = useStoreRoute();
const { fetchProductPage } = useProduct();

const productId = ref<string>('');
const url = params.slug.toString();

const { data: routeData } = await useAsyncData(`storeRouteData-${url}`, () =>
  fetchRoute(params.slug.toString())
);

const isProductType = computed(
  () => routeData.value && routeData.value.type === 'Product'
);

if (!isProductType.value) {
  useRedirect(url, routeData.value);
}

productId.value = routeData.value?.id ?? '';

const { data: product } = await useAsyncData(
  `productPageData-${productId.value}`,
  () => fetchProductPage(productId.value)
);

useHead({
  title: computed(() => `${product?.value?.title ?? ''}`)
});
</script>

<template>
  <ProductPageContainer v-if="product">
    <template #gallery>
      <ProductPageGallery :product="product" />
    </template>
    <template #info>
      <ProductPageAddToCartForm :product="product" class="lg:pl-6">
        <ProductPageInfo :product="product">
          <template #title>
            <ProductPageBreadcrumbs :product="product" class="mb-6" />
            <BaseTypography variant="heading" class="mb-6">
              <h1>{{ product.title }}</h1>
            </BaseTypography>
          </template>
          <template #price>
            <ProductPagePrice :product="product" />
          </template>
          <template #variants>
            <ProductPageVariants :product="product" class="mb-6" />
          </template>
        </ProductPageInfo>
      </ProductPageAddToCartForm>
    </template>
    <template #content>
      <ProductPageDescription :product="product" />
      <ProductPageUpsell :product-slug="product.slug" />
      <ProductReviewList
        :product-id="product.id"
        :product-title="product.title"
      />
      <ProductPageCrosssel :product-slug="product.slug" />
    </template>
  </ProductPageContainer>
</template>
