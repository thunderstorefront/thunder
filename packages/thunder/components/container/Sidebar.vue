<template>
  <UContainer :ui="{ constrained: 'max-w-full' }">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 xl:grid-cols-6">
      <aside class="lg:col-span-1">
        <slot name="sidebar" />
      </aside>
      <section class="lg:col-span-3 xl:col-span-5">
        <slot name="main" />
      </section>
    </div>
  </UContainer>
</template>
