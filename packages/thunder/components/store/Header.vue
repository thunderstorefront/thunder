<template>
  <header
    class="relative z-20 flex w-full items-center gap-4 bg-white px-4 shadow-md lg:gap-6 lg:px-6 dark:bg-slate-800"
  >
    <MegaMenuTrigger class="lg:hidden" />
    <StoreLogo />
    <LazyMegaMenuNavigation />
    <div class="ml-auto flex items-center justify-end">
      <div class="flex items-center gap-4 lg:gap-6">
        <SearchTrigger class="border-r border-gray-300 pr-4 lg:pr-6" />
        <CustomerTrigger class="border-r border-gray-300 pr-4 lg:pr-6" />
        <MinicartTrigger />
      </div>
    </div>
    <LazyStoreInfoSidebar />
    <LazyMinicartSidebar />
  </header>
</template>
