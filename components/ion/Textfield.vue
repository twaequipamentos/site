<template>
	<div>
		<v-text-field v-model="model" density="comfortable" v-bind="$attrs">
			<template v-slot:append-inner>
				<slot name="append-inner"></slot>
			</template>
		</v-text-field>
	</div>
</template>
<script setup lang="ts">
	const model = defineModel()
</script>