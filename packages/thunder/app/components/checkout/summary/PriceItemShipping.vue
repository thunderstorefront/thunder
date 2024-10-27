<script lang="ts" setup>
import type { ShippingMethod } from '@thunderstorefront/types';

const props = defineProps<{
  shippingMethod: ShippingMethod;
}>();

const methodLabel = computed(
  () =>
    `${props.shippingMethod.carrierTitle} - ${props.shippingMethod.methodTitle}`
);
</script>

<template>
  <CheckoutSummaryPriceItem
    :label="methodLabel"
    :price="shippingMethod.amount"
  />
</template>
