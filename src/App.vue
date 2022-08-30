<script lang="ts" setup>
	import Sidebar from "./components/elements/Sidebar.vue";
</script>
<template>
	<div class="section-page">
		<!-- <Sidebar></Sidebar> -->
		<RouterView/>
	</div>
</template>

<style lang="scss">
	@import './style/coreStyle/coreStyle.scss';
	/* @import url("./style/custom.css"); */

	.section-page {
        margin: 2rem;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		gap: 3rem

    }
</style>