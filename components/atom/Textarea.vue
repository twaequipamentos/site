<template>
	<div> 
		<IonTextarea :label="label" v-model="model" :rules="rules" variant="outlined" :type="type" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" :append-inner-icon="appendInnerIcon" :maxlength="maxLength">
			<template v-slot:append-inner>
				<slot name="append-inner"></slot>
			</template>
		</IonTextarea>
	</div>
</template>

<script setup lang="ts">

	const model = defineModel()
	
	const props = defineProps({
		label: {
			type: String,
			required: false,
			default: '',
		},

		type: {
			type: String,
			required: false,
			default: 'text',
		},

		placeholder: {
			type: String,
			required: false,
			default: '',
		},

		name: {
			type: String,
			required: false,
			default: '',
		},

		appendInnerIcon: {
			type: String,
			required: false,
			default: '',
		},

		maxLength: {
			type: Number,
			required: false,
		},

		readonly: {
			type: Boolean,
			required: false,
			default: false,
		},

		disabled: {
			type: Boolean,
			required: false,
			default: false,
		},
		
		rules: {
			type: Array,
			required: () => ([]),
		},
	})
</script>

<style lang="scss">
</style>
