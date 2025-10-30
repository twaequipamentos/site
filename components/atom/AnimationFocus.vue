<template>
  <div
    ref="sectionRef"
    :class="[
      'transition-all duration-700 ease-out opacity-0 transform',
      directionClass,
      { 'opacity-100 translate-x-0': isVisible }
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const props = defineProps({
  direction: {
    type: String,
    default: 'left', // 'left' ou 'right'
  },
})

const sectionRef = ref(null)
const isVisible = ref(false)

const directionClass = computed(() =>
  props.direction === 'left'
    ? '-translate-x-10'
    : 'translate-x-10'
)

let observer

onMounted(() => {
  observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})

onBeforeUnmount(() => {
  if (observer && sectionRef.value) observer.unobserve(sectionRef.value)
})
</script>

<style scoped>
/* Você pode ajustar distâncias ou usar utilitários do Tailwind */
</style>
