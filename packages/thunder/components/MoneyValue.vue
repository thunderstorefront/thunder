<script lang="ts" setup>
import type { Money } from '@thunderstorefront/types';

export type NumberFormatProps = Intl.NumberFormatOptions;

const props = defineProps<Money>();

const options: NumberFormatProps = {
  style: 'currency',
  currency: props.currency
};
const { formatNumber } = useNumberFormat(options);
</script>

<template>
  <div class="flex w-full items-center">
    <span>{{ formatNumber().format(value) }}</span>
  </div>
</template>
