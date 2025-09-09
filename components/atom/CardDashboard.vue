<template>
	<IonCard elevation="0" class="pa-4 ion-card rounded-xl"> 
    <div class="d-flex flex-column">
      <div class="d-flex justify-between align-center">
        <div class="d-flex align-center"> 
          <div class="mr-2 text-primary text-lg font-weight-bold"> {{ title }} </div> 
          <AtomTooltip v-if="textTooltip" :text="textTooltip" location="top">
            <template v-slot:activator="{ props }">
              <AtomIcon name="Information" v-bind="props" class="!w-5 !h-5 text-grey300"></AtomIcon>
            </template>
          </AtomTooltip>
        </div>
        <AtomIcon v-if="icon" :name="icon" class="!w-5 !h-5 text-primary" />
      </div>
      <div v-if="hide" class="text-center my-6 text-2xl font-weight-bold text-primary"> ************ </div>
      <div v-else class="text-center my-6 text-2xl font-weight-bold" :class="setColorByValue(value)"> {{ formatCurrency(value) }} </div>
    </div>
	</IonCard>
</template>
<script setup lang="ts">
	const props = defineProps({
		textTooltip: {
			type: String,
			required: false,
			default: ''
		},

		title: {
			type: String,
			required: false,
			default: ''
		},

		value: {
			type: String,
			required: false,
			default: ''
		},

		icon: {
			type: String,
			required: false,
			default: ''
		},
		
		hide: {
			type: Boolean,
			required: false,
			default: false
		},
	})
</script>

<style lang="scss">
	.ion-card {
		border: thin solid $grey-200;
	}
</style>