<template>
  <div ref="containerDropdown">
    <div @click="changeStatusMenu" class="cursor-pointer">
      <AtomButton icon variant="text" density="compact"> 
        <AtomIcon :name="menuIcon" class="text-grey300 dropdown__icon" />
      </AtomButton>
    </div>
    <Transition>
      <div v-if="statusMenu" class="dropdown__content py-1">
        <div v-for="(option, index) in options" :key="index" class="dropdown__item cursor-pointer" @click="selectedOption(option)">
          <div class="dropdown__info d-flex align-center justify-space-between">
            <span class="text-grey500">{{ option.name }}</span>
            <AtomIcon v-if="option.icon" :name="option.icon" class="text-grey300" />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import { onClickOutside } from '@vueuse/core'
  const emit = defineEmits(["selectedOption"]);
  
  const props = defineProps({
		menuIcon: {
			type: String,
			required: false,
			default: 'MoreOptions',
    },

		options: {
			type: Array,
			required: false,
			default: () => ([])
    },
	})

  const statusMenu = ref(false)
  const containerDropdown = ref()

  let stopClickOutside: () => void

  const changeStatusMenu = () => {
    statusMenu.value = !statusMenu.value
  }

  const selectedOption = (option: any) => {
    emit('selectedOption', option.action)
    changeStatusMenu()
  }

  watch(
		() => statusMenu.value,
		(value) => {
			if (value) {
				stopClickOutside = onClickOutside(containerDropdown, changeStatusMenu)
			} else if (stopClickOutside) {
				stopClickOutside()
			}
		}
	)
</script>

<style lang="scss">
.dropdown {
  &__content {
    z-index: 9999;
    position: absolute;
    min-width: 120px;
    max-width: 300px;
    background: $white;
    border: 1px solid $primary-light;
    border-radius: 5px;
    // padding: 10px;
    margin-left: -95px;
  }

  &__item {
    &:hover {
      background: $grey-100;
    }
    
    &:active {
      background: $grey-200;
    }
  }

  &__info {
    padding: 10px;
  }

  &__icon {
		width: 25px;
		height: 25px;
	}
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>