<template>
  <div class="min-h-[100vh] py-6 flex justify-center bg-white">
    <div class="w-[1440px] px-8 px-xl-0">
      <div class="text-lg mb-1">Locação de Guindastes e Guindautos</div>
      <div class="text-xs mb-4">Home - Locação de Guindastes</div>
      <hr class="mb-4"/>
      <div class="lg:flex align-start mt-10">
          <div class="lg:w-[40%] lg:mr-10 hidden lg:flex"> 
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
          </div>
          <div class="lg:w-[60%]">
            <div class="text-xl text-red mb-2">Locação de</div>
            <div class="text-3xl">Guindastes e Guindauto</div>
            <div class="lg:w-[40%] lg:mr-10 flex lg:hidden my-4 my-lg-0"> 
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
            </div>
            <div class="flex">
              <div class="lg:pr-8">
                <div class="my-2 flex flex-column">
                  <div class="text-sm text-grey500 mb-4">
                    A TWA Equipamentos e Serviços Industriais oferece soluções completas em locação de guindastes e guindautos, proporcionando segurança, eficiência e tranquilidade em cada operação.
                    <br />
                    <br />
                    O guindaste é indicado para serviços de grande porte, com maior capacidade de carga e alcance. Ele é ideal para obras industriais, construção civil, montagem de estruturas metálicas e operações que exigem precisão em grandes alturas. Já o guindauto, também conhecido como caminhão munck, se destaca pela versatilidade e mobilidade. Por ser instalado sobre um caminhão, o guindauto permite acesso mais rápido ao local da obra, sendo perfeito para movimentações de médio porte, transporte de materiais e atividades que exigem praticidade e agilidade.
                    <br />
                    <br />
                    Independentemente da necessidade, nossos equipamentos são modernos, passam por rigorosos processos de manutenção preventiva e atendem a todas as exigências legais e normas regulamentadoras. Além disso, contamos com uma equipe altamente treinada e especializada, preparada para executar serviços de movimentação de cargas e içamentos com máxima segurança e eficiência.
                    <br />
                    <br />
                    Escolher a TWA significa ter ao seu lado um parceiro que alia tecnologia, experiência e compromisso para garantir que sua obra seja executada sem imprevistos, dentro do prazo e com total confiabilidade.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div class="flex flex-col w-full max-w-[600px]">
        <span class="text-xl text-red">Fale com a</span>
        <span class="text-2xl mb-4">TWA Equipamentos agora mesmo!</span>
        <span class="text-sm text-grey500">
          Entre em contato com o time de vendas da TWA Equipamentos agora mesmo e tire todas as suas dúvidas sobre a locação de Guindastes e Guindautos, solicite seu orçamento e tenha um serviço de extrema qualidade e segurança.
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
import locacao1 from '@/assets/images/locacao1.jpg';
import locacao2 from '@/assets/images/locacao2.jpg';
import locacao3 from '@/assets/images/locacao3.jpg';
import locacao4 from '@/assets/images/locacao4.jpg';
import locacao5 from '@/assets/images/locacao5.jpg';
import locacao6 from '@/assets/images/locacao6.jpg';

  definePageMeta({
		layout: 'home',
		auth: false
	})

  const { t } = useI18n()
	const title = `${t('pageTitle', { page: t('craneRental.pageTitle') })}`

	useHead({
		title: title
	})
</script>