<template>
  <IonTooltip :text="text" :location="location">
    <template v-slot:activator="{ props }">
      <slot name="activator" :props="props" />
    </template>
  </IonTooltip>
</template>

<script setup lang="ts">
	const props = defineProps({
		text: {
			type: String,
			required: false,
			default: '',
		},
		location: {
			type: String,
			required: false,
			default: 'end',
		},
	})
</script>