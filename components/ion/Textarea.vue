<template>
  <v-textarea v-model="model" v-bind="$attrs">
    <template v-slot:append-inner>
      <slot name="append-inner"></slot>
    </template>
  </v-textarea>
</template>
<script setup lang="ts">
	const model = defineModel()
</script>