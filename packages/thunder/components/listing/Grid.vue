<script setup lang="ts">
defineProps<{
  count: number;
}>();
</script>

<template>
  <div class="relative w-full">
    <div v-if="count" class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <slot></slot>
    </div>
    <div v-else>
      {{ $t('messages.shop.noResults') }}
    </div>
  </div>
</template>
