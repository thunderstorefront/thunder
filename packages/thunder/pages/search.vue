<script lang="ts" setup>
const { t } = useI18n();
const { resetQueryFilters } = useFiltering();
const { searchQuery } = useSearch();
const { setPage } = usePagination();
const { setBreadcrumbs, breadcrumbs } = useBreadcrumbs();
const { fetchProducts } = useProduct();
const { getProductListQuery } = useProductList();

function updateSearchBreadcrumbs() {
  setBreadcrumbs([
    {
      title:
        (searchQuery.value &&
          `${t('messages.shop.search')}: ${searchQuery.value}`) ||
        t('messages.shop.search'),
      link: ''
    }
  ]);
}

updateSearchBreadcrumbs();

const { data, status } = await useAsyncData('searchProductList', () =>
  fetchProducts(getProductListQuery())
);

async function updateProductList() {
  data.value = await fetchProducts(getProductListQuery());
}

async function searchProducts() {
  await resetQueryFilters();
  await setPage(1);
  await updateProductList();
  updateSearchBreadcrumbs();
}

watch(searchQuery, async () => {
  await searchProducts();
});

useHead({
  title: computed(() =>
    searchQuery.value ? `Search: ${searchQuery.value}` : 'All search'
  )
});
</script>

<template>
  <div>
    <ContainerOneColumn>
      <div class="mb-6 md:mb-12">
        <BaseBreadcrumbs :items="breadcrumbs" />
        <SearchPageInfo :is-updating="status === 'pending'" />
      </div>
    </ContainerOneColumn>
    <ListingSkeleton v-if="status === 'pending'" />
    <ListingContainer v-if="data">
      <template #active-filters>
        <ListingFiltersActive
          :filters="data.filters"
          @update-product-list="updateProductList"
        />
      </template>
      <template #toolbar-top>
        <ListingItemsCount :count="data.totalCount" />
        <ListingSort
          :sort="data.sort"
          @update-product-list="updateProductList"
        />
      </template>
      <template #sidebar>
        <FilterContainer>
          <ListingFilters
            :filters="data.filters"
            @update-product-list="updateProductList"
          />
        </FilterContainer>
      </template>
      <template #grid>
        <ListingGrid :count="data.totalCount">
          <ProductCard
            v-for="product in data.items"
            :key="product.id"
            :variant="'regular'"
            :product="product"
          />
        </ListingGrid>
      </template>
      <template #toolbar-bottom>
        <ListingToolbar>
          <ListingPagination
            :pagination="data.pageInfo"
            :total-count="data.totalCount"
            @update-product-list="updateProductList"
          />
        </ListingToolbar>
      </template>
    </ListingContainer>
  </div>
</template>
