<script lang="ts" setup>
const { cart } = useCart();
</script>

<template>
  <div v-if="cart" class="rounded-lg border bg-white p-6 shadow-md">
    <BaseTypography class="mb-2 flex justify-between" color="text-gray-800">
      <div>
        {{ $t('messages.shop.subtotal') }}
      </div>
      <div v-if="cart.prices">
        <ProductPrice :price="cart.prices.subtotal" />
      </div>
    </BaseTypography>
    <hr class="my-4" />
    <BaseTypography
      variant="subtitle"
      class="mb-2 flex justify-between"
      color="text-gray-800"
    >
      <div>
        {{ $t('messages.shop.total') }}
      </div>
      <div v-if="cart.prices.grandTotal">
        <ProductPrice :price="cart.prices.grandTotal" />
      </div>
    </BaseTypography>
    <BaseTypography variant="caption" color="text-gray-600">
      {{ $t('messages.shop.includingVat') }}
    </BaseTypography>
    <div class="my-6">
      <LocalizedLink :to="ROUTES.checkout">
        <UButton
          color="primary"
          variant="solid"
          size="xl"
          block
          type="submit"
          :label="$t('messages.shop.checkout')"
        />
      </LocalizedLink>
    </div>
    <div class="mb-6 border-b" />
    <CartDiscountCoupon />
  </div>
</template>
