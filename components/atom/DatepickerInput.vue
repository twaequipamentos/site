<template>
 <!-- <AtomTextfield 
    v-model="model" 
    type="date" 
    :label="$t('value')" 
    :rules="rules" 
    class="mb-2" 
    disabled
  /> -->
  <div class="datepicker-input d-flex align-center" @click="openDatepicker">
    <SvgoCalendar class="text-grey500 datepicker-input__icon" />
    <span>{{ model }}</span>
  </div>
  <div class="datepicker-input__calendar">
    <AtomDatepicker
      v-if="showDatepicker"
      v-model="model"
    ></AtomDatepicker>
  </div>
</template>

<script setup lang="ts">
  const model = defineModel();
  const showDatepicker = ref(false)

  const openDatepicker = () => {
    showDatepicker.value = !showDatepicker.value
  }
</script>

<style lang="scss">
  .datepicker-input {
    border: 1px solid $grey-300;
    height: 48px;
    border-radius: 5px;
    padding: 10px;

    &__icon {
      width: 22px;
      height: 22px;
    }

    &__calendar {
      z-index: 999;
      // top: -80px;
      position: fixed;
    }
  }
</style>