<script setup lang="ts">
const slides = [
  {
    src: {
      desktop: '/images/slider/banner_1.png',
      mobile: '/images/slider/banner_1_m.png'
    },
    alt: 'Slide Image 1'
  },
  {
    src: {
      desktop: '/images/slider/banner_2.png',
      mobile: '/images/slider/banner_2_m.png'
    },
    alt: 'Slide Image 2'
  }
];
</script>

<template>
  <div class="relative w-full">
    <Swiper
      :slides-per-view="1"
      :navigation="true"
      :loop="true"
      :modules="[SwiperNavigation]"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <picture>
          <source :srcset="slide.src.desktop" media="(min-width: 768px)" />
          <img
            :src="slide.src.mobile"
            :alt="slide.alt"
            class="h-[450px] w-full object-cover sm:h-[240px] sm:object-cover 2xl:h-[550px]"
          />
        </picture>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
