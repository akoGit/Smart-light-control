import { createRouter, createWebHistory } from "vue-router";
import Overview from "@/views/Overview.vue";
import FloorPlan from "@/views/FloorPlan.vue";
import Security from "@/views/Security.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/Overview",
			name: "Overview",
			component: Overview,
		},
		{
			path: "/FloorPlan",
			name: "FloorPlan",
			component: FloorPlan,
		},
		{
			path: "/Security",
			name: "Security",
			component: Security,
		},
	],
});

export default router;
