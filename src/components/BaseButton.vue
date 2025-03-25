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

<style scoped>
@media (max-width: 510px) {
	button {
		font-size: 0.7em;
		padding-left: 0.325rem;
		padding-right: 0.325rem;
	}
}
</style>
