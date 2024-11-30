<script lang="ts" setup>
const { storeConfig } = useStoreConfig();
const { fetchStoresConfig } = useStoreConfigApi();
const { setStoreToken } = useStoreToken();

const { data } = await useAsyncData('stores', () => fetchStoresConfig());

function getCurrencySymbol(locale: string, currency: string) {
  return (0)
    .toLocaleString(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })
    .replace(/\d/g, '')
    .trim();
}

function changeStore(id: string) {
  if (!id) {
    return;
  }

  setStoreToken(id);
  window.location.reload();
}

function storeLocaleToIso(storeLocale: string) {
  return storeLocale.replace('_', '-');
}
</script>

<template>
  <div v-if="storeConfig && data?.length" class="flex items-center">
    <span class="w-20 text-sm text-gray-500">{{
      $t('messages.general.currency')
    }}</span>
    <div class="flex flex-wrap gap-4">
      <UButton
        v-for="store in data"
        :key="store.storeId ?? ''"
        :disabled="store.storeId === storeConfig.storeId"
        :variant="store.storeId === storeConfig.storeId ? 'solid' : 'ghost'"
        color="black"
        @click="changeStore(store.storeId ?? '')"
      >
        <template #leading>
          <span>{{ store.baseCurrencyCode }}</span>
          <span>{{
            getCurrencySymbol(
              storeLocaleToIso(store.locale),
              store.baseCurrencyCode
            )
          }}</span>
        </template>
      </UButton>
    </div>
  </div>
</template>
