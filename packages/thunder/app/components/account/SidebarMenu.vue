<script lang="ts" setup>
const localePath = useLocalePath();
</script>

<template>
  <BaseCard>
    <BaseTypography variant="subtitle" class="mb-6">
      <h2>{{ $t('messages.account.navigation') }}</h2>
    </BaseTypography>
    <AccountNavigation>
      <AccountNavigationItem>
        <NuxtLink :to="localePath(ROUTES.account)">
          {{ $t('messages.account.dashboard') }}
        </NuxtLink>
      </AccountNavigationItem>
      <AccountNavigationItem>
        <NuxtLink :to="localePath(ROUTES.accountOrders)">
          {{ $t('messages.account.orders') }}
        </NuxtLink>
      </AccountNavigationItem>
      <AccountNavigationItem>
        <NuxtLink :to="localePath(ROUTES.accountEdit)">
          {{ $t('messages.account.profile') }}
        </NuxtLink>
      </AccountNavigationItem>
      <AccountNavigationItem>
        <NuxtLink :to="localePath(ROUTES.accountAddressList)">
          {{ $t('messages.account.addresses') }}
        </NuxtLink>
      </AccountNavigationItem>
      <AccountNavigationItem>
        <NuxtLink :to="localePath(ROUTES.accountWishlist)">
          {{ $t('messages.account.wishlist') }}
        </NuxtLink>
      </AccountNavigationItem>
    </AccountNavigation>
  </BaseCard>
</template>
