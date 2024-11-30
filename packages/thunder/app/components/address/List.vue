<script lang="ts" setup>
const { fetchCustomerAddresses } = useCustomerAddressApi();

const { data: addresses } = await useAsyncData('customerAddresses', () =>
  fetchCustomerAddresses()
);
</script>

<template>
  <div>
    <BaseCard class="min-h-[500px] lg:p-12">
      <BaseTypography variant="heading" class="mb-6 lg:mb-8">
        <h1>
          {{ $t('messages.account.addresses') }}
        </h1>
      </BaseTypography>
      <div class="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <AddressInfoCard
          v-for="address in addresses"
          :key="address.id ?? ''"
          :address="address"
        />
      </div>
      <div>
        <LocalizedLink :to="ROUTES.accountAddressNew">
          <UButton
            color="primary"
            size="xl"
            :label="'Add new address'"
            type="submit"
          />
        </LocalizedLink>
      </div>
    </BaseCard>
  </div>
</template>
