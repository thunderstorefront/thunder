<script setup lang="ts">
const { cart, createEmptyCart } = useCart();
const { customer } = useCustomer();
const { billingAddress, selectedPaymentMethod, selectedShippingMethod } =
  useCheckout();
const { placeOrder } = useCheckoutOrder();
const { showError } = useUiErrorHandler();
const localePath = useLocalePath();

const isOrderSubmitted = ref(false);
const isOrderProcessing = ref(false);
const activeStep = ref(1);

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
    selectedShippingMethod.value &&
    selectedPaymentMethod.value
  );
});

async function payNow() {
  try {
    isOrderSubmitted.value = true;
    isOrderProcessing.value = true;

    await placeOrder();
    cart.value = await createEmptyCart();
    await navigateTo({
      path: localePath(paths.checkoutSuccess)
    });
  } catch (error) {
    showError(error);
  } finally {
    isOrderSubmitted.value = false;
    isOrderProcessing.value = false;
  }
}

function setActiveStep() {
  if (billingAddress.value) {
    activeStep.value = 2;
  }

  if (selectedShippingMethod.value) {
    activeStep.value = 3;
  }

  if (selectedPaymentMethod.value?.code) {
    activeStep.value = 4;
  }
}

setActiveStep();

watch(cart, () => {
  setActiveStep();
});

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
      <CheckoutSummary class="order-last w-full lg:w-1/3" />

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
          <CheckoutShipping />
        </template>
        <template #payment>
          <CheckoutPayment class="mb-12" />
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
