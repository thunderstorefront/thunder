<template>
  <div v-if="isMetadata" class="flex w-full justify-center">
    <UButton size="lg" variant="outline" @click="isOpen = !isOpen">{{
      $t('messages.shop.showSpecification')
    }}</UButton>
    <USlideover v-model="isOpen" side="right">
      <div class="overflow-y-scroll p-8">
        <div class="mb-6 flex justify-between">
          <p class="mb-4 text-2xl font-bold">
            {{ $t('messages.shop.fullSpecification') }}
          </p>
          <Icon
            name="ri:close-fill"
            class="text-2xl hover:cursor-pointer"
            @click="isOpen = false"
          />
        </div>
        <div>
          <table>
            <thead>
              <tr class="bg-gray-100">
                <th class="px-4 py-2 text-left font-semibold text-gray-700">
                  {{ $t('messages.shop.specification') }}
                </th>
                <th class="px-4 py-2 text-left font-semibold text-gray-700">
                  {{ $t('messages.shop.details') }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(value, key) in metadata"
                :key="key"
                class="border-t border-gray-300"
              >
                <td class="px-4 py-3">
                  <BaseTypography class="capitalize">{{ key }}</BaseTypography>
                </td>
                <td class="px-4 py-3 text-gray-600">
                  <div
                    v-if="typeof value === 'object' && !Array.isArray(value)"
                  >
                    <table class="w-full rounded-md bg-gray-50 shadow-sm">
                      <tbody>
                        <tr
                          v-for="(subValue, subKey) in value as Record<
                            string,
                            unknown
                          >"
                          :key="subKey"
                        >
                          <td
                            class="px-3 py-1 text-sm font-medium capitalize text-gray-700"
                          >
                            {{ subKey }}
                          </td>
                          <td class="px-3 py-1 text-sm text-gray-600">
                            {{ subValue }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div v-else-if="Array.isArray(value)" class="space-y-1">
                    <ul class="list-inside list-disc">
                      <li v-for="item in value" :key="item">{{ item }}</li>
                    </ul>
                  </div>
                  <p v-else>{{ value }}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </USlideover>
  </div>
</template>

<script lang="ts" setup>
import type { ProductPage } from '@thunderstorefront/types';

const props = defineProps<{
  product: ProductPage;
}>();

const metadata = computed(() => props.product.metadata ?? {});

const isMetadata = computed(
  () => Object.keys(props.product.metadata).length > 0
);

const isOpen = ref(false);
</script>
