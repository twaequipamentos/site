<template>
  <v-switch v-model="model" v-bind="$attrs"></v-switch>
</template>

<script setup lang="ts">
  const model = defineModel()
</script>