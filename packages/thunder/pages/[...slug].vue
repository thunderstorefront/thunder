<script lang="ts" setup>
const route = useRoute();
const url = [...route.params.slug].join('/');
const { fetchRoute } = useStoreRoute();

const { data } = await useAsyncData(`storeRouteData-${url}`, () =>
  fetchRoute(url)
);

useRedirect(url, data.value);
</script>

<template>
  <div></div>
</template>
