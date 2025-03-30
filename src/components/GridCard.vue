<script setup>
import SwitchV from "@/components/SwitchV.vue";
import { defineProps } from "vue";

const props = defineProps({
	icon: {
		type: Object,
		required: true,
	},
	imageSrc: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div
		class="flex flex-col grow justify-between align-center items-start gap-2 p-4 w-[180px]"
		id="grid-card"
	>
		<div class="flex justify-between w-full">
			<component
				:is="icon"
				color="#262A2D3D"
				weight="duotone"
				class="fill-gridIconCol"
				size="24"
			/>
			<SwitchV />
		</div>

		<div class="flex justify-center w-full">
			<img :src="imageSrc" class="w-[117px] h-[117px] object-cover" />
		</div>

		<span>{{ text }}</span>
	</div>
</template>

<style scoped>
#grid-card {
	background: var(--grid-card-bg);
	border: var(--grid-border-col);
	border-radius: 4px;
	transition:
		background-color 0.3s,
		box-shadow 0.3s;
}

#grid-card:hover {
	background: var(--grid-card-hov);
	box-shadow: var(--grid-card-shadow);
	transition: all 0.3s;
}
</style>
