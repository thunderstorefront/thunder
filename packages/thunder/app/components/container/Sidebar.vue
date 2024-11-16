<template>
  <UContainer :ui="{ constrained: 'max-w-full' }">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-7 xl:grid-cols-6">
      <aside class="lg:col-span-2 xl:col-span-1">
        <slot name="sidebar" />
      </aside>
      <section class="lg:col-span-5 xl:col-span-5">
        <slot name="main" />
      </section>
    </div>
  </UContainer>
</template>
