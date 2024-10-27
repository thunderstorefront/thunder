<script lang="ts" setup>
useHead({
  title: 'Login'
});

definePageMeta({
  middleware: ['guest']
});
</script>

<template>
  <ContainerOneColumn>
    <div class="py-20 md:flex">
      <CustomerLoginForm />
    </div>
  </ContainerOneColumn>
</template>
