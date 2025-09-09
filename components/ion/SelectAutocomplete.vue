<template>
	<div>
		<v-autocomplete v-model="model" density="comfortable" v-bind="$attrs" :items="items">
			<template v-slot:item="{ props, item }">
				<slot name="item" :props="props" :item="item" />
			</template>
		</v-autocomplete>
	</div>
</template>
<script setup lang="ts">
	const model = defineModel()

	const props = defineProps({
		items: {
			type: Array,
			required: false,
			default: () => ([]),
		},
	})
</script>