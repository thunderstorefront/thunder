<script lang="ts" setup>
import type { Money } from '@thunderstorefront/types';

defineProps<{
  price: Money;
}>();
</script>

<template>
  <Money :currency="price.currency" :value="price.value" />
</template>
