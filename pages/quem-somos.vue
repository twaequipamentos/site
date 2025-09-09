<template>
  <div class="min-h-[100vh] py-6 flex justify-center bg-white">
    <div class="w-[1440px] px-8 px-xl-0">
      <div class="text-lg mb-1">Quem somos</div>
      <div class="text-xs mb-4">Home - Quem somos</div>
      <hr class="mb-4"/>
        <div class="text-xl text-red mb-2">Conheça a </div>
        <div class="lg:flex align-center">
          <div class="lg:w-[55%]">
            <div class="text-3xl">TWA Equipamentos e Serviços Industriais</div>
            <div class="flex mt-4">
              <!-- <div class="pa-8">Video ou Foto</div> -->
              <div class="lg:pr-8">
                <div class="my-4 flex">
                  <div class="pr-4 hidden lg:flex">
                    <AtomIcon name="Factory" class="!w-[80px] !h-[80px] text-black"></AtomIcon>
                  </div>
                  <div class="text-md">
                    Fundada em 2015, em Sertãozinho/SP, a TWA Equipamentos e Serviços Industriais se consolidou como uma referência no mercado de soluções industriais. Com o apoio de profissionais altamente capacitados e experientes, a empresa aplica seu vasto conhecimento para desenvolver soluções personalizadas que atendem às necessidades de indústrias dos segmentos leve e pesado.
                  </div>
                </div>
                <div class="border-t-[1px] border-red-500"></div>
                <div class="my-4 flex">
                  <div class="pr-4 hidden lg:flex">
                    <AtomIcon name="Engineering" class="!w-[80px] !h-[80px] text-black"></AtomIcon>
                  </div>
                  <div class="text-md">
                    A TWA oferece um portfólio completo de serviços, incluindo calderaria, montagem industrial, consultoria, planejamento, projetos e fabricação de estruturas e componentes para plantas industriais. Conta com uma equipe técnica formada por engenheiros mecânicos e de segurança, planejadores, inspetores de qualidade e projetistas, garantindo atendimento especializado e a plena satisfação dos seus clientes.
                  </div>
                </div>
                <div class="text-center text-md-start mt-8">
                  <AtomButton size="large" color="red" class="text-white text-body-1" @click="goToPage('quem-somos')">
                    <div class="flex align-center">
                      <span>Conheça mais sobre nós </span>
                      <AtomIcon name="ArrowRight" class="ml-2 !w-[30px] !h-[30px] text-white">
                      </AtomIcon>
                    </div>
                  </AtomButton>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-[45%] mt-10"> 
            <AtomImage :imageUrl="twaCompany" width="100%" height="auto" class="rounded-lg" />
          </div>
        </div>
      <div class="my-10 lg:flex lg:space-x-8">
        <div class="flex flex-col w-full max-w-[100%]">
          <span class="text-xl text-red">Missão</span>
          <span class="text-sm text-grey500">
            Transformar a experiência de manutenção de nossos clientes, proporcionando soluções e mão de obra qualificada, para que possa atingir a melhor performance de suas operações com segurança, excelência e pontualidade.
          </span>
        </div>
        <div class="flex flex-col w-full max-w-[100%] mt-4 mt-lg-0">
          <span class="text-xl text-red">Visão</span>
          <span class="text-sm text-grey500">
            Ser referência no segmento, através de nossos valores, proporcionando soluções eficazes em fabricação, manutenção, instalação e reforma de equipamentos industriais.
          </span>
        </div>
      </div>
      <span class="text-xl text-red text-center">Valores</span>
      <v-row class="w-full">
        <v-col cols="6" md="3" class="px-0 py-md-8">
          <div class="w-full flex align-center">
            <AtomIcon name="Security" class="!w-[60px] !h-[60px] lg:!w-[120px] lg:!h-[120px] text-primary"></AtomIcon>
            <span class="text-grey500">Segurança</span>
          </div>
        </v-col>
        <v-col cols="6" md="3" class="px-0 py-md-8">
          <div class="w-full flex align-center">
            <AtomIcon name="Trophy" class="!w-[60px] !h-[60px] lg:!w-[120px] lg:!h-[120px] text-primary"></AtomIcon>
            <span class="text-grey500">Excelência</span>
          </div>
        </v-col>
        <v-col cols="6" md="3" class="px-0 py-md-8">
          <div class="w-full flex align-center">
            <AtomIcon name="Schedule" class="!w-[60px] !h-[60px] lg:!w-[120px] lg:!h-[120px]  text-primary"></AtomIcon>
            <span class="text-grey500">Pontualidade</span>
          </div>
        </v-col>
        <v-col cols="6" md="3" class="px-0 py-md-8">
          <div class="w-full flex align-center">
            <AtomIcon name="Handshake" class="!w-[60px] !h-[60px] lg:!w-[120px] lg:!h-[120px]  text-primary"></AtomIcon>
            <span class="text-grey500">Compromisso</span>
          </div>
        </v-col>
      </v-row>
      <div class="flex flex-col w-full max-w-[600px] my-8">
        <span class="text-xl text-red">Fale com a</span>
        <span class="text-2xl mb-4">TWA Equipamentos agora mesmo!</span>
        <span class="text-sm text-grey500">
          Entre em contato com o time de vendas da TWA Equipamentos agora mesmo e tire todas as suas dúvidas, solicite seu orçamento e tenha um serviço de extrema qualidade e segurança.
        </span>
      </div>
      <div class="mt-4 w-[255px]">
        <NuxtLink :to="`https://wa.me/5516981735919?text=${encodeURIComponent('Olá! Gostaria de falar sobre os serviços de construção.')}`" class="highlight-menu text-uppercase text-sm bg-green rounded-md p-2 flex align-center" target="_blank">
          <AtomIcon name="WhatsappFull" filled class="!w-6 !h-6 mr-2"></AtomIcon>
          <span>Falar com a equipe da TWA</span> 
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import twaCompany from '@/assets/images/twa_company.jpg';

  definePageMeta({
		layout: 'home',
		auth: false
	})

  const { t } = useI18n()
	const title = `${t('pageTitle', { page: t('whoWeAre.pageTitle') })}`

	useHead({
		title: title
	})
</script>