<template>
	<IonCard :variant="variant" :elevation="elevation" class="pa-3 ion-card rounded-xl"> 
		<slot />
	</IonCard>
</template>
<script setup lang="ts">
	const props = defineProps({
		variant: {
			type: String,
			required: false,
			default: 'outlined',
		},

		elevation: {
			type: String,
			required: false,
			default: '0',
		},

		width: {
			type: String,
			required: false,
			default: '400',
		},
	})
</script>

<style lang="scss">
	.ion-card {
		border: thin solid $grey-200;
	}
</style>