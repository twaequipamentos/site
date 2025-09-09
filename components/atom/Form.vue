<template>
	<IonForm ref="form">
		<slot />
	</IonForm>
</template>

<script setup lang="ts">
	const form = ref()

	const validate = async () => {
		return await form.value.validate()
	}

	defineExpose({ validate })
</script>