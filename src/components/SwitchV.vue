<script setup></script>

<template>
	<label class="switch">
		<input type="checkbox" />
		<span class="slider round"></span>
	</label>
</template>

<style scoped>
.switch {
	position: relative;
	display: inline-block;
	width: 38px;
	height: 20px;
}

.switch input {
	opacity: 0;
	width: 0;
	height: 0;
}

.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: var(--switch-bg-col);
	-webkit-transition: 0.2s;
	transition: 0.2s;
}

.slider:before {
	position: absolute;
	content: "";
	height: 16px;
	width: 16px;
	left: 2px;
	bottom: 2px;
	background-color: #ffffff;
	-webkit-transition: 0.2s;
	transition: 0.2s;
}

input:checked + .slider {
	background-color: var(--switch-bg-act);
}
input:checked + .slider:before {
	-webkit-transform: translateX(18px);
	-ms-transform: translateX(18px);
	transform: translateX(18px);
}

.slider.round {
	border-radius: 44px;
}

.slider.round:before {
	border-radius: 44px;
}
</style>
