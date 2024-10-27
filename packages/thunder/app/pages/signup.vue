<script lang="ts" setup>
useHead({
  title: 'Sign up'
});

definePageMeta({
  middleware: ['guest']
});
</script>

<template>
  <ContainerOneColumn>
    <div class="py-20 md:flex">
      <CustomerRegisterForm />
    </div>
  </ContainerOneColumn>
</template>
