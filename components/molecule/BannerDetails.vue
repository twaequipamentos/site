<template>
  <div class="relative">
		<AtomImage :imageUrl="image" cover class="w-full h-[400px] rounded-b-lg" />
	</div>
</template>

<script setup lang="ts">
  const props = defineProps({
		image: {
			type: String,
			required: false,
			default: ''
    }
	})
</script>
