<template>
  <AtomDialog v-model="dialog" width="400" persistent>
    <template #default>
			<div class="bg-white rounded-lg form-container d-flex flex-column justify-space-between">
				<div class="flex justify-space-between align-center">
					<h1 class="text-start text-primary text-xl"> Trabalhe Conosco </h1>
          <div class="d-flex justify-end">
            <AtomButton icon variant="text" color="primary" class="text-body-2" @click="cancel">
              <AtomIcon name="Close" class="!w-6 !h-6"></AtomIcon>
            </AtomButton>
          </div>    
				</div>
        <span class="text-lg my-6 text-black text-center">Envie o seu currículo atualizado com foto para o e-mail: </span>
        <span class="text-lg mb-6 text-red text-center font-weight-bold">gestaorh@twaequipamentos.com.br </span>
      </div>

    </template>
  </AtomDialog>
</template>

<script setup lang="ts">
	const message = defineModel('message')
	const dialog = defineModel('dialog')
	const emit = defineEmits(["save", "cancel"]);

  onMounted(() => {

  })

	const cancel = () => {
		emit("cancel");
	}
</script>

<style lang="scss">
.color-select-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.color-preview {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #000;
}

.v-list-item__content {
	display: flex;
	flex-direction: row-reverse;
	justify-content:start;
}
</style>