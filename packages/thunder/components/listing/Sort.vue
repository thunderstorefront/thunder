<script lang="ts" setup>
import type { SortField } from '@thunderstorefront/types';

defineProps<{
  sort: SortField;
}>();

const { sortValue, sortOrder } = useSorting();

const emit = defineEmits(['update-product-list']);

function toggleOrder() {
  if (sortOrder.value === 'ASC') {
    sortOrder.value = 'DESC';
    return;
  }
  if (sortOrder.value === 'DESC') {
    sortOrder.value = 'ASC';
  }
}

watch([sortValue, sortOrder], () => {
  emit('update-product-list');
});
</script>

<template>
  <div v-if="sort" class="flex items-center">
    <div
      class="mr-4 flex items-center hover:cursor-pointer"
      @click="toggleOrder"
    >
      <Icon
        v-if="sortOrder === 'DESC'"
        name="solar:sort-from-bottom-to-top-bold"
        class="h-6 w-6"
      />
      <Icon v-else name="solar:sort-from-top-to-bottom-bold" class="h-6 w-6" />
    </div>
    <USelect v-model="sortValue" :options="sort.options" />
  </div>
</template>
