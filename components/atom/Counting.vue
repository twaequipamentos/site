<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  targetNumber: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    default: 'black'
  },
  plus: {
    type: Boolean,
    default: false
  },
  duration: {
    type: Number,
    default: 3000
  }
})

const count = ref(0)
const countEl = ref(null)
let animationFrameId = null
let observer = null

function animateCount(timestamp, startTime) {
  if (!startTime) startTime = timestamp
  const elapsed = timestamp - startTime
  const progress = Math.min(elapsed / props.duration, 1)
  count.value = Math.floor(progress * props.targetNumber)

  if (progress < 1) {
    animationFrameId = requestAnimationFrame(ts => animateCount(ts, startTime))
  } else {
    count.value = props.targetNumber
  }
}

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        animationFrameId = requestAnimationFrame(animateCount)
        observer.disconnect()
      }
    },
    { threshold: 0.5 }
  )

  if (countEl.value) {
    observer.observe(countEl.value)
  }
})

onBeforeUnmount(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
  if (observer) observer.disconnect()
})
</script>

<template>
  <div
    ref="countEl"
    :style="{ color: props.color }"
    class="text-5xl font-weight-bold"
    v-bind="$attrs"
  >
    <span v-if="props.plus">+</span>{{ count }}
  </div>
</template>