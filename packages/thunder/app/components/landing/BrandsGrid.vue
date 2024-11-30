<script setup lang="ts">
const localizePath = useLocalePath();
const brands = [
  {
    url: '/images/brands/apple.webp',
    label: 'Apple',
    path: localizePath(getCategoryPath('electronics/mobile-phones'))
  },
  {
    url: '/images/brands/samsung.webp',
    label: 'Samsung',
    path: localizePath(getCategoryPath('electronics/mobile-phones'))
  },
  {
    url: '/images/brands/sony.webp',
    label: 'Sony',
    path: localizePath(getCategoryPath('electronics/mobile-phones'))
  },
  {
    url: '/images/brands/lg.webp',
    label: 'LG',
    path: localizePath(getCategoryPath('electronics/mobile-phones'))
  },
  {
    url: '/images/brands/hp.webp',
    label: 'HP',
    path: localizePath(getCategoryPath('electronics/mobile-phones'))
  },
  {
    url: '/images/brands/dell.webp',
    label: 'Dell',
    path: localizePath(getCategoryPath('electronics/mobile-phones'))
  },
  {
    url: '/images/brands/microsoft.webp',
    label: 'Microsoft',
    path: localizePath(getCategoryPath('electronics/mobile-phones'))
  },
  {
    url: '/images/brands/intel.webp',
    label: 'Intel',
    path: localizePath(getCategoryPath('electronics/mobile-phones'))
  },
  {
    url: '/images/brands/lenovo.webp',
    label: 'Lenovo',
    path: localizePath(getCategoryPath('electronics/mobile-phones'))
  },
  {
    url: '/images/brands/philips.webp',
    label: 'Philips',
    path: localizePath(getCategoryPath('electronics/mobile-phones'))
  }
];
</script>

<template>
  <div class="relative w-full flex-col space-y-8">
    <BaseTypography variant="heading">
      <h2>
        {{ $t('messages.shop.ourBrands') }}
      </h2>
    </BaseTypography>
    <Swiper
      :slides-per-view="'auto'"
      :space-between="16"
      :loop="false"
      :breakpoints="{
        1024: {
          spaceBetween: 24
        }
      }"
      class="brand-slider"
    >
      <SwiperSlide
        v-for="(brand, index) in brands"
        :key="index"
        class="brand-slide"
      >
        <NuxtLink
          :to="brand.path"
          class="flex items-center justify-center rounded-2xl p-4 dark:bg-white"
        >
          <NuxtImg
            :src="brand.url"
            class="h-[40px] w-auto self-center grayscale filter lg:h-[60px]"
          />
        </NuxtLink>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="postcss" scoped>
.brand-slide {
  @apply h-[unset] w-auto;
}
</style>

<style lang="postcss">
.brand-slider {
  &:not(.swiper-initialized) {
    @apply overflow-hidden;
  }
}
</style>
