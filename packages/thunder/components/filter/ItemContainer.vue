<script lang="ts" setup>
const isOpen = ref(true);
const showMore = ref(false);
</script>

<template>
  <div class="relative">
    <div
      class="flex justify-between hover:cursor-pointer"
      @click="isOpen = !isOpen"
    >
      <span class="text-md font-bold capitalize">
        <slot name="label" />
      </span>
      <span class="ml-6 flex items-center">
        <Icon name="solar:alt-arrow-down-linear" />
      </span>
    </div>
    <div
      v-if="isOpen"
      ref="filtersWrapper"
      class="relative mt-6 flex flex-wrap gap-4 pb-4"
      :class="{
        'max-h-max pb-8': showMore
      }"
    >
      <slot name="options" />
    </div>
  </div>
</template>
