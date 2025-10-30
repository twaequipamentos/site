<template>
  <v-row class="!m-0">
    <v-col cols="12" sm="6" md="4" lg="3" v-for="(item, index) in items.slice(0, limit)" :key="index" class="h-auto">
      <AtomCardSolution 
        :icon="item.icon"
        :title="item.title"
        :description="item.description"
        :path="item.path"
        :textButton="item.textButton"
        class="card-solutions"
        :data-hover="index"
      />
    </v-col>
  </v-row>
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

<style lang="scss">
.card-solutions {
  position: relative;
  // background-image: url("assets/images/wave-tech.jpg");
  // background-position: center;
  // background-repeat: repeat;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

/* camada inicial - Mario com transparência */
.card-solutions::before {
  content: "";
  position: absolute;
  inset: 0;
  background: 
    linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), /* opacidade constante */
  url("assets/images/wave-tech.jpg");
      background-position: center;
  background-size: 350%;
  zoom: 4;
  background-repeat: no-repeat;
  z-index: 0;
  transition: transform 0.6s ease, filter 0.6s ease, opacity 0.6s ease;
}

/* camada hover - imagens diferentes, com transparência */
.card-solutions::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0;
  transform: scale(1.2) rotate(-2deg);
  filter: blur(6px);
  transition: all 0.3s ease;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* hover comum */
.card-solutions:hover::after {
  opacity: 1;
  transform: scale(1) rotate(0deg);
  filter: blur(0);
}

.card-solutions:hover::before {
  opacity: 0;
  transform: scale(0.95);
  filter: blur(2px);
}

/* imagens diferentes para cada card usando data-hover, com transparência via linear-gradient */
.card-solutions[data-hover="0"]::after {
  background: 
    linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
    url("assets/images/nr6.png") center/cover no-repeat;
}

.card-solutions[data-hover="1"]::after {
  background: 
    linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
    url("assets/thumbnail/nr10.jpg") center/cover no-repeat;
}

.card-solutions[data-hover="2"]::after {
  background: 
    linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
    url("assets/thumbnail/nr11.jpg") center/cover no-repeat;
}
.card-solutions[data-hover="3"]::after {
  background: 
    linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
    url("assets/thumbnail/nr12.jpg") center/cover no-repeat;
}
.card-solutions[data-hover="4"]::after {
  background: 
    linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
    url("assets/thumbnail/nr18.jpg") center/cover no-repeat;
}
.card-solutions[data-hover="5"]::after {
  background: 
    linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
    url("assets/thumbnail/nr33.jpg") center/cover no-repeat;
}
.card-solutions[data-hover="6"]::after {
  background: 
    linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
    url("assets/thumbnail/nr34.jpg") center/cover no-repeat;
}
.card-solutions[data-hover="7"]::after {
  background: 
    linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
    url("assets/thumbnail/nr35.jpg") center/cover no-repeat;
}

/* repita até 8 cards */

/* texto sempre acima das imagens */
.card-solutions * {
  position: relative;
  z-index: 1;
  text-align: center;
}

</style>