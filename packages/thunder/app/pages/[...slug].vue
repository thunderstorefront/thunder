<script lang="ts" setup>
const { params } = useRoute();
const url = [...(params.slug ?? '')].join('/');
const { fetchRoute } = useStoreRouteApi();

const { data } = await useAsyncData(`storeRouteData-${url}`, () =>
  fetchRoute(url)
);

useRedirect(url, data.value);
</script>

<template>
  <div></div>
</template>
