<script setup lang="ts">
const { cart, resetCart } = useCart();
const { token } = useCartToken();
const { customer } = useCustomer();
const { createOrder, fetchPayment, fetchShipping } = useCheckoutApi();
const { showError } = useUiErrorHandler();
const localizePath = useLocalePath();
const { orderNumber } = useCheckoutOrder();

const isOrderSubmitted = ref(false);
const isOrderProcessing = ref(false);
const activeStep = ref(3);

const { data: shippingData } = await useAsyncData(
  'shippingData',
  () => fetchShipping(token.value),
  {
    watch: [cart]
  }
);
const { data: paymentData } = await useAsyncData(
  'paymentData',
  () => fetchPayment(token.value),
  {
    watch: [shippingData]
  }
);

const steps = [
  {
    step: 'shipping',
    label: 'Personal Data',
    value: 1
  },
  {
    step: 'payment',
    label: 'Shipping',
    value: 2
  },
  {
    step: 'agreement',
    label: 'Payment',
    value: 3
  }
];

const isPaymentAvailable = computed(() => {
  return !!(
    cart.value?.email &&
    shippingData.value?.selectedShippingMethod &&
    paymentData.value?.selectedPaymentMethod
  );
});

async function payNow() {
  try {
    isOrderSubmitted.value = true;
    isOrderProcessing.value = true;

    orderNumber.value = await createOrder(token.value);
    await resetCart();
    await navigateTo({
      path: localizePath(ROUTES.checkoutSuccess)
    });
  } catch (error) {
    showError(error);
  } finally {
    isOrderSubmitted.value = false;
    isOrderProcessing.value = false;
  }
}

useHead({
  title: 'Checkout'
});

definePageMeta({
  layout: 'checkout',
  middleware: ['checkout']
});
</script>

<template>
  <ContainerOneColumn>
    <div
      v-if="cart && !isOrderSubmitted"
      class="my-8 flex flex-col items-start gap-4 lg:my-16 lg:flex-row"
    >
      <CheckoutSummary
        class="order-last w-full lg:w-1/3"
        :shipping-method="shippingData?.selectedShippingMethod || undefined"
      />

      <CheckoutSteps
        class="w-full gap-4 md:flex-1 lg:w-2/3"
        :active-step="activeStep"
      >
        <template #steps>
          <CheckoutStepIndicator
            v-for="step in steps"
            :key="step.value"
            :step="step.value"
            :current-step="activeStep"
            :label="step.label"
          />
        </template>
        <template #address>
          <div v-if="customer">
            <CheckoutCustomerAddress />
          </div>
          <div v-else>
            <CheckoutGuestAddress />
          </div>
        </template>
        <template #shipping>
          <CheckoutShipping v-if="cart.billingAddress" v-model="shippingData" />
        </template>
        <template #payment>
          <CheckoutPayment
            v-if="shippingData?.selectedShippingMethod"
            v-model="paymentData"
            class="mb-12"
          />
          <form @submit.prevent="payNow">
            <CheckoutAgreements class="mb-6" />
            <UButton
              block
              type="submit"
              size="xl"
              :label="$t('messages.shop.placeOrder')"
              :disabled="!isPaymentAvailable"
              :loading="isOrderProcessing"
            />
          </form>
        </template>
      </CheckoutSteps>
    </div>
    <ScreenLoader v-if="isOrderProcessing" />
  </ContainerOneColumn>
</template>
