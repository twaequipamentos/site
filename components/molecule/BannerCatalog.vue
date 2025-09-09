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
		<AtomImage :imageUrl="bannerCatalog" cover class="w-full" />
	</div>
</template>

<script setup lang="ts">
	import bannerCatalog from '@/assets/images/banner-catalog.png';
	import peopleImage from '@/assets/images/people.png';
	import { openWhatsApp } from '~/composables/functionsUtils';
  const router = useRouter()

  const goToRegister = () => {
    router.push('/dashboard')
  }

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
