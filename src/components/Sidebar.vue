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
	<nav class="sidebar">
		<ul class="flex flex-col gap-8 ml-[1.4rem] h-full">
			<li class="flex gap-4 items-center">
				<a class="flex gap-4 items-center cursor-pointer">
					<PhHouse
					:size="24"
					weight="duotone"
					class="fill-[var(--icon-col)]"
					/>
					<span class="label">House</span>
				</a>
			</li>
			<li class="flex gap-4 items-center">
				<a class="flex gap-4 items-center cursor-pointer">
					<PhDotsNine
					:size="24"
					weight="duotone"
					class="fill-[var(--icon-col)]"
					/>
					<span class="label">Apps</span>
				</a>
			</li>
			<li class="flex gap-4 items-center">
				<a class="flex gap-4 items-center cursor-pointer">
					<PhUserCircle
					:size="24"
					weight="duotone"
					class="fill-[var(--icon-col)]"
					/>
					<span class="label">User</span>
				</a>
			</li>
			<li class="flex gap-4 items-center">
				<a class="flex gap-4 items-center cursor-pointer">
					<PhLock
					:size="24"
					weight="duotone"
					class="fill-[var(--icon-col)]"
					/>
					<span class="label">Lock</span>
				</a>
			</li>


			<li class="flex gap-4 items-center" style="margin-top:auto;">
				<a class="flex gap-4 items-center cursor-pointer">
					<PhQuestion
					:size="24"
					weight="duotone"
					class="fill-[var(--icon-col)]"
					/>
					<span class="label">Questions</span>
				</a>
			</li>

		</ul>

	</nav>
</template>

<style scoped>
.sidebar {
	position: fixed;
	left: 0;
	top: 0;
	height: 100vh;
	width: 80px;
	display: flex;
	justify-content: space-between;
	/* align-items: center; */
	flex-direction: column;
	padding: 2rem 0.5rem;
	background-color: var(--nav-bg);
	z-index: 2;
	transition:
		background-color 0.3s,
		color 0.3s,
		width 0.15s cubic-bezier(0.4, 0, 0.2,1);
	overflow-x: hidden;
}

.sidebar:hover {
	width: 160px;
}

.label {
	opacity: 0;
	white-space: nowrap;
	transition: opacity 0.3s;
	font-size:.9rem;
}

.sidebar:hover .label {
	opacity: 1;
}
</style>
