<!-- <template>
  <div>
    <v-slide-group
      v-model="model"
      class="pa-4"
      selected-class="bg-primary"
      show-arrows
    >
      <v-slide-group-item
        v-for="item in items"
        :key="item"
      >
      <AtomImage :imageUrl="item.image" class="w-[500px] h-[200px]"/>
      </v-slide-group-item>
    </v-slide-group>
  </div>
</template> -->

<template>
  <v-sheet
    class="mx-auto"
    elevation="0"
    max-width="100%"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      selected-class="bg-success"
      show-arrows
    >
      <v-slide-group-item
        v-for="item in items"
        :key="item"
        v-slot="{ isSelected, toggle, selectedClass }"
      >

      <div class="w-[200px] mx-4 flex align-center justify-center">
        <AtomImage :imageUrl="item.image" class="w-full h-auto"/>
      </div>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
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