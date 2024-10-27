<script lang="ts" setup>
import type { WishlistItem } from '@thunderstorefront/types';

defineProps<{
  item: WishlistItem;
}>();

defineEmits(['remove-item']);
</script>

<template>
  <div v-if="item && item.product">
    <ProductCard :product="item.product" :variant="'regular'" />
    <UButton
      class="mt-4"
      variant="link"
      :label="$t('messages.shop.removeFromWishlist')"
      @click="$emit('remove-item', item.id)"
    />
  </div>
</template>
