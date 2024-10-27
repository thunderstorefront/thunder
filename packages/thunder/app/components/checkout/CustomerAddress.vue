<script lang="ts" setup>
const { cart } = useCart();
defineEmits<{ 'set-address': [] }>();
</script>

<template>
  <div v-if="cart">
    <div class="mb-6">
      <BaseTypography variant="subtitle">
        {{ $t('messages.checkout.emailAddress') }}
      </BaseTypography>
      <p>{{ cart.email }}</p>
    </div>
    <CheckoutBillingAddress @set-billing-address="$emit('set-address')" />
  </div>
</template>
