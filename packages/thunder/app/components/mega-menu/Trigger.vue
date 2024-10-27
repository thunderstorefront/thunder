<script lang="ts" setup>
const { showMegaMenu } = useMegaMenu();

function toggleMenu() {
  showMegaMenu.value = !showMegaMenu.value;
}
</script>

<template>
  <UButton
    :title="$t('messages.shop.catalog')"
    size="xl"
    variant="ghost"
    :padded="false"
    class="text-gray-700 hover:bg-transparent lg:bg-black lg:px-4 lg:py-2 lg:text-white hover:lg:bg-gray-700"
    @click="toggleMenu"
  >
    <template #leading>
      <Icon name="solar:hamburger-menu-linear" class="h-8 w-8 lg:h-6 lg:w-6" />
      <span class="hidden lg:block">{{ $t('messages.shop.catalog') }}</span>
    </template>
  </UButton>
</template>
