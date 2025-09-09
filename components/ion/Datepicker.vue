<template>
  <v-date-picker
    v-bind="$attrs"
    v-model="model"
  ></v-date-picker>
</template>

<script setup lang="ts">
  const model = defineModel();
</script>