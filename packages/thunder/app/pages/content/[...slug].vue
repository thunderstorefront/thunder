<script setup lang="ts">
const { params } = useRoute();
const { fetchPage } = usePage();
const { fetchRoute } = useStoreRoute();

const pageId = ref<string>('');
const url = [...(params.slug ?? '')].join('/');

const { data: routeData } = await useAsyncData(`storeRouteData-${url}`, () =>
  fetchRoute(url)
);

const isPageType = computed(
  () => routeData.value && routeData.value.type === 'Page'
);

if (!isPageType.value) {
  useRedirect(url, routeData.value);
}

pageId.value = routeData.value?.id ?? '';

const { data: pageData } = await useAsyncData(`pageData-${pageId.value}`, () =>
  fetchPage(pageId.value)
);

useHead({
  title: computed(() => `${pageData.value?.title}`)
});
</script>

<template>
  <ContainerOneColumn v-if="pageData?.content" class="py-10 lg:py-20">
    <BaseTypography :variant="'heading'" class="mb-6 lg:mb-10">
      {{ pageData.title }}
    </BaseTypography>
    <div v-html="pageData.content"></div>
  </ContainerOneColumn>
</template>
