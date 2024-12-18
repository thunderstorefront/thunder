<script lang="ts" setup>
import type { RegisterAccountInput } from '@thunderstorefront/types';

const { showError } = useUiErrorHandler();
const { customer } = useCustomer();
const { loginCustomer, registerCustomer } = useCustomerApi();
const localizePath = useLocalePath();
const { t } = useI18n();

const signUpData = ref<RegisterAccountInput>({
  firstName: '',
  lastName: '',
  email: '',
  password: ''
});
const loading = ref(false);

async function submitRegister() {
  const { firstName, lastName, email, password } = signUpData.value;

  if (!(firstName && lastName && email && password)) {
    showError(t('messages.error.requiredFields'));
    return;
  }

  loading.value = true;

  const data = await registerCustomer({
    firstName,
    lastName,
    email,
    password
  });

  if (!data) {
    showError('Can`t register customer');
    loading.value = false;
    return;
  }

  await loginCustomer({ email, password });
  customer.value = data;
  loading.value = false;

  navigateTo({
    path: localizePath(ROUTES.account)
  });
}
</script>

<template>
  <div
    class="mx-auto flex flex-col items-center justify-center p-4 md:w-1/2 md:p-10"
  >
    <div class="mb-10 w-full text-center sm:mx-auto">
      <BaseTypography variant="heading">
        <h1>
          {{ $t('messages.account.signUp') }}
        </h1>
      </BaseTypography>
    </div>
    <form class="w-full" @submit.prevent="submitRegister">
      <div class="mb-6">
        <UFormGroup name="firstName" :label="$t('messages.form.firstName')">
          <UInput
            v-model="signUpData.firstName"
            type="text"
            size="xl"
            :placeholder="$t('messages.form.firstName')"
            required
          />
        </UFormGroup>
      </div>
      <div class="mb-6">
        <UFormGroup name="lastName" :label="$t('messages.form.lastName')">
          <UInput
            v-model="signUpData.lastName"
            type="text"
            size="xl"
            :placeholder="$t('messages.form.lastName')"
            required
          />
        </UFormGroup>
      </div>
      <div class="mb-6">
        <UFormGroup name="email" :label="$t('messages.form.email')">
          <UInput
            v-model="signUpData.email"
            type="email"
            size="xl"
            :placeholder="$t('messages.form.email')"
            required
          />
        </UFormGroup>
      </div>
      <div class="mb-6">
        <UFormGroup name="password" :label="$t('messages.form.password')">
          <UInput
            v-model="signUpData.password"
            type="password"
            size="xl"
            :placeholder="$t('messages.form.password')"
            required
          />
        </UFormGroup>
      </div>
      <div class="mb-10">
        <UButton
          color="primary"
          size="xl"
          :label="$t('messages.account.signUp')"
          block
          type="submit"
          :loading="loading"
        />
      </div>
    </form>
    <p class="text-base text-gray-400">
      {{ $t('messages.account.alreadyHaveAccount') }}
      <LocalizedLink :to="ROUTES.authLogin" title="Login">
        {{ $t('messages.account.signInToYourAccount') }}
      </LocalizedLink>
    </p>
  </div>
</template>
