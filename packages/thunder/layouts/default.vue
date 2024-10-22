<template>
  <div class="layout-default">
    <StoreHeader class="h-[72px]" />
    <main class="main mb-4 min-h-screen pt-4 lg:mb-10 lg:pt-10">
      <slot />
    </main>
    <StoreFooter />
    <UNotifications />
    <NuxtLoadingIndicator color="#348feb" :height="5" />
  </div>
</template>
