<template>
  <v-row :class="classes" class="!m-0">
		<slot name="image">
			<v-col cols="12" md="6" class="flex items-center justify-end">
				<AtomIcon :name="icon" filled class="ma-0 !w-full !h-[280px]" />
			</v-col>
		</slot>
    <v-col cols="12" md="6" class="flex-col items-center justify-center">
      <div class="m-2 ma-md-8">
        <div class="text-xl font-weight-bold text-primary mb-6 text-center text-md-start">{{ title }}</div>
        <div class="text-md text-grey300 mb-6">{{ text }}</div>
        <div v-if="textButton" class="text-end justify-center">
          <AtomButton :color="colorButton" class="text-body-2" @click="emitAction"> {{ textButton }} </AtomButton>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  const emit = defineEmits(["action"]);

  const props = defineProps({
		icon: {
			type: String,
			required: false,
			default: ''
		},

		text: {
			type: String,
			required: false,
			default: ''
		},

		title: {
			type: String,
			required: false,
			default: 'Title'
		},

		textButton: {
			type: String,
			required: false,
			default: ''
		},

		actionButton: {
			type: String,
			required: false,
			default: ''
		},

		colorButton: {
			type: String,
			required: false,
			default: ''
		},

		invert: {
			type: Boolean,
			required: false,
			default: false
		}
	})

  const classes = computed(() => {
    return props.invert ? 'flex-row-reverse' : ''
  })

  const emitAction = () => {
    emit("action", props.actionButton)
  }
</script>