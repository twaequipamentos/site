<template>
  <div>
    <MoleculeBannerDetails :image="businessImg" />
    <div class="flex flex-col align-center">
      <div class="max-w-[1440px] ma-8">
        <div class="mb-8 mx-4">
          <h1 class="text-3xl text-center font-semibold text-primary mb-4">{{ $t('contact.title') }}</h1>
          <h2 class="text-md text-start text-grey300" v-html="textContact"></h2>
        </div>
        <v-row class="flex">
          <v-col cols="12" md="6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.137584343773!2d-48.046235223828496!3d-21.027180223412564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b982e1029e4c5d%3A0x976f224d2fb47aef!2sR.%20Manoel%20Oleg%C3%A1rio%2C%20631%20-%20Res.%20Village%20Tropical%2C%20Pontal%20-%20SP%2C%2014180-000!5e0!3m2!1spt-BR!2sbr!4v1734924435865!5m2!1spt-BR!2sbr" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </v-col>
          <v-col cols="12" md="6" class="flex justify-center">
            <div>
              <div class="flex flex-col">
                <div class="font-weight-bold text-grey500"> Localização: </div>
                <div class="flex flex-col">
                  <span class="text-md mb-1 text-grey300">{{$t('contact.street')}} - {{ $t('contact.cityState') }} - {{$t('contact.zipcode')}}</span>
                </div>
              </div>
              <div class="flex flex-col mt-4">
                <div class="font-weight-bold text-grey500"> Email: </div>
                <div class="flex flex-col">
                  <span class="text-md mb-1 text-grey300">email@email.com.br</span>
                </div>
              </div>
              <div class="flex flex-col mt-4">
                <div class="font-weight-bold text-grey500"> Telefone: </div>
                <div class="flex flex-col">
                  <span class="text-md mb-1 text-grey300">{{ $t('contact.phone') }}</span>
                </div>
              </div>
              <div class="flex flex-col mt-4">
                <div class="font-weight-bold text-grey500"> Horário de atendimento: </div>
                <div class="flex flex-col">
                  <span class="text-md mb-1 text-grey300">{{ $t('contact.openingHours') }}</span>
                </div>
              </div>
              <div class="flex flex-col mt-4">
                <div class="font-weight-bold text-grey500"> Redes Sociais: </div>
                <div class="mt-2">
                  <div class="flex align-start justify-start">
                    <div class="flex align-center">
                      <AtomButton icon @click="goToExternalPage(instagram)">
                        <AtomIcon name="Instagram" class="!w-6 !h-6" />
                      </AtomButton>
                    </div>
                    <div class="flex align-center ml-2">
                      <AtomButton icon @click="goToExternalPage(linkedin)">
                        <AtomIcon name="Linkedin" class="!w-6 !h-6 mb-1" />
                      </AtomButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import businessImg from '@/assets/images/business28.jpg';

  const props = defineProps({
		positivePointsItems: {
			type: Array,
			required: false,
			default: () => ([])
		},

		faq: {
			type: Array,
			required: false,
			default: () => ([])
		},

		companyValues: {
			type: Array,
			required: false,
			default: () => ([])
		},
	})

  const { t } = useI18n()

  const instagram = ''
  const facebook = ''
  const linkedin = ''

  const textItems = [
    {title: t('whoWeAre.title'), description: t('whoWeAre.text'), priority: true},
    // {title: t('whoWeAre.missionTitle'), description: t('whoWeAre.missionDescription')},
    // {title: t('whoWeAre.visionTitle'), description: t('whoWeAre.visionDescription')},
    {title: t('whoWeAre.values.title'), description: ""},
  ]

  const textContact = computed(() => {
    return formattedBreakLine(t('contact.text'))
  })
</script>