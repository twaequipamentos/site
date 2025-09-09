<template>
  <div class="w-full h-auto min-h-[450px] pa-10 d-flex align-center" :class="backgroundClasses">
    <v-row class="h-full d-flex">
      <v-col cols="12" md="6" lg="4" v-for="item in items" :key="item">
        <div class="d-flex">
          <AtomIcon :name="item.icon" class="!w-6 !h-6" :class="iconClasses" />
          <div class="text-lg ml-3">{{ item.title }}</div>
        </div>
        <div class="text-sm mt-2">
          {{ item.description }}
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
		items: {
			type: Array,
			required: false,
			default: () => ([])
		},

		colorBackground: {
			type: String,
			required: false,
			default: 'primary'
		},

		colorIcon: {
			type: String,
			required: false,
			default: 'secondary'
		},
	})

  const backgroundClasses = computed(() => {
    return props.colorBackground ? `bg-${props.colorBackground}` : ''
  })
  
  const iconClasses = computed(() => {
    return props.colorIcon ? `text-${props.colorIcon}` : ''
  })
</script>

