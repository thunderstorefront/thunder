<script setup lang="ts">
const localePath = useLocalePath();
const brands = [
  {
    url: '/images/brands/apple.png',
    label: 'Apple',
    path: localePath(getCategoryPath('electronics/mobile-phones'))
  },
  {
    url: '/images/brands/samsung.png',
    label: 'Samsung',
    path: localePath(getCategoryPath('electronics/mobile-phones'))
  },
  {
    url: '/images/brands/sony.png',
    label: 'Sony',
    path: localePath(getCategoryPath('electronics/mobile-phones'))
  },
  {
    url: '/images/brands/lg.png',
    label: 'LG',
    path: localePath(getCategoryPath('electronics/mobile-phones'))
  },
  {
    url: '/images/brands/hp.png',
    label: 'HP',
    path: localePath(getCategoryPath('electronics/mobile-phones'))
  },
  {
    url: '/images/brands/dell.png',
    label: 'Dell',
    path: localePath(getCategoryPath('electronics/mobile-phones'))
  },
  {
    url: '/images/brands/microsoft.png',
    label: 'Microsoft',
    path: localePath(getCategoryPath('electronics/mobile-phones'))
  },
  {
    url: '/images/brands/intel.png',
    label: 'Intel',
    path: localePath(getCategoryPath('electronics/mobile-phones'))
  },
  {
    url: '/images/brands/lenovo.png',
    label: 'Lenovo',
    path: localePath(getCategoryPath('electronics/mobile-phones'))
  },
  {
    url: '/images/brands/philips.png',
    label: 'Philips',
    path: localePath(getCategoryPath('electronics/mobile-phones'))
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
