<template>
  <v-row class="max-w-[1440px]">
    <v-col cols="12" md="6" class="flex flex-col justify-center pa-md-8 order-2 order-md-first">
      <div class="text-2xl text-primary font-semibold">{{ $t('home.chooseCompany') }}</div>
      <div v-for="item in chooseCompanyItems" :key="item" class="d-flex align-center my-4">
        <div>
          <AtomIcon :name="item.icon" class="text-green !w-10 !h-10 mr-4"/>
        </div>
        <div class="text-md text-grey300"><span class="font-semibold text-primary">{{item.title}}:</span> {{ item.description }} </div>
      </div>
      <div class="text-center text-md-end my-4 my-md-0">
				<AtomButton color="green" size="large" class="text-body-2" @click="openWhatsApp">
					<AtomIcon name="Whatsapp" class="!w-6 !h-6 mr-2"></AtomIcon>
					{{$t('talkToUs')}} 
        </AtomButton>
			</div>
    </v-col>
    <v-col cols="12" md="6">
      <!-- <AtomImage :imageUrl="caseHarvester" class="w-full h-auto" /> -->
      <div class="flex flex-col">
        <div class="flex ">
          <div class="company company-one mr-1 rounded-tl-[100px]"></div>
          <div class="company company-two rounded-tr-[20px]"></div>
        </div>
        <div class="flex mt-1">
          <div class="company company-three mr-1"></div>
          <div class="company company-four"></div>
        </div>
        <div class="flex mt-1">
          <div class="company company-five mr-1"></div>
          <div class="company company-six"></div>
        </div>
        <div class="flex mt-1">
          <div class="company company-seven mr-1"></div>
          <div class="company company-eight rounded-br-[100px]"></div>
        </div>
        <!-- <v-col cols="12" md="6" class="px-0">
          <div class="company company-two"></div>
        </v-col>
        <v-col cols="12" md="6" class="px-1">
          <div class="company company-three"></div>
        </v-col>
        <v-col cols="12" md="6" class="px-0">
          <div class="company company-four"></div>
        </v-col>
        <v-col cols="12" md="6" class="px-1">
          <div class="company company-five"></div>
        </v-col>
        <v-col cols="12" md="6" class="px-0">
          <div class="company company-six"></div>
        </v-col>
        <v-col cols="12" md="6" class="px-1">
          <div class="company company-seven"></div>
        </v-col>
        <v-col cols="12" md="6" class="px-0">
          <div class="company company-eight"></div>
        </v-col> -->
        <!-- <div class="w-[50%] h-[25%] mx-1 company-three"></div>
        <div class="w-[50%] h-[25%] mx-1 company-four"></div>
        <div class="w-[50%] h-[25%] mx-1 company-five"></div>
        <div class="w-[50%] h-[25%] mx-1 company-six"></div>
        <div class="w-[50%] h-[25%] mx-1 company-seven"></div>
        <div class="w-[50%] h-[25%] mx-1 company-eight"></div> -->
      </div>
       <!-- <div class="bg-primary w-[160px] h-[50px] rounded-md position-absolute md:right-[39%] right-[34%] flex justify-center align-center mt-10 border-[#FAB104] border-[1px]">
        Desde 2021
       </div>
       <div class="bg-red w-[50%] harvester rounded-tr-[100px]"></div> -->
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
	import caseHarvester from '@/assets/images/case.webp';
  import { openWhatsApp } from '~/composables/functionsUtils';

  const props = defineProps({
		chooseCompanyItems: {
			type: Array,
			required: false,
			default: () => ([])
		},
	})
  const router = useRouter()
  
</script>

<style lang="scss">
.company {
  @apply w-[50%] h-[200px];
}
.company-one {
  background-image: url('assets/images/manutencao/manutencao1.jpg');
  background-size: cover;
}
.company-two {
  background-image: url('assets/images/manutencao/manutencao2.jpg');
  background-size: cover;
}
.company-three {
  background-image: url('assets/images/manutencao/manutencao3.jpg');
  background-size: cover;
}
.company-four {
  background-image: url('assets/images/manutencao/manutencao4.jpg');
  background-size: cover;
}
.company-five {
  background-image: url('assets/images/manutencao/manutencao5.jpg');
  background-size: cover;
}
.company-six {
  background-image: url('assets/images/manutencao/manutencao6.jpg');
  background-size: cover;
}
.company-seven {
  background-image: url('assets/images/manutencao/manutencao7.jpg');
  background-size: cover;
}
.company-eight {
  background-image: url('assets/images/manutencao/manutencao8.jpg');
  background-size: cover;
}

// .harvester {
//   background-image: url('assets/images/colheitadeira-case.webp');
//   background-size: cover;
//   background-position: 76% 20%;
// }
</style>