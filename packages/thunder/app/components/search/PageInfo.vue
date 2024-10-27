<script lang="ts" setup>
defineProps<{
  isUpdating: boolean;
}>();

const { searchQuery, setSearch, isSearchQuery } = useSearch();

function handleSearch() {
  setSearch(searchQuery.value);
}

function resetSearch() {
  if (!searchQuery.value) {
    return;
  }

  setSearch('');
}
</script>

<template>
  <div
    class="mb-4 rounded-lg py-4 text-center shadow-sm lg:mb-8 lg:py-8 dark:bg-gray-800"
  >
    <div class="flex justify-center py-4">
      <div class="relative flex w-full lg:w-2/3">
        <UInput
          v-model="searchQuery"
          name="search-input"
          icon="i-heroicons-magnifying-glass-20-solid"
          size="xl"
          color="white"
          :loading="isUpdating"
          :trailing="false"
          class="w-full"
          :ui="{ rounded: 'rounded-2xl', wrapper: '' }"
          @blur="handleSearch"
        />
        <UButton
          v-if="isSearchQuery"
          variant="ghost"
          color="gray"
          class="absolute right-1 top-1"
        >
          <template #trailing>
            <Icon
              name="ri:close-fill"
              class="text-2xl hover:cursor-pointer"
              @click="resetSearch"
            />
          </template>
        </UButton>
      </div>
    </div>
  </div>
</template>
