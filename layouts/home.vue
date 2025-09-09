<template>
  <v-app class="">
    <div v-if="!loading">
      <div elevation="0" class="presentation__bar h-24 flex justify-center bg-primary">
        <div class="w-full flex justify-center h-full">
          <div class="w-full h-full flex align-center justify-space-between px-4 max-w-[1440px]">
            <!-- <AtomImage :imageUrl="twaLogo" class="rounded-circle bg-red" /> -->
            <div class="w-[120px]">
              <NuxtLink to="/" @click.prevent="scrollToSection(item.id)">
                <AtomImage :imageUrl="twaLogo"  class="rounded-b-lg" />  
              </NuxtLink>
              
            </div>
            <div class="hidden lg:flex">
              <!-- <AtomButton v-for="item in menu" :key="item" variant="text" :color="item.whatsapp ? 'green' : 'transparent'" class="mr-2 home__button !text-lg text-uppercase" 
              @click.prevent="scrollToSection(item.id)" :class="classesButton(item.path)"> 
              <span>{{item.name}}</span>
              </AtomButton> -->
              <AtomMenuPopover class="z-20"></AtomMenuPopover>
              <!-- <NuxtLink  v-for="item in menu" :key="item" to="#" @click.prevent="scrollToSection(item.id)" class="flex align-center py-0 px-6 rounded-md text-sm contact"> <span>{{item.name}}</span> </NuxtLink> -->
              <!-- <AtomButton v-for="item in menu" :key="item" :color="item.whatsapp ? 'green' : 'transparent'" class="mr-2 home__button" 
              @click="goToPage(item)" :class="classesButton(item.path)"> 
              <span>{{item.name}}</span>
              </AtomButton> -->
              <!-- <NuxtLink :to="`https://wa.me/5565999293004?text=${encodeURIComponent('Olá! Gostaria de falar sobre os serviços de construção.')}`" class="font-weight-bold text-green flex align-center py-0 px-6 rounded-md text-sm contact" target="_blank"> {{ $t('menu.contact') }} </NuxtLink> -->
            </div>
            <div class="flex lg:hidden">
              <AtomButton icon @click="showMobileMenu">
                <AtomIcon name="Menu" class="!w-8 !h-8"/>
              </AtomButton>
            </div>
            <!-- <div class="">
              <AtomButton v-for="item in menu" :key="item" class="mr-2 home__button" @click="goToPage(item)" :class="classesButton(item.path)"> {{item.name}} </AtomButton>
            </div> -->
          </div>
        </div>
        <Transition>
          <div v-if="menuMobileIsVisible" class="fixed z-50 text-sm bg-primary w-full mt-[95px]">
            <!-- <div v-for="item in menu" :key="item" class="home__button--mobile pa-4" :class="classesButton(item.path)" @click="goToPage(item)"> {{item.name}} </div> -->
            <NuxtLink  v-for="item in menu" :key="item" to="#" @click.prevent="goToPage(item.id)" class="home__button--mobile pa-4 flex align-center rounded-md text-md text-uppercase contact"> <span>{{item.name}}</span> </NuxtLink>
            <NuxtLink :to="`https://wa.me/5516981735919?text=${encodeURIComponent('Olá! Gostaria de tirar algumas dúvidas sobre Peças e Serviços oferecidos.')}`" class="flex align-center pt-2 pb-4 px-4 rounded-md text-sm text-uppercase" target="_blank"> Fale Conosco </NuxtLink>
          </div>
        </Transition>
      </div>
      <v-main class="d-flex justify-center custom-background">
        <div class="h-full w-full max-w-[1920px] bg-white"> 
          <slot />
        </div>
      </v-main>

      <div class="w-full pt-10 custom-background position-relative ">
        <div class="w-full min-h-[160px] bg-primary opacity-95 flex flex-col align-center justify-center">
          <div class="mb-md-0 flex flex-col md:flex-row justify-between w-full text-white px-2 max-w-[1440px] py-4">
            <!-- <AtomIcon name="Logo" class="presentation__footer-logo" /> -->
            <div class=" flex flex-col align-center mt-4 mt-md-0">
              <div>
                <AtomImage :imageUrl="twaLogo" class="presentation__footer-logo"  />
              </div>
            </div>
            <div class=" flex flex-col align-center mt-4 mt-md-0">
              <div class="flex flex-col md:flex-row">
                <div class="flex justify-start m-4 mt-md-0">
                  <div class="flex flex-col text-center text-lg-start">
                    <span class="text-md text-bold mb-2">Endereço</span>
                    <span class="text-xs mb-1">{{$t('contact.street')}}</span>
                    <span class="text-xs mb-1">{{$t('contact.complement')}}</span>
                    <span class="text-xs mb-1"> {{$t('contact.cityState')}} </span>
                    <span class="text-xs"> {{$t('contact.cep')}} </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col align-center mt-4 mt-md-0">
              <div class="flex flex-col md:flex-row">
                <div class="flex justify-start">
                  <div class="flex flex-col align-center align-lg-start">
                    <span class="text-md text-bold mb-2">Links</span>
                    <NuxtLink  v-for="item in menuFooter" :key="item" to="#" @click.prevent="goToPageFooter(item.id)" class="flex align-start py-1 rounded-md text-xs text-uppercase footer-menu"> <span>{{item.name}}</span> </NuxtLink>
                    <NuxtLink :to="`https://wa.me/5516981735919?text=${encodeURIComponent('Olá! Gostaria de tirar algumas dúvidas sobre Peças e Serviços oferecidos.')}`" class="flex align-center py-1 rounded-md text-xs text-uppercase footer-menu" target="_blank"> Contato </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col align-center align-lg-start mt-4 mt-lg-0">
              <!-- <div class="flex flex-col">
                <NuxtLink  v-for="item in menuSocial" :key="item" to="#" @click.prevent="goToExternalPage(item.link)" class="flex align-center py-1 px-6 rounded-md text-xs text-uppercase footer-menu"> <span>{{item.name}}</span> </NuxtLink>
              </div> -->
              <span class="text-md text-bold mb-2">Contato</span>
              <div class="flex align-center">
                <span class="text-xs my-1">{{$t('contact.phone')}}</span>
              </div>
              <div class="flex align-center">
                <span class="text-xs mb-1">adm@twaequipamentos.com.br</span>
              </div>
              <div class="mt-4">
                <NuxtLink :to="`https://wa.me/5516981735919?text=${encodeURIComponent('Olá! Gostaria de falar sobre os serviços de construção.')}`" class="highlight-menu text-uppercase text-sm bg-green rounded-md p-2 flex align-center" target="_blank">
                  <AtomIcon name="WhatsappFull" filled class="!w-6 !h-6 mr-2"></AtomIcon>
                  <span>Fale Conosco agora</span> 
                </NuxtLink>
              </div>
              <!-- <div class="flex ml-[-4px]">
                <div class="flex">
                  <AtomButton icon density="comfortable" @click="goToExternalPage(instagram)">
                    <AtomIcon name="Instagram" class="!w-6 !h-6" />
                  </AtomButton>
                </div>
                <div class="flex align-center">
                  <AtomButton icon density="comfortable" @click="goToExternalPage(facebook)">
                    <AtomIcon name="Facebook" class="!w-6 !h-6" />
                  </AtomButton>
                </div>
                <div class="flex align-center">
                  <AtomButton icon density="comfortable" @click="goToExternalPage(linkedin)">
                    <AtomIcon name="Linkedin" class="!w-6 !h-6 mb-1" />
                  </AtomButton>
                </div>
              </div> -->
            </div>
          </div>
        </div>
        
        <div class="presentation__footer flex flex-col align-center justify-center w-full  border-t-[1px] border-white ">
          <div class="lg:flex align-center justify-between max-w-[1440px] py-4 presentation bg-primary opacity-2 py-2 w-full">
            <div class="text-sm m-4 lg:m-0 text-center text-lg-start">{{ $t('companyFooter') }} - {{ $t('allRightsReserved') }}</div>
            <div class="flex ml-[-4px] justify-center lg:justify-start">
                <div class="flex">
                  <AtomButton icon density="comfortable" @click="goToExternalPage(instagram)">
                    <AtomIcon name="Instagram" class="!w-6 !h-6" />
                  </AtomButton>
                </div>
                <div class="flex align-center">
                  <AtomButton icon density="comfortable" @click="goToExternalPage(facebook)">
                    <AtomIcon name="Facebook" class="!w-6 !h-6" />
                  </AtomButton>
                </div>
                <div class="flex align-center">
                  <AtomButton icon density="comfortable" @click="goToExternalPage(linkedin)">
                    <AtomIcon name="Linkedin" class="!w-6 !h-6 mb-1" />
                  </AtomButton>
                </div>
              </div>
            <!-- <div class="flex align-center max-w-[1440px]">
              <div class="text-sm">{{ $t('companyFooter') }} {{ $t('allRightsReserved') }}</div>
              <div class="flex flex-col md:flex-row">
                <div class="text-xs ml-0 ml-md-2 "> {{ $t('developedBy') }} </div>
              </div>
            </div> -->
          </div>

        </div>
      </div>
    </div>
    <div v-else class="flex align-center justify-center h-[100vh]">
      <AtomImage :imageUrl="twaLogo"  class="loading ma-0 !w-44 !h-44 md:!w-32 md:!h-32 cursor-pointer opacity-20" />
    </div>
  </v-app>
</template>

<script setup>
	import { ref } from 'vue' 
	import { useRouter } from 'vue-router'
  import { useDisplay } from 'vuetify'
  import twaLogo from '@/assets/images/twa_logo.png';
	const { mobile } = useDisplay()

	const router = useRouter( )
	const route = useRoute()
  const { t } = useI18n()
  const menuMobileIsVisible = ref(false)

  const classesButton = (path) => {
    return router.options.history.state.current === path ? 'home__button--selected' : ''
  }
  
  const loading = ref(true)

  onMounted(async () =>  {
    setTimeout(() => {
      loading.value = false
    }, 500);
  })
	// const menu = ref([
	// 	{name: t('menu.home'), path: '/' },
	// 	{name: t('menu.whoWeAre'), path: '/quem-somos' },
	// 	{name: t('menu.solutions'), path: '/solucoes' },
	// 	{name: t('menu.catalog'), path: '/catalogo' },
	// 	{name: t('menu.contact'), path: '/contato' },
	// ])

	const menu = ref([
		{name: t('menu.whoWeAre'), id: 'quem-somos', section: '' },
		{name: t('menu.trainings'), id: 'treinamentos', section: '' },
		{name: t('menu.projects'), id: 'projetos', section: '' },
		{name: t('menu.maintenance'), id: 'manutencao', section: '' },
		{name: t('menu.craneRental'), id: 'locacao-guindastes', section: '' },
	])

	const menuFooter = ref([
		{name: t('menu.whoWeAre'), id: 'quem-somos', section: '' },
		{name: t('menu.trainings'), id: 'treinamentos', section: '' },
		{name: t('menu.projects'), id: 'projetos', section: '' },
		{name: t('menu.maintenance'), id: 'manutencao', section: '' },
		{name: t('menu.craneRental'), id: 'locacao-guindastes', section: '' },
	])

	const campo = ref({
		name: 'valor1'
	})

	const goToHome = (item) => {
		router.push('/');
	}

	const goToPage = (item) => {
    showMobileMenu()
    router.push(`/${item}`);
	}

	const goToPageFooter = (item) => {
    router.push(`/${item}`);
	}

  const scrollToSection = (id) => {
    if(mobile.value){
      showMobileMenu()
    }
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const goToExternalPage = (page) => {
    window.open(page);
  }

  const showMobileMenu = () => {
    menuMobileIsVisible.value = !menuMobileIsVisible.value
  }

  const instagram = 'https://www.instagram.com/twaequipamentos/'
  const facebook = 'https://www.facebook.com/twaequipamentos/'
  const linkedin = 'https://br.linkedin.com/company/twa-equipamentos-e-servi%C3%A7os-de-sert%C3%A3ozinho-sp'

  const menuSocial = ref([
		// {name: t('social.instagram'), link: 'https://www.instagram.com/construtora.fds?igsh=ZmN1M2Vvc3JnNm9j' },
		// {name: t('social.facebook'), link: 'https://www.facebook.com/share/17G6c58aPn/?mibextid=wwXIfr' },
    // {name: t('social.linkedin'), link: 'https://www.linkedin.com/company/fds-construtora/' },
	])


	const logout = () => {
		goToPage('/login')
	}

  // const scrollToSection = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start'
  //     });
  //   }
  // };
</script>

<style lang="scss" scoped>
  .home {
    &__button {
      color: black!important;
      background: transparent;
      @apply text-black text-sm hover:!text-white;

      &:hover {
        background: transparent;
        text-decoration: underline;
        text-underline-offset: 10px;
      }

      &:focus {
        background: transparent;
      }

      &--selected{
        // @apply rounded-tr-xl rounded-bl-xl;
        // background: $secondary;
        // text-decoration: underline;
        // text-underline-offset: 10px;
        color: black!important;
      }

      &--mobile {
        &:hover {
          color: $white;
        }

        &--selected{
          color: $secondary!important;
        }
      }
    }
  }
  .presentation {
    &__bar {
      // border-bottom: 1px solid $grey-150;;
      // @apply rounded-bl-3xl
    }

    &__footer {
      // background-image: url("../assets/images/mts-empresa.jpeg");
      background-size: cover;
      height: auto;
      // min-height: 160px;
      background-color: transparent;
    }

    &__footer-logo {
      height: auto;
      width: 150px
    }

    &__signature {
      color: $white;
    }
  }

  .logo {
    height: auto;
    width: 100%;
    max-height: 45px;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.2s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }


  .custom-background {
    background-color: $primary!important;
    // background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='80' height='80' patternTransform='scale(1) rotate(40)'><rect x='0' y='0' width='100%' height='100%' fill='%2309542aff'/><path d='M-20.133 4.568C-13.178 4.932-6.452 7.376 0 10c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432'  stroke-width='1' stroke='rgba(255, 255, 255, 0.05)' fill='none'/><path d='M-20.133 24.568C-13.178 24.932-6.452 27.376 0 30c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432'  stroke-width='1' stroke='%23ffffff0d' fill='none'/><path d='M-20.133 44.568C-13.178 44.932-6.452 47.376 0 50c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432'  stroke-width='1' stroke='%23ffffff0d' fill='none'/><path d='M-20.133 64.568C-13.178 64.932-6.452 67.376 0 70c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432'  stroke-width='1' stroke='%23ffffff0d' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(-26,0)' fill='url(%23a)'/></svg>")
  }


  .teste {
    // background-image: url("../assets/images/mts-empresa.jpeg");
    background-size: cover;
    height: auto;
    min-height: 300px;
    background-color: transparent;
  }

  a:hover {
    color: $white!important;
  }

  .footer-menu {
    &:hover {
      color: $secondary!important;
    }
  }

  
</style>