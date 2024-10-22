<script setup lang="ts">
import type { ProductPage } from '@thunderstorefront/types';

const props = defineProps<{
  product: ProductPage;
}>();

const { previewImageUrl, setPreviewImage } = usePreviewImage();

const activeImageIndex = ref(0);

const galleryItems = computed(() => props.product.mediaGallery);

function setActiveImageIndex(index: number) {
  activeImageIndex.value = index;
  setPreviewImage('');
}

setPreviewImage('');
</script>

<template>
  <div v-if="galleryItems.length" class="w-full rounded-2xl bg-white p-4">
    <div
      class="mb-4 flex h-[300px] w-full items-center justify-center lg:mb-8 lg:h-[500px]"
    >
      <NuxtImg
        v-if="previewImageUrl"
        :src="previewImageUrl"
        class="h-full w-full object-contain"
      />
      <NuxtImg
        v-else
        :src="galleryItems[activeImageIndex].url ?? ''"
        class="h-full w-full object-contain"
      />
    </div>
    <div
      v-if="galleryItems.length > 1"
      class="grid grid-cols-4 gap-4 md:grid-cols-6"
    >
      <div v-for="(image, index) in galleryItems" :key="image?.label ?? ''">
        <NuxtImg
          :src="image.url ?? ''"
          class="h-full w-full object-cover object-center"
          :class="{ 'border-primary-400 border': index === activeImageIndex }"
          @click="setActiveImageIndex(index)"
        />
      </div>
    </div>
  </div>
</template>
