<template>
  <IonSwitch v-model="model" inset :color="color" :label="label" />
</template>

<script setup lang="ts">
  const model = defineModel()

  const props = defineProps({
		color: {
			type: String,
			required: false,
			default: 'primary',
		},

		label: {
			type: String,
			required: false,
			default: 'primary',
		},
	})
</script>