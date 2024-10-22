<script setup lang="ts">
const localePath = useLocalePath();
const categories = [
  {
    url: '/images/categories/audio.webp',
    label: 'Audio',
    path: localePath(getCategoryPath('electronics/mobile-phones'))
  },
  {
    url: '/images/categories/laptops.png',
    label: 'Laptops',
    path: localePath(getCategoryPath('electronics/mobile-phones'))
  },
  {
    url: '/images/categories/phone.png',
    label: 'Phone',
    path: localePath(getCategoryPath('electronics/mobile-phones'))
  },
  {
    url: '/images/categories/straps.webp',
    label: 'Straps',
    path: localePath(getCategoryPath('electronics/mobile-phones'))
  },
  {
    url: '/images/categories/tablets.png',
    label: 'Tablets',
    path: localePath(getCategoryPath('electronics/mobile-phones'))
  },
  {
    url: '/images/categories/wearables.webp',
    label: 'Wearables',
    path: localePath(getCategoryPath('electronics/mobile-phones'))
  }
];
</script>

<template>
  <Swiper
    :slides-per-view="'auto'"
    :space-between="16"
    :loop="false"
    :breakpoints="{
      1024: {
        spaceBetween: 24,
        slidesPerView: 6
      }
    }"
    class="category-slider w-full"
  >
    <SwiperSlide
      v-for="(category, index) in categories"
      :key="index"
      class="category-slide"
    >
      <NuxtLink
        :to="category.path"
        class="flex w-full flex-col items-center justify-center rounded-2xl p-4 hover:bg-white dark:bg-white dark:text-gray-900"
      >
        <NuxtImg :src="category.url" class="h-[100px] w-auto" />
        <span class="text-sm font-semibold lg:text-base">{{
          category.label
        }}</span>
      </NuxtLink>
    </SwiperSlide>
  </Swiper>
</template>

<style lang="postcss" scoped>
.category-slide {
  @apply h-[unset] w-auto lg:w-full;
}
</style>

<style lang="postcss">
.category-slider {
  &:not(.swiper-initialized) {
    @apply overflow-hidden;

    .swiper-wrapper {
      @apply gap-4 lg:grid lg:grid-cols-6 lg:gap-6;
    }
  }
}
</style>
