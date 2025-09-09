<template>
  <IonCarouselSliderGroup v-model="model" :items="items">
    <!-- <template v-slot:item="{ item }">
      <AtomImage :imageUrl="item.image" />
    </template> -->
  </IonCarouselSliderGroup>
</template>

<script setup lang="ts">
  const model = defineModel()
  const props = defineProps({
		items: {
			type: Array,
			required: false,
			default: () => ([])
		}
	})
</script>