<template>
  <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="itemsPerPage"
      v-bind="$attrs"
      :items-per-page-text="$t('itemsPerPage')"
    >
    <template v-slot:column="{ column }">
      <slot :name="`column-${column.key}`" :column="column"></slot>
    </template>
    <template v-slot:item="{ item }">
      <slot name="item" :item="item"></slot>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
	const props = defineProps({
    headers: {
      type: Array,
      required: false,
    },

    items: {
      type: Array,
      required: true,
    },

    itemsPerPage: {
      type: Number,
      default: -1,
    },
	})
</script>

