<template>
  <IonDropdown :options="options" @selectedOption="selectedOption">
  </IonDropdown>
</template>

<script setup lang="ts">
  const emit = defineEmits(["selectedOption"]);

  const props = defineProps({
		options: {
			type: Object,
			required: false,
			default: () => ([]),
    }
	})

  const options = [
    {name: 'Editar', action: 'edit', icon: 'Edit'},
    {name: 'Excluir', action: 'delete', icon: 'Trash'}
  ]

  const selectedOption = (action: any) => {
    const optionsData = {action: action, options: props.options}
    emit('selectedOption', optionsData)
  }
</script>