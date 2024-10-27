<script lang="ts" setup>
const { wishlist, fetchWishlist } = useWishlist();

const { data } = await useAsyncData('wishlistData', () =>
  fetchWishlist({ pageSize: 16, currentPage: 1 })
);

wishlist.value = data.value;
</script>

<template>
  <div>
    <BaseCard class="min-h-[500px] lg:p-12">
      <BaseTypography variant="heading" class="mb-6">
        <h1>
          {{ $t('messages.account.wishlist') }}
        </h1>
      </BaseTypography>
      <div v-if="data">
        <WishlistList :wishlist="data" />
      </div>
    </BaseCard>
  </div>
</template>
