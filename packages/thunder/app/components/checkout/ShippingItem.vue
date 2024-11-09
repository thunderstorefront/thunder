<script lang="ts" setup>
import type { AvailableShippingMethod } from '@thunderstorefront/types';

defineProps<{
  isActive: boolean;
  item: AvailableShippingMethod;
}>();

defineEmits(['select-method']);
</script>

<template>
  <div
    class="mx-auto flex cursor-pointer items-center justify-between rounded-xl border px-8 py-4 dark:border-gray-700"
    :class="{ 'border border-blue-500': isActive }"
    @click="$emit('select-method', item)"
  >
    <div class="flex items-center">
      <Icon
        name="solar:check-circle-linear"
        :class="{ 'text-blue-600': isActive }"
        class="text-2xl"
      />

      <div class="mx-5 flex flex-col space-y-1 lg:flex-row">
        <BaseTypography variant="subtitle">
          {{ item.carrierTitle }}
        </BaseTypography>

        <div
          class="rounded-full bg-gray-100 px-2 text-xs text-blue-500 sm:px-4 sm:py-1 dark:bg-gray-700"
        >
          {{ item.methodTitle }}
        </div>
      </div>
    </div>

    <BaseTypography variant="subtitle">
      <Money v-bind="item.amount" class="font-bold" />
    </BaseTypography>
  </div>
</template>
