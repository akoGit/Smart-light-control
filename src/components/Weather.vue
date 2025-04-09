<script setup>
import { PhSun, PhCircle } from "@phosphor-icons/vue";
import { useDateFormat, useNow } from "@vueuse/core";

const formatted = useDateFormat(useNow(), "dddd, D MMM · HH:mm A");
</script>

<template>
	<div class="flex flex-col justify-between text-left">
		<h3 class="text-balance">{{ formatted }}</h3>
		<div class="flex items-center justify-start gap-2">
			<PhSun :size="40" class="fill-sunIcon" weight="duotone" />
			<span class="text-5xl">39</span><span class="faren">°F°C</span>
		</div>
	</div>

	<div class="flex flex-col justify-between items-end text-right">
		<div class="flex flex-col gap-[10px] weather_stats">
			<span class="text-xs text-spanTextCol font-medium">LKI — 67</span>
			<span class="text-xs text-spanTextCol font-medium"
				>Fuktighet — 80%</span
			>
			<span class="text-xs text-spanTextCol font-medium"
				>Nederbörd — 8%</span
			>
			<span class="text-xs text-spanTextCol font-medium"
				>Vind — 14 kph</span
			>
		</div>

		<span>
			<PhCircle :size="8" class="fill-iconColor" weight="bold"
		/></span>
	</div>
</template>

<style scoped>
.faren {
	margin-block: 0 auto;
}
@media (max-width: 460px) {
	.weather_stats > span {
		font-size: 0.6rem;
		white-space: nowrap;
	}
}
</style>
