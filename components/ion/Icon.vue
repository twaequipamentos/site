<template>
	<component :is="`Svgo${name}`" :filled="filled" v-bind="$attrs" />
</template>

<script setup lang="ts">
	const props = defineProps({
		name: {
			type: String
		},

		filled: {
			type: Boolean,
			default: false
		}
	})
</script>
