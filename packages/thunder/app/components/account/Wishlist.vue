<script lang="ts" setup>
const { wishlist, updateWishlist } = useWishlist();

await useAsyncData('wishlistData', () =>
  updateWishlist({ pageSize: 16, currentPage: 1 })
);
</script>

<template>
  <BaseCard class="min-h-[500px] lg:p-12">
    <BaseTypography variant="heading" class="mb-6">
      <h1>
        {{ $t('messages.account.wishlist') }}
      </h1>
    </BaseTypography>
    <WishlistList v-if="wishlist" :wishlist="wishlist" />
  </BaseCard>
</template>
