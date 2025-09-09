<template>
  <div class="bg-black">
    <div class="flag flex justify-center">
      <div class="text-white max-w-[1440px] p-6 mt-[80px]">
        <div class="lg:text-7xl text-4xl font-bold lg:leading-[70px]">Transformamos tecnologia em soluções seguras, precisas e pontuais.</div>
        <div class="text-red text-3xl mt-8 ">Soluções feitas para quem não pode parar.</div>
      </div>
    </div>
    <!-- <AtomCarousel :images="banners" id="clientes" /> -->
    <div class="flex justify-center mb-10">
      <div class="max-w-[1440px] px-8 px-xl-0">
        <div class="text-xl text-red mb-2">Conheça a </div>
        <div class="lg:flex align-center">
          <div class="lg:w-[55%]">
            <div class="text-3xl">TWA Equipamentos e Serviços Industriais</div>
            <div class="flex mt-4">
              <!-- <div class="pa-8">Video ou Foto</div> -->
              <div class="lg:pr-8">
                <div class="my-4 flex">
                  <div class="pr-4 hidden lg:flex">
                    <AtomIcon name="Factory" class="!w-[80px] !h-[80px] text-white"></AtomIcon>
                  </div>
                  <div class="text-md">
                    Fundada em 2015, em Sertãozinho/SP, a TWA Equipamentos e Serviços Industriais se consolidou como uma referência no mercado de soluções industriais. Com o apoio de profissionais altamente capacitados e experientes, a empresa aplica seu vasto conhecimento para desenvolver soluções personalizadas que atendem às necessidades de indústrias dos segmentos leve e pesado.
                  </div>
                </div>
                <div class="border-t-[1px] border-red-500"></div>
                <div class="my-4 flex">
                  <div class="pr-4 hidden lg:flex">
                    <AtomIcon name="Engineering" class="!w-[80px] !h-[80px] text-white"></AtomIcon>
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
      </div>
    </div>

    <v-row class="bg-grey-500 mt-12 !m-0">
      <v-col cols="12" md="3" class="flex align-center justify-center h-[200px]">
        <div class="text-center rounded-lg">
          <div class="text-5xl font-weight-bold text-red">+1000</div>
          <div class="text-xl mt-2">projetos executados</div>
        </div>
      </v-col>
      <v-col cols="12" md="3" class="p-4 bg-white flex align-center justify-center h-[200px]">
        <div class="text-center">
          <div class="text-5xl font-weight-bold">+60</div>
          <div class="text-xl mt-2">colaboradores</div>
        </div>
      </v-col>
      <v-col cols="12" md="3" class="p-4 flex align-center justify-center h-[200px]">
        <div class="text-center">
          <div class="text-5xl font-weight-bold text-red">+15</div>
          <div class="text-xl mt-2">estados atendidos</div>
        </div>
      </v-col>
      <v-col cols="12" md="3" class="p-4 bg-white flex align-center justify-center h-[200px]">
        <div class="text-center">
          <div class="text-5xl font-weight-bold">+10</div>
          <div class="text-xl mt-2">anos de experiência</div>
        </div>
      </v-col>
    </v-row>

    <div class="flex justify-center my-10">
      <div class="max-w-[1440px]">
        <div class="lg:flex my-10 mx-6 lg:mx-0">
          <div class="lg:w-[40%] mb-4"> 
            <AtomImage :imageUrl="treinamento" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="lg:w-[60%] lg:ml-8">
            <div class="text-xl text-red mb-2">Treinamento e</div>
            <div class="text-3xl mb-4">Capacitação de Profissionais</div>
            <div class="text-md mb-4">
              Valorizamos o capital humano como nosso maior patrimônio. A equipe de Segurança do Trabalho da TWA atua com excelência, promovendo a humanização, o cuidado genuíno e o compromisso com a integridade
            </div>
            <div class="text-md mb-10">
              Investimos constantemente em treinamentos e capacitações, incluindo os cursos obrigatórios conforme as Normas Regulamentadoras (NRs), como NR-10, NR-12, NR-18, NR-33, NR-35, entre outras. Esses treinamentos são fundamentais para assegurar que nossos profissionais estejam preparados, conscientes e qualificados para atuar com segurança, qualidade e alto desempenho em qualquer ambiente industrial.
            </div>
            <div class="text-center text-md-start">
              <AtomButton size="large" color="red" class="text-white text-body-1" @click="goToPage('treinamentos')">
                <div class="flex align-center">
                  <span>Saiba mais</span>
                  <AtomIcon name="ArrowRight" class="ml-2 !w-[30px] !h-[30px] text-white">
                  </AtomIcon>
                </div>
              </AtomButton>
            </div>
          </div>
        </div>
        <MoleculeSolutions :items="trainingList" class="p-4" />
      </div>
    </div>

    <h3 class="text-grey text-center text-2xl mb-8">Principais <span class="font-weight-bold">Clientes</span></h3>
    <div class="flex align-center justify-center bg-white w-full">
      <div class="max-w-[1440px]">
        <AtomCarouselMini  :images="clientes" />

      </div>

    </div>
    
    <div class="flex justify-center py-4 lg:py-20">
      <div class="max-w-[1440px] px-8 px-xl-0">
        <div class="flex align-start mb-4">
          <div class="w-[100%]">
            <div class="text-xl text-red mb-2">Qualidade em </div>
            <div class="text-3xl">Nossos Serviços</div>
            <div class="flex">
              <!-- <div class="pa-8">Video ou Foto</div> -->
              <div class="lg:pr-8">
                <div class="my-2 flex">
                  <div class="text-md">
                    Contamos com uma equipe especializada que acompanha todas as etapas do processo de produção, garantindo o uso de matéria-prima certificada e a execução rigorosa do controle de qualidade. Realizamos inspeções técnicas, testes hidrostáticos e emitimos as respectivas ARTs, assegurando ao cliente a excelência e a conformidade do produto final.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="w-[45%]"> 
            <AtomImage :imageUrl="twaServices" width="100%" height="auto" class="rounded-tr-[200px] rounded-bl-[200px]" />
          </div> -->
        </div>
        <div class="lg:flex align-start">
          <div class="lg:w-[27%] my-8 my-md-0"> 
            <AtomImage :imageUrl="manufacturingMountain" width="100%" height="auto" class="rounded-lg" />
          </div>
          <div class="lg:w-[73%] lg:ml-10">
            <div class="text-3xl">Fabricação e Montagem de Equipamentos Industriais</div>
            <div class="flex">
              <div class="lg:pr-8">
                <div class="my-2 flex flex-column">
                  <div class="text-md mb-2">
                    Aplicamos tecnologias de ponta e metodologias avançadas para garantir eficiência em todas as etapas do processo. Nossas operações são otimizadas para reduzir o tempo de ciclo, eliminar desperdícios e aumentar a produtividade.
                  </div>
                  <div class="text-md mb-2">
                    Cada projeto é planejado e executado com rigor, assegurando qualidade, cumprimento de prazos e excelente custo-benefício. Utilizamos matérias-primas de procedência comprovada e contamos com fornecedores criteriosamente selecionados.
                  </div>
                  <div class="text-md">
                    Fabricamos e montamos diversos equipamentos industriais, como Curvas e Dutos Lavadores de Gases, Dutos de Gases, Economizadores, Guinchos Hilo, além de Plataformas e Mezaninos — sempre com foco em desempenho, segurança e as necessidades de cada cliente.
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center text-md-start mt-8 lg:mt-2">
              <AtomButton size="large" color="red" class="text-white text-body-1" @click="goToPage('projetos')">
                <div class="flex align-center">
                  <span>Saiba mais</span>
                  <AtomIcon name="ArrowRight" class="ml-2 !w-[30px] !h-[30px] text-white">
                  </AtomIcon>
                </div>
              </AtomButton>
            </div>
          </div>
        </div>
        <div class="lg:flex align-start mt-10 ">
          <div class="lg:w-[73%]">
            <div class="text-xl text-red mb-2">Manutenção de</div>
            <div class="text-3xl">Equipamentos Industriais</div>
            <div class="flex">
              <div class="lg:pr-8">
                <div class="my-2 flex flex-column">
                  <div class="text-md mb-4">
                    Seja na produção em larga escala ou em setores de alta especialização, a confiabilidade e a eficiência dos equipamentos industriais são fundamentais para o sucesso das operações. Nesse contexto, a TWA Equipamentos e Serviços Industriais se destaca na linha de frente, oferecendo serviços especializados de manutenção industrial, com uma equipe técnica altamente qualificada.
                  </div>
                  <div class="text-md">
                    Com foco em excelência, agilidade e pontualidade, realizamos a manutenção de diversos equipamentos industriais, garantindo desempenho contínuo, segurança operacional e redução de paradas não planejadas.
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:w-[27%] my-8 my-lg-0 flex lg:hidden"> 
              <AtomImage :imageUrl="maintenance" width="100%" height="auto" class="rounded-lg" />
            </div>
            <div class="text-center text-md-start mt-8 mb-10 lg:mb-0">
              <AtomButton size="large" color="red" class="text-white text-body-1" @click="goToPage('manutencao')">
                <div class="flex align-center">
                  <span>Saiba mais</span>
                  <AtomIcon name="ArrowRight" class="ml-2 !w-[30px] !h-[30px] text-white">
                  </AtomIcon>
                </div>
              </AtomButton>
            </div>
          </div>
          <div class="lg:w-[27%] my-8 my-lg-0 lg:flex hidden"> 
            <AtomImage :imageUrl="maintenance" width="100%" height="auto" class="rounded-lg" />
          </div>
        </div>
        <div class="lg:flex align-start mt-10">
          <div class="lg:w-[35%] hidden lg:flex lg:mr-10"> 
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
          <div class="lg:w-[65%]">
            <div class="text-xl text-red mb-2">Locação de</div>
            <div class="text-3xl">Guindastes e Guindauto</div>
            <div class="flex">
              <div class="lg:pr-8">
                <div class="my-2 flex flex-column">
                  <div class="text-md mb-4">
                    A TWA Equipamentos e Serviços Industriais também atua no segmento de locação de guindastes e guindautos, oferecendo soluções sob medida para as necessidades da sua obra.
                  </div>
                  <div class="text-md">
                    Contamos com equipamentos modernos, submetidos a manutenções periódicas, garantindo operações seguras e confiáveis. Nossa equipe é altamente treinada e realiza todas as atividades de movimentação de cargas e içamentos com eficiência e total conformidade com as normas regulamentadoras.
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:w-[35%] flex lg:hidden lg:mr-10 mt-8"> 
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
            <div class="text-center text-md-start mt-8">
              <AtomButton size="large" color="red" class="text-white text-body-1" @click="goToPage('locacao-guindastes')">
                <div class="flex align-center">
                  <span>Saiba mais</span>
                  <AtomIcon name="ArrowRight" class="ml-2 !w-[30px] !h-[30px] text-white">
                  </AtomIcon>
                </div>
              </AtomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import zeppelin from '@/assets/images/clientes/zeppelin.jpg';
import nestle from '@/assets/images/clientes/nestle.jpg';
import saoMartinho from '@/assets/images/clientes/sao-martinho.jpg';
import adm from '@/assets/images/clientes/adm.jpg';
import abengoa from '@/assets/images/clientes/abengoa.jpg';
import delta from '@/assets/images/clientes/delta.jpg';
import agropeu from '@/assets/images/clientes/agropeu.jpg';
import klabin from '@/assets/images/clientes/klabin.jpg';
import raizen from '@/assets/images/clientes/raizen.jpg';
import cerradinho from '@/assets/images/clientes/cerradinho.jpg';
import martin from '@/assets/images/clientes/martin.jpg';
import colombo from '@/assets/images/clientes/colombo.jpg';
import grupoFarias from '@/assets/images/clientes/grupo-farias.jpg';

import twaCompany from '@/assets/images/twa_company.jpg';
import treinamento from '@/assets/images/treinamento.jpg';
import manufacturingPeople from '@/assets/images/manufacturing-people.jpg';
import maintenance from '@/assets/images/maintenance.jpeg';
import manufacturingMountain from '@/assets/images/manufacturing-mountain.jpeg';
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
	const title = `${t('pageTitle', { page: t('home.pageTitle') })}`

	useHead({
		title: title
	})

  const banners = [
    // {id: 1, url: qualidadeConstrucao},
    // {id: 2, url: locacao}
  ]

  const trainingList = [
    {
      icon: "Health",
      title: "NR-06",
      description: "Garante o uso correto de EPIs para proteger o trabalhador contra riscos.",
      path: "solucoes/fincontroll-personal",
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

  const clientes = [
    {id: 1, url: zeppelin},
    {id: 2, url: nestle},
    {id: 2, url: saoMartinho},
    {id: 2, url: adm},
    {id: 2, url: abengoa},
    {id: 2, url: delta},
    {id: 2, url: agropeu},
    {id: 2, url: klabin},
    {id: 2, url: raizen},
    {id: 2, url: cerradinho},
    {id: 2, url: martin},
    {id: 2, url: colombo},
    {id: 2, url: grupoFarias},
    // {id: 3, url: centroOesteMineracao},
    // {id: 4, url: copacel},
    // {id: 5, url: ecoplan},
    // {id: 6, url: inducal},
    // {id: 7, url: matoGrosso},
    // {id: 8, url: pedrical},
  ]

  const router = useRouter()

  const goToPage = (path: any) => {
		router.push({path: path});
	}

</script>

<style lang="scss">
.custom-title {
  border-right: 4px solid $primary;
}

.custom-title--invert {
  border-left: 4px solid $secondary;
}

.company {
  @apply w-[100%] h-[100%];
  // width: 50%!important;
  // height: 200px;
}
.company-one {
  background-image: url('assets/images/company/company-six.jpeg');
  background-size: cover;
}

@media (width <= 1000px) {
  .company-one {
    background-image: url('assets/images/company/company-six.jpeg');
    background-size: cover;
  }
}

.company-two {
  background-image: url('assets/images/company/company-seven.jpeg');
  background-size: cover;

}
.company-three {
  background-image: url('assets/images/company/company-three.jpeg');
  background-size: cover;
}
.company-four {
  background-image: url('assets/images/company/company-four.jpeg');
  background-size: cover;
}
.company-five {
  background-image: url('assets/images/company/company-one.jpeg');
  background-size: cover;
}
.company-six {
  background-image: url('assets/images/company/company-six.jpeg');
  background-size: cover;
}
.company-nine {
  background-image: url('assets/images/company/company-one.jpeg');
  background-size: cover;
}
.company-eight {
  background-image: url('assets/images/company/company-two.jpeg');
  background-size: cover;
}

.equipment-one {
  background-image: url('assets/images/equipamento-01.jpeg');
  background-size: cover;
}
.equipment-two {
  background-image: url('assets/images/equipamento-02.jpeg');
  background-size: cover;
}
.equipment-three {
  background-image: url('assets/images/equipamento-03.jpeg');
  background-size: cover;
}
.equipment-four {
  background-image: url('assets/images/equipamento-04.jpeg');
  background-size: cover;
}
.construction-one {
  background-image: url('assets/images/construcao-01.jpeg');
  background-size: cover;
}
.construction-two {
  background-image: url('assets/images/construcao-02.jpeg');
  background-size: cover;
}
.construction-three {
  background-image: url('assets/images/construcao-03.jpeg');
  background-size: cover;
}
.construction-four {
  background-image: url('assets/images/construcao-04.jpeg');
  background-size: cover;
}

.loading {
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}


.flag {
  background-image: url('assets/images/twa_background.png');
  background-position: 0px -85px;
  height: 700px;
  width: auto;
  background-repeat: no-repeat;
}

</style>