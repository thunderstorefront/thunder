<script lang="ts" setup>
const { customer } = useCustomer();
const { onLogout } = useAuth();
const { resetCart } = useCart();
const localizePath = useLocalePath();

const { showError } = useUiErrorHandler();

async function handleLogout() {
  try {
    await onLogout();
    await resetCart();
    customer.value = null;
    navigateTo({
      path: localizePath(ROUTES.home)
    });
  } catch (error) {
    showError(error);
  }
}
</script>

<template>
  <div class="flex flex-col">
    <div v-if="customer">
      <div>
        <div class="mb-4">
          {{ $t('messages.general.welcome') }}, {{ customer.firstName }}
          {{ customer.lastName }}
        </div>
        <div class="flex gap-4">
          <LocalizedLink :to="ROUTES.account">
            <UButton
              color="white"
              :label="$t('messages.account.yourAccount')"
              variant="solid"
            >
              <template #leading>
                <Icon name="solar:user-circle-outline" class="text-2xl" />
              </template>
            </UButton>
          </LocalizedLink>
          <UButton
            color="white"
            :label="$t('messages.account.logout')"
            variant="ghost"
            class="hover:text-black dark:text-white"
            @click="handleLogout"
          >
            <template #leading>
              <Icon name="solar:exit-linear" class="text-2xl" />
            </template>
          </UButton>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="mb-4 flex gap-4">
        <div
          class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-600"
        >
          <Icon
            name="solar:user-circle-outline"
            class="text-2xl dark:text-white"
          />
        </div>
        <div class="flex gap-4">
          <LocalizedLink :to="ROUTES.authLogin">
            <UButton
              color="white"
              :label="$t('messages.account.signIn')"
              variant="ghost"
              class="dark;text-white hover:text-black"
            />
          </LocalizedLink>
          <LocalizedLink :to="ROUTES.authSignup">
            <UButton
              color="white"
              :label="$t('messages.account.signUp')"
              variant="ghost"
              class="hover:text-black dark:text-white"
            />
          </LocalizedLink>
        </div>
      </div>
      <div class="px-4 text-sm dark:text-gray-100">
        <p>{{ $t('messages.account.loginMessage') }}</p>
      </div>
    </div>
  </div>
</template>
