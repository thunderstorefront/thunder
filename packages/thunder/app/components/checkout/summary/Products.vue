<script lang="ts" setup>
const { cartItems } = useCartItem();
</script>

<template>
  <div>
    <div class="flex flex-1">
      <h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-50">
        {{ $t('messages.shop.items') }}
      </h3>
      <div class="flex-auto" />
      <LocalizedLink
        title="Edit cart"
        :to="ROUTES.cart"
        class="cursor-pointer text-base font-normal text-gray-600 underline hover:text-gray-800 dark:text-gray-50 dark:hover:text-white"
      >
        {{ $t('messages.general.edit') }}
      </LocalizedLink>
    </div>

    <div
      v-for="item in cartItems"
      :key="item.id"
      class="mt-7 flex flex-1 text-lg font-normal text-gray-800 dark:text-gray-50"
    >
      <CheckoutSummaryProductItem
        :product="item.product"
        :qty="item.quantity"
      />
    </div>
  </div>
</template>
