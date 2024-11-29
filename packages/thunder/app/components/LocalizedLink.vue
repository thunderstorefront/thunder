<script lang="ts" setup>
import type { NuxtLinkProps } from '#app';

const props = defineProps<Pick<NuxtLinkProps, 'to'>>();

const { to, ...rest } = toRefs(props);

const localizePath = useLocalePath();
</script>

<template>
  <NuxtLink :to="localizePath(to as string)" v-bind="rest">
    <slot v-bind="{ localizedTo: localizePath(to as string) }" />
  </NuxtLink>
</template>
