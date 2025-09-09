<template>
  <div class="relative flex justify-center">		
		<!-- <div class="absolute top-0 z-10 max-w-[1440px] w-full h-full flex align-center">
			<div class="z-10 flex flex-col h-auto w-[400px]">
				<span class="font-bold text-5xl text-black mb-2">{{ $t('bannerHome.title') }}</span>
				<span class="font-semibold text-2xl text-primary mb-10">{{ $t('bannerHome.description') }}</span>
				<span class="text-lg text-primary text-black">{{ $t('bannerHome.text') }}</span>
				<div class="mt-4">
					<AtomButton color="green" class="text-body-2" @click="openWhatsApp">
						{{$t('talkToUs')}} 
					</AtomButton>
				</div>
			 </div>
		</div> -->
		<!-- <AtomImage :imageUrl="bannerHome" cover class="w-full" /> -->
		<!-- <AtomCarousel :items="carouselItems" height="calc(100vh - 120px)" /> -->
		<AtomCarousel :items="carouselItems" height="100%" />
	</div>
</template>

<script setup lang="ts">
	import excelenciaHidraulica from '@/assets/images/banners/excelencia-hidraulica.png';
	import maiorFabricanteSapatas from '@/assets/images/banners/maior-fabricante-sapatas.png';
	import solucoesHidraulicas from '@/assets/images/banners/solucoes-hidraulicas.png';
	import confiancaHidraulica from '@/assets/images/banners/confianca-hidraulica.png';
	import empresa from '@/assets/images/banners/empresa.png';
	import agrishow from '@/assets/images/banners/agrishow.png';
  const router = useRouter()

  const goToRegister = () => {
    router.push('/dashboard')
  }

	const carouselItems = [
		{image: agrishow},
		{image: excelenciaHidraulica},
		{image: maiorFabricanteSapatas},
		{image: solucoesHidraulicas},
		{image: confiancaHidraulica},
		{image: empresa}
	]

	const currentSlide = ref(0);

	// const partnersItems = [
	// 	{image: johnDeere},
	// 	{image: case3},
	// 	{image: johnDeere},
	// 	{image: case3},
	// 	{image: johnDeere},
	// 	{image: case3},
	// 	{image: johnDeere},
	// 	{image: case3},
	// 	{image: johnDeere},
	// 	{image: case3},
	// 	{image: johnDeere},
	// 	{image: case3},
	// 	{image: johnDeere},
	// 	{image: case3},
	// 	{image: johnDeere},
	// 	{image: case3},
	// 	{image: johnDeere},
	// 	{image: case3},
	// 	{image: johnDeere},
	// 	{image: case3},
	// 	{image: johnDeere},
	// ]

	// onMounted(() => {
	// 	startAutoSlide()
	// })

	// const startAutoSlide = () => {
	// 	setInterval(() => {
	// 		currentSlide.value = (currentSlide.value + 2) % partnersItems.length; // Avança para o próximo slide
	// 	}, 2000); // Muda a cada 3 segundos
	// };

</script>



<style lang="scss">
.banner-home {
	background-color: rgba($primary, 0.8);
	color: $white;

	&__description {
		background-color: rgba($white, 0.8);
	}
}
</style>
