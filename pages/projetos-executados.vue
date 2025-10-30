<template>
  <div class="min-h-[100vh] py-6 flex justify-center bg-white">
    <div class="w-[1440px] px-8 px-xl-0">
      <div class="text-lg mb-1">Projetos executados</div>
      <div class="text-xs mb-4">Home - Projetos executados</div>
      <hr class="mb-4"/>
      <div class="lg:w-[100%]">
        <div class="text-xl text-red mb-2">Projetos</div>
        <div class="text-3xl">executados</div>
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
                Temos orgulho de apresentar uma seleção dos nosso projetos executados com excelência e dedicação.
                Cada projeto é único, pensando na funcionalidade e atenção aos detalhes. Com uma equipe talentosa e experiente,
                trabalhamos incansavelmente para transformar visões em realidade, entregando soluções sob medida que superam as expectativas.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:flex align-start mt-10 w-full">
        <MoleculeGalleryView :images="imagesList" :initialItemsPerLine="3" />
        <!-- <div class="lg:w-[100%] lg:mr-10 hidden lg:flex"> 
          <v-row>
            <v-col cols="6" md="4">
              <div class="rounded-lg" :style="`background: url(${projetos1}); width: 100%; height:300px; background-size:cover`"></div>
            </v-col>
            <v-col cols="6" md="4">
              <div class="rounded-lg" :style="`background: url(${projetos2}); width: 100%; height:300px; background-size:cover`"></div>
            </v-col>
            <v-col cols="6" md="4">
              <div class="rounded-lg" :style="`background: url(${projetos3}); width: 100%; height:300px; background-size:cover`"></div>
            </v-col>
            <v-col cols="6" md="4">
              <div class="rounded-lg" :style="`background: url(${projetos4}); width: 100%; height:300px; background-size:cover`"></div>
            </v-col>
            <v-col cols="6" md="4">
              <div class="rounded-lg" :style="`background: url(${projetos5}); width: 100%; height:300px; background-size:cover`"></div>
            </v-col>
            <v-col cols="6" md="4">
              <div class="rounded-lg" :style="`background: url(${projetos6}); width: 100%; height:300px; background-size:cover`"></div>
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
      <div class="mt-4 w-[255px]">
        <NuxtLink :to="`https://wa.me/5516981735919?text=${encodeURIComponent('Olá! Gostaria de tirar dúvidas sobre locação de Guindastes e Guindautos.')}`" class="highlight-menu text-uppercase text-sm bg-green rounded-md p-2 flex align-center" target="_blank">
          <AtomIcon name="WhatsappFull" filled class="!w-6 !h-6 mr-2"></AtomIcon>
          <span>Falar com a equipe da TWA</span> 
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import projetos1 from '@/assets/images/projetos1.jpeg';
import projetos2 from '@/assets/images/projetos2.jpeg';
import projetos3 from '@/assets/images/projetos3.jpeg';
import projetos4 from '@/assets/images/projetos4.jpeg';
import projetos5 from '@/assets/images/projetos5.jpeg';
import projetos6 from '@/assets/images/projetos6.jpeg';
  definePageMeta({
    layout: 'home',
    auth: false
  })

  const imagesList = [
    projetos1,
    projetos2,
    projetos3,
    projetos4,
    projetos5,
    projetos6,
  ]

  const { t } = useI18n()
  const title = `${t('pageTitle', { page: t('craneRental.pageTitle') })}`

  useHead({
    title: title
  })
</script>