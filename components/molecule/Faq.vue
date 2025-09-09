<template>
  <div>
    <h2 class="text-3xl text-center mb-6 text-primary"> {{ $t('faq.title') }}</h2>
    <AtomAccordion :items="items" v-model="model" />
  </div>
</template>

<script setup lang="ts">
  const model = ref()
  const props = defineProps({
		items: {
			type: Array,
			required: false,
			default: () => ([])
		}
	})
</script>