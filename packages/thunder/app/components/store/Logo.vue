<script setup lang="ts">
const localePath = useLocalePath();
const logoUrl = useRuntimeConfig().public.thunder.logo;
</script>

<template>
  <NuxtLink
    :to="localePath(paths.home)"
    class="flex w-[130px] items-center px-4 py-1 dark:rounded-lg dark:bg-white"
    tabindex="-1"
    title="Homepage"
  >
    <NuxtImg
      :src="logoUrl"
      alt="Thunder Logo"
      class="h-10 w-full object-contain"
    />
  </NuxtLink>
</template>
