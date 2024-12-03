<script lang="ts" setup>
import type { Money } from '@thunderstorefront/types';

defineProps<{
  label: string;
  price: Money;
}>();
</script>

<template>
  <BaseTypography
    varinat="subtitle"
    class="mb-4 flex w-full items-center justify-between"
  >
    <div>
      <span>{{ label }}</span>
    </div>
    <div class="font-bold">
      <Money v-bind="price" />
    </div>
  </BaseTypography>
</template>
