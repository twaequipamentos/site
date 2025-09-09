<template>
  <IonProgressCircular :indeterminate="indeterminate" :size="size" :color="color" />
</template>

<script setup lang="ts">
  const props = defineProps({
		indeterminate: {
			type: Boolean,
			required: false,
			default: false,
		},

		size: {
			type: String,
			required: false,
			default: '30',
		},

		color: {
			type: String,
			required: false,
			default: 'secondary',
		},
	})
</script>