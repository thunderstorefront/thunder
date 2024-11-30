<script lang="ts" setup>
const localizePath = useLocalePath();

const search = ref('');

function directToSearch() {
  if (!search.value) {
    return;
  }

  navigateTo({
    path: localizePath(ROUTES.search),
    query: {
      query: search.value
    }
  });
  search.value = '';
}
</script>

<template>
  <div>
    <form class="relative flex w-full" @submit.prevent="directToSearch">
      <UInput
        v-model="search"
        name="header-search"
        :placeholder="$t('messages.shop.searchProducts')"
        class="search-input flex-auto text-gray-800"
        size="lg"
        @blur="directToSearch"
      >
        <template #leading>
          <Icon name="solar:magnifer-linear" />
        </template>
      </UInput>
      <button
        type="submit"
        class="absolute right-1 top-1 flex-none rounded-full px-3 py-1.5 text-sm dark:bg-black dark:text-white"
      >
        <span>{{ $t('messages.shop.search') }}</span>
      </button>
    </form>
  </div>
</template>

<style lang="postcss">
.search-input {
  input {
    @apply rounded-md dark:bg-gray-900;
  }
}
</style>
