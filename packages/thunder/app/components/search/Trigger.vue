<script lang="ts" setup>
const localePath = useLocalePath();
</script>

<template>
  <NuxtLink
    :to="localePath(ROUTES.search)"
    class="relative flex"
    title="Search products"
  >
    <UButton color="black" variant="ghost" size="xl" :padded="false">
      <template #leading>
        <Icon name="solar:magnifer-linear" class="h-8 w-8" />
      </template>
    </UButton>
  </NuxtLink>
</template>
