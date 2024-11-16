<script lang="ts" setup>
const { params } = useRoute();
const { fetchRoute } = useStoreRoute();
const { fetchProductPage } = useProduct();

const productId = ref<string>('');
const url = params.slug?.toString() ?? '';

const { data: routeData } = await useAsyncData(`storeRouteData-${url}`, () =>
  fetchRoute(url)
);

if (!routeData.value) {
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
      <ProductAddToCartForm :product="product" class="lg:pl-6">
        <ProductPageInfo :product="product">
          <template #title>
            <ProductPageBreadcrumbs :product="product" class="mb-6" />
            <BaseTypography variant="heading" class="mb-6">
              <h1>{{ product.title }}</h1>
            </BaseTypography>
          </template>
          <template #description>
            <p v-html="product.shortDescription" />
          </template>
          <template #rating>
            <StarRating :value="product.ratingSummary" :size="'24px'" />
            <a
              v-if="product.reviewCount"
              href="#reviews"
              class="cursor-pointer text-sm font-normal leading-3 text-gray-500 underline duration-100 hover:text-gray-700"
            >
              {{ product.reviewCount }} {{ $t('messages.shop.reviews') }}
            </a>
          </template>
          <template #price>
            <ProductPagePrice :product="product" />
          </template>
          <template #options>
            <ProductPageOptions :product="product" class="mb-6" />
          </template>
          <template #variants>
            <ProductPageVariants :product="product" class="mb-6" />
          </template>
          <template #add-to-cart>
            <ProductAddToCartActions :product="product">
              <template #secondary-actions>
                <ProductAddToWishlist
                  :product-title="product.title"
                  :product-id="product.id"
                />
              </template>
            </ProductAddToCartActions>
          </template>
        </ProductPageInfo>
      </ProductAddToCartForm>
    </template>
    <template #content>
      <ProductPageDescription :product="product" />
      <ProductPageMetadata :product="product" />
      <ProductPageUpsell :product-slug="product.slug" />
      <ProductReviewList
        id="reviews"
        :product-id="product.id"
        :product-title="product.title"
      />
      <ProductPageCrosssel :product-slug="product.slug" />
    </template>
  </ProductPageContainer>
</template>
