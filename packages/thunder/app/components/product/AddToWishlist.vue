<script lang="ts" setup>
const props = defineProps<{
  productTitle: string;
  productId: string;
}>();

const { showSuccess } = useUiNotification();
const { t } = useI18n();
const { wishlist } = useWishlist();
const { addProductToWishlist, fetchWishlist } = useWishlistApi();

async function addToWishlist() {
  if (props.productId && props.productTitle) {
    const result = await addProductToWishlist(props.productId);

    if (!result) return;

    wishlist.value = await fetchWishlist();
    showSuccess(
      t('messages.wishlist.successAdded').replace('%1', props.productTitle)
    );
  }
}
</script>

<template>
  <div>
    <UButton
      color="primary"
      variant="ghost"
      size="lg"
      :title="$t('messages.shop.addToWishlist')"
      @click.stop.prevent="addToWishlist"
    >
      <template #leading>
        <Icon
          name="solar:heart-linear"
          class="text-2xl"
          :title="$t('messages.shop.addToWishlist')"
        />
      </template>
    </UButton>
  </div>
</template>
