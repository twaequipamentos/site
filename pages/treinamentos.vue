<template>
  <div class="min-h-[100vh] py-6 flex justify-center bg-white">
    <div class="max-w-[1440px] px-8 px-xl-0">
      <div class="text-lg mb-1">Treinamentos</div>
      <div class="text-xs mb-4">Home - Treinamentos</div>
      <hr class="mb-4"/>
      <div class="lg:flex">
        <div class="lg:w-[60%]">
          <div class="text-xl text-red mb-2">Treinamento e Capacitação </div>
          <div class="text-3xl">NR-06</div>
          <div class="lg:w-[40%] flex lg:hidden mt-4 mt-lg-0"> 
            <AtomImage :imageUrl="nr6" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <!-- <div class="pa-8">Video ou Foto</div> -->
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-sm text-grey500">
                Para fins de aplicação desta Norma Regulamentadora, considera-se Equipamento de Proteção Individual (EPI) todo dispositivo ou produto de uso individual, utilizado pelo trabalhador e destinado à proteção contra riscos que possam ameaçar sua segurança e saúde durante a fabricação ou manutenção de equipamentos.
                <br />
                <br />
                Na TWA Equipamentos e Serviços Industriais, os treinamentos internos são aplicados a todos os profissionais, sempre com o objetivo de preservar a integridade e a saúde do maior patrimônio da empresa: seus colaboradores. Esse compromisso resulta na confiança que os clientes podem depositar na TWA, uma vez que nossa equipe atua com segurança, excelência e pontualidade em cada serviço prestado.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-[40%] hidden lg:flex"> 
          <AtomImage :imageUrl="nr6" width="100%" height="auto" class="rounded-lg" />
        </div>
      </div>
      <div class="lg:flex my-10" id="duto-gases">
        <div class="lg:w-[40%] hidden lg:flex"> 
          <AtomImage :imageUrl="nr10" width="100%" height="auto" class="rounded-lg" />
        </div>
        <div class="lg:w-[60%] lg:ml-10">
          <div class="text-xl text-red mb-2">Treinamento e Capacitação</div>
          <div class="text-3xl">NR-10</div>
          <div class="lg:w-[40%] mt-4 mt-lg-0 flex lg:hidden"> 
            <AtomImage :imageUrl="nr10" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <!-- <div class="pa-8">Video ou Foto</div> -->
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-sm text-grey500">
                  A NR-10 estabelece os requisitos e condições mínimas para a implementação de medidas de controle e de sistemas preventivos, garantindo a segurança e a saúde dos trabalhadores que, direta ou indiretamente, interajam com instalações elétricas e serviços envolvendo eletricidade.
                  <br />
                  <br />
                  Na TWA Equipamentos e Serviços Industriais, seguimos rigorosamente todas as diretrizes dessa Norma Regulamentadora. Contamos com uma equipe de elétrica altamente treinada, qualificada e constantemente atualizada para atuar com eficiência e segurança em diferentes contextos. Esse compromisso reflete não apenas na proteção de nossos colaboradores, mas também na confiabilidade e qualidade dos serviços entregues aos nossos clientes, assegurando resultados com excelência, responsabilidade e conformidade técnica.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:flex">
        <div class="lg:w-[60%]">
          <div class="text-xl text-red mb-2">Treinamento e Capacitação</div>
          <div class="text-3xl">NR-11</div>
          <div class="lg:w-[40%] flex lg:hidden mt-4 mt-lg-4"> 
            <AtomImage :imageUrl="nr11" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <!-- <div class="pa-8">Video ou Foto</div> -->
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-sm text-grey500">
                  A NR-11 trata das normas de segurança referentes ao transporte, movimentação, armazenagem e manuseio de materiais. Seu objetivo é garantir que todas essas atividades sejam realizadas de forma segura, prevenindo acidentes e preservando a integridade física dos trabalhadores e das operações.
                  <br />
                  <br />
                  Na TWA Equipamentos e Serviços Industriais, aplicamos de forma rigorosa todas as exigências da NR-11. Nossa equipe é treinada para operar guindastes, guindautos, empilhadeiras e demais equipamentos de movimentação de cargas com total responsabilidade e precisão. Além disso, investimos continuamente em manutenção preventiva e em tecnologias modernas, o que assegura processos ágeis, eficientes e, acima de tudo, seguros.
                  <br />
                  <br />
                  Esse compromisso reforça a confiança que nossos clientes depositam na TWA: oferecer soluções industriais que unem segurança, qualidade e pontualidade, preservando o bem-estar de nossos colaboradores e garantindo a excelência em cada serviço prestado.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-[40%] hidden lg:flex"> 
          <AtomImage :imageUrl="nr11" width="100%" height="auto" class="rounded-lg" />
        </div>
      </div>
      
      <div class="lg:flex my-10">
        <div class="lg:w-[40%] hidden lg:flex align-start"> 
          <AtomImage :imageUrl="nr12" width="100%" height="auto" class="rounded-lg" />
        </div>
        <div class="lg:w-[60%] lg:ml-10">
          <div class="text-xl text-red mb-2">Treinamento e Capacitação</div>
          <div class="text-3xl">NR-12</div>
          <div class="lg:w-[40%] flex lg:hidden mt-4 mt-lg-4"> 
            <AtomImage :imageUrl="nr12" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <!-- <div class="pa-8">Video ou Foto</div> -->
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-sm text-grey500">
                  A NR-12, instituída pela Portaria nº 3.214/1978 do Ministério do Trabalho e Emprego, estabelece as diretrizes técnicas para garantir a segurança no trabalho em máquinas e equipamentos. Seu propósito é assegurar que todas as etapas, desde a instalação, operação e manutenção até a desativação, sejam realizadas de forma a proteger a integridade física e a saúde dos trabalhadores.
                  <br />
                  <br />
                  Um dos princípios mais importantes da NR-12 é a exigência de que nenhum operador utilize uma máquina sem antes receber treinamento adequado e conhecer os riscos envolvidos em sua atividade. Essa medida preventiva é essencial para reduzir acidentes e garantir um ambiente de trabalho seguro.
                  <br />
                  <br />
                  Na TWA Equipamentos e Serviços Industriais, seguimos rigorosamente os requisitos da NR-12, aplicando práticas que reduzem riscos e promovem ambientes de trabalho mais seguros e produtivos. Nossa equipe é qualificada para atuar na fabricação, adequação e manutenção de máquinas industriais, sempre observando as normas de proteção coletiva e individual.
                  <br />
                  <br />
                  Esse comprometimento reflete diretamente na confiança que nossos clientes podem ter em nossos serviços: trabalhamos com segurança, excelência e responsabilidade, garantindo soluções industriais que aliam tecnologia, eficiência e respeito à vida.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:flex align-start">
        <div class="lg:w-[60%]">
          <div class="text-xl text-red mb-2">Treinamento e Capacitação</div>
          <div class="text-3xl">NR-18</div>
          <div class="lg:w-[40%] flex lg:hidden mt-4 mt-lg-4"> 
            <AtomImage :imageUrl="nr18" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <!-- <div class="pa-8">Video ou Foto</div> -->
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-sm text-grey500">
                  A NR-18, aprovada pela Portaria nº 3.214/1978 do Ministério do Trabalho e Emprego, estabelece diretrizes de segurança e saúde no trabalho na construção civil. Seu objetivo é garantir condições adequadas para prevenir acidentes e preservar a integridade dos trabalhadores envolvidos em atividades de obras, montagens, reparos e demolições.
                  <br />
                  <br />
                  Entre os pontos centrais da norma está a obrigatoriedade de que todos os profissionais recebam treinamento antes de iniciar suas atividades. É fundamental que cada trabalhador conheça os riscos específicos do ambiente de obra, bem como as medidas preventivas necessárias para executar suas funções com segurança.
                  <br />
                  <br />
                  Na TWA Equipamentos e Serviços Industriais, seguimos à risca as determinações da NR-18. Nossos colaboradores são capacitados para atuar em diferentes contextos da construção civil, sempre com foco em segurança, qualidade e eficiência. Além disso, investimos constantemente em equipamentos modernos e em programas de prevenção, garantindo ambientes de trabalho mais organizados, produtivos e protegidos.
                  <br />
                  <br />
                  Esse comprometimento reforça a confiança que os clientes depositam na TWA: uma empresa que valoriza a vida, respeita as normas e entrega serviços com excelência, pontualidade e responsabilidade.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-[40%] hidden lg:flex"> 
          <AtomImage :imageUrl="nr18" width="100%" height="auto" class="rounded-lg" />
        </div>
      </div>
      <div class="lg:flex align-start my-10">
        <div class="lg:w-[40%] hidden lg:flex"> 
          <AtomImage :imageUrl="nr33" width="100%" height="auto" class="rounded-lg" />
        </div>
        <div class="lg:w-[60%] lg:ml-10">
          <div class="text-xl text-red mb-2">Treinamento e Capacitação</div>
          <div class="text-3xl">NR-33</div>
          <div class="lg:w-[40%] flex lg:hidden mt-4 mt-lg-4"> 
            <AtomImage :imageUrl="nr33" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <!-- <div class="pa-8">Video ou Foto</div> -->
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-sm text-grey500">
                  A NR-33, instituída pela Portaria nº 3.214/1978 do Ministério do Trabalho e Emprego, estabelece os requisitos mínimos para a segurança e a saúde nos trabalhos realizados em espaços confinados. Esses ambientes, como tanques, silos, galerias e tubulações, apresentam riscos adicionais devido às condições de ventilação limitada, acesso restrito e possibilidade de acúmulo de gases ou falta de oxigênio.
                  <br />
                  <br />
                  A norma determina que nenhum trabalhador pode acessar um espaço confinado sem treinamento específico, conhecimento dos riscos existentes e a utilização dos Equipamentos de Proteção Individual e Coletiva adequados. Além disso, é exigida a presença de uma equipe preparada para monitorar e resgatar em situações de emergência. Assim como um mergulhador precisa conhecer cada detalhe do ambiente antes de submergir, o profissional que atua em espaço confinado deve estar plenamente capacitado e consciente de todos os procedimentos de segurança.
                  <br />
                  <br />
                  Na TWA Equipamentos e Serviços Industriais, levamos a NR-33 muito a sério. Nossa equipe é treinada e constantemente atualizada para trabalhar em espaços confinados com total segurança, eficiência e responsabilidade. Investimos em tecnologia, em protocolos de prevenção e em equipamentos modernos, assegurando que cada operação seja conduzida de forma segura tanto para nossos colaboradores quanto para nossos clientes.
                  <br />
                  <br />
                  Esse comprometimento traduz-se em confiança: quem escolhe a TWA tem a certeza de contar com uma empresa que valoriza a vida, respeita as normas e entrega resultados com excelência e pontualidade.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:flex align-start">
        <div class="lg:w-[60%]">
          <div class="text-xl text-red mb-2">Treinamento e Capacitação</div>
          <div class="text-3xl">NR-34</div>
          <div class="lg:w-[40%] flex lg:hidden mt-4 mt-lg-0"> 
            <AtomImage :imageUrl="nr34" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-sm text-grey500">
                  A NR-34, criada pela Portaria nº 3.214/1978 do Ministério do Trabalho e Emprego, estabelece os requisitos mínimos de segurança e saúde no trabalho aplicáveis às atividades da indústria naval, especialmente nos serviços de construção, reparo e desmonte de embarcações. Por envolver operações complexas, como soldagem, pintura, jateamento, movimentação de cargas e trabalhos em altura ou espaços confinados, a norma tem como objetivo reduzir riscos e preservar a integridade física dos trabalhadores.
                  <br />
                  <br />
                  Um dos pontos fundamentais da NR-34 é a exigência de que todos os profissionais recebam treinamento específico antes de iniciar suas atividades. Cada colaborador deve conhecer os riscos relacionados ao ambiente naval e estar preparado para aplicar as medidas preventivas necessárias, utilizando corretamente os Equipamentos de Proteção Individual e Coletiva.
                  <br />
                  <br />
                  Na TWA Equipamentos e Serviços Industriais, seguimos rigorosamente as diretrizes da NR-34. Nossa equipe é altamente qualificada e constantemente capacitada para atuar em serviços navais com segurança, qualidade e eficiência. Além disso, investimos em tecnologias modernas, manutenção preventiva e protocolos de segurança que asseguram operações confiáveis e alinhadas às melhores práticas do setor.
                  <br />
                  <br />
                  Esse compromisso garante aos nossos clientes tranquilidade e confiança: ao escolher a TWA, contam com uma empresa que respeita as normas, valoriza a vida de seus colaboradores e entrega soluções industriais com excelência, pontualidade e responsabilidade.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-[40%] hidden lg:flex"> 
          <AtomImage :imageUrl="nr34" width="100%" height="auto" class="rounded-lg" />
        </div>
      </div>
      <div class="lg:flex align-start my-10">
        <div class="lg:w-[40%] hidden lg:flex"> 
          <AtomImage :imageUrl="nr35" width="100%" height="auto" class="rounded-lg" />
        </div>
        <div class="lg:w-[60%] lg:ml-10">
          <div class="text-xl text-red mb-2">Treinamento e Capacitação</div>
          <div class="text-3xl">NR-35</div>
          <div class="lg:w-[40%] flex lg:hidden mt-4 mt-lg-4"> 
            <AtomImage :imageUrl="nr35" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <!-- <div class="pa-8">Video ou Foto</div> -->
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-sm text-grey500">
                  A NR-35, aprovada pela Portaria nº 3.214/1978 do Ministério do Trabalho e Emprego, estabelece os requisitos mínimos de segurança e saúde para o trabalho em altura, considerado toda atividade executada acima de dois metros do nível inferior, onde haja risco de queda. Seu objetivo é proteger a vida e a integridade física dos trabalhadores envolvidos nessas operações.
                  <br />
                  <br />
                  A norma determina que nenhum profissional pode realizar trabalhos em altura sem treinamento específico e sem conhecer os riscos inerentes a essa atividade. Além disso, é obrigatória a utilização de Equipamentos de Proteção Individual e Coletiva adequados, bem como a adoção de procedimentos de planejamento, análise de risco e medidas de emergência, garantindo que cada tarefa seja executada com máxima segurança.
                  <br />
                  <br />
                  Na TWA Equipamentos e Serviços Industriais, seguimos rigorosamente as exigências da NR-35. Nossos colaboradores são capacitados e constantemente atualizados para atuar em trabalhos em altura com eficiência, responsabilidade e segurança. Também investimos em equipamentos modernos e em programas de prevenção, assegurando a confiabilidade das operações e a proteção dos trabalhadores.
                  <br />
                  <br />
                  Esse compromisso reflete diretamente na confiança dos nossos clientes: ao escolher a TWA, contam com uma empresa que valoriza a vida, cumpre as normas e entrega serviços com excelência, segurança e pontualidade.
                </div>
              </div>
            </div>
          </div>
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

<script setup lang="ts">
import curvaDutoLavadorGases from '@/assets/images/curva-duto-lavador-de-gases.webp';
import projetoDutoGases from '@/assets/images/projeto-duto-gases.png';
import economizador from '@/assets/images/economizador.png';
import guinchoHilo from '@/assets/images/guincho-hilo.png';
import exaustaoGases from '@/assets/images/exaustao-gases.png';
import cozedores from '@/assets/images/cozedores.png';
import cristalizador from '@/assets/images/cristalizador.png';
import lavadorGases from '@/assets/images/manutencao-lavador-de-gases.png';
import sementeira from '@/assets/images/sementeira.png';
import nr6 from '@/assets/images/nr6.png';
import nr10 from '@/assets/images/nr10.jpg';
import nr11 from '@/assets/images/nr11.jpg';
import nr12 from '@/assets/images/nr12.jpg';
import nr18 from '@/assets/images/nr18.jpg';
import nr33 from '@/assets/images/nr33.jpg';
import nr34 from '@/assets/images/nr34.jpg';
import nr35 from '@/assets/images/nr35.jpg';

  definePageMeta({
		layout: 'home',
		auth: false
	})

  const { t } = useI18n()
	const title = `${t('pageTitle', { page: t('trainings.pageTitle') })}`

	useHead({
		title: title
	})
</script>