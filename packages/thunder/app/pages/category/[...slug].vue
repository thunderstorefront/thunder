<script setup lang="ts">
import type { Category, ProductListInput } from '@thunderstorefront/types';

const { params } = useRoute();
const { fetchRoute } = useStoreRouteApi();
const { fetchCategory } = useCategoryApi();
const { fetchProducts } = useProductApi();
const { getProductListQuery } = useProductList();

const categoryId = ref('');
const category = ref<Category | null>(null);
const input = ref<ProductListInput>({});

const slug = [...(params.slug ?? '')].join('/');

const { data: routeData } = await useAsyncData(`storeRouteData-${slug}`, () =>
  fetchRoute(slug)
);

if (routeData.value?.type === 'Category') {
  categoryId.value = routeData.value.id;
}

const { data: categoryData } = await useAsyncData(
  `categoryData-${categoryId.value}`,
  () => fetchCategory(categoryId.value)
);

if (categoryData.value) {
  category.value = categoryData.value;

  input.value = {
    filters: {
      category_id: {
        eq: categoryId.value
      }
    }
  };
} else {
  useRedirect(slug, routeData.value);
}

const { data: productListData, status } = await useAsyncData(
  `productListData-${categoryId.value}`,
  () => fetchProducts(getProductListQuery(input.value))
);

async function updateProductList() {
  productListData.value = await fetchProducts(getProductListQuery(input.value));
}

useHead({
  title: computed(() => `${category.value?.title ?? ''}`)
});
</script>

<template>
  <div>
    <ContainerOneColumn v-if="categoryData">
      <div class="mb-6 md:mb-12">
        <ListingCategoryInfo :category="categoryData" />
      </div>
    </ContainerOneColumn>
    <ListingSkeleton v-if="status === 'pending'" />
    <ListingContainer
      v-if="productListData"
      :show-filters="productListData.filters.length > 0"
    >
      <template #active-filters>
        <ListingFiltersActive
          :filters="productListData.filters"
          @update-product-list="updateProductList"
        />
      </template>
      <template #toolbar-top>
        <ListingItemsCount :count="productListData.totalCount" />
        <ListingSort
          :sort="productListData.sort"
          @update-product-list="updateProductList"
        />
      </template>
      <template #sidebar>
        <FilterContainer>
          <ListingFilters
            :filters="productListData.filters"
            @update-product-list="updateProductList"
          />
        </FilterContainer>
      </template>
      <template #grid>
        <ListingGrid :count="productListData.totalCount">
          <ProductCard
            v-for="product in productListData.items"
            :key="product.id"
            :product="product"
            :variant="'regular'"
          />
        </ListingGrid>
      </template>
      <template #toolbar-bottom>
        <ListingToolbar>
          <ListingPagination
            :pagination="productListData.pageInfo"
            :total-count="productListData.totalCount"
            @update-product-list="updateProductList"
          />
        </ListingToolbar>
      </template>
    </ListingContainer>
  </div>
</template>
