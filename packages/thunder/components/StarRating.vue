<script lang="ts" setup>
const props = defineProps<{
  value: number;
  size?: string;
}>();

const ratingSummary = computed(() => Math.round((props.value / 100) * 5));
</script>

<template>
  <div class="flex">
    <span v-for="i in 5" :key="i" class="mr-1">
      <svg
        :width="size || '24px'"
        :height="size || '24px'"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        :fill="ratingSummary >= i ? '#FFD700' : '#D3D3D3'"
      >
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        />
      </svg>
    </span>
  </div>
</template>
