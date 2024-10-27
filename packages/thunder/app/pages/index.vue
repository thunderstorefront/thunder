<script lang="ts" setup>
useHead({
  title: 'Homepage'
});
</script>

<template>
  <div class="-mt-4 lg:-mt-10">
    <ContainerOneColumn class="px-0 sm:px-0 lg:px-0">
      <LazyLandingHeroSlider />
    </ContainerOneColumn>
    <ContainerOneColumn
      class="landing-content relative mb-10 flex flex-col gap-12 pt-6 lg:gap-24"
    >
      <LazyLandingCategories />
      <LazyLandingBestsellers />
      <LazyLandingBrandsGrid />
      <LazyLandingOnSale />
      <LandingBrands />
    </ContainerOneColumn>
  </div>
</template>

<style lang="postcss" scoped>
.landing-content {
  &:before {
    @apply absolute -top-5 left-0 z-10 h-6 w-full rounded-t-full bg-gray-100 content-[''] lg:-top-[40px] lg:h-[40px] dark:bg-gray-900;
  }
}
</style>
