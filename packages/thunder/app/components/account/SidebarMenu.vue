<template>
  <BaseCard>
    <BaseTypography variant="subtitle" class="mb-6">
      <h2>{{ $t('messages.account.navigation') }}</h2>
    </BaseTypography>
    <AccountNavigation>
      <AccountNavigationItem>
        <LocalizedLink :to="ROUTES.account">
          {{ $t('messages.account.dashboard') }}
        </LocalizedLink>
      </AccountNavigationItem>
      <AccountNavigationItem>
        <LocalizedLink :to="ROUTES.accountOrders">
          {{ $t('messages.account.orders') }}
        </LocalizedLink>
      </AccountNavigationItem>
      <AccountNavigationItem>
        <LocalizedLink :to="ROUTES.accountEdit">
          {{ $t('messages.account.profile') }}
        </LocalizedLink>
      </AccountNavigationItem>
      <AccountNavigationItem>
        <LocalizedLink :to="ROUTES.accountAddressList">
          {{ $t('messages.account.addresses') }}
        </LocalizedLink>
      </AccountNavigationItem>
      <AccountNavigationItem>
        <LocalizedLink :to="ROUTES.accountWishlist">
          {{ $t('messages.account.wishlist') }}
        </LocalizedLink>
      </AccountNavigationItem>
    </AccountNavigation>
  </BaseCard>
</template>
