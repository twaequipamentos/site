<template>
  <IonDatepicker
    v-model="model"
    color="primary"
  ></IonDatepicker>
</template>

<script setup lang="ts">
  const model = defineModel();
</script>