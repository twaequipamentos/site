<template>
  <v-row>
    <v-col cols="12" sm="6" md="4" lg="3" v-for="item in items.slice(0, limit)" :key="item" class="flex align-center justify-center">
      <div class="text-center w-[250px] h-auto flex flex-col">
        <span class="text-6xl font-[1000] text-secondary mb-4">{{item.title}}</span>
        <span class="text-xl text-grey500">{{item.description}}</span>
      </div>
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