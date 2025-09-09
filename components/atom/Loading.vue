<template>
  <div class="d-flex flex-column align-center">
    <AtomIcon :name="logoName" filled class="!w-full !h-auto max-w-[200px] loading-component opacity-[.47] mb-10" />
    <span class="text-md text-grey300"> {{ textLoading }}</span>
  </div>
</template>

<script setup lang="ts">
  const { t } = useI18n()
	const props = defineProps({
		text: {
			type: String,
			required: false,
			default: '',
		},
    invert: {
      type: Boolean,
      require: false,
      default: false
    }
	})

  const logoName = computed(() => {
    return props.invert ? 'LogoIconWhite' : 'LogoIconGreyMedium'
  })

  const textLoading = computed(() => {
    return props.text ? props.text : t('loadingData')
  })
</script>

<style lang="scss">
.loading-component {
  animation: rotate 2s linear infinite;
}

// @keyframes rotate {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }

.loading-component {
  animation: pulse 1s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
</style>