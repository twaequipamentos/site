<template>
	<v-dialog
		v-model="dialog"
		v-bind="$attrs"
	>
	<template #default>
		<slot name="default" /> 
	</template>
	</v-dialog>
</template>

<script setup lang="ts">
	const dialog = defineModel();
</script>