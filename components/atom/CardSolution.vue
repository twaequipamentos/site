<template>
	<div class="h-full">
		<!-- <div class="w-full flex justify-center">
			<div class="bg-primary !h-[100px] !w-[100px] z-10 rounded-full flex justify-center align-center" :class="classesIcon"> 
				<AtomIcon :name="icon" class="!w-14 !h-14 !z-20 text-white"></AtomIcon>
			</div>
		</div> -->
		<IonCard :variant="variant" :elevation="elevation" class="card-solution rounded-xl h-full z-0 py-4 flex align-center"> 
			<div class="d-flex flex-column justify-space-between pa-4 h-full">
				<div>
					<div class="flex flex-col align-center">
						<AtomIcon :name="icon" class="!w-20 !h-20 !z-20 text-red mb-4"></AtomIcon>
				
						<div class="text-white text-2xl text-center pa-2"> 
							<span>{{ title }}</span> 
						</div>
					</div>
					<div class="text-white text-center text-md"> 
						<span>{{ description }}</span> 
					</div>
				</div>
				<div v-if="textButton" class="text-primary d-flex justify-center align-center pa-2 mt-4"> 
					<AtomButton color="red" variant="text" size="large" class="text-body-1" @click="goToPage(path)"> {{textButton}} </AtomButton>
				</div>
			</div>
		</IonCard>
	</div>
</template>
<script setup lang="ts">
	const props = defineProps({
		variant: {
			type: String,
			required: false,
			default: 'outlined',
		},

		elevation: {
			type: String,
			required: false,
			default: '',
		},

		description: {
			type: String,
			required: false,
			default: 'Description',
		},

		icon: {
			type: String,
			required: false,
			default: 'Lock',
		},

		colorIcon: {
			type: String,
			required: false,
			default: 'primary',
		},

		title: {
			type: String,
			required: false,
			default: 'Título',
		},

		textButton: {
			type: String,
			required: false,
			default: '',
		},

		colorButton: {
			type: String,
			required: false,
			default: 'secondary',
		},
    
		path: {
			type: String,
			required: false,
			default: '/',
		},
	})

  const router = useRouter()

  const goToPage = (path: any) => {
		router.push({path: path});
	}

  const classesIcon = computed(() => {
    return `text-${props.colorIcon}`
  })
</script>

<style lang="scss">
	.card-solution {
		border: thin solid $white;
	}
</style>