<template>
	<div class="mobile">
		<Logo />
		<span class="menu-toggle-icon"  @click="toggleMenu">
			<img src="/Menu-icon.svg" />
		</span>
		<nav-links v-if="isExpanded" />
	</div>
</template>

<script>

export default {
  	data() {
	    return {
	      isExpanded: false
	    }
  	},
	methods: {
	    toggleMenu () {
	    	this.isExpanded = !this.isExpanded;
	    }
	},
	watch: {
		'$route' () {
			this.isExpanded = false
		}
	}
}

</script>

<style lang="scss">

.mobile {
	display: grid;
	grid-template-columns: auto 300px 1fr;
	grid-template-rows: 1fr 1fr auto;
	padding: 30px;
	.logo {
		grid-column: 2;
		grid-row: 1;
	}
	.menu-toggle-icon {
		grid-column: 2;
		grid-row: 2;
		margin-top: 60px;
		cursor: pointer;
		img {
			width: 30px;
			height: auto;
		}
	}
}
 
.nav-links {
	grid-column: 2;
	grid-row: 3;
	padding-right: 50px;
	ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: red;
		color: white;
		li {
			padding: 0.3em 1em;
			font-size: 16pt;
		}
	}
}



</style>