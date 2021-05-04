<template>

	<div v-bind:class="[ isExpanded ? 'menuOpen' : 'menuClosed' ]" class="nav">
		<Logo />
		
		<span class="menu-toggle-icon"  @click="toggleMenu">
			<!--
			<img src="/menu/Menu-icon.svg" />
			-->
			<span>Menu</span>
		</span>
		<nav-links v-if="isExpanded" />
		<!--
		<social v-if="isExpanded" />
		-->
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

.nav {
	background-color: $dark-grey; 
	.logo {
		grid-column: 3;
		grid-row: 1;
		padding: 30px auto;
	}
	.menu-toggle-icon {
		grid-column: 3;
		grid-row: 2;
		margin: 50px auto;
		cursor: pointer;
		span {
			position: relative;
			font-family: $font-two;
			color: $white;
			text-align: center;
			margin: auto;
			width: 100%;
			display: block;
			height: 30px;
			justify-self: start;
		}
	}
	.social-media {
		grid-column: 2;
		grid-row: 3;
		align-self: center;
		justify-self: center;
	}
}

.menuClosed {
	position: absolute;
	display: grid;
	right: 0;
	grid-template-columns: repeat(2, 0px) 200px;
	grid-template-rows: 200px repeat(2, auto);
} 

.menuOpen{
	position: absolute;
	display: grid;
	right: 0;
	width: 100vw;
	height: 100vh;
	grid-template-columns: 200px 1fr 200px;
	grid-template-rows: 200px repeat(2, auto);
	background-color: $dark-grey;
}
 
.nav-links {
	grid-column: 2;
	grid-row: 2;
	align-self: center;
	justify-self: center;
	ul {
		padding-left: 30px;
		li {
			padding: 0.5em 1em;
			font-size: 1em;
			color: $white;
			list-style: none;
			&:hover {
				border-right: 0.5em solid $base-color;
				padding-right: 0.5em;
				transition: 300ms ease-in-out;
			}
			.nuxt-link-active {
				color: $base-color;
			}
		}
	}
}

</style>