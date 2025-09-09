<template>
  <v-row class="max-w-[1440px]">
    <v-col cols="12" md="6" class="pa-0 pa-md-8">
      <div class="min-h-[250px] md:min-h-[420px] w-full h-full team-image">
      </div>
    </v-col>
    <v-col cols="12" md="6" class="flex flex-col justify-start pt-8 px-0 pa-md-8">
      <div class="text-3xl text-primary font-semibold mb-4 text-center text-md-start">{{ $t('teamSection.title') }}</div>
      <div class="text-md text-grey300 mb-2">
        <span>{{$t('teamSection.text1')}}</span>
      </div>
      <div class="text-md text-grey300 mb-2">
        <span>{{$t('teamSection.text2')}}</span>
      </div>
      <div class="text-md text-grey300 mb-2">
        <span>{{$t('teamSection.text3')}}</span>
      </div>
      <div class="text-center text-md-end my-4 my-md-0">
				<AtomButton color="green" size="large" class="text-body-2" @click="openWhatsApp">
					<AtomIcon name="Whatsapp" class="!w-6 !h-6 mr-2"></AtomIcon>
					{{$t('talkToUs')}} 
        </AtomButton>
			</div>
    </v-col>
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

  .team-image {
    background: url('@/assets/images/equipe-mts.jpg');
    background-size: cover;
    border-radius: 20px 100px 0px 100px
  }
</style>