<script setup lang="ts">
import type { Category } from '@thunderstorefront/types';

defineProps<{
  category: Category;
}>();
</script>

<template>
  <div class="flex flex-col">
    <BaseTypography variant="heading" class="mb-4">
      <h1>{{ category.title }}</h1>
    </BaseTypography>
    <div class="mb-6 text-sm text-gray-600" v-html="category.description" />
    <ListingBreadcrumbs :category="category" />
  </div>
</template>
