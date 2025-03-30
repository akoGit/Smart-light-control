<script setup>
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";

import { RouterView } from "vue-router";
</script>

<template>
	<main class="p-2 max-w-[780px] h-screen sm:max-w-[80%] sm:ml-20">
		<Sidebar />
		<Header />
		<RouterView />
	</main>
</template>

<style scoped>
@media (max-width: 640px) {
	main {
		max-width: 80%;
		margin-left: 5rem;
	}
}
</style>
