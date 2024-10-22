<script lang="ts" setup>
const localePath = useLocalePath();
const { megaMenu, fetchMegaMenu, menuItems } = useMegaMenu();
const { storeConfig } = useStoreConfig();

const rootCategory = storeConfig.value?.rootCategoryId ?? '';

const { data } = await useAsyncData('megaMenu', () =>
  fetchMegaMenu(rootCategory)
);

megaMenu.value = data.value;
</script>

<template>
  <div v-if="data" class="hidden lg:flex">
    <div class="flex items-center gap-2 dark:text-white">
      <MegaMenuTrigger />
      <NuxtLink
        v-for="category in menuItems"
        :key="category.id"
        :to="localePath(getCategoryPath(category.slug))"
        class="p-4 hover:underline"
        exact-active-class="font-bold"
      >
        <span>{{ category.title }}</span>
      </NuxtLink>
    </div>
    <MegaMenuList :mega-menu="data" />
  </div>
</template>
