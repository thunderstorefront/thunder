<script lang="ts" setup>
import type { Breadcrumb } from '../../types/breadcrumb';

defineProps<{
  items: Breadcrumb[];
  home?: string;
}>();
</script>

<template>
  <div
    class="flex flex-wrap items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-700 dark:text-gray-200"
  >
    <span class="flex items-center gap-2">
      <LocalizedLink
        :to="home ?? '/'"
        class="flex items-center hover:underline"
        :title="$t('messages.general.home')"
      >
        <span>{{ $t('messages.general.home') }}</span>
      </LocalizedLink>
      <span>/</span>
    </span>
    <template v-if="items?.length">
      <span
        v-for="(item, index) in items"
        :key="item.title"
        class="flex items-center gap-2"
      >
        <LocalizedLink
          v-if="item.link"
          :to="item.link"
          class="hover:underline"
          >{{ item.title }}</LocalizedLink
        >
        <span v-else>{{ item.title }}</span>
        <span v-if="index < items.length - 1"> / </span>
      </span>
    </template>
  </div>
</template>
