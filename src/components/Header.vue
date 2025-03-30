<script setup>
import { ref, onMounted, watch } from "vue";
import BaseButton from "@/components/BaseButton.vue";
import {
	PhMoon,
	PhSun,
	PhSecurityCamera,
	PhSelection,
	PhSquaresFour,
} from "@phosphor-icons/vue";

const isDark = ref(localStorage.getItem("theme") === "dark");

const toggleTheme = () => {
	isDark.value = !isDark.value;

	document.documentElement.classList.toggle("dark", isDark.value);

	localStorage.setItem("theme", isDark.value ? "dark" : "light");
};

onMounted(() => {
	if (isDark.value) {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}
});

watch(isDark, (newVal) => {
	document.documentElement.classList.toggle("dark", newVal);
});
const activeButton = ref(null);
</script>

<template>
	<div class="flex justify-between items-center mb-14 px-8 py-0" id="header">
		<div class="flex">
			<h1
				class="font-light text-4xl dark:[#F0FBFF] mr-4 whitespace-nowrap"
				id="header_text"
			>
				Hej, god morgon
			</h1>
			<h1 class="font-medium text-4xl dark:[#F0FBFF]">Kim</h1>
		</div>

		<div class="dark_mode">
			<input
				class="dark_mode_input"
				type="checkbox"
				id="darkmode-toggle"
				v-model="isDark"
				@click="toggleTheme"
			/>
			<label class="dark_mode_label" for="darkmode-toggle">
				<div class="icon sun">
					<PhSun :size="16" />
				</div>
				<div class="icon moon">
					<PhMoon :size="16" weight="duotone" />
				</div>
				<div class="slider"></div>
			</label>
		</div>
	</div>

	<div class="p-[10px] flex gap-2 mb-5 rounded-sm" id="nav_baner">
		<RouterLink to="/Overview">
			<BaseButton
				:is-active="activeButton === 1"
				@click="activeButton = 1"
			>
				<template #icon>
					<PhSquaresFour
						class="fill-current"
						:size="24"
						weight="duotone"
					/>
				</template>
				Översikt
			</BaseButton>
		</RouterLink>

		<RouterLink to="/FloorPlan">
			<BaseButton
				:is-active="activeButton === 2"
				@click="activeButton = 2"
			>
				<template #icon>
					<PhSelection
						class="fill-current"
						:size="24"
						weight="duotone"
					/>
				</template>
				Planlösning
			</BaseButton>
		</RouterLink>
		<RouterLink to="/Security">
			<BaseButton
				:is-active="activeButton === 3"
				@click="activeButton = 3"
			>
				<template #icon>
					<PhSecurityCamera
						class="fill-current Cctv"
						:size="24"
						weight="duotone"
					/>
				</template>
				Säkerhet
			</BaseButton>
		</RouterLink>
	</div>
</template>

<style scoped>
@media (max-width: 640px) {
	#header {
		flex-direction: column;
	}
}

@media (max-width: 460px) {
	#header_text {
		font-size: 1.6rem;
	}
}

.bg-gradient {
	background: linear-gradient(180deg, #262a2d 0%, #7c8993 100%);
	color: #ffffff;
}

.text-inactive {
	color: #262a2db8;
}

.dark_mode {
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	width: 64px;
	height: 36px;
}

.dark_mode_input {
	display: none;
}

.dark_mode_label {
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #ffffff;
	cursor: pointer;
	position: relative;
	width: 64px;
	height: 36px;
	border-radius: 44px;
	border-width: 1px;
	padding: 10px;
	transition: background 0.3s ease-in-out;
}

.icon {
	z-index: 2;
	transition: color 0.3s ease;
	transition: opacity 0.3s ease-in-out;
}

.sun {
	color: #ffffff;
}

.moon {
	color: #262a2d3d;
}

.dark_mode_input:checked + .dark_mode_label .sun {
	color: #7f8c8d;
}

.dark_mode_input:checked + .dark_mode_label .moon {
	color: #ffffff;
}

.slider {
	content: "";
	position: absolute;
	left: 4px;
	width: 28px;
	height: 28px;
	background-color: #f99f42;
	border-radius: 34px;
	transition: all 0.3s ease;
	z-index: 1;
}

.dark_mode_input:checked + .dark_mode_label .slider {
	transition: all 0.3s ease;
	transform: translateX(26px);
	background-color: #262a2d;
}

#nav_baner {
	border: var(--grid-border-col);
}

@media (max-width: 535px) {
	#nav_baner > button > svg {
		width: 18px;
	}
}
</style>
