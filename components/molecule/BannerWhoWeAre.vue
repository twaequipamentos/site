<template>
  <div class="relative">
		<AtomImage :imageUrl="businessImg" cover class="w-full h-[400px] rounded-b-lg" />
	</div>
</template>

<script setup lang="ts">
	import businessImg from '@/assets/images/business12.jpg';
  const router = useRouter()

  const goToRegister = () => {
    router.push('/dashboard')
  }

	const openWhatsApp = () => {
		const phoneNumber = '5516993306345';
		const message = 'Olá! Como posso ajudar?';
		const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
		window.open(url, '_blank');
	};
</script>

<style lang="scss">
.banner-home {
	background-color: rgb(46, 48, 146, 0.9);
	color: $white;
}
</style>
