<template>
  <div class="min-h-[100vh] py-6 flex justify-center bg-white">
    <div class="w-[1440px] px-8 px-xl-0" id="curva-duto-lavador-gases">
      <div class="text-lg mb-1">Manutenção</div>
      <div class="text-xs mb-4">Home - Manutenção</div>
      <hr class="mb-4"/>
      <div class="lg:flex">
        <div class="lg:w-[60%]">
          <div class="text-xl text-red mb-2">Sistema de </div>
          <div class="text-3xl">Exaustão de Gases</div>
          <div class="lg:w-[40%] flex lg:hidden mt-4 mt-lg-0"> 
            <AtomImage :imageUrl="exaustaoGases" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <!-- <div class="pa-8">Video ou Foto</div> -->
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-sm text-grey500">
                  O sistema de exaustão industrial é muito importante para as indústrias, pois, como faz parte do projeto de climatização, promove o bem-estar no ambiente de trabalho.
                  Os equipamentos que compõem esse conjunto são responsáveis por se livrar de substâncias tóxicas, vapores e gases, o que garante bem estar dos presentes. 
                  <br />
                  <br />
                  Fundamental para manter a qualidade do ar, ele captura e remove as impurezas do ambiente, faz a renovação do ar e garante qualidade de vida para os trabalhadores. Ele é especialmente necessário em lugares com pouca ou nenhuma ventilação.
                  Um sistema de exaustão bem pensado dentro de um projeto protege ainda mais os os funcionários e aumenta a produtividade
                </div>
              </div>
              <div class="mt-4 w-[215px]">
                <NuxtLink :to="`https://wa.me/5516981735919?text=${encodeURIComponent('Olá! Gostaria de tirar algumas dúvidas e solicitar um orçamento de Manutenção no Sistema de Exaustão de Gases.')}`" class="highlight-menu text-uppercase text-sm bg-green rounded-md p-2 flex align-center" target="_blank">
                  <AtomIcon name="WhatsappFull" filled class="!w-6 !h-6 mr-2"></AtomIcon>
                  <span>Solicitar orçamento</span> 
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-[40%] hidden lg:flex"> 
          <AtomImage :imageUrl="exaustaoGases" width="100%" height="auto" class="rounded-lg" />
        </div>
      </div>
      <div class="lg:flex my-10" id="duto-gases">
        <div class="lg:w-[40%] hidden lg:flex"> 
          <AtomImage :imageUrl="cozedores" width="100%" height="auto" class="rounded-lg" />
        </div>
        <div class="lg:w-[60%] lg:ml-10">
          <div class="text-xl text-red mb-2">Manutenção de</div>
          <div class="text-3xl">Cozedores Industriais</div>
          <div class="lg:w-[40%] flex lg:hidden mt-4 mt-lg-0"> 
            <AtomImage :imageUrl="cozedores" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <!-- <div class="pa-8">Video ou Foto</div> -->
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-sm text-grey500">
                  Os cozedores industriais são fundamentais na produção de alimentos em larga escala, sendo usados para o preparo de diversos itens, como legumes, carnes, massas e arroz. Para garantir o desempenho ideal desses equipamentos e aumentar sua durabilidade, a manutenção regular é indispensável.
                  <br />
                  <br />
                  A TWA Equipamentos é especializada na manutenção de equipamentos industriais, oferecendo soluções completas para cozedores industriais. Seu serviço abrange desde inspeções preventivas, que identificam falhas antes que se tornem problemas maiores, até reparos técnicos e reformas de unidades mais antigas, assegurando seu pleno funcionamento por muito mais tempo.
                </div>
              </div>
              <div class="mt-4 w-[215px]">
                <NuxtLink :to="`https://wa.me/5516981735919?text=${encodeURIComponent('Olá! Gostaria de tirar algumas dúvidas e solicitar um orçamento de Manutenção em Cozedores Industriais.')}`" class="highlight-menu text-uppercase text-sm bg-green rounded-md p-2 flex align-center" target="_blank">
                  <AtomIcon name="WhatsappFull" filled class="!w-6 !h-6 mr-2"></AtomIcon>
                  <span>Solicitar orçamento</span> 
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:flex">
        <div class="lg:w-[60%]">
          <div class="text-xl text-red mb-2">Manutenção de</div>
          <div class="text-3xl">Cristalizadores Industriais</div>
          <div class="lg:w-[40%] flex lg:hidden mt-4 mt-lg-0"> 
            <AtomImage :imageUrl="cristalizador" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <!-- <div class="pa-8">Video ou Foto</div> -->
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-sm text-grey500">
                  Os cristalizadores industriais são equipamentos utilizados nos processos de separação e purificação de substâncias por meio da formação de cristais. Eles desempenham um papel fundamental em indústrias químicas, farmacêuticas, alimentícias, de mineração e outras, onde é necessário isolar componentes sólidos a partir de soluções líquidas.
                  <br/>
                  <br/>
                  A eficiência de um cristalizador depende de diversos fatores, como controle preciso da temperatura, concentração, agitação e tempo de residência. Por isso, a operação e manutenção adequadas desses equipamentos são essenciais para garantir a qualidade do produto final e a continuidade da produção.
                  <br/>
                  <br/>
                  Empresas especializadas, como a TWA Equipamentos, oferecem serviços de manutenção, inspeção e reforma de cristalizadores industriais, contribuindo para o desempenho ideal do equipamento, redução de falhas e prolongamento de sua vida útil.
                </div>
              </div>
              <div class="mt-4 w-[215px]">
                <NuxtLink :to="`https://wa.me/5516981735919?text=${encodeURIComponent('Olá! Gostaria de tirar algumas dúvidas e solicitar um orçamento de Manutenção em Cristalizadores Industriais.')}`" class="highlight-menu text-uppercase text-sm bg-green rounded-md p-2 flex align-center" target="_blank">
                  <AtomIcon name="WhatsappFull" filled class="!w-6 !h-6 mr-2"></AtomIcon>
                  <span>Solicitar orçamento</span> 
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-[40%] hidden lg:flex"> 
          <AtomImage :imageUrl="cristalizador" width="100%" height="auto" class="rounded-lg" />
        </div>
      </div>
      <div class="lg:flex my-10" id="duto-gases">
        <div class="lg:w-[40%] hidden lg:flex"> 
          <AtomImage :imageUrl="lavadorGases" width="100%" height="auto" class="rounded-lg" />
        </div>
        <div class="lg:w-[60%] lg:ml-10">
          <div class="text-xl text-red mb-2">Manutenção de</div>
          <div class="text-3xl">Lavadores de Gases</div>
          <div class="lg:w-[40%] flex lg:hidden mt-4 mt-lg-0"> 
            <AtomImage :imageUrl="lavadorGases" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <!-- <div class="pa-8">Video ou Foto</div> -->
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-sm text-grey500">
                  A manutenção regular dos lavadores de gases é essencial para garantir seu desempenho e
                  prolongar sua vida útil. A manutenção deve ser realizada por uma empresa especializada,
                  que utilizará equipamentos e produtos adequados e certificados.
                  A manutenção dos lavadores de gases oferece diversos benefícios, incluindo:
                  <br />
                  - Melhoria do desempenho: os lavadores bem mantidos são mais eficientes na remoção de contaminantes;
                  <br />
                  - Redução de custo: a manutenção regular pode evitar a necessidade de reparos ou substituições prematuras do equipamento;
                  <br />
                  - Melhoria da segurança: os lavadores bem mantidos reduzem o risco de acidentes e problemas ambientais.
                </div>
              </div>
              <div class="mt-4 w-[215px]">
                <NuxtLink :to="`https://wa.me/5516981735919?text=${encodeURIComponent('Olá! Gostaria de tirar algumas dúvidas e solicitar um orçamento de Manutenção em Lavadores de Gases.')}`" class="highlight-menu text-uppercase text-sm bg-green rounded-md p-2 flex align-center" target="_blank">
                  <AtomIcon name="WhatsappFull" filled class="!w-6 !h-6 mr-2"></AtomIcon>
                  <span>Solicitar orçamento</span> 
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:flex">
        <div class="lg:w-[60%]">
          <div class="text-xl text-red mb-2">Manutenção de</div>
          <div class="text-3xl">Sementeira</div>
          <div class="lg:w-[40%] flex lg:hidden mt-4 mt-lg-0"> 
            <AtomImage :imageUrl="sementeira" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <!-- <div class="pa-8">Video ou Foto</div> -->
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-sm text-grey500">
                  A sementeira é um equipamento multifuncional que automatiza e otimiza os processos de semeadura, germinação
                  e desenvolvimento inicial das mudas, desde a preparação do solo até a irrigação e controle ambiental.
                  A TWA Equipamentos, oferece o serviço de manutenção de sementeira, considerado vital para garantir a eficiência
                  e segurança de equipamentos e processos em uma Indústria. Na TWA, a manutenção é realizada visando minimizar paradas não programadas e reduzir custos.
                  A sementeira é solução inovadora e completa para o início do ciclo de produção vegetal, proporcionando alta performance, praticidade e economia para
                  produtores rurais de todos os portes e surge como aliada quando integrada à manutenção industrial, sendo um investimento essencial para qualquer empresa que deseja
                  garantir a eficiência e segurança de seus processos.
                  A TWA Equipamentos, oferece soluções completas em manutenção de sementeira para diversos setores da indústria.
                </div>
              </div>
              <div class="mt-4 w-[215px]">
                <NuxtLink :to="`https://wa.me/5516981735919?text=${encodeURIComponent('Olá! Gostaria de tirar algumas dúvidas e solicitar um orçamento de Manutenção em Sementeira.')}`" class="highlight-menu text-uppercase text-sm bg-green rounded-md p-2 flex align-center" target="_blank">
                  <AtomIcon name="WhatsappFull" filled class="!w-6 !h-6 mr-2"></AtomIcon>
                  <span>Solicitar orçamento</span> 
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-[40%] hidden lg:flex"> 
          <AtomImage :imageUrl="sementeira" width="100%" height="auto" class="rounded-lg" />
        </div>
      </div>
      <div class="flex flex-col w-full max-w-[800px] mt-10">
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
import curvaDutoLavadorGases from '@/assets/images/curva-duto-lavador-de-gases.webp';
import projetoDutoGases from '@/assets/images/projeto-duto-gases.png';
import economizador from '@/assets/images/economizador.png';
import guinchoHilo from '@/assets/images/guincho-hilo.png';
import exaustaoGases from '@/assets/images/exaustao-gases.png';
import cozedores from '@/assets/images/cozedores.png';
import cristalizador from '@/assets/images/cristalizador.png';
import lavadorGases from '@/assets/images/manutencao-lavador-de-gases.png';
import sementeira from '@/assets/images/sementeira.png';

  definePageMeta({
		layout: 'home',
		auth: false
	})

  const { t } = useI18n()
	const title = `${t('pageTitle', { page: t('maintenance.pageTitle') })}`

	useHead({
		title: title
	})
</script>