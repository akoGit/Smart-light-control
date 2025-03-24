<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { ref } from "vue";

import GridCard from "@/components/GridCard.vue";
import Weather from "@/components/Weather.vue";
import Chart from "@/components/Chart.vue";
import BaseButton from "@/components/BaseButton.vue";
import {
	PhMoon,
	PhSun,
	PhDesktopTower,
	PhSecurityCamera,
	PhSelection,
	PhSquaresFour,
	PhLampPendant,
	PhBroom,
	PhTelevisionSimple,
	PhPlugCharging,
} from "@phosphor-icons/vue";

import bulb from '@/assets/a.png'
import tapo from '@/assets/b.png'
import roboRock from '@/assets/g.png'
import smartTv from '@/assets/cc.png'
import dator from '@/assets/hh.png'

const isDark = useDark();
const toggleTheme = useToggle(isDark);

const activeButton = ref(null);
</script>

<template>
	<main class="p-2 max-w-[780px] sm:max-w-[80%] sm:ml-20">
		<div
			class="flex justify-between items-center mb-8 px-8 py-0"
			id="header"
		>
			<div class="flex">
				<h1
					class="font-light text-4xl dark:[#F0FBFF] mr-4 whitespace-nowrap"
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
		</div>

		<div class="flex flex-col justify-between gap-5">
			<div
				class="col-span-4 flex jusitfy-between flex-wrap gap-5 min-h-[164px] h-full"
			>
				<div
					class="rounded-sm flex justify-between grow w-[480px] min-h-[164px] p-4"
					id="weather"
				>
					<Weather />
				</div>

				<div class="rounded-sm w-[280px] h-full grow" id="chrt">
					<Chart />
				</div>
			</div>
			<div class="flex justify-between flex-wrap gap-5">
				<GridCard
					class="row-start-2 min-h-[260px]"
					:icon="PhLampPendant"
					:imageSrc="bulb"
					text="3x Ljuslampa"
				/>

				<GridCard
					class="row-start-2 min-h-[260px]"
					:icon="PhPlugCharging"
					:imageSrc="tapo"
					text="2x Smart kontakt"
				/>
				<GridCard
					class="row-start-2 min-h-[260px]"
					:icon="PhBroom"
					:imageSrc="roboRock"
					text="Roborock S8"
				/>
				<GridCard
					class="row-start-2 min-h-[260px]"
					:icon="PhTelevisionSimple"
					:imageSrc="smartTv"
					text="Smart TV"
				/>
			</div>

			<div class="col-span-4 flex jusitfy-between flex-wrap gap-5">
				<GridCard
					:icon="PhDesktopTower"
					:imageSrc="dator"
					text="Stationär dator"
					class="w-[280px] max-w-full grow"
				/>

				<div class="grow-[1] w-[480px] bg-[#1f1f1f] rounded-sm">
					<iframe
						src="https://open.spotify.com/embed/track/7JqUdmqb1aHdQzm2X04uPe?utm_source=generator&amp;theme=0"
						width="100%"
						height="260"
						frameborder="0"
						allowfullscreen=""
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
					>
					</iframe>
				</div>
			</div>
		</div>
	</main>
</template>

<style scoped>
@media (max-width: 640px) {
	main {
		max-width: 80%;
		margin-left: 5rem;
	}
}

@media (max-width: 640px) {
	#header {
		flex-direction: column;
	}
}
.bg-gradient {
	background: linear-gradient(180deg, #262a2d 0%, #7c8993 100%);
	color: #ffffff;
}

.text-inactive {
	color: #262a2db8;
}

.phosIcon {
	opacity: 0.5;
}

#chrt {
	/* background: linear-gradient(180deg, #ffffff 0%, #f0fbff 100%); */
	background: var(--grid-card-bg);
	border: var(--grid-border-col);
}

#weather {
	background: var(--grid-card-bg);
	border: var(--grid-border-col);
}
.Cctv {
	transform: rotateY(180deg);
}

.dark_mode {
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	width: 64px;
	height: 36px;

	transition: all 0.3s ease;
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
	transition: background 0.3s ease;
	width: 64px;
	height: 36px;
	border-radius: 44px;
	border-width: 1px;
	padding: 10px;
}

.icon {
	z-index: 2;
	transition: color 0.3s ease;
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
	transition: transform 0.3s ease;
	z-index: 1;
}

.dark_mode_input:checked + .dark_mode_label .slider {
	transition: transform 0.3s ease;
	transform: translateX(26px);
	background-color: #262a2d;
}

#nav_baner {
	border: var(--grid-border-col);
}
</style>
