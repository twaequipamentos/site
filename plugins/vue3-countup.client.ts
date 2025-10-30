import { defineNuxtPlugin } from '#app'
import CountUp from 'vue3-countup'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('CountUp', CountUp)
})
