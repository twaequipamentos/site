<template>
	<v-form ref="form" v-bind="$attrs">
		<slot />
	</v-form>
</template>

<script setup lang="ts">
	const form = ref()

	const validate = async () => {
		return await form.value.validate()
	}

	defineExpose({ validate })
</script>
