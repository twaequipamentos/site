

<template>
	<div>
    <IonSelectAutocomplete v-model="model" :items="items" item-title="name" :item-value="itemValue" :label="label" :rules="rules" variant="outlined">
      <template v-slot:prepend-item>
        <slot name="prepend-item" />
      </template>
      <template v-slot:item="{ props, item }">
        <v-list-item v-bind="props" class="d-flex align-center">
          <div v-if="institution" class="d-flex align-center justify-center">
            <div v-if="item.raw?.profile" class="rounded-full w-6 h-6 mr-2" :style="`background-color: ${item.raw.color};`"></div>
            <AtomImage v-else-if="item.raw.logo" :imageUrl="item.raw.logo" height="25" width="25" class="rounded-circle  mr-2" />
            <div v-else class="d-flex align-center mr-2">
              <SvgoBank class="text-grey300" />
            </div>
          </div>
          <div v-else class="d-flex align-center justify-center">
            <div v-if="item.raw?.bank?.profile" class="rounded-full w-6 h-6 mr-2" :style="`background-color: ${item.raw.bank.color};`"></div>
            <AtomImage v-else-if="verifyLogo(item)" :imageUrl="verifyLogo(item)" height="25" width="25" class="rounded-circle  mr-2" />
            <div v-else class="d-flex align-center mr-2">
              <SvgoBank class="text-grey300" />
            </div>
					</div>
        </v-list-item>
      </template>
    </IonSelectAutocomplete>
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

		institution: {
			type: Boolean,
			required: false,
			default: false
		},

    rules: {
			type: Array,
			required: () => ([]),
		},
	})

  const label = computed(() => props.label || t('financialInstitution'));
  const verifyLogo = (item) => {
    if(item.raw?.logo != undefined){
      return item.raw.logo
    }else 
    if (item.raw?.bank?.logo) {
      return item.raw.bank.logo
    }

    return null
	}
</script>

<style lang="scss">
  .financial-select {
    &__logo {
      border-radius: 100%;
      width: 20px;
      height: 20px;
    }
  }
  .v-list-item__content {
    display: flex;
    flex-direction: row-reverse;
    justify-content:start;
  }

  .v-autocomplete__content {
    max-width: 100px!important;
  }
</style>