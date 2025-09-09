<template>
  <IonProgressLinear :model-value="model" :rounded="rounded" :height="height" :color="color" />
</template>

<script setup lang="ts">
  const props = defineProps({
		rounded: {
			type: Boolean,
			required: false,
			default: true,
		},

		height: {
			type: String,
			required: false,
			default: '5',
		},

		color: {
			type: String,
			required: false,
			default: 'secondary',
		},
	})

  const model = defineModel()
</script>