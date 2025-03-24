<script setup>
import { PhSun, PhCircle } from "@phosphor-icons/vue";
</script>

<template>
	<div class="flex flex-col justify-between text-left">
		<h3>Manda, 10 mars · 08:12 AM</h3>
		<div class="flex items-center justify-start gap-2">
			<PhSun :size="40" class="fill-sunIcon" weight="duotone" />
			<span class="text-5xl">39</span><span class="faren">°F°C</span>
		</div>
	</div>

	<div class="flex flex-col items-end text-right">
		<span class="text-xs text-spanTextCol font-medium">LKI — 67</span>
		<span class="text-xs text-spanTextCol font-medium"
			>Fuktighet — 80%</span
		>
		<span class="text-xs text-spanTextCol font-medium">Nederbörd — 8%</span>
		<span class="text-xs text-spanTextCol font-medium">Vind — 14 kph</span>
		<span class="circ">
			<PhCircle :size="16" class="fill-iconColor" weight="light"
		/></span>
	</div>
</template>

<style scoped>
.circ {
	margin-block: auto 0;
}

.faren {
	margin-block: 0 auto;
}
</style>
