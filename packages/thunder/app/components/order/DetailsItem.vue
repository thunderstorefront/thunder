<script lang="ts" setup>
import type { CustomerOrderItem } from '@thunderstorefront/types';

defineProps<{
  item: CustomerOrderItem;
}>();
</script>

<template>
  <div class="flex flex-col gap-2 border-b p-2">
    <BaseTypography variant="caption" class="flex flex-col">
      <span>{{ item.productName }}</span>
      <span>{{ item.quantityOrdered }}</span>
      <Money v-bind="item.productSalePrice" />
    </BaseTypography>
  </div>
</template>
