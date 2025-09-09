<template>
  <v-carousel v-bind="$attrs" cycle>
    <v-carousel-item
      v-for="item in items" :key="item"
      :src="item.image"
      cover
    ></v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
	const props = defineProps({
		items: {
			type: Array,
			default: () => ([])
		}
	})
</script>