<template>
  <v-row class="!m-0">
    <v-col cols="12" sm="6" md="4" lg="3" v-for="item in items.slice(0, limit)" :key="item" class="h-auto">
      <AtomCardSolution 
        :icon="item.icon"
        :title="item.title"
        :description="item.description"
        :path="item.path"
        :textButton="item.textButton"
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