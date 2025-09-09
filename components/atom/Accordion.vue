<template>
  <IonAccordion :items="items" color="white" elevation="0" v-model="model" />
</template>

<script setup lang="ts">
  const props = defineProps({
		items: {
			type: Array,
			required: false,
			default: () => ([])
		}
	})

  const model = defineModel()
</script>

<style setup lang="scss">
  .v-expansion-panel-title{
    @apply text-[16px];
    color: $grey-300!important;
  }

  .v-expansion-panel-text__wrapper {
    @apply text-[14px];
    color: $grey-500!important;
  }
</style>