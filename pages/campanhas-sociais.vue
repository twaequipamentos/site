<template>
  <div class="min-h-[100vh] py-6 flex justify-center bg-white">
    <div class="w-[1440px] px-8 px-xl-0">
      <div class="text-lg mb-1">Campanhas sociais</div>
      <div class="text-xs mb-4">Home - Campanhas sociais</div>
      <hr class="mb-4"/>
      <div class="lg:w-[100%]">
        <div class="text-xl text-red mb-2">Campanhas</div>
        <div class="text-3xl">sociais</div>
        <div class="flex">
          <div class="lg:pr-8">
            <div class="my-2 flex flex-column">
              <div class="text-md text-grey500">
                Cuidar de pessoas também faz parte da nossa missão.
                Na TWA Equipamentos, acreditamos que o trabalho vai além das tarefas do dia a dia, ele é uma oportunidade de cuidar, acolher e transformar vidas.
                Por isso, realizamos campanhas mensais de conscientização que abordam temas importantes para a saúde, o bem-estar e a valorização da vida:
                <br />
                <br />
                <div class="flex">
                  <div style="border-radius:100%; width: 20px; height: 20px; background-color:white; border: 2px solid black;"></div>
                  <div class="ml-2"> <span class="font-bold"> Janeiro Branco </span> – cuidado com a saúde mental</div>
                </div>
                <br />
                <div class="flex">
                  <div style="border-radius:100%; width: 20px; height: 20px; background-color: purple;"></div>
                  <div class="ml-2"><span class="font-bold">Fevereiro Roxo</span> – conscientização sobre o lúpus, Alzheimer e fibromialgia</div>
                </div>

                <br />
                <div class="flex">
                  <div style="border-radius:100%; width: 20px; height: 20px; background-color: #A47DAB;"></div>
                  <div class="ml-2"> <span class="font-bold">Março Lilás</span> – prevenção ao câncer do colo do útero</div>
                </div>
                <br />
                <div class="flex">
                  <div style="border-radius:100%; width: 20px; height: 20px; background-color: blue;"></div>
                  <div class="ml-2"> <span class="font-bold">Abril Azul</span> – inclusão e respeito às pessoas com autismo</div>
                </div>
                <br />
                <div class="flex">
                  <div style="border-radius:100%; width: 20px; height: 20px; background-color: red;"></div>
                  <div class="ml-2"> <span class="font-bold">Maio Vermelho</span> – prevenção às hepatites virais</div>
                </div>
                <br />
                <div class="flex">
                  <div style="border-radius:100%; width: 20px; height: 20px; background-color: red;"></div>
                  <div class="ml-2"> <span class="font-bold">Junho Vermelho</span> – incentivo à doação de sangue</div>
                </div>
                <br />
                <div class="flex">
                  <div style="border-radius:100%; width: 20px; height: 20px; background-color: yellow; border: 2px solid black;"></div>
                  <div class="ml-2"> <span class="font-bold">Julho Amarelo</span> – combate às hepatites virais</div>
                </div>
                <br />
                <div class="flex">
                  <div style="border-radius:100%; width: 20px; height: 20px; background-color: red;"></div>
                  <div class="ml-2"> <span class="font-bold">Agosto Vermelho</span> – prevenção e conscientização sobre as doenças do coração</div>
                </div>
                <br />
                <div class="flex">
                  <div style="border-radius:100%; width: 20px; height: 20px; background-color: yellow; border: 2px solid black;"></div>
                  <div class="ml-2"> <span class="font-bold">Setembro Amarelo</span> – valorização da vida e prevenção ao suicídio</div>
                </div>
                <br />
                <div class="flex">
                  <div style="border-radius:100%; width: 20px; height: 20px; background-color: pink; border: 2px solid black;"></div>
                  <div class="ml-2"> <span class="font-bold">Outubro Rosa</span> – prevenção e diagnóstico precoce do câncer de mama</div>
                </div>
                <br />
                <div class="flex">
                  <div style="border-radius:100%; width: 20px; height: 20px; background-color: blue;"></div>
                  <div class="ml-2"> <span class="font-bold">Novembro Azul</span> – saúde e prevenção do câncer de próstata</div>
                </div>
                <br />
                <div class="flex">
                  <div style="border-radius:100%; width: 20px; height: 20px; background-color: red;"></div>
                  <div class="ml-2"> <span class="font-bold">Dezembro Vermelho</span> – conscientização sobre o HIV e outras ISTs</div>
                </div>
                <br />
                <br />

                Cada campanha é um convite à reflexão, ao diálogo e à empatia — fortalecendo a cultura de cuidado que faz parte do nosso jeito de ser.
                Porque, para nós, valorizar a vida é o que realmente nos move.
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
import campanha1 from '@/assets/images/campanhas_sociais1.jpg';
import campanha2 from '@/assets/images/campanhas_sociais2.jpg';
import campanha3 from '@/assets/images/campanhas_sociais3.jpg';
import campanha4 from '@/assets/images/campanhas_sociais4.jpg';
import campanha5 from '@/assets/images/campanhas_sociais5.jpg';
import campanha6 from '@/assets/images/campanhas_sociais6.jpg';
import campanha7 from '@/assets/images/campanhas_sociais7.jpg';
import campanha8 from '@/assets/images/campanhas_sociais8.jpg';
import campanha9 from '@/assets/images/campanhas_sociais9.jpg';
import campanha10 from '@/assets/images/campanhas_sociais10.jpg';
import campanha11 from '@/assets/images/campanhas_sociais11.jpg';
import campanha12 from '@/assets/images/campanhas_sociais12.jpg';

  definePageMeta({
    layout: 'home',
    auth: false
  })

  const imagesList = [
    campanha1,
    campanha2,
    campanha3,
    campanha4,
    campanha5,
    campanha6,
    campanha7,
    campanha8,
    campanha9,
    campanha10,
    campanha11,
    campanha12,
  ]

  const { t } = useI18n()
  const title = `${t('pageTitle', { page: t('craneRental.pageTitle') })}`

  useHead({
    title: title
  })
</script>