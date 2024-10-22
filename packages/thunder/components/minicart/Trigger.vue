<script setup lang="ts">
const { cart } = useCart();
const route = useRoute();
const isOpen = useState<boolean>('isMinicartOpen', () => false);

function toggleMinicart() {
  if (route.path === '/cart') {
    closeMinicart();
    return;
  }

  isOpen.value = !isOpen.value;
}

function closeMinicart() {
  isOpen.value = false;
}
</script>

<template>
  <UButton
    color="black"
    variant="ghost"
    size="xl"
    :padded="false"
    :title="$t('messages.cart.cartPage')"
    class="relative"
    @click="toggleMinicart"
  >
    <template #leading>
      <Icon name="solar:bag-3-linear" class="h-8 w-8" />
      <UBadge
        size="xs"
        class="absolute -right-1 -top-1 flex h-4 w-4 justify-center p-0"
        :ui="{ rounded: 'rounded-full' }"
      >
        <span>{{ cart?.totalQuantity ?? 0 }}</span>
      </UBadge>
    </template>
  </UButton>
</template>
