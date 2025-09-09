<template>
	<IonDivider :vertical="vertical" :color="color" :class="borderOpacity"></IonDivider>
</template>

<script setup lang="ts">
  const props = defineProps({
		opacity: {
			type: String,
			required: false,
			default: ''
		},
    
		color: {
			type: String,
			required: false,
			default: 'success'
		},

		vertical: {
			type: Boolean,
			required: false,
			default: false
		},
	})

  const borderOpacity = computed(() => {
    return props.opacity ? `border-opacity-${props.opacity}` : ''
  })

</script>

<style lang="scss" scoped>
	// .divider {
	// 	border: 1px solid $light-grey;
	// }
</style>
