<template>
  <div class="min-h-[100vh] py-6 flex justify-center bg-white">
    <div class="max-w-[1440px] px-8 px-xl-0">
      <div class="text-lg mb-1">Treinamentos</div>
      <div class="text-xs mb-4">Home - Treinamentos</div>
      <hr class="mb-4"/>
      <!-- <AtomAnimationFocus>
        <MoleculeSolutionsTraining :items="trainingList" class="p-4" />
      </AtomAnimationFocus> -->
      <div class="lg:w-[100%]">
        <div class="text-xl text-red mb-2">Segurança em primeiro lugar: </div>
        <div class="text-2xl">um compromisso da TWA Equipamentos</div>
        <div class="flex">
          <div class="lg:pr-8">
            <div class="my-2 flex flex-column">
              <div class="text-md text-grey500">
                Na TWA Equipamentos, segurança não é apenas uma obrigação, é um valor que guia cada uma de nossas ações. Sabemos que um ambiente de trabalho seguro é essencial para o bem-estar das pessoas e para a excelência das nossas operações.
                <br />
                <br />
                Por isso, seguimos rigorosamente todas as Normas Regulamentadoras (NR’s) e mantemos um programa contínuo de capacitação, garantindo que todos os colaboradores recebam os treinamentos obrigatórios e complementares necessários para exercer suas atividades com total segurança e confiança.
                <br />
                <br />
                Cada treinamento é planejado com cuidado, abordando desde procedimentos técnicos até comportamentos preventivos, sempre com foco na proteção à vida, na prevenção de acidentes e na responsabilidade compartilhada.
                <br />
                <br />
                Com essa postura, reforçamos nosso compromisso com um ambiente de trabalho seguro, consciente e em conformidade com a legislação vigente, mostrando que, na TWA, cuidar das pessoas é prioridade.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:flex my-10" id="duto-gases">
        <div class="lg:w-[25%] hidden lg:flex"> 
          <AtomImage :imageUrl="nr1" width="100%" height="auto" class="rounded-lg" />
        </div>
        <div class="lg:w-[75%] lg:ml-10">
          <div class="text-3xl text-red mb-2">NR 01</div>
          <div class="text-2xl">Disposições Gerais e Gerenciamento de Riscos Ocupacionais</div>
          <div class="lg:w-[25%] mt-4 mt-lg-0 flex lg:hidden"> 
            <AtomImage :imageUrl="nr1" width="100%" height="200px" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <!-- <div class="pa-8">Video ou Foto</div> -->
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-md text-grey500">  
                  Capacita os colaboradores para identificar e controlar riscos inerentes às atividades industriais.
                  Essencial para implementação do PGR e promoção de um ambiente seguro.
                  Base normativa para todos os demais treinamentos de segurança.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:flex">
        <div class="lg:w-[25%] hidden lg:flex"> 
          <AtomImage :imageUrl="nr5" width="100%" height="auto" class="rounded-lg" />
        </div>
        <div class="lg:w-[75%] lg:ml-10">
          <div class="text-3xl text-red mb-2">NR 05</div>
          <div class="text-2xl">Comissão Interna de Prevenção de Acidentes (CIPA)</div>
          <div class="lg:w-[25%] flex lg:hidden mt-4 mt-lg-0"> 
            <AtomImage :imageUrl="nr5" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-md text-grey500">
                  Forma membros da CIPA para atuar na prevenção de acidentes e doenças ocupacionais.
                  Garante a participação dos trabalhadores nas decisões de segurança.
                  Importante para empresas que atuam em canteiros de obras e ambientes industriais.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:flex my-10">
        <div class="lg:w-[25%] hidden lg:flex"> 
          <AtomImage :imageUrl="nr6" width="100%" height="auto" class="rounded-lg" />
        </div>
        <div class="lg:w-[75%] lg:ml-10">
          <div class="text-3xl text-red mb-2">NR 06</div>
          <div class="text-2xl">Utilização, Higienização e Conservação de EPIs</div>
          <div class="lg:w-[25%] flex lg:hidden mt-4 mt-lg-0"> 
            <AtomImage :imageUrl="nr6" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <!-- <div class="pa-8">Video ou Foto</div> -->
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-md text-grey500">
                  Instrui sobre o uso correto, conservação e higienização dos EPIs obrigatórios.
                  Fundamental para a proteção individual nas atividades de montagem industrial.
                  Contribui diretamente para a redução de acidentes e exposição a riscos.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="lg:flex my-10" id="duto-gases">
        <div class="lg:w-[25%] hidden lg:flex"> 
          <AtomImage :imageUrl="nr10" width="100%" height="auto" class="rounded-lg" />
        </div>
        <div class="lg:w-[75%] lg:ml-10">
          <div class="text-xl text-red mb-2">Treinamento e Capacitação</div>
          <div class="text-2xl">NR-10</div>
          <div class="lg:w-[25%] mt-4 mt-lg-0 flex lg:hidden"> 
            <AtomImage :imageUrl="nr10" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-md text-grey500">
                  A NR-10 estabelece os requisitos e condições mínimas para a implementação de medidas de controle e de sistemas preventivos, garantindo a segurança e a saúde dos trabalhadores que, direta ou indiretamente, interajam com instalações elétricas e serviços envolvendo eletricidade.
                  <br />
                  <br />
                  Na TWA Equipamentos e Serviços Industriais, seguimos rigorosamente todas as diretrizes dessa Norma Regulamentadora. Contamos com uma equipe de elétrica altamente treinada, qualificada e constantemente atualizada para atuar com eficiência e segurança em diferentes contextos. Esse compromisso reflete não apenas na proteção de nossos colaboradores, mas também na confiabilidade e qualidade dos serviços entregues aos nossos clientes, assegurando resultados com excelência, responsabilidade e conformidade técnica.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <div class="lg:flex">
        <div class="lg:w-[25%] hidden lg:flex"> 
          <AtomImage :imageUrl="nr11" width="100%" height="auto" class="rounded-lg" />
        </div>
        <div class="lg:w-[75%] lg:ml-10">
          <div class="text-3xl text-red mb-2">NR 11</div>
          <div class="text-2xl">Capacitação para Operação Segura de Empilhadeiras</div>
          <div class="lg:w-[25%] flex lg:hidden mt-4 mt-lg-4"> 
            <AtomImage :imageUrl="nr11" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <!-- <div class="pa-8">Video ou Foto</div> -->
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-md text-grey500">
                  Capacita operadores para manobras seguras com empilhadeiras em ambientes industriais.
                  Inclui práticas de inspeção, transporte de cargas e prevenção de acidentes.
                  Garante eficiência logística sem comprometer a segurança.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<!--       
      <div class="lg:flex my-10">
        <div class="lg:w-[25%] hidden lg:flex align-start"> 
          <AtomImage :imageUrl="nr12" width="100%" height="auto" class="rounded-lg" />
        </div>
        <div class="lg:w-[75%] lg:ml-10">
          <div class="text-xl text-red mb-2">Treinamento e Capacitação</div>
          <div class="text-2xl">NR-12</div>
          <div class="lg:w-[25%] flex lg:hidden mt-4 mt-lg-4"> 
            <AtomImage :imageUrl="nr12" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-md text-grey500">
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
      </div> -->
      <div class="lg:flex my-10 align-start">
        <div class="lg:w-[25%] hidden lg:flex"> 
          <AtomImage :imageUrl="nr17" width="100%" height="auto" class="rounded-lg" />
        </div>
        <div class="lg:w-[75%] lg:ml-10">
          <div class="text-3xl text-red mb-2">NR 17</div>
          <div class="text-2xl">Ergonomia</div>
          <div class="lg:w-[25%] flex lg:hidden mt-4 mt-lg-4"> 
            <AtomImage :imageUrl="nr17" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <!-- <div class="pa-8">Video ou Foto</div> -->
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-md text-grey500">
                  Aplica conceitos ergonômicos às atividades de montagem e movimentação manual.
                  Previne lesões musculoesqueléticas e melhora o desempenho operacional.
                  Contribui para a saúde ocupacional e produtividade da equipe.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:flex align-start">
        <div class="lg:w-[25%] hidden lg:flex"> 
          <AtomImage :imageUrl="nr18" width="100%" height="auto" class="rounded-lg" />
        </div>
        <div class="lg:w-[75%] lg:ml-10">
          <div class="text-3xl text-red mb-2">NR 18</div>
          <div class="text-2xl">Montagem e Desmontagem de Andaimes</div>
          <div class="lg:w-[25%] flex lg:hidden mt-4 mt-lg-4"> 
            <AtomImage :imageUrl="nr18" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <!-- <div class="pa-8">Video ou Foto</div> -->
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-md text-grey500">
                  Capacita profissionais para montagem e desmontagem segura de andaimes. Inclui análise de risco, ancoragem e verificação de estabilidade. Importante para garantir segurança em trabalhos em altura.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:flex align-start my-10">
        <div class="lg:w-[25%] hidden lg:flex"> 
          <AtomImage :imageUrl="nr20" width="100%" height="auto" class="rounded-lg" />
        </div>
        <div class="lg:w-[75%] lg:ml-10">
          <div class="text-3xl text-red mb-2">NR 20</div>
          <div class="text-2xl">Trabalhos com Inflamáveis e Combustíveis</div>
          <div class="lg:w-[25%] flex lg:hidden mt-4 mt-lg-4"> 
            <AtomImage :imageUrl="nr20" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <!-- <div class="pa-8">Video ou Foto</div> -->
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-md text-grey500">
                  Capacita trabalhadores para atuar com segurança em áreas com produtos inflamáveis.
                  Foca na prevenção de vazamentos, incêndios e no uso de sistemas de emergência.
                  Necessário para operações em tanques, linhas de gás ou áreas classificadas.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:flex align-start my-10">
        <div class="lg:w-[25%] hidden lg:flex"> 
          <AtomImage :imageUrl="nr33" width="100%" height="auto" class="rounded-lg" />
        </div>
        <div class="lg:w-[75%] lg:ml-10">
          <div class="text-3xl text-red mb-2">NR 11</div>
          <div class="text-2xl">NR-33 -  Trabalho Seguro em Espaços Confinados</div>
          <div class="lg:w-[25%] flex lg:hidden mt-4 mt-lg-4"> 
            <AtomImage :imageUrl="nr33" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <!-- <div class="pa-8">Video ou Foto</div> -->
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-md text-grey500">
                  Prepara trabalhadores para entrar, atuar e resgatar com segurança em espaços confinados.
                  Inclui controle de atmosfera, uso de EPI e procedimentos de resgate.
                  Vital para atividades em tanques, silos, galerias e tubulações.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:flex align-start">
        <div class="lg:w-[25%] hidden lg:flex"> 
          <AtomImage :imageUrl="nr34" width="100%" height="auto" class="rounded-lg" />
        </div>
        <div class="lg:w-[75%] lg:ml-10">
          <div class="text-3xl text-red mb-2">NR 34</div>
          <div class="text-2xl">Trabalho a Quente</div>
          <div class="lg:w-[25%] flex lg:hidden mt-4 mt-lg-0"> 
            <AtomImage :imageUrl="nr34" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-md text-grey500">
                  Instrui trabalhadores sobre segurança em atividades com solda, corte e esmerilhamento.
                  Enfatiza controle de riscos de incêndio e uso de EPIs específicos.
                  Essencial em áreas com presença de inflamáveis ou risco de explosão.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:flex align-start my-10">
        <div class="lg:w-[25%] hidden lg:flex"> 
          <AtomImage :imageUrl="nr35" width="100%" height="auto" class="rounded-lg" />
        </div>
        <div class="lg:w-[75%] lg:ml-10">
          <div class="text-3xl text-red mb-2">NR 35</div>
          <div class="text-2xl">Trabalho em Altura</div>
          <div class="lg:w-[25%] flex lg:hidden mt-4 mt-lg-4"> 
            <AtomImage :imageUrl="nr35" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="flex mt-4">
            <!-- <div class="pa-8">Video ou Foto</div> -->
            <div class="lg:pr-8">
              <div class="my-4 flex">
                <div class="text-md text-grey500">
                  Capacita trabalhadores para executar atividades em altura com segurança.
                  Aborda o uso de cintos de segurança, ancoragens e prevenção de quedas.
                  Imprescindível em estruturas elevadas, escadas e andaimes.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full max-w-[800px] mt-10">
          <span class="text-xl text-red">Fale com a</span>
          <span class="text-3xl mb-4">TWA Equipamentos agora mesmo!</span>
          <span class="text-md text-grey500">
            Entre em contato com a Equipe do Comercial da TWA Equipamentos agora mesmo e tire todas as suas dúvidas, solicite seu orçamento e tenha um serviço de extrema qualidade e segurança.
          </span>
        </div>
        <div class="mt-4 w-[255px]">
          <NuxtLink :to="`https://wa.me/5516981735919?text=${encodeURIComponent('Olá! Gostaria de falar sobre os serviços de construção.')}`" class="highlight-menu text-uppercase text-md bg-green rounded-md p-2 flex align-center" target="_blank">
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
import nr1 from '@/assets/images/nr1.jpg';
import nr6 from '@/assets/images/nr6.png';
import nr5 from '@/assets/images/nr5.jpg';
import nr10 from '@/assets/images/nr10.jpg';
import nr11 from '@/assets/images/nr11.jpg';
import nr12 from '@/assets/images/nr12.jpg';
import nr17 from '@/assets/images/nr17.jpg';
import nr18 from '@/assets/images/nr18.jpg';
import nr20 from '@/assets/images/nr20.jpg';
import nr33 from '@/assets/images/nr33.jpg';
import nr34 from '@/assets/images/nr34.jpg';
import nr35 from '@/assets/images/nr35.jpg';

  definePageMeta({
		layout: 'home',
		auth: false
	})

  const { t } = useI18n()
	const title = `${t('pageTitle', { page: t('trainings.pageTitle') })}`

    const trainingList = [
    {
      icon: "Health",
      title: "NR-01 - Disposições Gerais e Gerenciamento de Riscos Ocupacionais",
      description: "Capacita os colaboradores para identificar e controlar riscos inerentes às atividades industriais. Essencial para implementação do PGR e promoção de um ambiente seguro. Base normativa para todos os demais treinamentos de segurança.",
      path: "",
    },
    {
      icon: "Health",
      title: "NR-06",
      description: "Garante o uso correto de EPIs para proteger o trabalhador contra riscos.",
      path: "",
    },
    {
      icon: "Bolt",
      title: "NR-10",
      description: "Define medidas de proteção em instalações e serviços elétricos.",
      path: "",
    },
    {
      icon: "Shipping",
      title: "NR-11",
      description: "Regula o manuseio e transporte seguro de cargas e equipamentos.",
      path: "",
    },
    {
      icon: "Handyman",
      title: "NR-12",
      description: "Estabelece regras para uso seguro de máquinas e prevenção de acidentes.",
      path: "",
    },
    {
      icon: "Engineering",
      title: "NR-18",
      description: "Define condições de segurança e saúde em canteiros de obras.",
      path: "",
    },
    {
      icon: "Sensor",
      title: "NR-33",
      description: "Determina medidas de proteção em atividades realizadas em locais confinados.",
      path: "",
    },
    {
      icon: "Anchor",
      title: "NR-34",
      description: "Estabelece regras de segurança em construção e reparo de embarcações.",
      path: "",
    },
    {
      icon: "Elevation",
      title: "NR-35",
      description: "Previne quedas e garante segurança em atividades acima de 2 metros.",
      path: "",
    },
  ]

	useHead({
		title: title
	})
</script>