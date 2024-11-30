<template>
  <LocalizedLink
    :to="ROUTES.search"
    class="relative flex"
    title="Search products"
  >
    <UButton color="black" variant="ghost" size="xl" :padded="false">
      <template #leading>
        <Icon name="solar:magnifer-linear" class="h-8 w-8" />
      </template>
    </UButton>
  </LocalizedLink>
</template>
