<template>
	<IonIcon :name="name" :filled="filled" class="icon-default" />
</template>

<script setup lang="ts">
	const props = defineProps({
		name: {
			type: String
		},

		filled: {
			type: Boolean,
			default: false
		}
	})
</script>

<style lang="scss">
  .icon-default {
    fill: $grey-300;
    width: 18px;
    height: 18px;
  }
</style>
