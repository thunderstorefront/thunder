<template>
  <header
    class="sticky top-0 z-50 border-b border-gray-200 bg-gray-100 dark:bg-gray-900"
  >
    <ContainerOneColumn>
      <div class="flex items-center gap-6 py-3 dark:text-white">
        <slot name="logo" />
      </div>
    </ContainerOneColumn>
  </header>
</template>
