<script lang="ts" setup>
import type { Address } from '@thunderstorefront/types';

const { cart } = useCart();
const { setCartAddress } = useCartApi();
const { token } = useCartToken();
const { showError } = useUiErrorHandler();
const loading = ref(false);

const editAddress = ref(!cart.value?.billingAddress);
const useForShipping = ref(true);

const emit = defineEmits<{ 'set-billing-address': [] }>();

async function updateBillingAddress(address: Address) {
  try {
    loading.value = true;
    cart.value = await setCartAddress({
      cartId: token.value ?? '',
      address: {
        firstname: address.firstName,
        lastname: address.lastName,
        street: [...address.street],
        city: address.city,
        countryCode: address.country,
        region: address.region,
        telephone: address.telephone,
        postcode: address.postcode
      },
      useForShipping: useForShipping.value
    });
    emit('set-billing-address');
    editAddress.value = false;
  } catch {
    showError('Can`t update billing address');
    return;
  } finally {
    loading.value = false;
  }
}

function toggleEditAddress() {
  editAddress.value = !editAddress.value;
}
</script>

<template>
  <div v-if="cart">
    <div v-if="cart.billingAddress && !editAddress">
      <CheckoutBillingAddressInfo
        :billing-address="cart.billingAddress"
        class="mb-4"
      />
      <UButton
        color="gray"
        variant="link"
        :padded="false"
        size="xl"
        :label="'Edit'"
        @click="toggleEditAddress"
      />
    </div>
    <div v-else>
      <CheckoutAddressForm
        :address="cart.billingAddress || undefined"
        :loading="loading"
        @submit-address="updateBillingAddress"
      />
    </div>
  </div>
</template>
