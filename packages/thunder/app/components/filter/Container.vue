<script lang="ts" setup>
const isOpen = ref(false);
const content = ref();
const isMaxHeight = ref(false);
const contentMaxHeight = 1000;

const checkOverflow = () => {
  isMaxHeight.value = content.value.scrollHeight > 1000;
};

onMounted(() => {
  checkOverflow();
});
</script>

<template>
  <div>
    <div
      class="hidden rounded-lg bg-white p-4 text-gray-800 shadow-sm lg:block dark:text-gray-100 lg:dark:bg-gray-700"
    >
      <div
        class="relative overflow-hidden"
        :style="{ 'max-height': contentMaxHeight + 'px' }"
      >
        <div ref="content">
          <slot />
        </div>
        <div
          v-if="isMaxHeight"
          class="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white"
        ></div>
      </div>
      <div class="mt-2 pb-2">
        <UButton
          color="primary"
          size="lg"
          variant="link"
          :label="$t('messages.shop.filters')"
          block
          @click="isOpen = !isOpen"
        >
          {{ $t('messages.shop.showMore') }}
        </UButton>
      </div>
    </div>

    <span
      class="flex items-center hover:cursor-pointer lg:hidden"
      @click="isOpen = true"
    >
      <UButton
        color="primary"
        size="xl"
        variant="outline"
        :label="$t('messages.shop.filters')"
        block
      >
        <template #leading>
          <Icon name="solar:hamburger-menu-linear" class="mr-2 text-lg" />
        </template>
      </UButton>
    </span>

    <USlideover v-model="isOpen" side="left">
      <div class="overflow-y-scroll p-8">
        <div class="mb-6 flex justify-between">
          <p class="mb-4 text-2xl font-bold">
            {{ $t('messages.shop.filters') }}
          </p>
          <Icon
            name="ri:close-fill"
            class="text-2xl hover:cursor-pointer"
            @click="isOpen = false"
          />
        </div>
        <slot />
      </div>
    </USlideover>
  </div>
</template>
