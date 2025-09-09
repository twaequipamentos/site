<template>
	<IonDialog
		v-model="dialog"
		:width="width"
		:min-width="minWidth"
        :persistent="persistent"
	>
		<template #default>
			<div class="bg-white rounded-lg pa-4">
				<slot name="default" />
			</div>
		</template>
	</IonDialog>
</template>

<script setup lang="ts">
    const dialog = defineModel();
    const props = defineProps({
        width: {
            type: String,
            required: false,
            default: '600',
        },

        minWidth: {
            type: String,
            required: false,
            default: '300',
        },

        persistent: {
            type: Boolean,
            required: false,
            default: false,
        },
    })
</script>