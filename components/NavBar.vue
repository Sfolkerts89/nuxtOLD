<template>
	<div id="nav-bar">
	
		<nav-desktop />
		<!-- need to load either one with v-if/v-else .... -->
		
		<!-- <nav-mobile /> -->
	</div>
</template>

<script>


</script>

<style lang="scss">


@media only screen and (max-width: 767px) {
	.desktop {
		display: none;
	}
	.mobile {
		display: block;
	}
}

@media only screen and (min-width: 768px) {
	.mobile {
		display: block;
	}
	.desktop {
		display: none;
	}
}


#nav-bar {
	z-index: 99;
}


</style>