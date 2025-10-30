<template>
  <div class="min-h-[100vh] py-6 flex justify-center bg-white">
    <div class="w-[1440px] px-8 px-xl-0">
      <div class="text-lg mb-1">Liderança</div>
      <div class="text-xs mb-4">Home - Treinamentos - Liderança</div>
      <hr class="mb-4"/>
      <div class="lg:w-[100%]">
        <div class="text-xl text-red mb-2">Desenvolvendo líderes</div>
        <div class="text-3xl">fortalecendo resultados</div>
        <div class="flex">
          <div class="lg:pr-8">
            <div class="my-2 flex flex-column">
              <div class="text-md text-grey500">
                Na TWA Equipamentos, acreditamos que o crescimento de uma empresa começa pelo desenvolvimento das pessoas que a constroem todos os dias. Por isso, investimos continuamente em programas de capacitação e treinamentos de liderança, voltados para fortalecer competências, aprimorar a gestão de equipes e inspirar atitudes que refletem nossos valores.
                <br />
                <br />
                Mais do que formar gestores, buscamos desenvolver líderes preparados para os desafios do futuro, capazes de tomar decisões com responsabilidade, empatia e visão estratégica. Nossos treinamentos são pensados com todo cuidado, combinando teoria e prática, promovendo trocas de experiências e incentivando o aprendizado contínuo.
                <br />
                <br />
                Cada encontro é uma oportunidade de crescimento pessoal e profissional, reforçando o compromisso da TWA com a excelência, a segurança e o trabalho em equipe.
                Porque, para nós, liderar é inspirar, e inspirar é construir juntos um caminho de sucesso.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:flex align-start mt-10 w-full">
        <MoleculeGalleryView :images="imagesList" :initialItemsPerLine="4" />
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
import lideranca1 from '@/assets/images/lideranca1.jpg';
import lideranca2 from '@/assets/images/lideranca2.jpg';
import lideranca3 from '@/assets/images/lideranca3.jpg';
import lideranca4 from '@/assets/images/lideranca4.jpg';
import lideranca5 from '@/assets/images/lideranca5.jpg';
import lideranca6 from '@/assets/images/lideranca6.jpg';
import lideranca7 from '@/assets/images/lideranca7.jpg';
import lideranca8 from '@/assets/images/lideranca8.jpg';
import lideranca9 from '@/assets/images/lideranca9.jpg';
import lideranca10 from '@/assets/images/lideranca10.jpg';
import lideranca11 from '@/assets/images/lideranca11.jpg';
import lideranca12 from '@/assets/images/lideranca12.jpg';
import lideranca13 from '@/assets/images/lideranca13.jpg';

  definePageMeta({
    layout: 'home',
    auth: false
  })

  const imagesList = [
    lideranca1,
    lideranca2,
    lideranca3,
    lideranca4,
    lideranca5,
    lideranca6,
    lideranca7,
    lideranca8,
    lideranca9,
    lideranca10,
    lideranca11,
    lideranca12,
    lideranca13,
  ]

  const { t } = useI18n()
  const title = `${t('pageTitle', { page: t('craneRental.pageTitle') })}`

  useHead({
    title: title
  })
</script>