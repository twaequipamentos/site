<template>
  <div class="min-h-[100vh] py-6 flex justify-center bg-white">
    <div class="w-[1440px] px-8 px-xl-0">
      <div class="text-lg mb-1">Fabricação e Montagem de Equipamentos Industriais</div>
      <div class="text-xs mb-4">Home - Fabricação e Montagem de Equipamentos Industriais</div>
      <hr class="mb-4"/>
      <div class="lg:w-[100%]">
        <div class="text-xl text-red mb-2">Fabricação e Montagem</div>
        <div class="text-3xl">de Equipamentos Industriais</div>
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
                Utilizamos as mais recentes tecnologias e metodologias para otimizar o fluxo de trabalho, reduzir o tempo de ciclo
                e minimizar desperdicios. Cada aspecto desse processo é cuidadosamente planejado e executado para 
                garantir os mais altos padrões de qualidade, dentro do prazo de entrega, mantendo o custo-benefício de mercado,
                com fornecedores selecionados e matéria-prima com qualidade garantida.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:flex align-start mt-10">
        <MoleculeGalleryView :images="imagesList" initialItemsPerLine="3" />
        <!-- <div class="lg:w-[100%] lg:mr-10 hidden lg:flex"> 
          <v-row>
            <v-col cols="6" md="4">
              <div class="rounded-lg" :style="`background: url(${fabricacao1}); width: 100%; height:300px; background-size:cover`"></div>
            </v-col>
            <v-col cols="6" md="4">
              <div class="rounded-lg" :style="`background: url(${montagem1}); width: 100%; height:300px; background-size:cover`"></div>
            </v-col>
            <v-col cols="6" md="4">
              <div class="rounded-lg" :style="`background: url(${fabricacao2}); width: 100%; height:300px; background-size:cover`"></div>
            </v-col>
            <v-col cols="6" md="4">
              <div class="rounded-lg" :style="`background: url(${montagem2}); width: 100%; height:300px; background-size:cover`"></div>
            </v-col>
            <v-col cols="6" md="4">
              <div class="rounded-lg" :style="`background: url(${fabricacao3}); width: 100%; height:300px; background-size:cover`"></div>
            </v-col>
            <v-col cols="6" md="4">
              <div class="rounded-lg" :style="`background: url(${montagem3}); width: 100%; height:300px; background-size:cover`"></div>
            </v-col>
          </v-row>
        </div> -->
      </div>
      <div class="flex flex-col w-full max-w-[600px] mt-10">
        <span class="text-xl text-red">Fale com a</span>
        <span class="text-2xl mb-4">TWA Equipamentos agora mesmo!</span>
        <span class="text-md text-grey500">
          Entre em contato com a Equipe do Comercial da TWA Equipamentos agora mesmo e tire todas as suas dúvidas, solicite seu orçamento e tenha um serviço de extrema qualidade e segurança.
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
import fabricacao1 from '@/assets/images/fabricacao1.jpeg';
import montagem1 from '@/assets/images/montagem1.jpeg';
import fabricacao2 from '@/assets/images/fabricacao2.jpeg';
import montagem2 from '@/assets/images/montagem2.jpeg';
import fabricacao3 from '@/assets/images/fabricacao3.jpeg';
import montagem3 from '@/assets/images/montagem3.jpeg';
  definePageMeta({
    layout: 'home',
    auth: false
  })

  const imagesList = [
    fabricacao1,
    montagem1,
    fabricacao2,
    montagem2,
    fabricacao3,
    montagem3
  ]

  const { t } = useI18n()
  const title = `${t('pageTitle', { page: t('craneRental.pageTitle') })}`

  useHead({
    title: title
  })
</script>