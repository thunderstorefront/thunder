<script lang="ts" setup>
const { showMegaMenu, menuItems } = useMegaMenu();
const isOpen = useState('isStoreInfoOpen');

function handleClick() {
  isOpen.value = false;
}
</script>

<template>
  <div class="flex flex-col justify-start gap-4">
    <a
      class="mb-4 hover:cursor-pointer"
      @click.prevent="showMegaMenu = !showMegaMenu"
    >
      <BaseTypography variant="heading">
        <span class="flex items-center"
          >{{ $t('messages.shop.catalog') }}
          <Icon name="solar:alt-arrow-right-linear" class="ml-2 h-8 w-8"
        /></span>
      </BaseTypography>
    </a>

    <LocalizedLink
      v-for="item in menuItems.slice(0, 3)"
      :key="item.id"
      class="hover:cursor-pointer"
      :to="getCategoryPath(item.slug)"
      @click="handleClick"
    >
      <BaseTypography variant="subtitle">
        <span>{{ item.title }}</span>
      </BaseTypography>
    </LocalizedLink>
  </div>
</template>
