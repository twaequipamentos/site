<template>
	<ion-button :color="color" :block="block" :type="type" elevation="0" class="atom-button rounded-md" :variant="variant" :style="`min-width: ${minWidth}px;`">
		<slot />
	</ion-button>
</template>

<script setup>

	const props = defineProps({
		color: {
			type: String,
			required: false,
			default: 'primary',
		},

		type: {
			type: String,
			required: false,
			default: '',
		},

		minWidth: {
			type: String,
			default: ''
		},

		variant: {
			type: String,
		},

		block: {
			type: Boolean,
			default: false
		}
	})
</script>

<style lang="scss" scoped>
	.atom-button {
		text-transform: none;
	}
</style>