<script setup>
import {
	PhBed,
	PhBookOpenText,
	PhCouch,
	PhToilet,
	PhCookingPot,
	PhMinus,
} from "@phosphor-icons/vue";
// import floorPLanPng from "@/public/better-floor.png";
// console.log("Floor plan path:", florPlanPng);
</script>

<template>
	<div class="max-w-[780px] w-full mt-8 relative">
		<img src="/better-floor.png" class="w-full h-auto max-w-full" />

		<span class="planIcon bed"
			><PhBed :size="24" weight="duotone" color="#000000"
		/></span>
		<span class="planIcon book"
			><PhBookOpenText :size="24" weight="duotone" color="#000000"
		/></span>
		<span class="planIcon couch"
			><PhCouch :size="24" weight="duotone" color="#000000"
		/></span>
		<span class="planIcon toilet"
			><PhToilet :size="24" weight="duotone" color="#000000"
		/></span>
		<span class="planIcon pot"
			><PhCookingPot :size="24" weight="duotone" color="#000000"
		/></span>
		<span class="planIcon minus"
			><PhMinus :size="24" weight="duotone" color="#000000"
		/></span>
	</div>
</template>

<style scoped>
.planIcon {
	position: absolute;
	width: 48px;
	height: 48px;
	background-color: #ffffff;
	/* background: var(--grid-card-bg); */
	border-radius: 44px;
	display: flex;
	justify-content: center;
	align-items: center;
}
@media (max-width: 820px) {
	.planIcon {
		width: 30px;
		height: 30px;
	}
	.planIcon > svg {
		width: 18px;
	}
}

.bed {
	top: 14%;
	left: 26%;
}

.book {
	top: 32%;
	left: 12%;
}

.couch {
	top: 38%;
	left: 47%;
}

.toilet {
	top: 70%;
	left: 52%;
}

.minus {
	top: 78%;
	left: 68%;
}
.pot {
	top: 60%;
	left: 83%;
}
</style>
