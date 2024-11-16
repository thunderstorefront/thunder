<script setup lang="ts">
import type { ProductPage } from '@thunderstorefront/types';

const props = defineProps<{ product: ProductPage }>();

const route = useRoute();
const { inputs, setInput } = useAddToCartForm();

const input = computed(() => inputs.value[props.product.id] ?? null);

const selectedOptions = ref<Record<string, string>>({});

function selectOption(optionId: string, valueId: string): void {
  selectedOptions.value = { ...selectedOptions.value, [optionId]: valueId };
  setInput({
    productId: props.product.id,
    quantity: input.value?.quantity ?? 1,
    options: selectedOptions.value
  });
}

function selectQueryOptions() {
  const selectedVariants = (route.query?.variant as string | undefined)?.split(
    ','
  );

  if (!selectedVariants) return;

  props.product.options.forEach((option) => {
    const value = option.values.find((value) =>
      selectedVariants.includes(value.code.toLowerCase())
    );

    if (value) {
      selectOption(option.id, value.id);
    }
  });
}

watch(
  () => route.query,
  () => {
    selectQueryOptions();
  }
);
</script>

<template>
  <div v-if="product.options.length" class="space-y-6">
    <div v-for="option in product.options" :key="option.id" class="space-y-2">
      <BaseTypography :variant="'caption'">
        {{ option.name }}
      </BaseTypography>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="value in option.values"
          :key="value.id"
          :class="[
            'rounded-lg border px-4 py-2 text-sm',
            selectedOptions[option.id] === value.id
              ? 'border-blue-600 bg-blue-600 text-white'
              : 'border-gray-300 bg-white text-gray-800'
          ]"
          @click.prevent="selectOption(option.id, value.id)"
        >
          {{ value.label }}
        </button>
        <input
          :value="selectedOptions[option.id]"
          type="text"
          hidden
          required
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
