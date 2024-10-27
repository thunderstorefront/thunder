<script lang="ts" setup>
import type { Filter } from '@thunderstorefront/types';

const props = defineProps<{
  filters: Filter[];
}>();

const { setPage } = usePagination();
const { setQueryFilter } = useFiltering();
const route = useRoute();

const filtersDataExcludeCategory = computed(() =>
  excludeCategory(props.filters, route.name === 'search')
);

const emit = defineEmits(['update-product-list']);

async function updateFilters(filter: QueryFilter) {
  await setPage(1);
  await setQueryFilter(filter);
  emit('update-product-list');
}
</script>

<template>
  <div v-if="filters.length">
    <div
      v-for="filterItem in filtersDataExcludeCategory"
      :key="filterItem.attributeCode"
      class="mb-4 last:mb-0"
    >
      <FilterColor
        v-if="filterItem.attributeCode === 'color'"
        :filter="filterItem"
        @update-filters="updateFilters"
      />
      <FilterPrice
        v-else-if="filterItem.attributeCode === 'price'"
        :filter="filterItem"
        @update-filters="updateFilters"
      />
      <FilterDefault
        v-else
        :filter="filterItem"
        @update-filters="updateFilters"
      />
    </div>
  </div>
</template>
