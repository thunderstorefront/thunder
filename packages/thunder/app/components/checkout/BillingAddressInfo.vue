<script lang="ts" setup>
import type { CartBillingAddress } from '@thunderstorefront/types';

defineProps<{
  billingAddress: CartBillingAddress;
}>();
</script>

<template>
  <div class="w-auto">
    <BaseTypography variant="subtitle">
      {{ $t('messages.checkout.address') }}
    </BaseTypography>
    <BaseTypography variant="caption">
      <p>{{ billingAddress.firstName }} {{ billingAddress.lastName }}</p>
      <p>
        <span v-for="(line, index) in billingAddress.street" :key="index">
          {{ line }}
        </span>
      </p>
      <p>
        {{ billingAddress.city }}, {{ billingAddress.region }}
        {{ billingAddress.postcode }}
      </p>
      <p>{{ billingAddress.country }}</p>
    </BaseTypography>
  </div>
</template>
