<template>
  <MoleculeBannerHome />
  <div class="mt-6 px-4 text-grey500">
    <span class="text-md" v-html="textAbout"></span>
  </div>
  <h1 class="text-3xl text-center font-semibold my-8 text-primary">{{ $t('ourSolutions') }}</h1>

  <MoleculeSolutions :items="solutionsItems" limit="4" />
  
  <MoleculeDescriptiveImageAction icon="LoginIllustration" :text="$t('home.textSecurity')" :textButton="$t('toStart')" colorButton="primary" />

  <MoleculePositivePoints :items="positivePointsItems" />
  <MoleculeFaq :items="faq" class="mx-6 my-10" />
</template>

<script setup lang="ts">
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

		solutionsItems: {
			type: Array,
			required: false,
			default: () => ([])
		},
	})

  const { t } = useI18n()
  const textAbout = computed(() => {
    return formattedBreakLine(t('home.textAbout'))
  })
</script>