<template>
  <div class="py-6 flex justify-center bg-white">
    <div class="w-[1440px] px-8 px-xl-0">
      <div class="text-lg mb-1">Qualidade em nossos serviços</div>
      <div class="text-xs mb-4">Home - Qualidade em nossos serviços</div>
      <hr class="mb-4"/>
      <div class="lg:w-[100%]">
        <div class="text-xl text-red mb-2">Qualidade</div>
        <div class="text-3xl">em nossos serviços</div>
        <!-- <div class="lg:w-[40%] lg:mr-10 flex lg:hidden my-4 my-lg-0"> 
          <v-row>
            <v-col cols="6" md="4">
              <div class="rounded-lg" :style="`background: url(${locacao1}); width: 100%; height:150px; background-size:cover`"></div>
            </v-col>
            <v-col cols="6" md="4">
              <div class="rounded-lg" :style="`background: url(${locacao2}); width: 100%; height:150px; background-size:cover`"></div>
            </v-col>
            <v-col cols="6" md="4">
              <div class="rounded-lg" :style="`background: url(${locacao3}); width: 100%; height:150px; background-size:cover`"></div>
            </v-col>
            <v-col cols="6" md="4">
            <div class="rounded-lg" :style="`background: url(${locacao4}); width: 100%; height:150px; background-size:cover`"></div>
            </v-col>
            <v-col cols="6" md="4">
              <div class="rounded-lg" :style="`background: url(${locacao5}); width: 100%; height:150px; background-size:cover`"></div>
            </v-col>
            <v-col cols="6" md="4">
              <div class="rounded-lg" :style="`background: url(${locacao6}); width: 100%; height:150px; background-size:cover`"></div>
            </v-col>
          </v-row>
        </div> -->
        <div class="flex">
          <div class="lg:pr-8">
            <div class="my-2 flex flex-column">
              <div class="text-sm text-grey500">
                Contamos com uma equipe especializada que acompanha todas as etapas de produção, com matéria-prima certificada e realiza o controle de qualidade com a execução de inspeções, teste hidrostático, emissão de ART's, fornecendo ao cliente a excelência no produto final.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:flex align-start mt-10">
        <MoleculeGalleryView :images="imagesList" />
        <!-- <div class="lg:w-[100%] lg:mr-10 hidden lg:flex"> 
          <v-row>
            <v-col cols="6" md="4">
              <div class="rounded-lg" :style="`background: url(${qualidade1}); width: 100%; height:300px; background-size:cover`"></div>
            </v-col>
            <v-col cols="6" md="4">
              <div class="rounded-lg" :style="`background: url(${qualidade2}); width: 100%; height:300px; background-size:cover`"></div>
            </v-col>
            <v-col cols="6" md="4">
              <div class="rounded-lg" :style="`background: url(${qualidade4}); width: 100%; height:300px; background-size:cover`"></div>
            </v-col>
            <v-col cols="6" md="4">
              <div class="rounded-lg" :style="`background: url(${qualidade6}); width: 100%; height:300px; background-size:cover`"></div>
            </v-col>
            <v-col cols="6" md="4">
              <div class="rounded-lg" :style="`background: url(${qualidade7}); width: 100%; height:300px; background-size:cover`"></div>
            </v-col>
            <v-col cols="6" md="4">
              <div class="rounded-lg" :style="`background: url(${qualidade8}); width: 100%; height:300px; background-size:cover`"></div>
            </v-col>
          </v-row>
        </div> -->
      </div>
      <div class="flex flex-col w-full max-w-[600px] mt-10">
        <span class="text-xl text-red">Fale com a</span>
        <span class="text-2xl mb-4">TWA Equipamentos agora mesmo!</span>
        <span class="text-sm text-grey500">
          Entre em contato com a Equipe do Comercial da TWA Equipamentos agora mesmo e tire todas as suas dúvidas sobre a locação de Guindastes e Guindautos, solicite seu orçamento e tenha um serviço de extrema qualidade e segurança.
        </span>
      </div>
      <div class="my-4 w-[255px]">
        <NuxtLink :to="`https://wa.me/5516981735919?text=${encodeURIComponent('Olá! Gostaria de tirar dúvidas sobre locação de Guindastes e Guindautos.')}`" class="highlight-menu text-uppercase text-sm bg-green rounded-md p-2 flex align-center" target="_blank">
          <AtomIcon name="WhatsappFull" filled class="!w-6 !h-6 mr-2"></AtomIcon>
          <span>Falar com a equipe da TWA</span> 
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import qualidade1 from '@/assets/images/qualidade1.jpeg';
import qualidade2 from '@/assets/images/qualidade2.jpeg';
import qualidade4 from '@/assets/images/qualidade4.jpeg';
import qualidade5 from '@/assets/images/qualidade5.jpeg';
import qualidade6 from '@/assets/images/qualidade6.jpeg';
import qualidade7 from '@/assets/images/qualidade7.jpeg';
import qualidade8 from '@/assets/images/qualidade8.jpeg';
  definePageMeta({
		layout: 'home',
		auth: false
	})

  const imagesList = [
    qualidade1,
    qualidade2,
    qualidade4,
    qualidade5
  ]

  const { t } = useI18n()
	const title = `${t('pageTitle', { page: t('craneRental.pageTitle') })}`

	useHead({
		title: title
	})
</script>