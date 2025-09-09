<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

const props = defineProps({
  images: {
    type: Array,
    required: false,
    default: () => ([])
  },
  height: {
    type: Number,
    required: false,
    default: 900
  },
  itemsToShow: {
    type: Number,
    required: false,
    default: 1
  },
  gap: {
    type: Number,
    required: false,
    default: 1
  },
  autoplay: {
    type: Number,
    required: false,
    default: 4000
  },
  wrapAround: {
    type: Boolean,
    required: false,
    default: true
  }
})

const config = ref({
  height: props.height,
  itemsToShow: props.itemsToShow,
  gap: props.gap,
  autoplay: props.autoplay,
  wrapAround: props.wrapAround,
})
</script>

<template>
  <Carousel v-bind="config">
    <Slide v-for="image in images" :key="image.id">
      <img :src="image.url" alt="image" />
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<style>
:root {
  /* background-color: #242424; */
}

.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
  height: 100%;
}

.carousel__prev {
  margin-left: 10px;
}

.carousel__next {
  margin-right: 10px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
