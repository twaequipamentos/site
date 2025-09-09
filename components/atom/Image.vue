<template>
	<IonImage :src="imageUrl" :aspect-ratio="aspectRatio" :lazy-src="lazySrc" :height="height" :width="width" />
</template>

<script setup>
	const props = defineProps({
		imageUrl: {
			type: String,
			required: true,
			default: '',
		},
    
		lazySrc: {
			type: String,
			required: false,
			default: '',
		},

		aspectRatio: {
			type: String,
			required: false,
			default: '',
		},

		height: {
			type: Number,
			required: true,
			default: '',
		},

		width: {
			type: Number,
			required: true,
			default: '',
		},
	})
</script>
