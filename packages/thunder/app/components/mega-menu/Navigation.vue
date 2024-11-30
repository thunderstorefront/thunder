<script lang="ts" setup>
const { updateMegaMenu, menuItems } = useMegaMenu();
const { storeConfig } = useStoreConfig();

const rootCategory = storeConfig.value?.rootCategoryId ?? '';

await useAsyncData('megaMenu', () => updateMegaMenu(rootCategory));
</script>

<template>
  <div v-if="menuItems.length" class="hidden lg:flex">
    <div class="flex items-center gap-2 dark:text-white">
      <MegaMenuTrigger />
      <LocalizedLink
        v-for="category in menuItems"
        :key="category.id"
        :to="getCategoryPath(category.slug)"
        class="p-4 hover:underline"
        exact-active-class="font-bold"
      >
        <span>{{ category.title }}</span>
      </LocalizedLink>
    </div>
    <MegaMenuList />
  </div>
</template>
