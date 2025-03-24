<script setup>
import {
	PhHouse,
	PhDotsNine,
	PhUserCircle,
	PhLock,
	PhQuestion,
} from "@phosphor-icons/vue";
</script>

<template>
	<nav class="">
		<div class="flex flex-col gap-8">
			<PhHouse
				:size="24"
				color="#262a2d"
				weight="duotone"
				class="cursor-pointer fill-[var(--icon-col)]"
			/>
			<PhDotsNine
				:size="24"
				color="#262a2d"
				weight="duotone"
				class="cursor-pointer fill-[var(--icon-col)]"
			/>
			<PhUserCircle
				:size="24"
				color="#262a2d"
				weight="duotone"
				class="cursor-pointer fill-[var(--icon-col)]"
			/>
			<PhLock
				:size="24"
				color="#262a2d"
				weight="duotone"
				class="cursor-pointer fill-[var(--icon-col)]"
			/>
		</div>

		<PhQuestion
			:size="24"
			color="#262a2d"
			weight="duotone"
			class="cursor-pointer fill-[var(--icon-col)]"
		/>
	</nav>
</template>

<style scoped>
nav {
	position: absolute;
	left: 0;
	top: 0;
	min-height: 100%;
	width: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	padding: 2rem;
	background-color: var(--nav-bg);
	z-index: 2;
}
</style>
