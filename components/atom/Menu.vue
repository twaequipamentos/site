<template>
  <IonMenu>
    <template v-slot:activator="{ props }">
      <slot name="activator" :props="props">
        <AtomButton
          color="primary"
          v-bind="props"
          icon
          variant="text"
          density="compact"
          class="ml-2"
        >
          <SvgoArrowDown filled v-bind="props" class="dropdown-account" />
        </AtomButton>
      </slot>
    </template>
    <template #content>
      <slot name="content">
        
      </slot>
    </template>
  </IonMenu>
</template>

<script setup lang="ts">
  const { t } = useI18n()
	const  itemsMenu = [
		{ title: t('edit') },
		{ title: t('delete') },
	]
</script>