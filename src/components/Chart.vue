<script setup>
import Chart from "chart.js/auto";
import { onMounted } from "vue";
const labels = ["Son", "Man", "Tis", "Ons", "Tor", "Fre", "Lor"];
const data = {
	labels: labels,
	datasets: [
		{
			data: [50, 75, 30, 100, 75, 25, 30],
			fill: false,
			borderColor: "rgba(121, 150, 167, 0.5)",
			tension: 0.4,
		},
	],
};
const config = {
	type: "line",
	data: data,
	options: {
		responsive: true,
		scales: {
			x: {
				border: {
					display: false,
				},
				grid: {
					display: false,
				},
			},
			y: {
				beginAtZero: true,
				max: 100,
				ticks: {
					stepSize: 25,
					count: 5,
				},
				grid: {
					display: true,
				},
			},
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				backgroundColor: "rgba(121, 150, 167, 1)",
				bodyAlign: "top",
				boxWidth: 39,
				xAlign: "center",
				yAlign: "bottom",
				callbacks: {
					label: function (context) {
						return context.parsed.y + " kw";
					},
					title: function () {
						return "";
					},
				},
				displayColors: false,
			},
			interaction: {
				mode: "point",
				axis: "y",
			},
		},
	},
};
onMounted(() => {
	const myChart = new Chart(document.getElementById("myChart"), config);
});
</script>
<template>
	<h1 class="ml-1.5 text-sm text-spanTextCol mb-2">Energiförbrukning</h1>
	<canvas id="myChart" class="w-full h-full"></canvas>
</template>
