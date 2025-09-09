<template>
  <div class="relative">
		<AtomImage :imageUrl="businessImg" cover class="w-full h-[400px] rounded-b-lg" />
	</div>
</template>

<script setup lang="ts">
	import businessImg from '@/assets/images/business22.jpg';
  const router = useRouter()
</script>
