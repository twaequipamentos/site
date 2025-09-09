<template>
  <v-row>
    <v-col cols="12" sm="6" md="4" lg="3" v-for="item in items.slice(0, limit)" :key="item">
      <AtomCardSolution 
        :icon="item.icon"
        :title="item.title"
        :description="item.description"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  const props = defineProps({
		items: {
			type: Array,
			required: false,
			default: () => ([]),
    },

		limit: {
			type: Number,
			required: false,
    }
	})
</script>