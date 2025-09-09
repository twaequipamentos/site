<template>
  <v-row class="max-w-[1440px]">
    <v-col cols="12" md="6" class="pa-0 pa-md-8">
      <div class="min-h-[250px] w-full h-full resume-image">
      </div>
    </v-col>
    <v-col cols="12" md="6" class="flex flex-col justify-start pt-8 px-0 pa-md-8">
      <div class="text-3xl text-primary font-semibold mb-4 text-center text-md-start">{{ $t('whoWeAre.title') }}</div>
      <div class="text-md text-grey300 mb-2">
        <span>{{$t('whoWeAre.text1')}}</span>
      </div>
      <div class="text-md text-grey300 mb-2">
        <span>{{$t('whoWeAre.text2')}}</span>
      </div>
      <div class="text-md text-grey300 mb-2">
        <span>{{$t('whoWeAre.text3')}}</span>
      </div>
      <div class="text-center text-md-end my-4 my-md-0">
				<AtomButton color="green" size="large" class="text-body-2" @click="openWhatsApp">
					<AtomIcon name="Whatsapp" class="!w-6 !h-6 mr-2"></AtomIcon>
					{{$t('talkToUs')}} 
        </AtomButton>
			</div>
    </v-col>
    <div class="w-full flex justify-center">
      <MoleculeVideo class="my-12 mx-2"/>
    </div>
  </v-row>
</template>

<script setup lang="ts">
	import businessImg from '@/assets/images/company.jpg';
  import { openWhatsApp } from '~/composables/functionsUtils';

  const props = defineProps({
		chooseCompanyItems: {
			type: Array,
			required: false,
			default: () => ([])
		},
	})

  const { t } = useI18n()

  const whoWeAreText = computed(() => {
      return formattedBreakLine(t('whoWeAre.text'))
    }
  ) 
  
  const router = useRouter()

  const goToPageWhoWeAre = (path: any) => {
		router.push('/quem-somos');
	}
  
</script>

<style lang="scss">
  .image-line {
    border: 2px solid $secondary;

    &--secondary {
      border-color: $primary;
    }
  }

  .resume-image {
    background: url('@/assets/images/company.jpg');
    background-size: cover;
    border-radius: 20px 15% 0px 100px
  }
</style>