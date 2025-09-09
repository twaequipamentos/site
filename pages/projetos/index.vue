<template>
  <div class="min-h-[100vh] py-6 flex justify-center bg-white">
    <div class="w-[1440px] px-8 px-xl-0" id="curva-duto-lavador-gases">
      <div class="text-lg mb-1">Projetos</div>
      <div class="text-xs mb-4">Home - Projetos</div>
      <hr class="mb-4"/>
      <div class="lg:flex">
        <div class="lg:w-[60%]">
          <div class="text-xl text-red mb-2">Fabricação e Montagem da </div>
          <div class="text-3xl">Curva e Duto Lavador de Gases</div>
          <div class="lg:w-[40%] flex lg:hidden mt-4 mt-lg-0"> 
            <AtomImage :imageUrl="curvaDutoLavadorGases" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <!-- <div class="pa-8">Video ou Foto</div> -->
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-sm text-grey500">
                  Quer encontrar uma empresa especializada em fabricação e montagem da Cruva e Duto Lavador de Gases? O lugar certo é a TWA Equipamentos, empresa com anos de experiência e que conta com mão de obra especializada e corpo técnico formado por engenheiros mecânicos e de segurança, planejador, inspetor de qualidade e projetistas, para um atendimento completo e garantindo a satisfação de todos os seus clientes.
                </div>
              </div>
              <div class="mt-4 w-[215px]">
                <NuxtLink :to="`https://wa.me/5516981735919?text=${encodeURIComponent('Olá! Gostaria de tirar algumas dúvidas e solicitar um orçamento de Curva e Duto de Gases.')}`" class="highlight-menu text-uppercase text-sm bg-green rounded-md p-2 flex align-center" target="_blank">
                  <AtomIcon name="WhatsappFull" filled class="!w-6 !h-6 mr-2"></AtomIcon>
                  <span>Solicitar orçamento</span> 
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-[40%] hidden lg:flex"> 
          <AtomImage :imageUrl="curvaDutoLavadorGases" width="100%" height="auto" class="rounded-lg" />
        </div>
      </div>
      <div class="lg:flex my-10">
        <div class="lg:w-[40%] hidden lg:flex"> 
          <AtomImage :imageUrl="projetoDutoGases" width="100%" height="auto" class="rounded-lg" />
        </div>
        <div class="lg:w-[60%] lg:ml-10">
          <div class="text-xl text-red mb-2">Sistema de Duto de Gases em</div>
          <div class="text-3xl">Processos Produtivos Industriais</div>
          <div class="lg:w-[40%] flex lg:hidden mt-4 mt-lg-0"> 
            <AtomImage :imageUrl="projetoDutoGases" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <!-- <div class="pa-8">Video ou Foto</div> -->
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-sm text-grey500">
                  As indústrias utilizam largamente sistemas de dutos em seus processos produtivos.
                  Esses dutos consistem em ligações por onde passam os mais diferentes tipos de substâncias e materiais.
                  Os dutos de gases têm como objetivo atender às demandas dos sistemas de alimentação, exaustão e ventilação em 
                  equipamentos como Caldeiras e Lavadores de gases e são fabricados e instalados pela TWA Equipamentos e Serviços Industriais
                  de acordo com projeto e especificações dos fabricantes e adequado para as necessidades do cliente.
                </div>
              </div>
              <div class="mt-4 w-[215px]">
                <NuxtLink :to="`https://wa.me/5516981735919?text=${encodeURIComponent('Olá! Gostaria de tirar algumas dúvidas e solicitar um orçamento de Duto de Gases.')}`" class="highlight-menu text-uppercase text-sm bg-green rounded-md p-2 flex align-center" target="_blank">
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
          <div class="text-xl text-red mb-2">Fabricação e Montagem em Campo de</div>
          <div class="text-3xl">Economizador de Caldeira</div>
          <div class="lg:w-[40%] flex lg:hidden mt-4 mt-lg-4"> 
            <AtomImage :imageUrl="economizador" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <!-- <div class="pa-8">Video ou Foto</div> -->
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-sm text-grey500">
                  As indústrias utilizam largamente sistemas de economizadores de caldeira em seus processos produtivos.
                  Esses economizadores consistem em tubulações por onde passam os mais diferentes tipos de substâncias e materiais.
                  Os economizadores de caldeira são equipamentos instalados na saída dos gases de combustão para a chaminé. Sua
                  função é aproveitar o calor residual desses gases e pré-aquecer água de alimentação da caldeira. São fabricados e montados pela
                  equipe TWA Equipamentos e Serviços Industriais de acordo com o projeto e as especificações dos fabricantes,
                  adequando-se às necessidades do cliente.
                </div>
              </div>
              <div class="mt-4 w-[215px]">
                <NuxtLink :to="`https://wa.me/5516981735919?text=${encodeURIComponent('Olá! Gostaria de tirar algumas dúvidas e solicitar um orçamento de Economizador de Caldeira.')}`" class="highlight-menu text-uppercase text-sm bg-green rounded-md p-2 flex align-center" target="_blank">
                  <AtomIcon name="WhatsappFull" filled class="!w-6 !h-6 mr-2"></AtomIcon>
                  <span>Solicitar orçamento</span> 
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-[40%] hidden lg:flex"> 
          <AtomImage :imageUrl="economizador" width="100%" height="auto" class="rounded-lg" />
        </div>
      </div>
      <div class="lg:flex my-10" id="duto-gases">
        <div class="lg:w-[40%] hidden lg:flex"> 
          <AtomImage :imageUrl="guinchoHilo" width="100%" height="auto" class="rounded-lg" />
        </div>
        <div class="lg:w-[60%] lg:ml-10">
          <div class="text-xl text-red mb-2">Fabricação e Montagem de Guincho Hilo</div>
          <div class="text-3xl">Para plantas industriais em diversos segmentos</div>
          <div class="lg:w-[40%] flex lg:hidden mt-4 mt-lg-0"> 
            <AtomImage :imageUrl="guinchoHilo" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <!-- <div class="pa-8">Video ou Foto</div> -->
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-sm text-grey500">
                  O Tombador Lateral Hilo, também conhecido por "Guincho Hilo", é uma estrutura
                  tubular fixa, presa no chão, com altura variável, com uma casa de máquinas 
                  munida de painel de operação e equipada com motorredutores, inversores de frequência, 
                  freios eletromagnéticos, chaves fim de curso e balanção.
                  O equipamento é utilizado para descarregamento de materiais em linhas de processo. O caminhão
                  estaciona ao lado do tombador e um operador engata as correntes com ganchos para elevação da carga.
                  O guincho eleva a carga do caminhão e a descarrega no local de processamento.
                </div>
              </div>
              <div class="mt-4 w-[215px]">
                <NuxtLink :to="`https://wa.me/5516981735919?text=${encodeURIComponent('Olá! Gostaria de tirar algumas dúvidas e solicitar um orçamento de Guincho Hilo.')}`" class="highlight-menu text-uppercase text-sm bg-green rounded-md p-2 flex align-center" target="_blank">
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
          <div class="text-xl text-red mb-2">Fabricação e Montagem de</div>
          <div class="text-3xl">Lavadores de Gases</div>
          <div class="lg:w-[40%] flex lg:hidden mt-4 mt-lg-0"> 
            <AtomImage :imageUrl="lavadorGases" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <!-- <div class="pa-8">Video ou Foto</div> -->
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-sm text-grey500">
                    O lavador de gases é um importante equipamento, muito requisitado por diferentes segmentos industriais e representa
                    uma evolução da tecnologia, tendo a função de realizar o tratamento e remoção do material particulado de um fluxo
                    de névoa da emissão de gases tóxicos ou contaminados, decorrentes do processo produtivo, através da colisão destas partículas
                    com gotas de água em um sistema de lavagem em contra-fluxo, resultadno na melhoria da qualidade do ar liberado na atmosfera.
                </div>
              </div>
              <div class="mt-4 w-[215px]">
                <NuxtLink :to="`https://wa.me/5516981735919?text=${encodeURIComponent('Olá! Gostaria de tirar algumas dúvidas e solicitar um orçamento de Lavador de Gases.')}`" class="highlight-menu text-uppercase text-sm bg-green rounded-md p-2 flex align-center" target="_blank">
                  <AtomIcon name="WhatsappFull" filled class="!w-6 !h-6 mr-2"></AtomIcon>
                  <span>Solicitar orçamento</span> 
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-[40%] hidden lg:flex"> 
          <AtomImage :imageUrl="lavadorGases" width="100%" height="auto" class="rounded-lg" />
        </div>
      </div>
      <div class="lg:flex my-10">
        <div class="lg:w-[40%] hidden lg:flex"> 
          <AtomImage :imageUrl="plataformaMezanino" width="100%" height="auto" class="rounded-lg" />
        </div>
        <div class="lg:w-[60%] lg:ml-10">
          <div class="text-xl text-red mb-2">Fabricação e Instalação de</div>
          <div class="text-3xl">Plataforma Mezanino para Indústria</div>
          <div class="lg:w-[40%] flex lg:hidden mt-4 mt-lg-0"> 
            <AtomImage :imageUrl="plataformaMezanino" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <!-- <div class="pa-8">Video ou Foto</div> -->
            <div class="pr-8">
              <div class="my-4 flex">
                <div class="text-sm text-grey500">
                  As indústrias utilizam largamente a plataforma mezanino. O mezanino em uma fábrica é uma plataforma elevada,
                  geralmente construída dentro do espaço da indústria, que fornece uma área adicional para armazenamento, operações
                  ou outras atividades relacionadas à produção. Essa estrutura é frequentemente utilizada para aproveitar o espaço vertical disponível, permitindo a utilização eficiente da área
                  A plataforma mezanino tem como objetivo o acesso para manutenção e contribui para a eficiência operacional, a organização do espaço e a otimização das atividades de produção. Seus projetos
                  são fabricados e instalados pela TWA Equipamentos e Serviços Industriais de acordo com o projeto e as especificações dos fabricantes, adequando-se às necessidades do cliente.
                </div>
              </div>
              <div class="mt-4 w-[215px]">
                <NuxtLink :to="`https://wa.me/5516981735919?text=${encodeURIComponent('Olá! Gostaria de tirar algumas dúvidas e solicitar um orçamento de Plataforma Mezanino.')}`" class="highlight-menu text-uppercase text-sm bg-green rounded-md p-2 flex align-center" target="_blank">
                  <AtomIcon name="WhatsappFull" filled class="!w-6 !h-6 mr-2"></AtomIcon>
                  <span>Solicitar orçamento</span> 
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="flex flex-col w-full max-w-[800px]">
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
import lavadorGases from '@/assets/images/lavador-gases.png';
import plataformaMezanino from '@/assets/images/plataforma-mezanino.png';

  definePageMeta({
		layout: 'home',
		auth: false
	})

  const { t } = useI18n()
	const title = `${t('pageTitle', { page: t('projects.pageTitle') })}`

	useHead({
		title: title
	})
</script>