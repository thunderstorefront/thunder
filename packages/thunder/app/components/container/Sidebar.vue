<script lang="ts" setup>
withDefaults(
  defineProps<{
    isSidebarVisible?: boolean;
  }>(),
  {
    isSidebarVisible: true
  }
);
</script>

<template>
  <UContainer :ui="{ constrained: 'max-w-full' }">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-7 xl:grid-cols-6">
      <!-- Sidebar -->
      <aside v-if="isSidebarVisible" class="lg:col-span-2 xl:col-span-1">
        <slot name="sidebar" />
      </aside>

      <!-- Main Content -->
      <section
        :class="
          isSidebarVisible
            ? 'lg:col-span-5 xl:col-span-5'
            : 'lg:col-span-7 xl:col-span-6'
        "
      >
        <slot name="main" />
      </section>
    </div>
  </UContainer>
</template>
