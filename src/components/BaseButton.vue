<script setup>
defineProps({
	isActive: Boolean,
});
</script>
<template>
	<button
		:class="{
			'bg-gradient divide-btnTextCol text-white': isActive,
			'bg-transparent divide-btnTextCol': !isActive,
		}"
		:style="{
			background: isActive ? 'var(--base-btn-grad)' : 'transparent',
		}"
		class="flex items-center rounded-sm gap-1 px-2.5 py-2"
	>
		<slot name="icon" />
		<slot />
	</button>
</template>

<style scoped></style>
