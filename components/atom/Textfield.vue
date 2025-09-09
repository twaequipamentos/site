<template>
	<div> 
		<ion-textfield :class="classes" :label="label" v-model="model" :rules="rules" variant="outlined" :type="type" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" :append-inner-icon="appendInnerIcon" :maxlength="maxLength">
			<template v-slot:append-inner>
				<slot name="append-inner">
					<AtomIcon v-if="readonly" name="Lock" class="text-grey300 !w-5 !h-5"/>
				</slot>
			</template>
		</ion-textfield>
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

	const classes = computed(()=> {
		return props.readonly ? "custom-readonly" : ""
	})
</script>

<style lang="scss">
.v-field__input {
	display: block;
	// text-transform: uppercase;
}

::-webkit-search-cancel-button,

::-webkit-calendar-picker-indicator {
  color: rgba(0, 0, 0, 0);
  opacity: 1;
  background-image: url('assets/icons/calendar.svg');
  width: 21px;
  height: 25px;
  cursor: pointer;
  border-radius: 50%;
  margin-left: .5rem;
}

.custom-readonly .v-input__control {
  background-color: $grey-150;
	border-color: $grey-150;
	border-radius: 8px;
}

</style>
