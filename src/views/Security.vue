<script setup>
import { ref } from "vue";
import {
	PhSpeakerHigh,
	PhSpeakerHifi,
	PhAperture,
	PhPersonSimpleRun,
	PhArrowsCounterClockwise,
	PhBroadcast,
	PhRecord
} from "@phosphor-icons/vue";

const icon_size = 54;
const rooms = ['All Rooms', 'Bedroom', 'Livingroom', 'Kitchen', 'Hall']
const selectedRoom = ref('All Rooms')
</script>
<template>

	<div class="w-[780px] max-w-full mt-8">
		<div class='flex justify-between flex-wrap p-2 mb-4 w-full text-spanTextCol relative rooms_'>
			<h1 v-for="room in rooms" :key="room" class="cursor-pointer room-item"
				:class="{ active: selectedRoom === room }" @click="selectedRoom = room">
				{{ room }}
			</h1>
		</div>
		<div class="flex items-center gap-4 p-4 flex-wrap security_wrapper">
			<div class="rounded-sm h-[18rem] grow relative video_elem">
				<div class="flex items-center gap-2 absolute top-1 left-3 rounded-sm py-1 px-1">
					Cam 1
					<PhRecord :size="20" color="#eb0600" weight="fill" />
				</div>
				<video class="w-full h-full" width="320" height="240"></video>
			</div>

			<div class="grow h-full flex flex-col items-center justify-center">
				<h1 class="">Main Room Camera</h1>
				<div class="grid grid-cols-3 p-2">
					<div class="flex flex-col items-center p-3 cursor-pointer">
						<PhSpeakerHigh :size="icon_size" weight="duotone" />
						<span class="text-xs text-center">Sound On</span>
					</div>

					<div class="flex flex-col items-center p-3 cursor-pointer">
						<PhSpeakerHifi :size="icon_size" weight="duotone" />
						<span class="text-xs text-center">Intercom</span>
					</div>

					<div class="flex flex-col items-center p-3 cursor-pointer">
						<PhAperture :size="icon_size" weight="duotone" />
						<span class="text-xs text-center">Screenshot</span>
					</div>
					<div class="flex flex-col items-center p-3 cursor-pointer">
						<PhPersonSimpleRun :size="icon_size" weight="duotone" />
						<span class="text-xs text-center">Motion Detect</span>
					</div>
					<div class="flex flex-col items-center p-3 cursor-pointer">
						<PhArrowsCounterClockwise :size="icon_size" />
						<span class="text-xs text-center">360 View</span>
					</div>
					<div class="flex flex-col items-center p-3 cursor-pointer">
						<PhBroadcast :size="icon_size" weight="duotone" />
						<span class="text-xs text-center">Infrared</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.security_wrapper {
	background: var(--grid-card-bg);
	border: var(--grid-border-col);
	border-radius: 4px;
	transition:
		background-color 0.3s,
		box-shadow 0.3s;
}

.video_elem {
	border: var(--grid-border-col);
}

.rooms_ .room-item {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0.5rem 1rem;
	text-align: center;
	cursor: pointer;
	transition: color .3s;
}

.rooms_ .room-item.active::before {
	content: '●';
	position: absolute;
	top: 70%;
}
</style>
