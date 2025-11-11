<template>
  <div class="gallery-flex">
    <div
      v-for="(img, index) in images"
      :key="index"
      class="gallery-item"
      :style="itemStyle"
      @click="openImage(img)"
    >
      <AtomImage
        :image-url="img"
        cover
        :height="height"
        width="100%"
      />
    </div>

    <!-- Modal (lightbox) -->
    <v-dialog v-model="dialog" persistent>
      <v-card class="lightbox-card">
        <v-btn icon class="close-btn" @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-img :src="selectedImage" contain class="lightbox-image" />
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  initialItemsPerLine: {
    type: Number,
    default: 4
  },
  height: {
    type: Number,
    default: 350
  },
})

const dialog = ref(false)
const selectedImage = ref(null)

function openImage(img) {
  selectedImage.value = img
  dialog.value = true
}

// Calcula o flex-basis e max-width baseado na prop inicial
const itemStyle = computed(() => {
  const percent = 100 / props.initialItemsPerLine
  return {
    flex: `1 1 calc(${percent}% - 12px)`,
    maxWidth: `calc(${percent}% - 12px)`
  }
})
</script>

<style scoped>
/* Container flex */
.gallery-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: start;
  width: 100%;
}

/* Itens da galeria */
.gallery-item {
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
  transition: 0.2s ease;
}

.gallery-item:hover {
  opacity: 0.85;
  transform: scale(1.02);
}

/* Responsividade */
@media (max-width: 992px) { /* até lg: 2 por linha */
  .gallery-item {
    flex: 1 1 calc(50% - 12px) !important;
    max-width: calc(50% - 12px) !important;
  }
}

@media (max-width: 576px) { /* até sm: 1 por linha */
  .gallery-item {
    flex: 1 1 100% !important;
    max-width: 100% !important;
  }
}

/* Modal */
.lightbox-card {
  position: relative;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: none;
}

.lightbox-image {
  max-height: 90vh;
  object-fit: cover;
  border-radius: 18px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
