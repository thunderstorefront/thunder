<script lang="ts" setup>
import type { LoginUserInput } from '@thunderstorefront/types';

const localizePath = useLocalePath();
const { loginCustomer } = useCustomerApi();
const { onLogin } = useAuth();
const { customer } = useCustomer();
const { fetchCustomer, fetchCustomerCart } = useCustomerApi();
const { showError } = useUiErrorHandler();
const { setCartToken, token } = useCartToken();
const { cart } = useCart();
const { mergeCarts } = useCartApi();

const formData = reactive<LoginUserInput>({
  email: '',
  password: ''
});
const isLoading = ref(false);

async function loginUser() {
  const { token } = await loginCustomer(formData);
  await onLogin(token);
  customer.value = await fetchCustomer();
}

async function mergeUserCart() {
  try {
    const customerCart = await fetchCustomerCart();
    const data = await mergeCarts(token.value, customerCart.id);

    if (!data) {
      showError('Can`t merge carts');
    }

    cart.value = data;
    setCartToken(cart.value.id);
  } catch (error) {
    showError(error);
  }
}

async function handleLogin() {
  try {
    isLoading.value = true;

    await loginUser();
    await mergeUserCart();

    navigateTo({
      path: localizePath(ROUTES.account)
    });
  } catch (error) {
    showError(error);
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <div
    class="mx-auto flex flex-col items-center justify-center p-4 md:w-1/2 md:p-10"
  >
    <div class="mb-10 w-full text-center sm:mx-auto">
      <BaseTypography variant="heading">
        <h1>
          {{ $t('messages.account.signIn') }}
        </h1>
      </BaseTypography>
    </div>
    <form class="w-full" @submit.prevent="handleLogin">
      <div class="mb-6">
        <FormField
          id="fEmail"
          v-model="formData.email"
          :label="$t('messages.form.email')"
          type="email"
          name="email"
          :placeholder="$t('messages.form.email')"
          required
        />
      </div>
      <div class="mb-6">
        <FormField
          id="fEmail"
          v-model="formData.password"
          :label="$t('messages.form.password')"
          type="password"
          name="password"
          :placeholder="$t('messages.form.password')"
          required
        />
      </div>
      <div class="mb-10">
        <UButton
          size="xl"
          color="primary"
          :label="$t('messages.account.signIn')"
          block
          :loading="isLoading"
          type="submit"
        />
      </div>
    </form>
    <p class="text-base text-gray-400">
      {{ $t('messages.account.notAMember') }}
      <LocalizedLink :to="ROUTES.authSignup" title="Sign up">
        {{ $t('messages.account.signUp') }}
      </LocalizedLink>
    </p>
  </div>
</template>
