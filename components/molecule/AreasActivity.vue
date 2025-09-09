<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" v-for="item in items.slice(0, limit)" :key="item">
        <AtomFastCard 
          :icon="item.icon"
          :title="item.title"
        />
      </v-col>
    </v-row>
    <!-- <div class="text-center my-10">
      <AtomButton color="green" size="large" class="text-body-2" @click="openWhatsApp">
        <AtomIcon name="Whatsapp" class="!w-6 !h-6 mr-2"></AtomIcon>
        {{$t('talkToUs')}} </AtomButton>
    </div> -->
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
		items: {
			type: Array,
			required: false,
			default: () => ([]),
    },

		limit: {
			type: Number,
			required: false,
    }
	})
</script>