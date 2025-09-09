<template>
	<AtomDialog
		v-model="dialog"
    width="400"
	>
		<template #default>
			<div class="bg-white rounded-lg pa-4">
        <h1 class="text-start text-primary text-h6 mb-4"> {{ title }} </h1>
        <div class="my-4 text-md text-grey300">{{ text }}</div>
			</div>
      <div class="d-flex justify-end">
        <AtomButton color="grey" size="large" class="mb-2 text-body-2 mr-2" minWidth="100" @click="cancel"> {{ $t('cancel') }} </AtomButton>
        <AtomButton size="large" class="mb-2 text-body-2" minWidth="100" @click="confirm"> {{ textButtonConfirm }} </AtomButton>
      </div>
		</template>
	</AtomDialog>
</template>

<script setup lang="ts">
  const dialog = defineModel();
  const emit = defineEmits(["confirm", "cancel"]);
  const { t } = useI18n()

    const props = defineProps({
      title: {
        type: String,
        required: false,
        default: '',
      },

      text: {
        type: String,
        required: false,
        default: '',
      }, 

      textButtonConfirm: {
        type: String,
        required: false,
        default: '',
      },
    })

    const title = computed(() => props.title || t('confirm'));
    const text = computed(() => props.text || t('confirmDescription'));
    const textButtonConfirm = computed(() => props.textButtonConfirm || t('confirm'));

    const confirm = () => {
      emit('confirm')
    }

    const cancel = () => {
      emit('cancel')
    }
</script>