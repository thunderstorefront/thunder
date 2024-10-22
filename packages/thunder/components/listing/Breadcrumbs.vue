<script setup lang="ts">
import type { Category } from '@thunderstorefront/types';

const props = defineProps<{
  category: Category;
}>();

const { setBreadcrumbs, breadcrumbs } = useBreadcrumbs();

function updateCategoryBreadcrumbs() {
  if (!props.category) return;

  const parentCategories = props.category.breadcrumbs.map((breadcrumb) => ({
    title: breadcrumb.categoryTitle,
    link: getCategoryPath(breadcrumb.categorySlug)
  }));
  const currentCategory = { title: props.category.title, link: '' };

  setBreadcrumbs([...parentCategories, currentCategory]);
}

updateCategoryBreadcrumbs();

watch(
  () => props.category,
  () => {
    updateCategoryBreadcrumbs();
  }
);
</script>

<template>
  <BaseBreadcrumbs :items="breadcrumbs" />
</template>
