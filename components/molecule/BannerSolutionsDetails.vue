<template>
  <div class="relative">
		<AtomImage :imageUrl="imageUrl" cover class="w-full h-[400px] rounded-b-lg" />
	</div>
</template>

<script setup lang="ts">
  const props = defineProps({
		imageUrl: {
			type: String,
			required: false,
			default: ''
		}
	})
  const router = useRouter()
</script>
