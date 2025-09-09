<template>
  <v-col v-for="(item, index) in items" :key="index" cols="6">
    <AtomCard class="h-14 d-flex align-center justify-space-between cursor-pointer" :class="classesCard(item.value)" @click="selectOption(item.value)"> 
        <div class="d-flex align-center">
          <div class="d-flex align-center justify-center choose-card__point">
            <div v-if="item.value === currentItem" class="rounded-circle border-sm h-3 w-3 bg-primary"></div>
            <!-- <div v-if="item.value === currentPaymentMethod"></div> -->
          </div>
          <div class="text-body-1 text-grey300 ml-2">{{ item.name }}</div>
        </div>
        <div class="d-flex justify-space-between align-center ml-2">
          <div>
            <AtomIcon filled class="!h-8 !w-8" :name="item.icon" />
          </div>
        </div>
    </AtomCard>
  </v-col>
</template>
<script setup lang="ts">
	const props = defineProps({
		items: {
			type: Array,
			required: false,
			default: () => ([])
		},

    currentItem: {
      type: String,
      required: false,
      default: ''
    }
	})

  const emit = defineEmits(["setCurrentItem"]);

  const classesCard = (item) => {
    return item == props.currentItem ? "choose-card__selected" : ""
  }

  // const setCurrentPaymentMethod = (value) => {
  
  // }

  const selectOption = (value: any) => {
    emit("setCurrentItem", value)
  }


</script>

<style lang="scss">
	.choose-card {
    &__point {
      @apply rounded-full h-5 w-5;
      border: 1px solid $grey-300;
    }

    &__selected {
      border: 1px solid $primary!important;
    }
  }
</style>