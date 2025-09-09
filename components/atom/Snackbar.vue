<template>
	<IonSnackbar v-model="model" :color="propertiesByType.color" :text="text" :location="location">
		<component :is="propertiesByType.icon" filled class="px-10 py-5 ma-0 logo" />
	</IonSnackbar>
</template>

<script setup lang="ts">
	const model = defineModel()

	const props = defineProps({
		type: {
			type: String,
			default: 'success',
		},

		text: {
			type: String,
			default: ''
		},
		location: {
			type: String,
			default: 'top right'
		},
	})

	const propertiesByType = computed(() => {
    if (props.type == 'success') {
			return {color: 'success', icon: 'Check'}
		}else if (props.type == 'error') {
			return {color: 'error', icon: 'Close'}
		}else if (props.type == 'warning') {
			return {color: 'warning', icon: 'Alert'}
		}
  }) 
</script>