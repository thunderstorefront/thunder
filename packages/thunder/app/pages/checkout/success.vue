<script setup lang="ts">
const { orderNumber } = useCheckoutOrder();
const localizePath = useLocalePath();

if (!orderNumber.value) {
  navigateTo({
    path: localizePath(ROUTES.home)
  });
}

useHead({
  title: 'Checkout Success'
});
</script>

<template>
  <ContainerOneColumn>
    <div class="flex min-h-[50vh] items-center">
      <div v-if="orderNumber" class="p-6">
        <BaseTypography variant="heading" class="mb-6">
          <h1>{{ $t('messages.checkout.successOrder') }}</h1>
        </BaseTypography>
        <BaseTypography variant="subtitle">
          <span>
            {{ $t('messages.checkout.yourOrderNumber') }}:
            {{ orderNumber }}</span
          >
        </BaseTypography>
      </div>
    </div>
  </ContainerOneColumn>
</template>
