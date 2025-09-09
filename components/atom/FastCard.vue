<template>
	<IonCard :variant="variant" :elevation="elevation" class="atom-fast-card rounded-lg"> 
		<div class="d-flex justify-space-between h-[90px]">
      <div class="d-flex justify-center align-center w-28 h-auto bg-primary"> 
        <AtomIcon :name="icon" class="text-white !w-10 !h-10" :class="classesIcon"></AtomIcon>
      </div>
      <div class="text-md flex justify-center items-center w-full text-grey500">
        {{ title }}
      </div>
		</div>
	</IonCard>
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
	.atom-fast-card {
		border: thin solid $grey-150!important;
	}
</style>