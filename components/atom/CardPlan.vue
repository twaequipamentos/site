<template>
	<IonCard :variant="variant" :elevation="elevation" class="atom-card-plan rounded-xl"> 
		<div class="d-flex flex-column h-full pa-4">
			<div class="text-primary text-h6 h-12 d-flex justify-center align-center"> 
				<span>{{ title }}</span> 
				<span v-if="observation" class="ml-1 text-body-2">({{ observation }})</span>
			 </div>
			<div class="h-full">
				<slot />
			</div>
		</div>
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

		title: {
			type: String,
			required: false,
			default: 'Título',
		},

		observation: {
			type: String,
			required: false,
			default: '',
		},
	})
</script>

<style lang="scss">
	.atom-card-plan {
		border: thin solid $grey-150;
	}
</style>