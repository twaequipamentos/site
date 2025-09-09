

<template>
	<div>
    <IonSelect v-model="model" :items="items" item-title="name" :item-value="itemValue" :label="labelSelect" :rules="rules" variant="outlined">
      <template v-slot:item="{ props, item }">
        <v-list-item v-bind="props">
					<div class="d-flex align-center justify-center">
						<div class="mr-2" :style="`background-color: ${verifyColor(item)}; border-radius: 100%; width: 15px; height: 15px;`">
						</div>
					</div>
        </v-list-item>
      </template>
    </IonSelect>
	</div>
</template>
<script setup lang="ts">
	const model = defineModel()
	const { t } = useI18n()

	const props = defineProps({
		label: {
			type: String,
			required: false,
			default: ''
		},

		itemValue: {
			type: String,
			required: false,
			default: 'value'
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

	const labelSelect = computed(() => {
		return props.label ? props.label : t('color')
	})

	const verifyColor = (item) => {
		return item.raw?.value ? item.raw.value : item.raw.color
	}
</script>

<style lang="scss">
  .v-list-item__content {
    display: flex;
    flex-direction: row-reverse;
    justify-content:start;
  }
</style>