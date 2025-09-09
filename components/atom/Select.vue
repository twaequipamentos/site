<template>
	<div>
		<!-- <IonSelect v-model="model" :label="label" :items="items" :multiple="multiple" variant="outlined" raw>
			<template v-slot:selection="{ item }">
				<div> {{item.value}} </div>
			</template>
		</IonSelect> -->
				<IonSelect v-model="model" :items="items" item-title="name" :label="label" :rules="rules" variant="outlined">
				<template v-slot:item="{ props, item }">
					<v-list-item v-bind="props" />
				</template>
				</IonSelect>
	</div>
</template>
<script setup lang="ts">
	const model = defineModel()

	const props = defineProps({
		label: {
			type: String,
			required: false,
			default: ''
		},

		items: {
			type: Array,
			required: false,
			default: () => ([])
		},

		multiple: {
			type: Boolean,
			required: false,
			default: false
		},

		rules: {
			type: Array,
			required: () => ([]),
		},
	})
</script>