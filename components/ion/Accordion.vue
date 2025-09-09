<template>
  <v-expansion-panels v-bind="$attrs" variant="accordion" v-model="model">
    <v-expansion-panel
      v-for="item in items"
      :key="item"
      :text="item.text"
      :title="item.title"
    ></v-expansion-panel>
  </v-expansion-panels>
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