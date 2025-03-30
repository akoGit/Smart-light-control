<script setup>
// import { useDark, useToggle } from "@vueuse/core";
import GridCard from "@/components/GridCard.vue";
import Weather from "@/components/Weather.vue";
import Chart from "@/components/Chart.vue";
import {
	PhDesktopTower,
	PhLampPendant,
	PhBroom,
	PhTelevisionSimple,
	PhPlugCharging,
} from "@phosphor-icons/vue";

import bulb from "@/assets/a.png";
import tapo from "@/assets/b.png";
import roboRock from "@/assets/g.png";
import smartTv from "@/assets/cc.png";
import dator from "@/assets/hh.png";
</script>

<template>
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

			<div class="rounded-sm w-[280px] h-full grow p-2" id="chrt">
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
</template>

<style scoped>
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
</style>
