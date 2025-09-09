<template>
  <div>
    <MoleculeBannerSolutions />
    <div class="flex flex-col align-center">
      <div class="max-w-[1440px] ma-8">
        <div class="mb-8 mx-4">
          <h1 class="text-3xl text-center font-semibold text-primary mb-4">{{ $t('ourSolutions') }}</h1>
          <h2 class="text-md text-center text-grey300">{{ $t('solutionsDescription') }}</h2>
        </div>
        <MoleculeDescriptiveImageAction :title="$t('solutions.systemFilterTitle')" :text="$t('solutions.systemFilterDescription')" class="flex justify-center">
          <template #image>
            <v-col cols="12" md="6" class="flex items-center justify-end">
              <AtomImage :imageUrl="filterImg" class="w-auto h-[400px] rounded-b-lg" />
            </v-col>
          </template>
        </MoleculeDescriptiveImageAction>
        <MoleculeDescriptiveImageAction invert :title="$t('solutions.craneMaintenance')" :text="$t('solutions.craneMaintenanceDescription')" class="flex justify-center">
          <template #image>
            <v-col cols="12" md="6" class="flex items-center justify-end">
              <AtomImage :imageUrl="munckImg" class="w-auto h-[400px] rounded-b-lg" />
            </v-col>
          </template>
        </MoleculeDescriptiveImageAction>
        <MoleculeDescriptiveImageAction :title="$t('solutions.hydraulicMaintenance')" :text="$t('solutions.hydraulicMaintenanceDescription')" class="flex justify-center">
          <template #image>
            <v-col cols="12" md="6" class="flex items-center justify-end">
              <AtomImage :imageUrl="harvesterImg" class="w-auto h-[400px] rounded-b-lg" />
            </v-col>
          </template>
        </MoleculeDescriptiveImageAction>
        <MoleculeDescriptiveImageAction invert :title="$t('solutions.cylinderManufacturing')" :text="$t('solutions.cylinderManufacturingDescription')" class="flex justify-center">
          <template #image>
            <v-col cols="12" md="6" class="flex items-center justify-end">
              <AtomImage :imageUrl="cylinderImg" class="w-auto h-[400px] rounded-b-lg" />
            </v-col>
          </template>
        </MoleculeDescriptiveImageAction>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
	import filterImg from '@/assets/images/filter.png';
	import munckImg from '@/assets/images/munck.png';
	import harvesterImg from '@/assets/images/harvester.png';
	import cylinderImg from '@/assets/images/cylinder.png';
  const props = defineProps({
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