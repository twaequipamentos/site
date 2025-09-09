<template>
	<v-snackbar v-model="model" v-bind="$attrs">
		<slot />
	</v-snackbar>
</template>
<script setup lang="ts">
	const model = defineModel()
</script>