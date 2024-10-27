<script setup lang="ts">
import type { ProductPage } from '@thunderstorefront/types';

const props = defineProps<{
  product: ProductPage;
}>();

const { breadcrumbs, setBreadcrumbs } = useBreadcrumbs();

const category = computed(() => props.product.categories[0] ?? null);

setBreadcrumbs([
  ...(category.value
    ? [
        {
          title: category.value.title,
          link: getCategoryPath(category.value.slug)
        }
      ]
    : []),
  { title: props.product.title, link: '' }
]);
</script>

<template>
  <BaseBreadcrumbs :items="breadcrumbs" />
</template>
